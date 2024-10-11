// 'use client'
// import { useState, useEffect } from 'react';
// import Image from "next/image";
// import Navbar from "@/components/navbar2";
// import { Icons } from "@/components/ui/icons";
// import CountdownTimer from '@/components/timer';

// export default function Page() {
//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     return (
//         <main>
//             {isClient ? (
//                 <div className="ctp-mocha relative h-screen bg-ctp-mantle">
//                     <Navbar />
//                     <Image src='https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/06uh5y7g.jpg' width={1920} height={1080} className='fixed inset-0 w-full h-full object-cover z-0 pointer-events-none blur-[5px]' draggable={false} alt='bg' quality={100}/>
//                     <div className="fixed inset-0 bg-[#181825] bg-opacity-80"></div>
//                     <div className="flex flex-col items-center justify-center absolute top-[30%] left-0 w-full h-full z-10  sm:top-[15%] lg:top-[10%] xl:top-[5%] 2xl:top-[0%]">
//                         <div className="py-5 px-5 w-[85%] rounded-xl my-2" id="bar">
//                             <iframe src="https://status.zvbt.space/status/ongaku" frameBorder="0" className="w-full h-[740px] rounded-xl opacity-90"></iframe>
//                         </div>

//                     </div>
//                 </div>
//             ) : (
//                 'Ongaku is loading ...'
//             )}
//         </main>
//     );
// }