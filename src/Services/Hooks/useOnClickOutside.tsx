import { useEffect, RefObject } from "react";
type Handler = (event: MouseEvent) => void;

export default function useOnClickOutside(ref: RefObject<any>, handler: Handler) {
  useEffect(() => {
    const listener = (event: MouseEvent | any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
