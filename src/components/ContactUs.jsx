import React from 'react'
import carimg from '../assets/assets/contact banner.avif'
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <section className="contactContainer">
        <div className='contactBanner'>
          <img src={carimg} />
        </div>
       <div className='contactH'>
       <h1>Contact</h1>
        <h3>Rentz/contact</h3>
       </div>
         
        <div className='contactSection'>
            <div className="rightSectionContact">
                <h1>Want to know more about us or our service? </h1>
                <p>A multifaceted professional skilled in multiple fields of research,
                     development as well as a learning specialist. Over 15 years of experience.</p>
                     <div className="contactSubRight">
                        <div>
                            <span><svg xmlns="http://www.w3.org/2000/svg"   fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                  </svg>
                            </span>(+91) 223 335 3323
                        </div>
                        <div>
                            <span><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                                  </svg>
                            </span>rentzz.org@gmail.com
                        </div>
                        <div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-signpost" viewBox="0 0 16 16">
                                     <path d="M7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414a1 1 0 0 0-2 0M12.532 5l1.666 2-1.666 2H2V5z"/>
                                </svg>
                            </span><Link className='linkk' to={'/'}>Palakkad,India</Link>
                        </div>
                      
                    </div>
                    </div>

                    <div className="leftsideForm">
                      <form >
                        <div>
                          <label htmlFor="name">Name:</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email">Email:</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="address" >Address</label>
                          <textarea
                           type="text"
                           id='address'
                           name='address'
                           />
                        </div>
                        <div>
                          <label htmlFor="message">Message:</label>
                          <input
                          type='text'
                            id="message"
                            name="message"
                            required
                          />
                        </div>
                        <button  type="submit"><Link to={'/'}>Send</Link></button>
                      </form>
                    </div>

           
        </div>
    </section>
  )
}

export default ContactUs