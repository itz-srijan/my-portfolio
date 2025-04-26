import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className='px-4 py-12 md:py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-12'>
        {/* Text Section */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white'>
            Srijan Mondal
          </h1>
          <p className='text-3xl font-medium bg-gradient-to-r from-stone-300 via-stone-600 to-stone-800 bg-clip-text text-transparent mt-2'>
            Software Engineer
          </p>
          <p className='mt-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-stone-300'>
            Passionate developer with a strong foundation in full-stack web
            development, specializing in clean, maintainable code and
            performance-driven applications. Constantly learning, building, and
            improving.
          </p>

          <a
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download
            className='mt-8 inline-flex items-center gap-x-2 bg-white hover:bg-stone-400 text-stone-900 font-semibold text-lg px-4 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105'
          >
            <FaFileDownload className='text-xl' />
            Resume
          </a>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <Image
            src='/images/srijan-2.jpg'
            alt='Srijan Mondal'
            width={360}
            height={360}
            className='rounded-[2rem] border border-stone-300 shadow-xl object-cover h-auto w-auto max-w-[300px] sm:max-w-[340px] lg:max-w-[360px]'
            priority
          />
        </div>
      </div>
    </section>
  );
}
