'use client'
import Image from "next/image";
import Navbar from "@/components/navbar2";
import { Icons } from "@/components/ui/icons";
import { useState, useEffect } from 'react'
import Player from "@/components/player";
import StatsComponent from "@/components/jpop-stats";

export default function page() {
   const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  
    return (
        <main>
            {isClient ? (
                <div className="ctp-mocha relative h-screen bg-ctp-mantle">
                    <Navbar />
                    <Image src='https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/06uh5y7g.jpg' width={1920} height={1080} className='absolute inset-0 w-full h-full object-cover z-0 pointer-events-none blur-[5px]' draggable={false} alt='bg' quality={100}/>
                    <div className="absolute inset-0 bg-[#181825] bg-opacity-80"></div>
                    <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-10">
                        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl my-5" id="bar">
                            <div className="text-ctp-text ">
                                <p>Hello, I am Cyadine. I made this website to learn a little more about Next.js. I don't make any money from it, and I never intend to. If you want to remove any song, contact me via email at <a href="mailto:cyadine@skiff.com" className="text-ctp-mauve">cyadine@skiff.com</a>.</p>
                            </div>
                        </div>

                        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl my-5" id="bar">
                            <div className="text-ctp-text ">
                                <p>If you encounter any bugs or you want to requests a song, please don't hesitate to open an issue on <a href="https://github.com/zvbt/ongaku" className="text-ctp-mauve">GitHub</a> or contact me via email at <a href="mailto:ongaku@zvbt.space" className="text-ctp-mauve">ongaku@zvbt.space</a>.</p>                            </div>
                        </div>

                        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl my-5" id="bar">
                            <div className="text-ctp-text ">
                                <p>Where does the name Ongaku come from? This word means 'music' in Japanese. I've been a fan of Asian culture for a few years now, and I thought it would be fun to call it Ongaku.</p>
                            </div>
                        </div>

                        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl my-5" id="bar">
                            <div className="text-ctp-text my-5">
                                <p className="font-extrabold">What is under the hood.</p>
                                    <ul className="mt-5">
                                        <li className="list-disc"><a href="https://nextjs.org/" className="text-ctp-mauve underline font-semibold">Next.js</a> is a React framework used for building server-side rendered React applications. It simplifies the process of creating dynamic web pages and provides features like automatic code splitting, routing, and server-side rendering.</li>
                                        <li className="list-disc"><a href="https://www.radix-ui.com/" className="text-ctp-mauve underline font-semibold">Radix UI</a> is an open-source library for building user interfaces (UI) for web applications. It provides a collection of pre-built, foundational UI components that you can use as building blocks for your web app.</li>
                                        <li className="list-disc"><a href="https://howlerjs.com/" className="text-ctp-mauve underline font-semibold">Howler.js</a> is a JavaScript library used for managing audio playback in web applications. It simplifies tasks such as loading, playing, and controlling audio files, making it ideal for implementing audio players and other multimedia features.</li>
                                        <li className="list-disc"><a href="https://tailwindcss.com/" className="text-ctp-mauve underline font-semibold">Tailwind CSS</a> is a utility-first CSS framework that provides a set of pre-built utility classes for styling HTML elements. It allows developers to rapidly build custom designs without writing custom CSS by hand, promoting a more modular and maintainable approach to styling.</li>
                                        <li className="list-disc"><a href="https://catppuccin.com/" className="text-ctp-mauve underline font-semibold">Catppuccin</a> is a popular, community-driven theme designed for coders, designers, and anyone who spends a lot of time on their computer.</li>
                                        <li className="list-disc"><a href="https://icecast.org/" className="text-ctp-mauve underline font-semibold">Icecast</a> is a streaming server that allows you to broadcast audio and video data to listeners or viewers.</li>
                                    </ul>
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                'Ongaku is loading ...'
            )}
        </main>
    );
}