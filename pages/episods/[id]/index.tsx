import { useRouter } from "next/router";
import processedEpisods from "../../../public/processedEpisods.json";
import Head from "next/head";
import Header from "../../../components/Header";
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import TabsTest from "../../../components/TabsTest"

export default function Episods() {
  const router = useRouter();
  const { id } = router.query;

  // Find the episode with the matching URL
  const episode = processedEpisods.find((ep) => ep.url === id);

  const playerRef = useRef<ReactPlayer | null>(null);

  // Check if the episode is found
  if (!episode) {
    return <p>Loading</p>;
  }

  // https://emojipedia.org/objects
  const tabs: string[] = ["📄 Summary", "📑 Chapters", "📚 Transcript"];
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <div>
      <Head>
        <title>Lexicap | {episode.title} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <p>Episod: {episode.url}</p>
      <p>Title: {episode.title}</p>
      <p>Date: {episode.date}</p>
      <p>Time: {episode.time}</p>
      <p>Description: {episode.desc}</p>
      <p>YouTube URL: {episode.youtube_url}</p> */}

      <div className="sm:m-10 mt-5 px-4">
        
        {/* <div className="dark:from-cyan-950 max-w-5xl mt-5 rounded-xl dark:to-violet-950 relative flex flex-col items-center gap-y-4 bg-gradient-to-br  p-6 pb-9 lg:flex-row lg:gap-x-6">
          <img
            className="h-36 w-36 rounded-md"
            src="https://ik.imagekit.io/uti9laa1e/lex.jpg?updatedAt=1701070609001"
            alt="Podcast cover"
          />
          <div className="flex flex-col items-center gap-y-2 lg:items-start">
            <div className="text-color-secondary flex items-center gap-x-2">
              <span>{episode.date}</span>
              <span className="undefined flex items-center">
                
              &nbsp; &#128337; {episode.time}
              </span>
            </div>
            <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl">
              {episode.title}
            </h1>
            <a
              className="flex items-start gap-x-2"
            >
              
              {episode.desc}
            </a>
          </div>
          <div className="absolute bottom-0 left-1/2 z-10 translate-y-1/2 -translate-x-1/2 rounded-md bg-gray-50 px-2 shadow dark:bg-gray-900 lg:left-6 lg:translate-x-0">
            <div className="flex items-center">
              <button className="focus-visible:ring-gray-950 dark:ring-offset-gray-950 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium text-gray-900 underline-offset-4 ring-offset-white transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-50 dark:focus-visible:ring-gray-300">
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
                  className="mr-1 h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                Play
              </button>
              <div
                data-orientation="vertical"
                role="none"
                className="ml-2 h-4 w-[1px] shrink-0 bg-gray-200 dark:bg-gray-800"
              ></div>
              <button
                className="focus-visible:ring-gray-950 dark:ring-offset-gray-950 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium text-gray-900 underline-offset-4 ring-offset-white transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-50 dark:focus-visible:ring-gray-300"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r12:"
                data-state="closed"
              >
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
                  className="mr-1 h-4 w-4"
                >
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
                Send
              </button>
            </div>
          </div>
        </div> */}

        <div className="sm:ml-20 grid sm:grid-cols-3 ">
          <div className="w-full sm:w-auto">
            <ReactPlayer
              ref={(p) => {
                // Assign the ref to the useRef variable
                playerRef.current = p;
              }}
              url={episode.youtube_url}
              className="react-player"
              controls
              width="100%" // Set the width to 100% for responsiveness
            />
            <div className="mt-5 text-color-secondary flex items-center gap-x-2">
              <span>{episode.date}</span>
              <span className="undefined flex items-center">
                
              &nbsp; &#128337; {episode.time}
              </span>
            </div>

            <p className="text-lg font-semibold sm:text-xl lg:text-xl">{episode.title}</p>
            <a
              className="mt-2 flex items-start gap-x-2"
            >
              
              {episode.desc}
            </a>
          </div>
          <div className="mt-4 sm:mt-0 sm:col-span-2"> {/* Add margin top for better spacing on small screens */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="tabs">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      className={`tab px-5 font-semibold bg-blue-200 text-blue-500 hover:bg-blue-300 rounded-xl sm:ml-10 ml-2 mt-2 ${
                        activeTabIndex === index ? "tab-active" : "bg-gray-300 text-gray-600 font-medium"
                      }  sm:text-lg`}
                      onClick={() => setActiveTabIndex(index)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="content">
                  {activeTabIndex === 0 && (
                    <div className="mt-10 sm:ml-20">
                      <p>First</p>
                    </div>
                  )}

                  {activeTabIndex === 1 && (
                    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                      <p>hello</p>
                    </div>
                  )}

                  {activeTabIndex === 2 && (
                    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                      <p>hi</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
        </div>

        
      </div>
    </div>
  );
}
