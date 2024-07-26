'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Navbar from "@/components/navbar2";

export default function Page() {
    const [isClient, setIsClient] = useState(false);
    const [songNames, setSongNames] = useState<string[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const fetchSongNames = async (station: string): Promise<void> => {
        try {
            setIsFetching(true);

            const apiKey = 'ada2a649ed060c30:6b0c71120670993dac73b4406d500194';
            let headers: HeadersInit = {};
            if (apiKey) {
                headers = {
                    'X-API-Key': apiKey
                };
            }

            const response = await fetch(`https://ongaku-api.zvbt.space/api/station/${station}/files`, {
                headers
            });

            const data: any[] = await response.json();
            const songNames: string[] = data.map((song: any) => song.text);
            setSongNames(songNames.sort());
        } catch (error) {
            console.error('Error fetching song names:', error);
        } finally {
            setIsFetching(false);
        }
    };

    return (
        <main>
                <div className="ctp-mocha relative h-screen bg-ctp-mantle">
                    <Navbar />
                    <Image src='https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/06uh5y7g.jpg' width={1920} height={1080} className='fixed inset-0 w-full h-full object-cover z-0 pointer-events-none blur-[5px]' draggable={false} alt='bg' quality={100}/>
                    <div className="fixed inset-0 bg-[#181825] bg-opacity-80"></div>
                    <div className="flex flex-col items-center justify-center absolute top-[30%] left-0 w-full h-full z-10 ss:top-[0%] sm:top-[15%] lg:top-[10%] xl:top-[5%] 2xl:top-[0%]">
                        <h1 className='text-ctp-text font-bold text-3xl pt-10'>Songs list</h1>
                        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl my-2" id="bar" style={{ overflowY: 'auto', maxHeight: '70vh' }}>
                            <div className="text-ctp-text">
                                <div className='pb-4'>
                                    {songNames.length > 0 ? (
                                        <ul>
                                            {songNames.map((song, index) => (
                                                <li key={index}>{song}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{isFetching ? 'Loading songs...' : 'Click a button bellow to get the list of songs (Can take a while to load!)'}</p>
                                    )}
                                </div>
                               
                            </div>
                        </div>
                        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl my-2" id="bar" style={{ overflowY: 'auto', maxHeight: '70vh' }}>
                            <div className="text-ctp-text">
                                   <p>You can find all of our playlists here updated every week.</p>
                                   <li><a href="https://sptfy.com/kpopbanger" className='text-ctp-mauve'>🎀 K-POP Banger</a></li>
                                   <li><a href="https://sptfy.com/asianbanger" className='text-ctp-mauve'>🌸 Asian Banger</a></li>
                                   
                            </div>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button className="bg-ctp-crust hover:bg-ctp-mauve text-ctp-text font-bold py-2 px-4 rounded" onClick={() => fetchSongNames('Ongaku-kpop')} disabled={isFetching}>
                                {isFetching ? 'Fetching...' : 'Get K-pop Songs'}
                            </button>
                            <button className="bg-ctp-crust hover:bg-ctp-mauve text-ctp-text font-bold py-2 px-4 ml-4 rounded" onClick={() => fetchSongNames('Ongaku-jpop')} disabled={isFetching}>
                                {isFetching ? 'Fetching...' : 'Get J-pop Songs'}
                            </button>
                        </div>
                        <style jsx>{`
                        #bar::-webkit-scrollbar {
                            width: 10px;
                        }

                        #bar::-webkit-scrollbar-track {
                            background: transparent;
                        }

                        #bar::-webkit-scrollbar-thumb {
                            background: #888;
                            border-radius: 5px;
                        }

                        #bar::-webkit-scrollbar-thumb:hover {
                            background: #555;
                        }
                    `}</style>
                    </div>
                </div>
        </main>
    );
}
