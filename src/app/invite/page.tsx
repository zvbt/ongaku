'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('https://discord.com/oauth2/authorize?client_id=1271103628127506522&permissions=2184203264&integration_type=0&scope=bot');
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <main className='flex ctp-mocha bg-ctp-mantle text-ctp-text h-screen w-screen'>
            Redirecting in 5 seconds...
        </main>
    );
}
