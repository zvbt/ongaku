import React from 'react';

interface ProgressBarProps {
  currentTime: number;
  totalDuration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentTime, totalDuration }) => {
  const progress = (currentTime / totalDuration) * 100 || 0;

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const formattedCurrentTime = formatTime(currentTime);
  const formattedTotalDuration = formatTime(totalDuration);

  return (
    <div className='flex flex-col items-center pr-0'>
      <div className='flex w-full text-ctp-text font-semibold text-xs'>
        <p className='absolute ml-0 sm:ml-0'>{formattedCurrentTime}</p>
        <p className='pl-[97.5%]'>{formattedTotalDuration}</p>
      </div>
      <div className='w-full h-[15px] border border-solid border-ctp-surface0 rounded overflow-hidden'>
        <div
          style={{
            width: `${progress}%`,
            transition: 'width 3s ease', // Adding transition
          }}
          className='h-full bg-ctp-mauve rounded'
        />
      </div>
    </div>
  );
};

export default ProgressBar;
