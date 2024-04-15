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
      {isClient ? 

      <body className="ctp-mocha bg-ctp-mantle">
        <Navbar />
        <div className="flex flex-col items-center justify-between p-32">
          <div className="">
            <Player src="https://192.168.1.32:8000/kpop.mp3"/>
          </div>
          <StatsComponent/>
        </div>
      </body> 
      : 'Ongaku is loading ...'}
      
    </main>
  );
}
