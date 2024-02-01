import React,{useEffect} from 'react'
import './main.css'
import a1 from '../images/a1.jpg'
import baby1 from '../images/baby1.jpg'
import boy1 from '../images/boy1.jpg'
import c1 from '../images/c1.jpg'
import a2 from '../images/a2.jpg'
import a3 from '../images/a3.jpg'
import c4 from '../images/c4.jpg'
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'

const Data=[
  {
    id:1,
    imgSrc:a1,
    'category':'Baby Girl',
    'model':'kurta',
    'price':'500/-'
  },
  {
    id:2,
    imgSrc:baby1,
    'category':'Baby Girl',
    'model':'kurta',
    'price':'500/-'
  },
  {
    id:3,
    imgSrc:boy1,
    'category':'Baby Girl',
    'model':'kurta',
    'price':'500/-'
  },
  {
    id:4,
    imgSrc:c1,
    'category':'Baby Girl',
    'model':'kurta',
    'price':'500/-'
  },
  {
    id:5,
    imgSrc:a2,
    'category':'Baby Girl',
    'model':'kurta',
    'price':'500/-'
  },
  {
    id:6,
    imgSrc:a3,
    'category':'Baby Girl',
    'model':'kurta',
    'price':'500/-'
  },
  {
    id:7,
    imgSrc:c4,
    'category':'Baby Girl',
    'model':'kurta',
    'price':'500/-'
  }
];
const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
   },[])
  return (
   <section className='main container section'>

     <div className='secTitle'>
      <h3 data-aos="fade-up" className='title'>
        <span>Best Designs</span>
      </h3>  
     </div>
     <div className='secContent grid'>
      {
       Data.map(({id,imgSrc,category,model,price})=>{
         return (
       <div key={id}  data-aos="fade-up" className='singleDesign'>
               
            <div className='imageDiv'>
              <img src={imgSrc} alt="design"></img>
            </div>
          
            <div className='cardInfo'>
                <h4 className='category'>{category}</h4>
                <div className='fees flex'>
                  <div className='model'>
                       <span>{model}</span>
                  </div>
                  <div className='price'>
                      <h5>{price}</h5>
                  </div>
                </div>
                <button className='btn flex btn-cart'>
                 SELECT THIS DESIGN
                </button>
            </div>

        </div>
         )
       })
      }
     </div>

   </section>
  )
}

export default Main