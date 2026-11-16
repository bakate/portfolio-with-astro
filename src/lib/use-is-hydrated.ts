import * as React from 'react';

/**
 * False on the server and until React takes over the island. Controls render
 * disabled until then, so a visitor's early typing is never lost.
 */
export function useIsHydrated() {
  const [isHydrated, setIsHydrated] = React.useState(false);
  React.useEffect(() => setIsHydrated(true), []);
  return isHydrated;
}
