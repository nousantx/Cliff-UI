import { NavLink } from "react-router-dom";
import { useStyles } from "../utils/styles";

export const Footer = () => {
  useStyles();
  return (
    <footer className="w-full pv-2rem ph-10vw">
<header>
      <div className="center jc-start gap-4px ">
        <span className="ms-line text-primary-500 fs-24px">ssid_chart</span>
        <h1 className="fs-1em">
          Creative std<span className="text-primary-500">.</span>
        </h1>
</div>
<p className="text-neutral-800 fs-12px">&copy; 2024 NOuSantx.</p>
      </header>
    </footer>
  );
};
