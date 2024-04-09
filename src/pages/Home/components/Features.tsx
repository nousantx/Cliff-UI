import Feature from "../../../components/Feature";
import useStyles from "../../../utils/useStyles";

const Features = () => {
  useStyles();
  return (
    <>
      <Feature
        icon="draw"
        count={1}
        name="Creative"
        desc="Explore customizable components we provide"
        className="ml-1rem"
      />
      <Feature
        icon="bolt"
        count={2}
        name="Fast"
        desc="Loaded really fast!"
        className="mr-1rem"
      />
      <Feature
        icon="css"
        count={3}
        name="No CSS"
        desc="Our components has nearly 0 css"
        className="ml-1rem"
      />
      <Feature
        icon="code"
        count={4}
        name="Open Source"
        desc="Let's build together"
        className="mr-1rem"
      />
    </>
  );
};

export default Features;
