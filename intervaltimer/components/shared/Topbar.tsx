import React from 'react';
import HistoryButton from '@/components/topbar/HistoryButton';

export default function Topbar() {
    return <section>
        <nav className='flex gap-4'>
            <HistoryButton direction='reverse' className='text-base aspect-square w-8 rounded-full bg-black-90 flex items-center justify-center'>
                <i className="bi bi-chevron-left transform -translate-x-[2px]"></i>
            </HistoryButton>
            <HistoryButton direction='forward' className='text-base aspect-square w-8 rounded-full bg-black-90 flex items-center justify-center'>
                <i className="bi bi-chevron-right transform translate-x-[2px]"></i>
            </HistoryButton>
        </nav>
    </section>;
}
