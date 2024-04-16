'use client'
import Image from "next/image";
import Navbar from "@/components/navbar2";
import { Icons } from "@/components/ui/icons";
import { useState, useEffect } from 'react'
import Player from "@/components/player";
import StatsComponent from "@/components/stats2";

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
                    <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-10">
                        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl" id="bar">
                            <div className="">
                                <Player src="https://stream2.zvbt.space/radio.mp3" />
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