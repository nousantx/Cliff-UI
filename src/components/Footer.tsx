// import { NavLink } from "react-router-dom";
// import { a } from "react-router-dom";
import useStyles from "../utils/useStyles";

export const Footer = () => {
  useStyles();
  return (
    <footer className="w-full pv-2rem ph-10vw bg-neutral-100 flex-wrap ai-stretch gap-2rem">
      {/* Row one */}
      <header className="fx-400px">
        <div className="center jc-start gap-4px">
          <span className="ms-line text-primary-500 fs-30px">ssid_chart</span>
          <h1 className="fs-1.4em center">
            Creative std<span className="text-primary-500">.</span>
          </h1>
        </div>
        <p className="text-neutral-800 fs-12px">
          &copy; 2024 NOuSantx. Built with TenoxUI.
        </p>
      </header>
      <div className="footer-links">
        <div className="fx-175px">
          <h2 className="fs-16px fw-500">Resource</h2>
          <a href="#" className=" mt-12px">
            GitHub
          </a>
          <a href="#">CDN</a>
          <a href="#">GitHub</a>
          <a href="#">Download</a>
        </div>
        <div className="fx-175px">
          <h2 className="fs-16px fw-500">Product</h2>
          <a href="#" className=" mt-12px">
            FAQ
          </a>
          <a href="#">Pro</a>
          <a href="#">Pricing</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="fx-175px">
          <h2 className="fs-16px fw-500">About</h2>
          <a href="#" className=" mt-12px">
            Community
          </a>
          <a href="#">Your Data</a>
          <a href="#">About</a>
          <a href="#">Download</a>
        </div>
        <div className="fx-175px">
          <h2 className="fs-16px fw-500">Legal</h2>
          <a href="#" className="mt-12px">
            Terms of Service
          </a>
          <a href="#">Privacy Policy</a>
          <a href="#">Security Policy</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};
