import Button from "../Components/Button";

const Hero = () => {
  return (
    <header className="section-padding container">
      <div className="grid grid-cols-2 mt-[6.5rem] max-sm:flex max-sm:flex-col max-sm:justify-center ">
        {/* Header content */}
        <div className="max-sm:text-center">
          <h1 className="text-7xl mb-7 font-bold text-primary-dark-blue  max-sm:text-5xl max-sm:font-bold">
            Bring everyone together to build better products.
          </h1>
          <p className="text-3xl mb-[3rem] font-thin text-secondary-very-dark-blue">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button className="btn cursor-pointer bg-primary-bright-red">
            Get Started
          </Button>
        </div>
        {/* Header img */}
        <div className="max-sm:order-first">
          <img src="/images/illustration-intro.svg" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
