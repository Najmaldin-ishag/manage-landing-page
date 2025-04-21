import Button from "../Components/Button";

const Cta = () => {
  return (
    <section className="section-cta ">
      <div className="grid grid-cols-2 gap-10 items-center justify-center container ">
        <p className="text-white text-5xl font-bold">
          Simplify how your team works today.
        </p>
        <div className="flex justify-center items-center">
          <Button className="btn bg-white text-primary-bright-red mt-5 px-[4.5rem]">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
