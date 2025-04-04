import React from 'react'

const Background = () => {
  return (
    <>
        <div className="background w-full h-full bg-zinc-950 z-20">
            <div className='w-[3rem] h-[3rem] bg-stone-500  absolute right-[2rem] top-[8rem] skew-12 blur-2xl'></div>
            <div className='w-[3rem] h-[3rem] bg-stone-500  absolute top-[12rem] skew-12 blur-2xl'></div>
            <div className='w-[3rem] h-[3rem] bg-stone-500  absolute right-[8rem] top-[28rem] skew-8 blur-2xl'></div>
            <div className='w-[3rem] h-[3rem] bg-stone-500  absolute left-[3rem] top-[40rem] skew-2 blur-2xl'></div>
        </div>
    </>
  )
}

export default Background