import { useLayoutEffect } from "react";
// import Styles from "./Styles";
import Color from "./color";
import Styles from "./styles";

export default function useStyles(): void {
  useLayoutEffect(() => {
    Styles();
    Color();
  }, []);
}
