import tenoxui, { defineProps, makeStyles } from "tenoxui";
import { useLayoutEffect } from "react";
import { config } from "./tenoxui.config";
import Color from "./color";

export function Styles(): void {
  defineProps(config.props); // adding custom props
  makeStyles(config.css); // apply styles
  tenoxui(); // init tenoxui
}

export function useStyles(): void {
  useLayoutEffect(() => {
    Color();
    Styles();
  }, []);
}
