import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { Icons } from './ui/icons';
import ProgressBar from './progressbar';

interface MusicPlayerProps {
  playlistUrl: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ playlistUrl }) => {
  const [audioUrls, setAudioUrls] = useState<string[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.5);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const sound = useRef<Howl | null>(null);

  useEffect(() => {
    fetch(playlistUrl)
      .then(response => response.text())
      .then(data => {
        const urls = data
          .split('\n')
          .filter(line => line.startsWith('https://'))
          .map(line => line.trim());
        setAudioUrls(urls);
      })
      .catch(error => {
        console.error('Error fetching playlist:', error);
      });
  }, [playlistUrl]);

  useEffect(() => {
  if (audioUrls.length > 0) {
    if (sound.current) {
      sound.current.unload(); // Unload the current Howl instance
    }
    
    // Initialize a new Howl instance for the new song
    sound.current = new Howl({
      src: audioUrls[currentSongIndex],
      html5: true,
      volume: volume,
      // Update onplay event handler and play function
onplay: () => {
  setIsPlaying(true);
  setTotalDuration(sound.current?.duration() || 0);
  const updateCurrentTime = () => {
    if (sound.current?.playing()) {
      setCurrentTime(sound.current.seek());
      requestAnimationFrame(updateCurrentTime);
    }
  };
  updateCurrentTime();
},



      onpause: () => {
        setIsPlaying(false);
      },
      onend: () => {
        setIsPlaying(false);
        setCurrentTime(0);
        // Play the next song when the current song ends
        if (currentSongIndex < audioUrls.length - 1) {
          playNextSong();
        }
      },
      onstop: () => {
        setIsPlaying(false);
        setCurrentTime(0);
      },
    });
  }
  
  return () => {
    if (sound.current) {
      sound.current.unload();
    }
  };
}, [audioUrls, currentSongIndex]);


const play = () => {
  if (sound.current) {
    if (!isPlaying) {
      sound.current.play();
    } else {
      sound.current.pause();
    }
    setIsPlaying(!isPlaying); // Toggle isPlaying state
  }
};



  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (sound.current) {
      sound.current.volume(newVolume);
    }
  };

const playNextSong = () => {
  if (sound.current) {
    sound.current.stop(); // Stop the current song
  }
  console.log('Resetting current time to 0');
  setCurrentTime(0); // Reset current time to 0
  setCurrentSongIndex(prevIndex => (prevIndex + 1) % audioUrls.length);
  if (sound.current) {
    sound.current.play(); // Play the next song
  }
};

const playPreviousSong = () => {
  setCurrentTime(0); // Reset current time to 0
  setCurrentSongIndex(prevIndex => (prevIndex === 0 ? audioUrls.length - 1 : prevIndex - 1));
  if (sound.current) {
    sound.current.play();
  }
};


  return (
    <div className='inline-flex items-center'>
      <button onClick={playPreviousSong}>
        <Icons.previous className='size-5 text-ctp-text cursor-pointer' />
      </button>
      <button onClick={play}>
        {isPlaying ? <Icons.pause className='size-5 text-ctp-text cursor-pointer' /> : <Icons.play className='size-5 text-ctp-text cursor-pointer' />}
      </button>
      <button onClick={playNextSong}>
        <Icons.next className='size-5 text-ctp-text cursor-pointer mr-2' />
      </button>
      <ProgressBar currentTime={currentTime} totalDuration={totalDuration}/>
      <input
        type='range'
        min='0'
        max='1'
        step='0.01'
        value={volume}
        onChange={handleVolumeChange}
        className='accent-ctp-mauve w-20 mx-2'
      />
    </div>
  );
};

export default MusicPlayer;
