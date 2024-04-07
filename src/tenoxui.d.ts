// Type declarations for TenoxUI v0.6.1

declare module "tenoxui" {
  // types and properties declaration
  export interface Property {
    [key: string]: string | string[];
  }

  export let property: { [key: string]: string | string[] };

  // define the Classes and AllClasses variables
  export let Classes: string[];
  export let AllClasses: NodeListOf<HTMLElement>;

  // define the newProp class
  export class newProp {
    constructor(name: string, values: string[]);
    tryAdd(): void;
  }

  // sefine the makeTenoxUI class
  export class makeTenoxUI {
    constructor(element: HTMLElement);
    applyStyle(type: string, value: string, unit: string): void;
    applyStyles(className: string): void;
    applyMultiStyles(styles: string): void;
  }

  // define the makeStyle function
  export function makeStyle(
    selector: string,
    styles: string | Record<string, string>
  ): void;

  // define the defineProps function
  export function defineProps(
    propsObject: Record<string, string | string[]>
  ): void;

  // define the makeStyles function
  export function makeStyles(
    stylesObject: Record<string, string | Record<string, string>>
  ): Record<string, string | Record<string, string>>;

  // define the moreColor function
  export function moreColor(): void;

  // define the applyHover function
  export function applyHover(
    selector: string,
    notHover: string,
    isHover: string,
    styles?: string
  ): void;

  // define the applyHovers function
  export function applyHovers(hovers: object): void;

  // define the tenoxui function
  export default function tenoxui(): void;
}
