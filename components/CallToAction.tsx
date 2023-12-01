import Link from "next/link";


export default function CallToAction() {
  return (     
    <section className="sm:mt-10">
        <div className="px-4 mx-auto max-w-screen-xl text-center">
            {/* <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-[#333] md:text-4xl lg:text-4xl whitespace-wrap">More </h1> */}
            <p className="mb-8 text-lg font-semibold text-[#333] lg:text-2xl sm:px-16 lg:px-48">More Podcasts Transcript and Summary Coming Soon</p>
            <a
              href="https://twitter.com/rahul_jalindar"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-20 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
            >
              <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 248 204"
                className="h-5 w-5 text-[#1d9bf0]"
              >
                <path
                  fill="currentColor"
                  d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
                />
              </svg>
              </div>
              <p className="text-sm font-semibold text-[#27a7fc]">
                Follow me on Twitter to stay updated
              </p>
           </a>
            
            {/* <div className="flex space-x-4 items-center justify-center"> */}
            {/* <iframe
            src="https://tally.so/r/3N7RYB?transparentBackground=1"
            width="500"
            height="350"
          ></iframe> */}
            
            {/* <div className="relative inline-flex group mt-6">
              <div
                  className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <a href="/" title="Get quote now"
                  className="relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button">Try it for yourself
              </a>
          </div> */}

          {/* <Link
              className="mt-7 inline-flex items-center justify-center rounded-xl border-2 bg-[#6a32ee] px-6 py-3 text-center font-medium text-white duration-200 hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
              href="https://tally.so/r/m6e6EA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </Link> */}

            {/* <Link
              className="mt-7 inline-flex items-center justify-center rounded-xl border-2 bg-[#6a32ee] px-6 py-3 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
              href="/"
            >
              Try it for yourself
            </Link> */}
          {/* </div> */}
        </div>
    </section>



  );
}
