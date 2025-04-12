

const AnimeOverview = () => {
  return (
    <div className="w-full h-[1500px] bg-slate-900 flex justify-center relative">
      <div className="w-full h-[50rem] bg-slate-800 inset-0 absolute z-0"></div>

      <div className="w-full max-w-[1920px] !mx-auto h-[50rem] bg-slate-700 flex gap-20 absolute z-10 !mt-[30rem] p-10">
        <div className="w-[23rem] h-[30rem] bg-red-500 rounded-xl"></div>
        <div className="flex flex-col text-start">
          <p className="text-[4rem]">Frieren: Beyond the Journey's End</p>
          <p className="text-2xl">葬送のフリーレン, Hepburn: Sōsō no Furīren, lit.</p>
          <div className="flex gap-5">
            <div className="w-48 h-16 border rounded-md"></div>
            <div className="w-48 h-16 border rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeOverview;
