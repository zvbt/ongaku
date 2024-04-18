import { useState, useEffect } from 'react';
import axios from 'axios';

function CountdownTimer() {
    const [timeRemaining, setTimeRemaining] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://worldtimeapi.org/api/timezone/Europe/Brussels');
                const currentTime = new Date(response.data.utc_datetime);
                setTimeRemaining(TimeUntilNextSunday10PM(currentTime));
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

    function TimeUntilNextSunday10PM(currentTime: Date): { days: number; hours: number; minutes: number; seconds: number } {
    const nextSunday = getNextSunday10PM(currentTime);
    let timeDifference = nextSunday.getTime() - currentTime.getTime();

    if (currentTime.getDay() === 0 && currentTime.getHours() >= 22) {
        timeDifference += 7 * 24 * 60 * 60 * 1000; // Add 1 week if it's already past 22:00 on Sunday
    }

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


    function getNextSunday10PM(currentTime: Date): Date {
        const dayOfWeek = currentTime.getDay();
        const daysUntilNextSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
        const nextSunday = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + daysUntilNextSunday);
        nextSunday.setHours(22, 0, 0, 0); // Set time to 10 PM
        return nextSunday;
    }

    return (
            <p className="text-ctp-text">{timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s</p>
    );
}

export default CountdownTimer;
