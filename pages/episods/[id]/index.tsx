import { useRouter } from "next/router";
import processedEpisods from "../../../public/processedEpisods.json";
import Head from "next/head";
import Header from "../../../components/Header";
import React, { useState, useEffect, useRef, memo } from "react";
import ReactPlayer from "react-player/youtube";
import TabsTest from "../../../components/TabsTest";
import chapters402 from "../../../public/402Chapters.json";
import Transcripts402 from "../../../public/402Transcripts.json";
import chapters401 from "../../../public/401Chapters.json";
import Transcripts401 from "../../../public/401Transcripts.json";
import Footer from "../../../components/Footer";

export default function Episods() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [data, setData] = useState<{
    chapters: any[];
    transcripts: any[];
  } | null>(null);

  const router = useRouter();
  const { id } = router.query;

  // Find the episode with the matching URL
  const episode = processedEpisods.find((ep) => ep.url === id);

  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    // https://chat.openai.com/share/9ab62daf-502d-402d-9693-c659466dcaff
    const fetchData = async () => {
      try {
        let chapters, transcripts;

        switch (id) {
          case "402":
            const chaptersModule402 = await import(
              "../../../public/402Chapters.json"
            );
            const transcriptsModule402 = await import(
              "../../../public/402Transcripts.json"
            );
            chapters = chaptersModule402.default; // Extract the array from the module
            transcripts = transcriptsModule402.default; // Extract the array from the module
            break;
          case "401":
            const chaptersModule401 = await import(
              "../../../public/401Chapters.json"
            );
            const transcriptsModule401 = await import(
              "../../../public/401Transcripts.json"
            );
            chapters = chaptersModule401.default; // Extract the array from the module
            transcripts = transcriptsModule401.default; // Extract the array from the module
            break;

          case "400":
            const chaptersModule400 = await import(
              "../../../public/400Chapters.json"
            );
            const transcriptsModule400 = await import(
              "../../../public/400Transcripts.json"
            );
            chapters = chaptersModule400.default; // Extract the array from the module
            transcripts = transcriptsModule400.default; // Extract the array from the module
            break;
          case "399":
            const chaptersModule399 = await import(
              "../../../public/399Chapters.json"
            );
            const transcriptsModule399 = await import(
              "../../../public/399Transcripts.json"
            );
            chapters = chaptersModule399.default; // Extract the array from the module
            transcripts = transcriptsModule399.default; // Extract the array from the module
            break;

          default:
            const chaptersModuleOther = await import(
              "../../../public/402Chapters.json"
            );
            const transcriptsModuleOther = await import(
              "../../../public/402Transcripts.json"
            );
            chapters = chaptersModuleOther.default; // Extract the array from the module
            transcripts = transcriptsModuleOther.default; // Extract the array from the module
            break;
        }

        console.log("Fetched data:", { chapters, transcripts });
        setData({ chapters, transcripts });
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors appropriately, e.g., redirect to an error page
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!data) {
    // Loading state or handle other cases where data is not available
    return <div>Loading...</div>;
  }

  // Check if the episode is found
  if (!episode) {
    return <p>Loading</p>;
  }

  // https://emojipedia.org/objects
  const tabs: string[] = ["📑 Chapters & Summaries", "📚 Transcript"];

  const parseTimeString = (timeString: string): number => {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  return (
    <div>
      <Head>
        <title>Lexicap | {episode.title} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="mt-5 px-4 sm:m-10">
        <div className="grid sm:ml-20 sm:grid-cols-3 ">
          <div className="w-full sm:w-auto">
            <ReactPlayer
              ref={(p) => {
                // Assign the ref to the useRef variable
                playerRef.current = p;
              }}
              url={episode.youtube_url}
              className="react-player"
              controls
              playing
              width="100%" // Set the width to 100% for responsiveness
            />
            <div className="text-color-secondary mt-5 flex items-center gap-x-2">
              <span>{episode.date}</span>
              <span className="undefined flex items-center">
                &nbsp; &#128337; {episode.time}
              </span>
            </div>

            <p className="text-lg font-semibold sm:text-xl lg:text-xl">
              {episode.title}
            </p>
            <a className="mt-2 flex items-start gap-x-2">{episode.desc}</a>

            <button
              type="button"
              data-tally-open="wg9k4O"
              data-tally-width="500"
              data-tally-align-left="1"
              data-tally-overlay="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="me-2 mt-5 mb-2 rounded-lg border border-blue-700 px-2 py-1 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            >
              Feedback
            </button>

          </div>
          <div className="mt-4 sm:col-span-2 sm:mt-0">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="tabs">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`tab ml-2 mt-2 rounded-xl bg-blue-200 px-5 font-semibold text-blue-500 hover:bg-blue-300 sm:ml-10 ${
                      activeTabIndex === index
                        ? "tab-active"
                        : "bg-gray-300 font-medium text-gray-600"
                    }  sm:text-lg`}
                    onClick={() => setActiveTabIndex(index)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="content">
                {activeTabIndex === 0 && (
                  <div
                    className="mt-10 sm:ml-10"
                    style={{ maxHeight: "600px", overflowY: "auto" }}
                  >
                    {data.chapters.map((chapter, index) => (
                      <div key={index}>
                        <h1 className="text-lg font-semibold sm:text-xl lg:text-xl">
                          {chapter.chapter_title}
                        </h1>
                        <div className="text-color-secondary flex items-center gap-x-2">
                          <button
                            onClick={() =>
                              playerRef.current?.seekTo(
                                parseTimeString(chapter.start_time)
                              )
                            }
                          >
                            {chapter.start_time}
                          </button>
                          <button
                            onClick={() =>
                              playerRef.current?.seekTo(
                                parseTimeString(chapter.end_time)
                              )
                            }
                          >
                            {chapter.end_time}
                          </button>
                        </div>
                        <a className="mt-2 mb-10 flex items-start gap-x-2">
                          {chapter.chapter_summary}
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {activeTabIndex === 1 && (
                  <div
                    className="mt-10 sm:ml-10"
                    style={{ maxHeight: "600px", overflowY: "auto" }}
                  >
                    {data.transcripts.map((transcript, index) => (
                      <div key={index}>
                        <div className="text-color-secondary flex items-center gap-x-2 text-base">
                          <p className="italic">{transcript.speaker}</p>
                          <button
                            onClick={() =>
                              playerRef.current?.seekTo(
                                parseTimeString(transcript.start_time)
                              )
                            }
                          >
                            {transcript.start_time}
                          </button>
                          <button
                            onClick={() =>
                              playerRef.current?.seekTo(
                                parseTimeString(transcript.end_time)
                              )
                            }
                          >
                            {transcript.end_time}
                          </button>
                        </div>
                        <a className="mt-2 mb-5 flex items-start gap-x-2 text-lg font-semibold">
                          {transcript.text}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
