const config = {
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
    ".text": "tc-[neutral-800]",
    // button
    ".btn":
      "bdr-none ph-14px pv-6px br-5px fw-500 back-c-transparent cursor-pointer",
    // classes
    ".nav-link":
      "fs-0.9em fw-300 tc-[neutral-800] back-c-transparent bc-transparent bw-0",
    ".footer-links": {
      "": " fx-400px d-flex fx-wrap-wrap ai-stretch gap-2rem",
      a: "d-block text-[neutral-700] fs-14px mt-10px",
    },
    a: "text-[neutral-700]",
    "a.link-active": "text-[neutral-900]",
    "a.active":
      "text-[neutral-900] bc-[primary-500] bw-0 bs-solid bw-bottom-1px",
    ".links-wrapper": "text-[neutral-700]",

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
export default config;
