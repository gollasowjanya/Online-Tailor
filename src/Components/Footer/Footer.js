import React,{useEffect , useState} from 'react'
import './footer.css'
import video from '../images/video.mp4'
import { FiSend} from 'react-icons/fi'
import { GiSewingMachine } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'

const Footer = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(()=>{
    Aos.init({duration:1000})
   },[])
  
   const onSubmit = async (event) => {
    try {
      event.preventDefault();
  
      const formElement = event.target.closest('form');
  
      if (!formElement) {
        console.error('Form element not found');
        return;
      }
  
      const formData = new FormData(formElement);
  
      formData.append("access_key", "c313dc07-238c-4fd7-8fd2-14487a6f2b1a");
  
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
  
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const result = await res.json();
  
      if (result.success) {
        console.log("Success", result);
        setFormSubmitted(true);

        // Display success message for 5 seconds (5000 milliseconds)
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000); // Adjust the time in milliseconds as needed
      } else {
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };
  
  
  return (
   <section className='footer'>
    <div className='videoDiv'>
       <video src={video} loop autoPlay muted type="video/mp4"></video>
    </div>

    <div className='secContent container'>
       <div className='contactDiv flex'>
          <div  data-aos="fade-up" className='text'>
          <small>KEEP IN TOUCH</small>
          </div>

          <form>
            <div className='inputDiv flex'>
            <input  data-aos="fade-up" type='text' placeholder='Enter Email Address' name='email'></input>
            <button data-aos="fade-up"  className='btn flex' type='submit' onClick={onSubmit}>SEND <FiSend className="icon" /></button>   
            </div>
            </form>
            {formSubmitted && (
              <div className="success-message" data-aos="fade-up" >
                Form submitted successfully!
              </div>
            )}

       </div>

       <div className='footerCard flex'>
        <div className='footerIntro flex'>
          <div className='logoDiv'>
            < a href='#' className='logo flex'>
            <GiSewingMachine className="icon"/>Online Tailor
            </a>
          </div>

        <div data-aos="fade-up" className='footerParagraph'>
        To empower individuals with affordable, custom-tailored clothing that suits their unique style
          </div>

          <div data-aos="fade-up" className='footerSocials'>
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
       

       <div className='footerLinks grid'>
         <div data-aos="fade-up" data-aos-duration="3000"  className='linkGroup'>
          <span className='groupTitle'>
            OUR AGENCY
          </span>

          <li className='footerList flex'>
            <FiChevronRight className='icon' />
            Services
          </li>
          <li className='footerList flex'>
            <FiChevronRight className='icon' />
            <Link to='/payment' className='navLink'> Payments</Link> 
           
          </li>
          <li className='footerList flex'>
            <FiChevronRight className='icon' />
            Orders
          </li>
         </div>
       </div>

       <div className='footerDiv flex'>
         <small>BEST ONLINE TAILOR WEBSITE</small>
         <small>COPYRIGHTS RESERVED- ONLINE TAILOR 2024</small>
       </div>
       </div>
    </div>
   </section>
  )
}

export default Footer