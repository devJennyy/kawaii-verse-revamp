import Footer from "../layout/Footer";

const ErrorMessage = () => {
  return (
    <div className="absolute top-0 h-screen w-full bg-main z-40 flex flex-col items-center">
      <div className="border border-dashed w-[1050px] h-[377px] flex flex-col justify-between items-center !my-48 p-5">
        <div className="!mr-5"><img src="/images/klee.gif" alt="klee" className="h-54 object-cover" /></div>
        <p className="text-xl tracking-wide leading-9 !pb-5">
          Uh-oh! Klee searched really hard, but no anime showed up!
          <span className="block">Wanna try a different one?</span>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorMessage;
