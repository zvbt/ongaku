import React, { useEffect, useState } from 'react';
import { Icons } from './ui/icons';
import ProgressBar from './progressbar';

interface NowPlaying {
  now_playing: {
    song: {
      text: string;
      art: string;
    };
    elapsed: number;
    duration: number;
    played_at: number;
  };
  listeners: {
    total: number;
    unique: number;
    current: number;
  };
}

const StatsComponent: React.FC = () => {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);

  // Calculate the current time based on the played_at value and duration
const calculateCurrentTime = (playedAt: number, duration: number) => {
  const currentTimeInSeconds = Math.floor(Date.now() / 1000) - playedAt;
  return Math.min(currentTimeInSeconds, duration);
};



  useEffect(() => {
  const fetchData = async () => {
  try {
    const timestamp = Date.now(); 
    const url = `https://ongaku-api.zvbt.space/api/nowplaying/Ongaku-jpop?_=${timestamp}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    setNowPlaying(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  fetchData();

  const intervalId = setInterval(fetchData, 1000);
  return () => clearInterval(intervalId);
}, []);

  return (
    <div className='relative z-10'>
      {nowPlaying ? (
        <div>
            <ProgressBar currentTime={calculateCurrentTime(nowPlaying.now_playing.played_at, nowPlaying.now_playing.duration)} totalDuration={nowPlaying.now_playing.duration} />
            <div className='text-ctp-text inline-flex'>
                <p className='inline-flex' title='Listeners'><Icons.person className='mt-1.5'/> {nowPlaying.listeners.current}</p>
                <h2 className='pl-3'>{nowPlaying.now_playing.song.text}</h2>
            </div>
        </div>
      ) : (
        <p className='text-ctp-text'>Loading stats...</p>
      )}
    </div>
  );
};

export default StatsComponent;
