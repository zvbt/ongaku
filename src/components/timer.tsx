import { useState, useEffect } from 'react';
import axios from 'axios';
import { Icons } from './ui/icons';

function CountdownTimer() {
    const [timeRemaining, setTimeRemaining] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://worldtimeapi.org/api/timezone/Europe/Paris');
                const currentTime = new Date(response.data.utc_datetime);
                setTimeRemaining(calculateTimeRemaining(currentTime));
            } catch (error) {
                console.error('Error fetching time:', error);
            }
        };

        fetchData();

        const timer = setInterval(() => {
            fetchData();
        }, 1000); // Update every second

        return () => clearInterval(timer);
    }, []);

    function calculateTimeRemaining(currentTime: Date): { days: number; hours: number; minutes: number; seconds: number } {
        const nextSunday = getNextSundayCEST(currentTime);
        const timeDifference = nextSunday.getTime() - currentTime.getTime();

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    }

    function getNextSundayCEST(currentTime: Date): Date {
        const dayOfWeek = currentTime.getDay();
        const daysUntilNextSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
        const nextSunday = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + daysUntilNextSunday);
        nextSunday.setUTCHours(20, 0, 0, 0); // Set time to 8 PM UTC (which is 10 PM CEST)
        return nextSunday;
    }

    return (
        <div className="bg-ctp-crust bg-opacity-90 py-5 px-10 w-[85%] rounded-xl my-5" id="bar">
            <div className="text-ctp-text flex items-center">
                <Icons.info className="text-ctp-mauve size-5 mr-2" />
                <p className="m-0 mr-1">Playlist update every Sunday at 10PM CEST or in </p>
                <p className="m-0">
                    {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
                </p>
            </div>
        </div>
    );
}

export default CountdownTimer;