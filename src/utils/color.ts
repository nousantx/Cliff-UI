import { makeStyles } from "tenoxui";

type colorType = Record<string, string | Record<string, string>>;

const color: colorType = {};

export default function Color(colors: string[]): void {
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
  makeStyles(color);
}
