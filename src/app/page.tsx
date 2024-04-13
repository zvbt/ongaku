import Image from "next/image";
import Navbar from "@/components/navbar";
import { Icons } from "@/components/ui/icons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-between p-32">
        <div className="text-3xl">
          
          <Icons.play className="size-10 text-foreground" />
          <Icons.pause className="size-10 text-foreground" />
          
          <h1 className="text-foreground">uwu</h1>
        
        
        </div>
      </div>
    </main>
  );
}
