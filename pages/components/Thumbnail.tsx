import { Movie } from '@/typings'
import React from 'react'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '@/atoms/modalAtom'

interface Props{
    //When using firebase
    //movie: Movie | DocumentData
    movie:Movie
}

function Thumbnail({movie} :Props) {

  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)
  
  return (
    <div className='relative h-78 min-w-[200px] cursor-pointer transition duration-200 ease-out md:h-76 md:min-w-[260px] md:hover:scale-105' onClick={() => {
      setCurrentMovie(movie)
      setShowModal(true)
    }}>
      
        <Image 

            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
            className="rounded-sm object-cover md:rounded"
            width={260}
            height={78}
            
            alt=''
            
            
        />

        <h1>{movie.title}</h1>
    </div>
  )
}

export default Thumbnail