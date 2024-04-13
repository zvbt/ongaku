import Image from "next/image";
import Navbar from "@/components/navbar";
import { Icons } from "@/components/ui/icons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-between p-32">
        <div className="">
          
        
          <h1 className="text-foreground"> <Icons.play className="size-5 text-foreground" />WEDNESDAY CAMPANELLA - TAMAMO-NO-MAE</h1>
        
        
        </div>
      </div>
    </main>
  );
}
