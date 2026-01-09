import { useEffect, useState } from "react";

type ScrollSpyOptions = {
  rootMargin?: string;
  threshold?: number;
};

export function useScrollSpy(sectionIds: string[], options?: ScrollSpyOptions) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const rootMargin = options?.rootMargin ?? "-40% 0px -45% 0px";
  const threshold = options?.threshold ?? 0;

  useEffect(() => {
    if (!sectionIds.length) return;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin, threshold }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [rootMargin, sectionIds, threshold]);

  return activeId;
}
