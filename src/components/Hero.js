import React from 'react'
import backgroundImage from '../images/peopleImage.png'
import StyledHero from '../styles/Hero.styled'

const Hero = () => {
  return (
    <StyledHero>
      <img src={backgroundImage} alt='people in cinema' />
      <h2>Watch something incredible</h2>
    </StyledHero>
  )
}

export default Hero
