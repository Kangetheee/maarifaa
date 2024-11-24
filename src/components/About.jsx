import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);


const About = () => {

    // clip animation 
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger: '#clip',
                start: 'center center',
                end:'+=800 center', // 800px after passing
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

  return (
    <div id='#about' className='min-h-screen w-screen'>
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to Maarifa</h2>
    
            <AnimatedTitle title="Disc<b>o</b>ver the l<b>a</b>rgest sh<b>a</b>red art porf<b>o</b>lio"
            containerClass="mt-5 !text-black text-center"/>

           

            {/* comeback to this later */}
            <div className="about-subtext relative">
                <p>A Yearner's Haven for Real Inspiration, Escape Doom Scrolling and Live a Little </p>
                <p className='text-gray-500'>Maarifa is a community of free thinkers from different backgrounds.</p>
            </div>

        </div>

        <div className="h-dvh w-screen" id='clip'>
            <div className="mask-clip-path about-image">
                <img
                    src='img/about.webp'
                    alt='Background'
                    className='absolute left-0 top-0 size-full object-cover' 
                />
            </div>
        </div>
    </div>
  )
}

export default About