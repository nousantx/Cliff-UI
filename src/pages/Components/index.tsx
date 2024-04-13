import { Link } from "react-router-dom";
import Article from "../../components/Article";
import useStyles from "../../utils/useStyles";
import { useLayoutEffect, useState } from "react";
import Styles from "../../utils/styles";
import styleColor from "../../utils/styleColor";
import Button from "./components/Button";
import { TabItem, Tabs } from "./components/Tabs";
import { Accordion, AccordionItem } from "./components/Accordion";

const Components = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  useStyles();

  useLayoutEffect(() => {
    Styles();
    styleColor();
  }, [isToggled]);

  return (
    <>
      <section className="pt-7rem">
        <Link to="/" className="mb-3rem inline-flex ai-center gap-6px">
          <span className="ms-round fs-16px">arrow_back</span>
          <p>Go Back</p>
        </Link>
        <div className="center col w-full">
          <header className="ta-center">
            <div className="center gap-8px">
              <span className="ms-round fs-2.7rem text-primary-500">
                widgets
              </span>
              <div className="relative">
                <span className="text-neutral-700 fs-14px absolute none">
                  Faster with
                </span>
                <h1 className="fs-2.5rem">UI Components</h1>
              </div>
            </div>
            <p className="text fs-1em mt-8px">
              We provide components fully built with TenoxUI. Check this out!
            </p>
          </header>
        </div>

        <Article title="Accordion" desc="Click to reveal hidden element">
          <Accordion className="w-full flex fd-column gap-1rem">
            <AccordionItem title="TenoxUI">
              <span className="text-primary-500 center gap-6px fs-18px p-2rem bg-neutral-200">
                <i className="txi ti-vantenox"></i>
                TenoxUI
              </span>
            </AccordionItem>
            <AccordionItem title="Accordion 2">
              <div className="w-full bg-primary-900 p-1rem">
                Content for Accordion 2
              </div>
            </AccordionItem>
          </Accordion>
        </Article>
        <Article title="Tabs" desc="Tabs components" isNew>
          <Tabs>
            <TabItem
              title={
                <p className="center gap-4px fw-400 fs-14px">
                  <span className="ms-round fs-16px">terminal</span>Greet
                </p>
              }
            >
              <div className="center">
                <p className="center gap-6px fs-14px text-neutral-800">
                  Build faster with
                  <span className="text-primary-500 center gap-6px fs-18px">
                    <i className="txi ti-vantenox"></i>
                    TenoxUI
                  </span>
                </p>
              </div>
            </TabItem>
            <TabItem
              title={
                <p className="center gap-4px fw-400 fs-14px">
                  <span className="ms-round fs-16px">barcode</span>Code
                </p>
              }
            >
              <span className="ms-round fs-3rem text-primary-500">qr_code</span>
              <h2 className="mt-1rem">Let Features</h2>
              <p className="text-neutral-800 ta-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur dolorum nam labore alias mollitia?
              </p>
            </TabItem>
            <TabItem title={<span className="ms-round fs-16px">add</span>}>
              <h2>Let's add new content here</h2>
              <p className="text-neutral-800 ta-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur dolorum nam labore alias mollitia?
              </p>
              <button className="btn bg-primary-500 mt-1rem">More</button>
            </TabItem>
          </Tabs>
        </Article>
        <Article title="Checkbox" desc="Handle checkbox" isNew>
          <div className="flex fd-col ai-start gap-8px">
            <Button text="Hello World" />
            <Button
              checkBoxBackground="primary-500"
              checkColor="neutral-100"
              text="Is tenoxui cooked?"
              icon="radio_button_checked"
            />
          </div>
        </Article>
        <Article title="Button" desc="Button component to use">
          <div className="flex fd-col gap-2rem">
            <div className="flex-wrap center gap-1rem">
              <button
                className={`btn center bs-solid bw-1px tr-prop-background tr-time-0.3s tr-timing-ease ${
                  isToggled
                    ? "bg-primary-500 text-neutral-100"
                    : "bg-none bc-[primary-500] text-primary-500"
                }`} // Assuming Tailwind CSS class names
                onClick={handleClick}
              >
                {/* {isToggled ? "Toggled" : "Click to Toggle"} */}
                <span className="ms-round fs-14px">add</span>
              </button>
              <div className="btn bw-1px bs-solid bc-[neutral-600]">Button</div>
              <div className="btn bw-1px bs-solid bc-[neutral-600] center p-8px">
                <span className="ms-round fs-14px">add</span>
              </div>
              <div className="btn bw-1px bs-solid bc-[neutral-600] rounded-full">
                Button
              </div>
            </div>
            <div className="flex-wrap center gap-1rem text-neutral-100">
              <div className="btn bg-primary-500">Button</div>
              <div className="btn bg-primary-500 center p-8px">
                <span className="ms-round fs-15px">add</span>
              </div>
              <div className="btn bg-primary-500 rounded-full">Button</div>
            </div>
          </div>
        </Article>
        <Article
          title="Breadcrumb"
          desc="Displaying hierarchy of links"
          className="mt-3rem"
        >
          <div className="center fd-col gap-2rem">
            <div className="center links-wrapper gap-12px">
              <Link to="/" className="fs-14px">
                home
              </Link>
              <span className="ms-line  fs-12px">chevron_right</span>
              <Link to="/" className="fs-14px">
                docs
              </Link>
              <span className="ms-line  fs-12px">chevron_right</span>
              <Link to="/" className="fs-14px">
                -
              </Link>
              <span className="ms-line  fs-12px">chevron_right</span>
              <Link to="/" className="fs-14px link-active">
                component
              </Link>
            </div>
            <div className="center links-wrapper gap-12px">
              <Link
                to="/"
                className="fs-14px center box-20px bg-neutral-200 rounded-full"
              >
                <span className="ms-round fs-inherit text-primary-500">
                  home
                </span>
              </Link>
              <span className="ms-line fs-12px">chevron_right</span>
              <Link to="/" className="fs-14px">
                Docs
              </Link>
              <span className="ms-line fs-12px">chevron_right</span>
              <Link to="/" className="fs-14px link-active">
                Component
              </Link>
            </div>
            <div className="center links-wrapper gap-12px">
              <Link to="/" className="fs-14px">
                Home
              </Link>
              <span className="fs-12px fs-500">/</span>
              <Link to="/" className="fs-14px">
                Docs
              </Link>
              <span className="fs-12px fs-500">/</span>
              <Link to="/" className="fs-14px active">
                Hehe
              </Link>
            </div>
          </div>
        </Article>
        <Article title="Card" desc="Its components" isNew>
          <div className="center fd-col gap-2rem w-full">
            <div className="w-full w-mx-500px flex ai-stretch br-8px over-hidden">
              <div className="center w-full bg-neutral-300 ">
                <span className="text-primary-500 ms-round fs-2rem">
                  developer_guide
                </span>
              </div>
              <div className="w-full bg-primary-600 p-2rem">
                <header>
                  <h3 className="text-neutral-100 fw-100">Dev.guide</h3>
                  <p className="text-neutral-200 fs-12px opa-0.7">
                    Lorem ipsum dolor sit.
                  </p>
                </header>
                <div className="flex mt-1rem none">
                  <Link
                    to="/"
                    className="active center fs-12px gap-4px text-neutral-200 opa-0.6"
                  >
                    Learn More
                    <span className="ms-round fs-12px">chevron_right</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-mx-500px">
              <header className="p-1rem bg-neutral-200 rounded">
                <span className="ms-round fs-1.5rem box-2.3rem bg-neutral-100 text-primary-500 center br-4px mb-1rem">
                  draw
                </span>
                <h3 className="fs-16px fs-500">Design Tools</h3>
                <p className="fs-14px ta-justify text-neutral-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, officia?
                </p>
              </header>
            </div>
            <div className="bg-neutral-200 rounded pt-1rem">
              <div className="w-full center space fs-12px text-neutral-700 ph-1rem">
                $12/yr
                <span className="ms-round fs-14px">bookmark_add</span>
              </div>
              <header className="mt-1rem ph-1rem pv-2rem bg-primary-200 br-8px">
                <h3 className="fw-300 text-neutral-100">
                  Design Tools for Developer
                </h3>
                <p className="text-neutral-300 fs-12px ls-1px mt-4px">
                  Lorem ipsum dolor sit amet.
                </p>
              </header>
              <div className="w-full center space fs-12px text-neutral-100 p-1rem">
                <p className="text-neutral-700 center gap-4px">
                  <span className="ms-round fs-12px text-primary-500">
                    event_note
                  </span>
                  10 - 04 - 2024
                </p>
                <div className="btn center gap-6px rounded-full bg-neutral-100 text-neutral-900 fw-400 ml-auto">
                  <span className="ms-round fs-12px">shopping_cart</span>
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        </Article>
        <Article
          title="Alert"
          desc="Give user some information based state"
          isNew
        >
          <div className="center gap-1rem flex-wrap ai-stretch">
            <div className="fx-350px flex p-2rem bs-solid bw-1px bc-[neutral-500] br-8px gap-8px">
              <span className="ms-round fs-16px text-primary-500 d-block mt-3px">
                deployed_code
              </span>
              <header>
                <h3 className="fw-400">Performance Boosted</h3>
                <p className="text fs-14px">
                  Let's try new functionallity to boost your project!
                </p>
              </header>
            </div>
            <div className="fx-350px flex p-2rem bs-solid bw-1px bc-[neutral-500] br-8px gap-8px">
              <span className="ms-round fs-16px text-info-500 d-block mt-3px">
                info
              </span>
              <header>
                <h3 className="fw-400">Info</h3>
                <p className="text ta-justify fs-14px">
                  Password changed successfully!
                </p>
              </header>
            </div>
            <div className="fx-350px flex p-2rem bs-solid bw-1px bc-[neutral-500] br-8px gap-8px">
              <span className="ms-round fs-16px text-success-500 d-block mt-3px">
                done_all
              </span>
              <header>
                <h3 className="fw-400">Success</h3>
                <p className="text ta-justify fs-14px">All Done!</p>
              </header>
            </div>
            <div className="fx-350px center fd-col p-2rem bs-solid bw-1px bc-[neutral-500] br-8px gap-8px">
              <span className="ms-round fs-24px text-danger-400 d-block mt-3px">
                warning
              </span>
              <header className="ta-center">
                <h3 className="fw-400 fs-16px">Entering Sudo Mode</h3>
                <p className="text fs-12px">
                  Every change you do, can't be undone!
                </p>
              </header>
            </div>
          </div>
        </Article>
      </section>
    </>
  );
};

export default Components;
