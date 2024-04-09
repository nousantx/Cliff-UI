import tenoxui, { defineProps, makeStyles } from "tenoxui";
import config from "./config";

export default function Styles(): void {
  defineProps(config.props); // adding custom props
  makeStyles(config.css); // apply styles
  tenoxui(); // init tenoxui
}
