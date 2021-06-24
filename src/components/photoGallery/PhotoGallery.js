import React from 'react'
import Navbar from '../navbar/navbar'
import { Photos } from './photoGalleryData'
import photos from './photos.module.css'
import Modal from './modal'

export default function PhotoGallery({ selectedImg, setSelectedImg }) {
     

     return (
          <div>
               <Navbar />
               <div className={photos.photoContainer}>
               {
                    Photos.map((photo) => {
                         return (
                              <div className={photos.container} onClick={() => setSelectedImg(photo.url)} key={photo.id}>
                                   <img src={photo.url} alt="" className={photos.photo} key={photo.id} />
                                   </div>
                         )
                    })
               }
               </div>
               <Modal selectedImg={selectedImg} />
          </div>
     )
}
