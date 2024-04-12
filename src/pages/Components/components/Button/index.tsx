import useStyles from "../../../../utils/useStyles";
import { useLayoutEffect, useState } from "react";
import Styles from "../../../../utils/styles";
import styleColor from "../../../../utils/styleColor";

interface Radio {
  text?: string;
  icon?: string;
  className?: string;
  checkColor?: string;
  checkBoxBackground?: string;
}

const Button: React.FC<Radio> = ({
  text,
  className,
  checkBoxBackground,
  checkColor,
  icon,
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
    <div className={`center gap-8px ${className}`}>
      <button
        className="btn center p-0"
        onClick={handleClick}
        aria-label={text}
        role="button"
      >
        {isToggled ? (
          <div className="box-1rem center rounded over-hidden bw-0">
            <div
              className={`box-1rem bg-${
                checkBoxBackground || "accent-500"
              } center text-${checkColor || "neutral-900"}`}
            >
              <span className="ms-round fs-14px">{icon || "check"}</span>
            </div>
          </div>
        ) : (
          <div className="box-1rem center bs-solid bw-1px bc-[neutral-700] rounded over-hidden"></div>
        )}
      </button>
      <p className="fs-1em fw-300">{text}</p>
    </div>
  );
};

export default Button;
