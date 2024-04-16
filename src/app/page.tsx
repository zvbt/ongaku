'use client'
import Image from "next/image";
import Navbar from "@/components/navbar";
import { Icons } from "@/components/ui/icons";
import { useState, useEffect } from 'react'
import Player from "@/components/player";
import StatsComponent from "@/components/stats";

export default function Home() {
   const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  
    return (
        <main>
            {isClient ? (
                <div className="ctp-mocha relative h-screen bg-ctp-mantle">
                    <Navbar />
                    {/* <video
                        src="https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/8n981gr2.mp4"
                        autoPlay={true}
                        loop={true}
                        controls={false}
                        muted={true}
                        className='absolute inset-0 w-full h-full object-cover z-0 pointer-events-none'
                        draggable={false}
                    ></video> */}
                    <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-10">
                        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl" id="bar">
                            <div className="">
                                <Player src="https://stream.zvbt.space/kpop.mp3" />
                            </div>
                            <StatsComponent />
                        </div>
                    </div>
                </div>
            ) : (
                'Ongaku is loading ...'
            )}
        </main>
    );
}