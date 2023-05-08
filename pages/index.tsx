import Head from "next/head";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Modal from "./components/Modal";
import requests from "@/utils/requests";
import { Movie } from "@/typings";
import Row from "./components/Row";
import { useRecoilValue } from "recoil";
import { modalState } from "@/atoms/modalAtom";

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}



export default function Home({ netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow 
}: Props) {

  const showModal = useRecoilValue(modalState)
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">

      
      <Head>
        <title>Home - RORONOAH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

        {/* Header */}
        <Header />
        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        
        <Banner netflixOriginals={netflixOriginals} />

        <section className="space-y-10 md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List */}
          

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
          {/* Row */}
        </section>
        {/* Modal */}

      </main>
      {showModal && <Modal />}

    </div>
  )
}

export const getServerSideProps = async () => {

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}

//ES7 React/Redux/GraphQL/React-Native
//https://www.npmjs.com/package/tailwind-scrollbar-hide
//tailwind css intellisense

//heroicons
//react icons

//serverside render can be done in pages only
//? means optional

// from-gray-900/10 to-[#010511]

//recoil for state management
//MatirialUI

//react player
