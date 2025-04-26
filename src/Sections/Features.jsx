import { features } from "../Constant";

const Features = () => {
  return (
    <section className="section-padding container mb-[4.5rem] ">
      <div className="mt-[6.5rem]  grid grid-cols-2 gap-[6.5rem] max-sm:flex max-sm:flex-col max-sm:text-center">
        <div>
          <h2 className="text-primary-dark-blue text-5xl mb-8 font-[400] ">
            What’s different about Manage?
          </h2>
          <p className="font-thin text-xl">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="features-box max-sm:hidden">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex gap-8 mb-8 justify-center font-semibold "
            >
              <div>
                <span className="py-[.7rem] px-[1.2rem] bg-primary-bright-red text-white rounded-2xl">
                  {item.id}
                </span>
              </div>
              <div>
                <h3 className="text-primary-dark-blue text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-thin">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Made the features visible on smaller screens  */}
        <div className="lg:hidden max-sm:block mt-4 max-md:hidden max-lg:hidden">
          {features.map((item) => (
            <div
              key={item.id}
              className="max-sm:grid max-sm:grid-cols-1 nth-2:mb-4 nth-2:mt-4"
            >
              <div className="flex items-center justify-center max-sm:mb-4 text-center">
                <span className="py-[.7rem] px-[2.2rem] bg-primary-bright-red text-white rounded-2xl -mt-2">
                  {item.id}
                </span>
                <h3 className="text-primary-dark-blue text-xl min-[450]:underline mb-2 bg-secondary-very-pale-red px-[2.5rem] py-[.5rem] rounded-xl -ml-5 z-[-2] max-xsm:text-sm">
                  {item.title}
                </h3>
              </div>
              <div className="mb-6">
                <p className="font-thin">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
