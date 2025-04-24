import { useState } from "react";
import Button from "../Components/Button";
import { testimonials } from "../Constant";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="section-padding mt-[6.5rem]! container">
      <h3 className="text-center text-primary-dark-blue text-5xl mb-4 font-bold">
        What they’ve said
      </h3>
      <div className="grid grid-cols-3 gap-5 mt-[5.5rem] max-sm:hidden ">
        {testimonials.map((item) => (
          <div key={item.name}>
            <div className="card relative">
              <img
                src={item.imgPath}
                alt={item.name}
                width={60}
                className="mb-6 mx-auto -mt-10"
              />
              <div className="text-center">
                <span className="text-sm font-bold text-primary-dark-blue">
                  {item.name}
                </span>
                <p className="font-thin text-l mt-5">{item.quote}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  Testimonials on Mobile devices */}
      <div className=" mt-[5.5rem] lg:hidden md:hidden  ">
        {testimonials.map((item, index) => (
          <div
            key={item.name}
            className={`card relative ${
              index === activeIndex ? "block" : "hidden"
            }`}
          >
            <img
              src={item.imgPath}
              alt={item.name}
              width={60}
              className="mb-6 mx-auto -mt-10"
            />
            <div className="text-center">
              <span className="text-sm font-bold text-primary-dark-blue">
                {item.name}
              </span>
              <p className="font-thin text-l mt-5">{item.quote}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden lg:hidden max-sm:flex items-center justify-center gap-5 mt-3 ">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full border border-primary-bright-red  ${
              index === activeIndex ? "bg-primary-bright-red " : " "
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="btn bg-primary-bright-red mt-5 px-[4.5rem]">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
