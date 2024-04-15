'use client'
import Image from "next/image";
import Navbar from "@/components/navbar";
import { Icons } from "@/components/ui/icons";
import { useState, useEffect } from 'react'
import Player from "@/components/player";


export default function Home() {
   const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <main>
      {/* white mode = ctp-latte */}

      {isClient ? 

      <body className="ctp-mocha bg-ctp-mantle">
        <Navbar />
        <div className="flex flex-col items-center justify-between p-32">
          <div className="">
            <Player playlistUrl="/songs/kpop/kpop.m3u8"/>
            {/* <h1 className="text-ctp-text"> <Icons.play className="size-5 text-ctp-text cursor-pointer"/>WEDNESDAY CAMPANELLA - TAMAMO NO MAE</h1> */}
          </div>
        </div>
      </body> 
      : 'Ongaku is loading ...'}
      
    </main>
  );
}
