import React from 'react';
import modal from './modal.module.css'

export default function Modal({ selectedImg }) {
     return (
          <div>
               <div className={modal.backdrop} >
                    <img src={selectedImg} alt="enlarged pic" />
                    <h1>Modal</h1>
               </div>
          </div>
     )
}
