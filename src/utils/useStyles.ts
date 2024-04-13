import { useLayoutEffect } from "react";
// import Styles from "./Styles";
import Color from "./color";
import Styles from "./styles";

export default function useStyles(...hooks: any): void {
  useLayoutEffect(() => {
    Styles();
    Color([
      "primary",
      "accent",
      "info",
      "success",
      "warning",
      "danger",
      "neutral",
    ]);
  }, [hooks]);
}
