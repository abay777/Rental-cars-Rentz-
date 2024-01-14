import { forwardRef } from "react";





 const ClientForm = forwardRef(({isVisible,setIsVisible},{completeFormRef,errorRef})=>{

 
 const handleComplete = (e)=>{
  e.preventDefault()
  const errorElement=errorRef.current;
  
  errorElement.style.display='block'
  errorElement.innerText = 'Thank you , you will receive an email for confirmation';
  errorElement.style.backgroundColor='#09ff3770';
  setTimeout(() => {
    errorElement.style.display='none'
  },3000);
  isVisible?
  (completeFormRef.current.classList.remove('completeFormZ'),setIsVisible(false))
  :null
 }


  return <>
        <h1>Personal Information</h1>
        <form className='finalForm2' onSubmit={handleComplete}>
            <div className='clientInputs'>
                <label htmlFor="name"><span>*</span> Full Name</label>
                <input type="text" id='name' name='name' />
            </div>
            
            <div className='clientInputs'>
                <label htmlFor="age"> <span>*</span> Age</label>
                <input type="number" id='age' name='age' />
            </div>
            
            <div className='clientInputs'>
                <label htmlFor="email"> <span>*</span> Email</label>
                <input type="email" id='email' name='email' />
            </div>
            
            <div className='clientInputs'>
                <label htmlFor="phnum"> <span>*</span> Phone Number</label>
                <input type="number" id='phnum' name='phnum' />
            </div>
            
            <div className='clientInputs'>
                <label htmlFor="addresss"> <span>*</span> Address</label>
                <input type="text" id='addresss' name='addresss' />
            </div>
            
            <div className='clientInputs'>
                <label htmlFor="city"><span>*</span>city</label>
                <input type="text" id='city' name='city' />
            </div>
            
            <div className='clientInputs'>
                <label htmlFor="pincode"><span>*</span>Zip code</label>
                <input type="number" id='pincode' name='pincode' />
            </div>

            <button type='submit'>Confirm</button>
        </form>
        </>;
})
  
export default ClientForm;