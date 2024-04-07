/**
 * It's just defined object to make it easier to define styles
 */

export const config = {
  // re-usable tenoxui types
  props: {
    d: "display",
    bdr: "border",
    bc: "borderColor",
    text: "color",
    "back-c": "backgroundColor",
  },
  // defined class and selector
  css: {
    body: "bg-[neutral-100] text-[neutral-900]",
    section: "h-mn-100vh pv-2rem ph-10vw",
    ".light": "tc-[neutral-100]",
    // button
    ".btn":
      "bdr-none ph-14px pv-6px br-5px fw-500 back-c-transparent cursor-pointer",
    // classes
    ".nav-link":
      "fs-0.9em fw-300 tc-[neutral-800] back-c-transparent bc-[primary-500] bw-0 bs-solid bw-bottom-1px",
    // my re-usable classNames
    ".flex": "d-flex",
    ".flex-wrap": "d-flex fx-wrap-wrap",
    ".col, .fd-col": "fd-column",
    ".start": "flex-parent-start",
    ".end": "flex-parent-end",
    ".center": "d-flex flex-parent-center",
    ".space, .space-between": "jc-[tx_sb]",
    ".none, [hidden]": "d-none",
    ".rounded": "br-0.125rem",
    ".rounded-full": "br-1000px",
    ".relative": "position-relative",
    ".absolute": "position-absolute",
    ".fixed": "position-fixed",
    ".w-full": "w-100%",
    ".h-full": "h-100%",
  },
};
