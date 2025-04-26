import Button from "../Components/Button";

const Cta = () => {
  return (
    <section className="section-cta max-sm:overflow-hidden max-lg:overflow-hidden">
      <div className="grid grid-cols-2 gap-10 items-center justify-center container max-sm:flex max-sm:flex-col  max-sm:text-center ">
        <p className="text-white text-5xl font-bold">
          Simplify how your team works today.
        </p>
        <div className="flex justify-center items-center">
          <Button className="btn cursor-pointer bg-white text-primary-bright-red mt-5 px-[4.5rem]">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
