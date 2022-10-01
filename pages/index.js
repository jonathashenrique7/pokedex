import { useState } from  'react'
import styles from        '../styles/Home.module.css'
import Image from         'next/image'
import Card from          '../components/Card'
import Pagination from '../components/Pagination'


export async function getStaticProps() {
  // 
  const maxPokemons   = 251
  const api           = 'https://pokeapi.co/api/v2/pokemon/'

  const res           = await fetch(` ${ api }/?limit=${ maxPokemons } `)
  const data          = await res.json()

  data.results.forEach( (item, index) => {
    item.id = index + 1 
  })

  return {
    props: {
      pokemons: data.results
    },
  }  
}

export const Home = ({ pokemons }) => {
  // 
  const [ page, setPage ] = useState(1)
  const startingIndex = 12 * ( page - 1)
  const pokeSlice = pokemons.slice(startingIndex, startingIndex + 12)

  console.log( pokemons )

  if (page === 0) 
    setPage( page + 1 ) 

  return (<>
    <div className={styles.title_container}>
      <h1 className={styles.title}>Poke <span>Next</span></h1>

      <Image src="/images/pokeball.png" width="50" height="50" alt="Poke Next" />
    </div>

    <Pagination setPage={ setPage } page={ page } />

    <div className={styles.pokemon_container}>
        { pokeSlice.map( (pokemon) => (
          <Card key={ pokemon.id } pokemon={ pokemon } />
        ))}
    </div>

    <Pagination setPage={ setPage } page={ page } />

  </>)
}

export default Home
