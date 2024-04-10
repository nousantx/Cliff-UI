import useStyles from "../../../../utils/useStyles";
import { useLayoutEffect, useState } from "react";
import Styles from "../../../../utils/styles";
import styleColor from "../../../../utils/styleColor";

interface Radio {
  text?: string;
  className?: string;
  checkColor?: string;
  checkBoxBackground?: string;
}

const Button: React.FC<Radio> = ({
  text,
  className,
  checkBoxBackground,
  checkColor,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  useStyles();
  useLayoutEffect(() => {
    Styles();
    styleColor();
  }, [isToggled]);

  return (
    // <button
    //   className={`btn center bs-solid bw-1px tr-prop-background tr-time-0.3s tr-timing-ease ${
    //     isToggled
    //       ? "bg-primary-500 text-neutral-100"
    //       : "bg-none bc-[primary-500] text-primary-500"
    //   }`} // Assuming Tailwind CSS class names
    //   onClick={handleClick}
    // >
    //   {isToggled ? (
    //     <span className="ms-round fs-14px">add</span>
    //   ) : (
    //     <span className="ms-round fs-14px">close</span>
    //   )}
    // </button>
    <div className={`center gap-8px ${className}`}>
      <button
        className="btn center p-0"
        onClick={handleClick}
        aria-label={text}
        role="button"
      >
        {isToggled ? (
          <div className="box-14px center rounded over-hidden bw-0">
            <div
              className={`box-14px bg-${
                checkBoxBackground || "accent-500"
              } center text-${checkColor || "neutral-900"}`}
            >
              <span className="ms-round fs-12px">check</span>
            </div>
          </div>
        ) : (
          <div className="box-14px center bs-solid bw-1px bc-[neutral-700] rounded over-hidden"></div>
        )}
      </button>
      <p className="fs-14px fw-300">{text}</p>
    </div>
  );
};

export default Button;
