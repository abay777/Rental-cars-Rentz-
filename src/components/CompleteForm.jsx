import ClientForm from './ClientForm';
import carpic from '../assets/assets/swift.png'
import { fleet } from '../resources';
import React, {  useEffect, useRef, useState } from 'react';

 const CompleteForm = React.forwardRef(({setIsVisible, isVisible,formData},refs)=>{ 
  const {completeFormRef,errorRef} =refs;
  const [pic , setPic] = useState(null)

  const handleExit = ()=>{
    isVisible?
    (completeFormRef.current.classList.remove('completeFormZ')
    ,setIsVisible(false)):null
  };
 
  useEffect((()=>{
    if(formData.carType){   
      const currentCar=fleet.find(car => car.name === formData.carType)
      setPic(currentCar ? currentCar?.pic : null);
    }else{
      setPic(null)
    }
  }),[isVisible])


  return (
  <section
   
   className="completeForm"
   ref={completeFormRef}>
        <div className="completeTop">
          <h2>complete Form</h2>
          <span onClick={handleExit} >X</span>
        </div>
        <div className="completeSecondTop">
          <span>Upon completing this reservation enquiry, you will receive :</span>
          <span>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number</span>
        </div>
        <div className="fleetCompletion">
          <form className='finalForm' >
            <div className="comInputs">
              <label htmlFor="PickupTime"><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
              </span>Pick-Up Date & Time</label>
                  <div className="timeDate">
                    <span>{formData.pickupDate}</span>/
                    <input type="time" name="PickupTime" id="PickupTime" />
                </div>
            </div>
            <div className="comInputs">
                  <label htmlFor="dropOffTime"><span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                  </span>Drop-Off Date & Time</label>
                <div className="timeDate">
                  <span>{formData.dropOffDate}</span>/
                <input type="time" name="dropOffTime" id="dropOffTime" />
                </div>
            </div>
            <div className="comInputs2 comInputs">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                Pick-Up Location</span>
              <span>{formData.pickupLocation}</span>
              
            </div>
            <div className="comInputs2 comInputs">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg> Drop-off Location</span>
              <span>{formData.dropOffLocation}</span>
            </div>

          </form>
          <div className="carContainer">
            <div>
              <span>Car -</span>
              <span>{formData.carType}</span>
            </div>
            <img src={pic || carpic} alt="" loading='lazy'/>
          </div>
        </div>
        
        <ClientForm  ref={refs} isVisible={isVisible}   setIsVisible={setIsVisible} /> 
      </section>
      );
});
  
export default CompleteForm