import Button from "../Components/Button";

const Cta = () => {
  return (
    <section className="section-cta w-full">
      <div className="grid grid-cols-2 gap-10 items-center justify-center ">
        <p className="text-white text-3xl leading-3">
          Simplify how your team works today.
        </p>
        <div className="flex justify-center">
          <Button className="btn bg-white text-primary-bright-red mt-5 px-[4.5rem]">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
