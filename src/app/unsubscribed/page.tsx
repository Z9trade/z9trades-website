'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const UnsubscribedSuccessPage = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className='m-10 my-[150px]  align-center text-center' >
            <h1 className='font-bold'>
                Unsubscribed Successfully
            </h1>
            <p>You have been unsubscribed. You will be redirected to the homepage shortly.</p>
        </div>
    );
};

export default UnsubscribedSuccessPage;