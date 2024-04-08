import Feature from "../components/Feature";
import useStyles from "../utils/useStyles";

const Home = () => {
  useStyles();
  return (
    <section className="pt-4rem flex-wrap ai-stretch gap-3rem">
      <div className="fx-400px center col ai-start">
        <header>
          <h1 className="fs-3rem lh-1">
            <span className="absolute ms-line text-primary-800 fs-400 z--1 fs-5rem t-50% none">
              ssid_chart
            </span>
            Unleash your creativity with us
            <span className="text-primary-500">.</span>
          </h1>
          <p className="text-neutral-800 ta-justify mt-8px">
            Our platform offers tools, inspiration, and community support for
            your extended creative journey. Join us now!
          </p>
        </header>
        <div className="mt-1.6rem center jc-start gap-8px">
          <button className="btn bw-1px bs-solid bc-[neutral-900] text-neutral-900 rounded-full center gap-4px">
            <span className="ms-line fs-14px">menu</span>
            More
          </button>
          <button className="btn bw-1px bs-solid bc-[primary-600] bg-[primary-500] rounded-full center gap-4px">
            <span className="ms-line fs-14px">local_mall</span>
            Shop Now
          </button>
        </div>
      </div>
      <div className="fx-400px flex col jc-center">
        {/*<h2 className="text-primary-500">Hello</h2>*/}
        <div className="w-full center col gap-1rem">
          <Feature
            icon="draw"
            count={1}
            name="Creative"
            desc="Endless posibilites for designs and templates!"
            className="ml-1rem"
          />
          <Feature
            icon="home"
            count={2}
            name="Tenox"
            desc="hello wrold"
            className="mr-1rem"
          />
          <Feature
            icon="home"
            count={3}
            name="Tenox"
            desc="hello wrold"
            className="ml-1rem"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
