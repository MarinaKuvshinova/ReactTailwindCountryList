import React, { useState } from 'react'
import Button from './UI/Button'

export default function Header() {
    function changeTheme(e){
        document.documentElement.classList.toggle('dark')
        // parent.classList.toggle("dark");
    }

  return (
    <header className='shadow-md shadow-slate-10 sticky py-4 mb-10 top-0 bg-white z-10 dark:bg-slate-900 dark:text-white'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 flex align-middle'>
            <h1 className="text-gray-900 dark:text-gray-50">Where in the world?</h1>
            <Button onClick={changeTheme} className="ml-auto flex gap-1 align-middle hover:text-teal-500">
                <svg className="self-center w-4 h-4 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <span className='transition-all duration-500'>Dark Mode</span> 
            </Button>
        </div>
    </header>
  )
}
