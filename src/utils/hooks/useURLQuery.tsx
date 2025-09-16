import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const useUrlQueryWatcher = () => {
  const pathname = usePathname();
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    new URLSearchParams("")
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSearchParams(new URLSearchParams(window.location.search));
    }
  }, [pathname]);

  const updateQueryParams = (newParams: Record<string, string | null>) => {
    if (typeof window === "undefined") return;

    const filteredParams = Object.fromEntries(
      Object.entries(newParams).filter(([_, value]) => value !== null)
    );

    const currentParams = new URLSearchParams(window.location.search);
    Object.entries(filteredParams).forEach(([key, value]) => {
      currentParams.set(key, value!);
    });

    window.history.pushState(
      null,
      "",
      `${pathname}?${currentParams.toString()}`
    );
  };

  return { searchParams, updateQueryParams };
};

export default useUrlQueryWatcher;
