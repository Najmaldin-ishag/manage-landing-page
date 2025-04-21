import { features } from "../Constant";

const Features = () => {
  return (
    <section className="section-padding container mb-[4.5rem]">
      <div className="mt-[6.5rem]  grid grid-cols-2 gap-[6.5rem]">
        <div>
          <h2 className="text-primary-dark-blue text-5xl mb-8 font-[400]">
            What’s different about Manage?
          </h2>
          <p className="font-thin text-xl">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="features-box">
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
      </div>
    </section>
  );
};

export default Features;
