import { Link } from "react-router-dom";
import useStyles from "../../utils/useStyles";

const Templates = () => {
  useStyles();
  return (
    <section className="pt-7rem">
      <Link to="/" className="mb-3rem inline-flex ai-center gap-6px">
        <span className="ms-round fs-16px">arrow_back</span>
        <p>Go Back</p>
      </Link>
      <div className="center col w-full">
        <header className="ta-center">
          <div className="center gap-8px">
            <span className="ms-round fs-2.7rem text-primary-500">
              space_dashboard
            </span>
            <div className="relative">
              <span className="text-neutral-700 fs-14px absolute none">
                Faster with
              </span>
              <h1 className="fs-2.5rem">Templates</h1>
            </div>
          </div>
          <p className="text fs-1em mt-8px">
            Check out some templates we make for your project.
          </p>
        </header>
      </div>
    </section>
  );
};

export default Templates;
