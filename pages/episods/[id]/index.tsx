import { useRouter } from 'next/router'
import processedEpisods from '../../../public/processedEpisods.json';
import Head from "next/head";
import Header from "../../../components/Header";

export default function Episods() {
  const router = useRouter();
  const { id } = router.query;

  // Find the episode with the matching URL
  const episode = processedEpisods.find((ep) => ep.url === id);

  // Check if the episode is found
  if (!episode) {
    return <p>Episode not found</p>;
  }

  return (
    <div>
      <Head>
      <title>Lexicap | {episode.title} </title>
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <p>Episod: {episode.url}</p>
      <p>Title: {episode.title}</p>
      <p>Date: {episode.date}</p>
      <p>Time: {episode.time}</p>
      <p>Description: {episode.desc}</p>
      <p>YouTube URL: {episode.youtube_url}</p>
    </div>
  );
}
