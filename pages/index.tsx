import React, { lazy } from "react";

import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Datasets from "../components/datasets";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Solutions from "../components/Solutions";
import TabsTest from "../components/TabsTest";
import Features from "../components/Features";
import Features1 from "../components/Features1";
import Features2 from "../components/Features2";
import { Badge } from "../components/Badge";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import Solutions2 from "../components/Solutions2";

import PodcastView from "../components/PodcastView";

const Home: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <Head>
        <title>Lexicap | Lex Fridman Podcasts - Summaries and Transcripts </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-green-100 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>

      <Header />
      <main className="flex justify-center items-center px-4">
        <div className="mt-5 sm:mt-5">
          {/* <Badge text={"Try our GenAI solution for Contact Center"} /> */}

          <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
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
            Introducing Lexicap
          </p>
        </a>

          <h1 className="font-display mt-5 mx-auto max-w-4xl text-center text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl">
            <span className="relative text-[#333] whitespace-wrap">
              <span className="relative mr-2">
              Lex Fridman Podcasts Summaries and Transcripts
              </span>
            </span>
          </h1>

          <div className="mt-5 sm:mt-10 max-w-5xl flex sm:flex-row flex-col items-center justify-center">
            <p className="mx-auto text-lg leading-7 text-[#333] sm:text-xl">
              &#10022; Listen to Summaries
            </p>
            <p className="mx-auto text-lg leading-7 text-[#333] sm:text-xl">
              &#10022; AI Generated Chapters
            </p>
            <p className="mx-auto text-lg leading-7 text-[#333] sm:text-xl">
              &#10022; Keywords
            </p>
            {/* <p className="mx-auto mt-10 text-xl leading-7 text-[#333]">&#10040; No Sign in required</p> */}
          </div>
          {/* <p className="mx-auto mt-5 max-w-xl text-center md:text-left text-xl leading-7 text-[#333] sm:mt-5 whitespace-wrap">
          Transform contact center customer experience with generative AI.
          Turn your conversations into actional insights with the help of Generative AI.
          </p> */}

          {/* <div className=" grid-cols-3 mt-3 w-full md:w-[55%] lg:w-full mx-auto">
        </div>  */}

          {/* <div className="flex space-x-4">

            <div className="relative inline-flex group mt-6">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <a href="/"
                    className="relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">Try it for yourself
                </a>
            </div>

            <div className="relative inline-flex group mt-6">
                <a href="https://tally.so/r/m6e6EA" target="_blank"
              rel="noopener noreferrer" title="Get quote now"
                    className="relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-[#6a32ee] font-pj rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
                    role="button">Contact Us
                </a>
            </div>

            <Link
              className="mt-7 inline-flex items-center justify-center rounded-xl border-2 bg-[#6a32ee] px-6 py-3 text-center font-medium text-white duration-200 hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
              href="https://tally.so/r/m6e6EA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </Link>

            <Link
              className="mt-7 inline-flex items-center justify-center rounded-xl border-2 bg-[#6a32ee] px-6 py-3 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
              href="/"
            >
              Try it for yourself
            </Link>
          </div> */}

          {/* <li className="mt-5 ml-2">commercial use &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •  GDPR compliance  </li> */}
        </div>

        {/* <div>
          <video
            src="https://uploads-ssl.webflow.com/62fa8255a7287e714931a2ad/62fa85a47f6f589559851bfc_web_white-transcode.mp4"
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            playsInline
            className="mt-10"
          ></video>
        </div> */}
      </main>
      <PodcastView />
      {/* <Testimonials /> */}
      {/* <Datasets /> */}
      {/* <Features1/> */}
      {/* <Solutions2 /> */}
      {/* <Features2 /> */}
      {/* <Solutions /> */}
      {/* <TabsTest /> */}
      {/* <Features  /> */}
      {/* <CallToAction /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
