import React from 'react'
import "./pagestyle.css"

const Container = () => {
  return (
    <div className='container'>
        <video autoPlay loop muted playsInline className='background-clip'>
            <source src="../src/images/video.mp4" type='video/mp4' />
            Your browser does not support the video tag.
        </video>
        <div className='content'>
            <h1>EXPERIENCE THE FOOD</h1>
            <h3>WISH YOU HAVE GOOD FOOD AT OUR RESTAURANT</h3>
            <a href='#'>BOOKING NOW</a>
        </div>
    </div>
  )
}

export default Container