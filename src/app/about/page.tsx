'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Navbar from "@/components/navbar2";
import { Icons } from "@/components/ui/icons";
import CountdownTimer from '@/components/timer';

export default function Page() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <main>
            {isClient ? (
                <div className="ctp-mocha relative h-screen bg-ctp-mantle">
                    <Navbar />
                    <Image src='https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/06uh5y7g.jpg' width={1920} height={1080} className='fixed inset-0 w-full h-full object-cover z-0 pointer-events-none blur-[5px]' draggable={false} alt='bg' quality={100}/>
                    <div className="fixed inset-0 bg-[#181825] bg-opacity-80"></div>
                    <div className="flex flex-col items-center justify-center absolute top-[30%] left-0 w-full h-full z-10  sm:top-[15%] lg:top-[10%] xl:top-[5%] 2xl:top-[0%]">
                        <h1 className='text-ctp-text font-bold text-5xl pt-10'>About</h1>
                        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl my-2" id="bar">
                            <div className="text-ctp-text ">
                                <p>Hello i'm Cyadine, and I build this website to explore Next.js. I've been wanting to create a project like this for a few months now!</p>
                                <p>This is a non-profit project dedicated to helping you discover amazing K-Pop and J-Pop music! If you have any concerns about a song, please don't hesitate to email me at <a href="mailto:cyadine@pm.me" className="text-ctp-mauve">cyadine@pm.me</a> for quick removal.</p>
                            </div>
                        </div>
                        <h1 className='text-ctp-text font-bold text-5xl pt-10'>Q&A</h1>

                        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl my-2" id="bar">
                            <div className="text-ctp-text">
                                <div className='pb-4'>
                                    <p className='font-bold'>Where does the name Ongaku come from?</p>
                                    <li >Ongaku means music in Japanese. I've been a fan of Asian culture for a few years now, and I thought it would be fun to call it Ongaku.</li>
                                </div>
                                <div className='pb-4'>
                                    <p className='font-bold'>I found a bug, how can i report it?</p>
                                    <li>Don't hesitate to open an issue on <a href="https://github.com/zvbt/ongaku" className="text-ctp-mauve">GitHub</a> or contact me via email at <a href="mailto:ongaku@zvbt.space" className="text-ctp-mauve">ongaku@zvbt.space</a>.</li>
                                </div>
                                <div className='pb-4'>
                                    <p className='font-bold'>I would like to request a song. How to do it?</p>
                                    <li>You can create an issue on <a href="https://github.com/zvbt/ongaku" className="text-ctp-mauve">GitHub</a> with your song requests.  If possible, please include links to the songs on YouTube or Spotify for easy reference.</li>
                                </div>
                                <div className='pb-4'>
                                    <p className='font-bold'>When the playlist are updated?</p>
                                    <div className='flex items-center'>
                                        <li className='pr-2'>Playlists are updated every Sunday at 10PM CEST or in </li>
                                        <CountdownTimer />
                                    </div>
                                </div>

                                <div className='pb-4'>
                                    <p className='font-bold'>What is under the hood?</p>
                                    <li className="list-disc"><a href="https://nextjs.org/" className="text-ctp-mauve underline">Next.js:</a> Used to build this webapp</li>
                                    <li className="list-disc"><a href="https://www.radix-ui.com/" className="text-ctp-mauve underline">Radix UI:</a> My favorite icons library.</li>
                                    <li className="list-disc"><a href="https://howlerjs.com/" className="text-ctp-mauve underline">Howler.js:</a> Audio library.</li>
                                    <li className="list-disc"><a href="https://tailwindcss.com/" className="text-ctp-mauve underline">Tailwind CSS:</a> My favorite css framework.</li>
                                    <li className="list-disc"><a href="https://catppuccin.com/" className="text-ctp-mauve underline">Catppuccin:</a> Color palette of the site.</li>
                                    <li className="list-disc"><a href="https://icecast.org/" className="text-ctp-mauve underline">Icecast:</a> Steaming server.</li>
                                </div>
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
