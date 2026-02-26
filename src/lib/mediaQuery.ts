type MediaQueryChangeHandler = (event: MediaQueryListEvent) => void;

type LegacyMediaQueryList = MediaQueryList & {
  addListener?: (listener: MediaQueryChangeHandler) => void;
  removeListener?: (listener: MediaQueryChangeHandler) => void;
};

export function subscribeToMediaQueryChange(
  mediaQuery: MediaQueryList,
  handler: MediaQueryChangeHandler,
) {
  const query = mediaQuery as LegacyMediaQueryList;

  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }

  if (typeof query.addListener === "function") {
    query.addListener(handler);
    return () => query.removeListener?.(handler);
  }

  return () => {};
}
