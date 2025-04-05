import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function MessageReceived() {
    return (
        <div className='align-center text-center mt-[150px] my-20'>
            <h1 className='font-bold'>Thank You!</h1>
            <p>Your message has been received. We will get back to you shortly.</p>
            <Link href="/">
                <Button variant={'default'} className='mt-[20px] px-[10px] py-[10px] font-[16px]' >
                    Go Back Home
                </Button>
            </Link>
        </div>
    );
}