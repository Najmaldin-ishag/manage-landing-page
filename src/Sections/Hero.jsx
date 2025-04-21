import Button from "../Components/Button";

const Hero = () => {
  return (
    <header className="section-padding container">
      <div className="grid grid-cols-2 mt-[6.5rem] ">
        {/* Header content */}
        <div>
          <h1 className="text-7xl mb-7 font-bold text-primary-dark-blue ">
            Bring everyone together to build better products.
          </h1>
          <p className="text-3xl mb-[3rem] font-thin text-secondary-very-dark-blue">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button className="btn bg-primary-bright-red">Get Started</Button>
        </div>
        {/* Header img */}
        <div>
          <img src="/images/illustration-intro.svg" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
