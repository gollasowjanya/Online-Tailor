import React,{useEffect} from 'react'
import './home.css'
import video from '../images/video.mp4'
import { GrLocation } from "react-icons/gr";
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'

const Home = () => {
 useEffect(()=>{
  Aos.init({duration:2000})
 },[])
 
  return (
  <section className='home'>
    <div className='overlay'></div>
    <video src={video} muted autoPlay loop type="video/mp4"></video>
 <div className='homeContent container'>
  <div className='textDiv'>
    <h1 data-aos="fade-up" className='homeTitle'>In Search of Tailor..</h1>
  </div>

    <div data-aos="fade-up"className='cardDiv grid'>
      <div className='destinationInput'>
        <label htmlFor='location'>Enter your location</label> 
        <div className='input flex'>
          <input type='text' placeholder='Enter your address here..'/>
          <GrLocation className='icon'/>
        </div>
      </div>

      <div className='dateInput'>
        <label htmlFor='date'>Select your deadline date</label>
        <div className='input flex'>
          <input type='date'/>
        </div>
      </div>
  </div>
  
 </div>

  
  </section>
  )
}

export default Home