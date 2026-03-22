"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function GaRouteTrackerInner({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    const query = searchParams?.toString();
    const path = pathname + (query ? `?${query}` : "");

    if (prevPathRef.current === null) {
      prevPathRef.current = path;
      return;
    }

    if (prevPathRef.current === path) {
      return;
    }

    prevPathRef.current = path;

    const send = () => {
      const gtag = window.gtag;
      if (typeof gtag === "function") {
        gtag("config", gaId, { page_path: path });
      }
    };

    send();
    const t = window.setTimeout(send, 100);
    return () => window.clearTimeout(t);
  }, [pathname, searchParams, gaId]);

  return null;
}

export function GaRouteTracker({ gaId }: { gaId: string }) {
  return (
    <Suspense fallback={null}>
      <GaRouteTrackerInner gaId={gaId} />
    </Suspense>
  );
}
