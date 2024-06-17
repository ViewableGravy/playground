import { useBlocker, useLocation } from "@tanstack/react-router";
import {  useState } from "react";

//Potentially consider a custom implementation to trigger these. 

// const store = new Store<{
//   next: LinkProps | null,
//   timeout: number | null
// }>({
//   next: null,
//   timeout: null
// })

// store.subscribe(() => {
//   if (store.state.next) {
//     setTimeout(() => {
//       store.setState({ next: null, timeout: null })
//       router.navigate(store.state.next)
//     }, store.state.timeout ?? 200);
//   }
// })

type UseRouteTransitionProps = {
  blockerFn?: () => void;
  condition: boolean | string;
};
type UseRouteTransition = (props: UseRouteTransitionProps) => 'in' | 'out';

export const useRouteTransition: UseRouteTransition = ({ blockerFn, condition }) => {
  const [state, setState] = useState<"in" | "out">('in');
  const { pathname } = useLocation();

  useBlocker({
      blockerFn: blockerFn ?? (() =>
          new Promise((resolve) => {
              setState('out');
              setTimeout(() => {
                  setState('in');
                  resolve(true);
              }, 200);
          })),
      condition: typeof condition === "boolean" ? condition : pathname === condition
  });

  return state;
};