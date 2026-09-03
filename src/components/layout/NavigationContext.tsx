"use client";

import { createContext, useContext } from "react";

interface NavigationContextValue {
  useNavbarDesktop: boolean;
}

export const NavigationContext = createContext<NavigationContextValue>({
  useNavbarDesktop: false,
});

export function useNavigation() {
  return useContext(NavigationContext);
}
