import React from 'react'
import './Home.css'
import { HomeImage } from '../../assets'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
          <div className='home-left'>
          <h1 className='home-title'>
  <span className='home-subline'>E</span>kipaj xizmatiga xush kelibsiz!
</h1>
                <p className='home-subtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro velit eos nulla ex, molestiae adipisci nesciunt harum iure maiores ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores animi odio laudantium, aperiam, voluptatibus cum voluptate ratione aut omnis doloremque iste magnam quia vel facilis praesentium provident officia pariatur? Aliquid quo necessitatibus dolorum saepe provident temporibus maiores iure reiciendis ipsam quisquam. Nostrum velit dolorem ullam odio libero, in ea.</p>
                <button className='home-btn'><a href="#" className='home-anchor'>Bog'lanish</a></button>
          </div>
          <img className='home-Image' src={HomeImage} alt="image" />
      </div>
    </div>
  )
}

export default Home
