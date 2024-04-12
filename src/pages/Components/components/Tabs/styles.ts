import { useLayoutEffect } from "react";
import tenoxui, { makeStyles } from "tenoxui";
import Styles from "../../../../utils/styles";
import styleColor from "../../../../utils/styleColor";

export default function tabStyles(...hooks: any) {
  useLayoutEffect(() => {
    Styles();
    makeStyles({
      ".tabs": "bw-1px bs-solid bc-#ccc br-5px over-hidden",
      ".tab-titles": "d-flex",
      ".tab-title": "pv-10px ph-20px cursor-pointer",
      ".tab-content-item": "p-20px",
    });
    styleColor();
    tenoxui();
  }, [hooks]);
}
