import { makeStyles } from "tenoxui";

type Color = Record<string, string | Record<string, string>>;

const color: Color = {};
function makeColor(colors: string[]) {
  colors.forEach((category) => {
    for (let i = 100; i <= 900; i += 100) {
      // text color generation
      const textClassName = `.text-${category}-${i}`;
      const textColorValue = `tc-[${category}-${i}]`;
      color[textClassName] = textColorValue;
      // button background color generation
      const bgClassName = `.bg-${category}-${i}`;
      const bgColorValue = `back-c-[${category}-${i}]`;
      color[bgClassName] = bgColorValue;
    }
  });
  return color;
}

export default function Color() {
  makeStyles(
    makeColor([
      "primary",
      "accent",
      "info",
      "success",
      "warning",
      "danger",
      "neutral",
    ])
  );
}
