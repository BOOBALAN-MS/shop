import React from 'react';
import styles from './SliderDiv.module.css';

export function Sliderdiv() {
  return (
    <div className='container mx-auto mt-10 mb-10 flex flex-wrap h-96 w-screen'>
      <div className='bg-slate-950 p-5 border border-zinc-100'>
        <div className='border border-zinc-100'>
          <p className='text-white'>Cutom T-shirts</p>
          <p className='text-white'>Create printed t-shirts that look & feel great - choose from diverse designs, colors, & styles.</p>
        </div>
        <div>
          <button type='button' className='border border-amber-700 px-10 py-5 text-white'>CREATE YOUR'S NOW</button>
        </div>
      </div>
      <div className="bg-slate-900 border border-zinc-100">
        <div className={`border border-slate-500 ${styles.slideImage}`}>

        </div>
      </div>
    </div>
  )
}
