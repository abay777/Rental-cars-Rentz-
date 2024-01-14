import  CompleteForm  from './CompleteForm';
import { useEffect, useState } from "react";
import { useRef } from 'react';

const Reservation = () => {
  const completeFormRef = useRef(null);
  const [formData,setFormData] = useState({});
  const [isVisible,setIsVisible] = useState(false);
  const errorRef = useRef(null)

  const refs = {
    completeFormRef,
    errorRef
  }
 const handleForm = (e)=>{
  e.preventDefault();
  const form =  new FormData(e.currentTarget);
  const formValues = Object.fromEntries(form);
  const empty = Object.values(formValues).some(value=>value.trim() ==='')
  console.log(empty)
  if(empty){
    errorRef.current.style.display='block'
    errorRef.current.style.backgroundColor ='#d8161678'
    errorRef.current.innerText='Please Fill Up All Details '
  }else{
    errorRef.current.style.display='none'
    setFormData(formValues);
   e.currentTarget.reset()
   handleExit()
  }
  
 }



 const handleExit = ()=>{
  !isVisible?
  (completeFormRef.current.classList.add('completeFormZ')
   ,setIsVisible(true))
  : null
}



  return (
    <>
      <h2>Reserve Now!</h2>
      <div className='errorBox' ref={errorRef}>please fill Up all Details</div>
      <section className="reservationSection" id="reservation">
        <form onSubmit={handleForm}>
          <div className="fillUp">
            <label htmlFor="carType">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#808080" viewBox="0 0 24 24">
                <path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" />
              </svg>
              Select Type of Car <span>*</span>
            </label>
            <select id="carType" name="carType" >
              <option value="">Select Your Car Type</option>
              <option value="Thar">Thar 2020</option>
              <option value="Swift">Swift</option>
              <option value="Polo GT">Polo GT</option>
              <option value="7 Series m760">BMW</option>
              <option value="Evoque">Evoque</option>
            </select>
          </div>

          <div className="fillUp">
            <label htmlFor="pickupLocation">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              Pick-up Location<span>*</span>
            </label>
            <select id="pickupLocation" name="pickupLocation" >
              <option value="">Select Pick-up location</option>
              <option value="Palakkad">Palakkad</option>
              <option value="Kochi">Kochi</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Trivandrum">Trivandrum</option>
            </select>
          </div>

          <div className="fillUp">
            <label htmlFor="dropOffLocation">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              Drop-off Location<span>*</span>
            </label>
            <select id="dropOffLocation" name="dropOffLocation">
              <option value="">Select Drop-off location</option>
              <option value="Palakkad">Palakkad</option>
              <option value="Kochi">Kochi</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Trivandrum">Trivandrum</option>
            </select>
          </div>

          <div className="fillUp">
            <label htmlFor="pickupDate">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" className="bi bi-calendar-plus" viewBox="0 0 16 16">
                <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              Pick-up Date<span>*</span>
            </label>
            <input type="date" id="pickupDate" name="pickupDate" />
          </div>

          <div className="fillUp">
            <label htmlFor="dropOffDate">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" className="bi bi-calendar-plus" viewBox="0 0 16 16">
                <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              Drop-Off Date <span>*</span>
            </label>
            <input type="date" id="dropOffDate" name="dropOffDate" />
          </div>

          <button type="submit" className="ReserveSubmit">
            Proceed Now
          </button>
        </form>
      </section>
      
      <CompleteForm ref={refs} setIsVisible={setIsVisible} formData={formData}  isVisible={isVisible}   />
    </>
  );
}

export default Reservation;
