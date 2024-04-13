import React, { useState } from "react";
import useStyles from "../../../../utils/useStyles";

interface AccordionItemProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const transAll = "tr-prop-all tr-time-0.4s tr-timing-ease";

const Accordion: React.FC<AccordionItemProps> = ({ children, className }) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    const isActive = activeIndices.includes(index);
    if (isActive) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  useStyles(handleItemClick, setActiveIndices);

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        const accordionItem = child as React.ReactElement<AccordionItemProps>;
        const isActive = activeIndices.includes(index);
        return (
          <div key={index} className="bg-none">
            <div
              className={`center cursor-pointer space-between w-full pv-8px ph-1rem radius-top-0.125rem bw-0 bw-left-1px bs-solid bc-[primary-500] ${transAll} ${
                isActive ? "bg-neutral-200" : "back-c-transparent"
              }`}
              onClick={() => handleItemClick(index)}
            >
              <h2 className="fs-14px fw-500">{accordionItem.props.title}</h2>
              <span
                className={`ms-round fs-14px box-24px rounded-full bg-neutral-100 text-primary-500 center ${transAll}`}
              >
                {isActive ? "expand_less" : "expand_more"}
              </span>
            </div>

            <div
              className={`bg-neutral-100  bw-0 bw-left-1px bs-solid bc-[primary-500] over-hidden ${transAll} ${
                isActive ? "h-mx-none" : "h-mx-0"
              }`}
            >
              {accordionItem.props.children}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => {
  return <>{children}</>;
};

export { Accordion, AccordionItem };
