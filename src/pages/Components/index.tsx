import { Link } from "react-router-dom";
import Article from "../../components/Article";
import useStyles from "../../utils/useStyles";

const Components = () => {
  useStyles();
  return (
    <section className="pt-5rem">
      <header>
        <h1 className="fs-2rem">Explore Components</h1>
        <p className="text">
          We provide components fully built with TenoxUI. Check this out!
        </p>
      </header>

      <Article title="Button" desc="Button component to use">
        <div className="flex fd-col gap-2rem">
          <div className="flex-wrap center gap-1rem">
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
              <span className="ms-round fs-inherit text-primary-500">home</span>
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
        <div className="center fd-col gap-2rem">
          <div className="flex ai-stretch w-full br-8px over-hidden">
            <div className="center w-full bg-neutral-300">
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
              <p className="text ta-justify fs-14px">
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
              <h3 className="fw-400 fs-22px">Entering Sudo Mode</h3>
              <p className="text fs-12px">
                Every change you do, can't be undone!
              </p>
            </header>
          </div>
        </div>
      </Article>
    </section>
  );
};

export default Components;