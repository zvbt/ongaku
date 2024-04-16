import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { Icons } from './ui/icons';
import ProgressBar from './progressbar';

interface MusicPlayerProps {
  src: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ src }) => {
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false); // State to toggle visibility of volume slider
  const [showVolumeText, setShowVolumeText] = useState(false); // State to toggle visibility of volume text
  const inputRef = useRef<HTMLInputElement>(null); // Ref for the input element

  useEffect(() => {
    const newSound = new Howl({
      src: [src],
      html5: true,
      format: ['mp3'],
      volume: volume,
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onend: () => {
        setIsPlaying(false);
      }
    });

    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, [src]); // Removed volume from dependency array

  const togglePlay = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (sound) {
      sound.volume(newVolume);
    }
  };

  const calculateVolumeTextPosition = () => {
    if (inputRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const thumbPosition = (volume - parseFloat(inputRef.current.min)) / (parseFloat(inputRef.current.max) - parseFloat(inputRef.current.min));
      const thumbLeft = inputRect.left + inputRect.width * thumbPosition;
      return thumbLeft;
    }
    return 0;
  };

  return (
    <div className='z-10'>
      <div>
        <button onClick={togglePlay}>
          {isPlaying ? <Icons.pause className='size-5 text-ctp-text cursor-pointer' /> : <Icons.play className='size-5 text-ctp-text cursor-pointer' />}
        </button>
        <div className="relative inline-block">
          <button onClick={() => setShowVolumeSlider(!showVolumeSlider)}>
            <Icons.speaker className='size-5 text-ctp-text cursor-pointer ml-2' />
          </button>
          {showVolumeSlider && (
            <div className="absolute top-0 left-8">
              <input
                ref={inputRef}
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                onMouseEnter={() => setShowVolumeText(true)} // Show volume text on mouse enter
                onMouseLeave={() => setShowVolumeText(false)} // Hide volume text on mouse leave
                className='accent-ctp-mauve'
              />
              {showVolumeText && (
                <span style={{ left: '-30px', top: '-20px' }} className='absolute text-ctp-text text-xs font-semibold'>
                  {Math.round(volume * 100)}%
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;