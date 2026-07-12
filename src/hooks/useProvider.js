import { useContext } from "react";

export function useProvider(provider) {
  const context = useContext(provider);

  if (!context) {
    throw new Error('useProvider должен использоваться внутри соответствующего Provider');
  }
  return context;
}