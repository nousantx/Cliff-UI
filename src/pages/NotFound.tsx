import { Link } from "react-router-dom";
import { useStyles } from "../utils/styles";

export const NotFound = () => {
  useStyles();
  return (
    <section className="center gap-1rem">
      <span className="ms-line text-primary-500 fs-3.5rem">ssid_chart</span>
      <header>
        <h1>404 Not Found </h1>
        <p className="text-neutral-700 fs-14px">
          {/* Page that you're looking for was not found :) */}
          Looks like you're off the cliff?{" "}
          <Link
            to="/"
            className="bc-[primary-500] bs-solid bw-0 bw-bottom-1px text-neutral-800"
          >
            Go Back
          </Link>
        </p>
      </header>
    </section>
  );
};
