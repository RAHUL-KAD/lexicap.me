import Image from "next/image";
import React, { lazy, Suspense } from "react";

import episods from "../public/episods.json";


export default function PodcastView() {
  return (
    <section id="podcasts" className="mt-28 max-w-full pb-10 md:pt-5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="font-display mx-auto flex max-w-4xl text-center items-center justify-center text-4xl font-bold tracking-normal text-[#333] sm:text-5xl">
            Explore All Podcasts
          </h1>
        </div>

        {/* <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="max-w-2xl rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <span className="mr-2 items-start py-1 px-1 text-base font-medium text-[#333]">
              25 Nov 2023
            </span>
            <span className="mr-2 items-start py-1 px-1 text-base font-medium text-[#333]">
              &#9202; 1h 39m
            </span>
            <span className="mr-2 items-start rounded bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-blue-900 dark:text-blue-300">
              #Image
            </span>
            <a>
              <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Michael Malice: Thanksgiving Pirate Special | Lex Fridman
                Podcast #402
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The DNS Lookup API retrieves DNS records for any given domain.
            </p>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
            >
              Try it
              <svg
                className="ml-2 h-3.5 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div className="max-w-2xl rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                John Mearsheimer: Israel-Palestine, Russia-Ukraine, China, NATO,
                and WW3 | Lex Fridman Podcast #401
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This API gives you the ip address of a machine
            </p>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
            >
              Try it
              <svg
                className="ml-2 h-3.5 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div> */}

    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 max-w-7xl">

        {episods.map((episod, index) => (
          <>
          <Suspense key={index} fallback={<div>Loading...</div>}>
            
            <div className="undefined relative p-4 flex items-center overflow-hidden rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
                    {/* <img
                        className="absolute w-full h-auto opacity-[.08] dark:opacity-10 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0 sm:w-96 sm:h-96 sm:shrink-0 sm:opacity-100 sm:dark:opacity-100"
                        src="https://img.youtube.com/vi/2yHr9DPnSzk/mqdefault.jpg"
                        alt="Podcast cover"
                        /> */}
                    <div className="flex grow flex-col p-3 sm:py-0 sm:px-6">
                        <div className="text-color-secondary flex items-center gap-x-2">
                            <div className="flex grow items-center gap-x-1">
                                <span>{episod.date}</span>
                                <span className="undefined flex items-center">

                                    &nbsp; &#128337; {episod.time}
                                </span>
                            </div>
                            {episod.new && (
                            <div className="relative z-10  flex items-center text-green-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="mr-1 h-4 w-4 "
                                >
                                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                                    <path d="M5 3v4"></path>
                                    <path d="M19 17v4"></path>
                                    <path d="M3 5h4"></path>
                                    <path d="M17 19h4"></path>
                                </svg>
                                <span>New</span>
                            </div>
                            )}
                        </div>
                        <a href={`/podcast/episodes/${episod.url}`}>
                            <span className="absolute inset-0 z-0"></span>
                            <h3 className="line-clamp-2 sm:line-clamp-1 text-base font-semibold sm:text-xl">
                                {episod.title}

                            </h3>
                        </a>
                        <p className="line-clamp-3 sm:line-clamp-1 text-color-secondary mt-1 break-all">
                            {episod.desc}
                        </p>
                    </div>
                </div>
                </Suspense>
                </>

        ))}
    </div>
      </div>
    </section>
  );
}
