import React from "react";
import useStyles from "../utils/useStyles";

interface Article {
  title: string;
  desc: string;
  isNew?: boolean;
  className?: string;
  children?: any;
}

const Article: React.FC<Article> = ({
  title,
  desc,
  isNew,
  className,
  children,
}) => {
  useStyles();
  return (
    <article className={`mt-2rem ${className}`}>
      <header>
        {isNew ? (
          <div className="flex ai-center gap-1rem">
            <h2>{title}</h2>
            <div className="center bg-primary-500 text-neutral-100 br-6px fs-12px ph-4px pv-2px fw-500">
              New
            </div>
          </div>
        ) : (
          <h2>{title}</h2>
        )}
        <p className="text fs-12px">{desc}</p>
      </header>
      <div className="w-full center mt-1rem p-2rem bw-2px bs-solid bc-[neutral-400] rounded">
        {children}
      </div>
    </article>
  );
};

export default Article;
