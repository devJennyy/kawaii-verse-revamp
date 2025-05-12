import LoadingStyle from '@/components/ui/LoadingStyle';
import { useState } from 'react'

const Manga = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
  const [isLoading, setIsLoading] = useState(true);;
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <section id="manga" className="w-full">
      {isLoading && <LoadingStyle />}
      <div
        className={`w-full 4xl:max-w-[1920px] max-w-[1280px] !mx-auto xl:!mt-16 lg:!mt-10 !mt-5 !py-10 lg:px-5 px-4 transition-slow ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        <p className='text-center'>Work in progress!</p>
      </div>
    </section>
  )
}

export default Manga
