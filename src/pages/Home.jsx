import React from 'react'
import TextStats from '../components/TextStats';
import LetterDentisy from '../components/LetterDensity';
import Text from '../components/Text';



const Home = () => {
  return (
    <section className='home-section'>
      <div className="container home-wrapper">
        <div className="title">
          <h1>Analyze your text in real-time.</h1>
        </div>
        <Text/>
        <TextStats/>
        <LetterDentisy/>
      </div>
    </section>
  )
}

export default Home