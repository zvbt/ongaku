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
    <div className='flex flex-col items-center mr-10 pr-0'>
      <div className='flex w-full text-ctp-text font-semibold text-xs'>
        <p className='ml-0 sm:ml-0'>{formattedCurrentTime}</p>
        <p className='pl-[125px] sm:pl-[175px]'>{formattedTotalDuration}</p>
      </div>
      <div className='w-full h-[8px] border border-solid border-ctp-surface0 rounded'>
        <div
          style={{
            width: `${progress}%`,
          }}
          className='h-full bg-ctp-mauve rounded'
        />
      </div>
    </div>
  );
};

export default ProgressBar;
