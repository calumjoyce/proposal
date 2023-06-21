import React from 'react';
// import Me from '../public/images/me.png';

const Hero = () => {
    return (
        <section className='p-8 bg-white h-[100dvh]'>
            <div className="rounded-2xl box-border bg-gradient-to-b p-8 w-full h-full from-pink to-ocean">
                <div className='module-container mx-auto'>
                    <div className='max-w-[780px] mx-auto pt-[200px] flex items-center'>
                        <div className='w-full lg:w-6/12'>
                            <p className='font-bold uppercase tracking-wider'>Front-end Developer</p>
                            <h1 className='text-[40px]'>Calum Joyce</h1>
                        </div>
                        <div className='w-full lg:w-6/12'>
                            <img className='rounded-full outline outline-4 outline-black border-4' src='/images/me.png' alt='Calum Joyce' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;