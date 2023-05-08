"use client"
import './globals.css'
import React from 'react'
import {Inter} from 'next/font/google'
import Link from "next/link";
import Image from "next/image";

const inter = Inter({subsets: ['latin']})
export default function RootLayout({children}) {
    const [darkToggle, setDarkToggle] = React.useState(true)
    return (
        <html lang="en" className={`${darkToggle ? 'dark' : 'light'}`}>
            <body className="bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
                <header className="container mx-auto px-4">
                    <div className=" flex items-center justify-between py-4 mb-6">
                        <Link href="/" className="dark:border-gray-700/50 dark:bg-gray-800 bg-white border-gray-300/50 border w-12 rounded-full h-12 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                            </svg>
                        </Link>
                        <Image
                            src="/international_pokémon_logo.svg"
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority
                        />
                        <button className="dark:border-gray-700/50 dark:bg-gray-800 bg-white border-gray-300/50 border w-12 rounded-full h-12 flex items-center justify-center" onClick={()=>setDarkToggle(!darkToggle)}>
                            {(darkToggle) ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </header>
                {children}
            </body>
        </html>
    )
}
