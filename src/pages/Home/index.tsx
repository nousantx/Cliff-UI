import { Link } from "react-router-dom";
import useStyles from "../../utils/useStyles";
import Features from "./components/Features";

const Home = () => {
  useStyles();
  return (
    <section className="flex-wrap ai-stretch gap-3rem">
      <div className="fx-400px center col ai-start pv-6rem">
        <header>
          <h1 className="fs-2.5rem lh-1">
            Built with TenoxUI
            <span className="text-primary-500">.</span>
          </h1>
          <p className="text-neutral-800 ta-justify mt-8px">
            Effortlessly Enhance Your React Projects: Discover Customizable,
            Scalable UI Components Powered by the TenoxUI CSS Framework!
          </p>
        </header>
        <div className="mt-1.6rem center jc-start gap-8px">
          <Link
            to="https://github.com/tenoxui/css"
            className="btn bw-1px bs-solid bc-[neutral-500] rounded-full center text-neutral-700 fw-200"
          >
            <i className="txi ti-github_square fs-14px mr-8px"></i>
            tenoxui/<span className="text-neutral-900">css</span>
          </Link>
          <Link
            to="/component"
            className="btn bw-1px bs-solid bc-[primary-600] bg-[primary-500] rounded-full center gap-4px text-neutral-100"
          >
            <span className="ms-line fs-16px">deployed_code</span>
            Explore Component
          </Link>
        </div>
      </div>
      <div className="fx-400px flex col jc-center">
        <div className="w-full center col gap-1rem">
          <Features />
        </div>
      </div>
    </section>
  );
};

export default Home;
