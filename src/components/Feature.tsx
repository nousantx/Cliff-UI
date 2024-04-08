import useStyles from "../utils/useStyles";

interface Feature {
  count: number;
  icon: string;
  name: string;
  desc: string;
  className?: string;
}

const Feature: React.FC<Feature> = ({ count, icon, name, desc, className }) => {
  useStyles();
  return (
    <div
      className={`relative center rounded bg-neutral-200 jc-start gap-1rem p-1rem w-100% ${className}`}
    >
      <span className="absolute t-1rem r-1rem text-primary-600 ls-2px fs-12px">
        0{count}.
      </span>
      <span className="text-primary-500 ms-line fs-2rem">{icon}</span>
      <header>
        <h2 className="text-neutral-900 fs-1.3em">{name}</h2>
        <p className="text-neutral-800 fs-12px">{desc}</p>
      </header>
    </div>
  );
};

export default Feature;
