import { useRouter } from "next/router";
import processedEpisods from "../../../public/processedEpisods.json";
import Head from "next/head";
import Header from "../../../components/Header";
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import TabsTest from "../../../components/TabsTest"

export default function Episods() {

  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  
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
  const tabs: string[] = ["📑 Chapters & Summaries", "📚 Transcript"];

  return (
    <div>
      <Head>
        <title>Lexicap | {episode.title} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="sm:m-10 mt-5 px-4">

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
          <div className="mt-4 sm:mt-0 sm:col-span-2">
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
                    <div className="mt-10 sm:ml-10">
                      <p>Hello</p>
                    </div>
                  )}

                  {activeTabIndex === 1 && (
                    <div className="mt-10 sm:ml-10">
                      <p>hello</p>
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
