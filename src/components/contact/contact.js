import React from 'react';
import contact from './contact.module.css'
import emailjs from 'emailjs-com';
import { Map, TileLayer, Marker } from 'react-leaflet'

export default function Contact() {

     function sendEmail(e) {
          e.preventDefault();

          emailjs.sendForm('service_idazb3g', 'template_kragiyo', e.target, 'user_UGWr1UsweYoyfny2NP9cv')
               .then((result) => {
                    console.log(result.text);
               }, (error) => {
                    console.log(error.text);
               });
               e.target.reset()
     }

     return (
          <>
               <div className={contact.mainContainer}id="contact">
                    <div 
                         className={contact.mapContainer}
                         data-aos="slide-right"
                         data-aos-easing="linear"
                         data-aos-duration="1000">
                         <Map
                              className={contact.leaflet_container}
                              center={[39.73705, -105.00857]}
                              zoom={13}
                         >
                              <TileLayer
                                   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                              <Marker position={[39.73705, -105.00857]}
                              />
                         </Map>
                         <div className={contact.contactMethods}
                              >
                              <div className={contact.contactText}>
                                   <i class="fas fa-envelope-open-text"></i><br></br>
                                   <span>Message Us</span>
                                   <p>Feel free to contact us at <br></br> your earliest convience</p>
                                   <h3>inclinedcatering@gmail.com</h3>
                              </div>
                              <div className={contact.contactText}>
                                   <i class="fas fa-phone-alt"></i><br></br>
                                   <span>Call Us</span>
                                   <p>Call anytime between the hours of <br></br> 7AM and 8PM to get instant details</p>
                                   <h3>(907)351-0131</h3>
                              </div>
                              <div className={contact.contactText}>
                                   <i class="fab fa-instagram"></i><br></br>
                                   <span>Tag Us</span>
                                   <p>Take photos of your dishes<br></br> and tag us in them!</p>
                                   <h3>@akchef_mingus, @meadorcameron</h3>
                              </div>
                         </div>
                    </div>

                    <div className={contact.center}>
                         <div className={contact.container}>
                              <div className={contact.image}>
                                   <div className={contact.title}>
                                        <h3 >Contact Us</h3>
                                   </div>
                              </div>

                              <div className={contact.formContainer}>
                                   <form onSubmit={sendEmail}>
                                        <div className={contact.formColumn}>
                                             <input type="text" placeholder='Name' name='name' />

                                             <input type="text" placeholder='Company' name='company' />

                                             <input type="email" placeholder='Email' name='email' />

                                             <input type="integer" placeholder='Phone Number' name='phoneNumber' />

                                             <textarea placeholder="Type message here..." name='message' />

                                             <button type="submit" className={contact.submitBtn}>Send</button>
                                        </div>
                                   </form>

                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}
