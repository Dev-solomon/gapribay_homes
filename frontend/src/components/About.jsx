import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import aboutImg from '../assets/about.jpeg';
import { RiThumbUpLine,  } from "react-icons/ri";

const About = () => {
    // Define the statistics
    const statistics = [
        { label: 'Happy clients', value: 12 },
        { label: 'Different cities', value: 3 },
        { label: 'Project completed', value: 45 }
    ];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const top = aboutSection.getBoundingClientRect().top;
                const isVisible = top < window.innerHeight - 100;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to format numbers with commas
    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    

    return (
        <section id='about' className='max-padd-container py-16 xl:py-28'>
            {/* Container */}
            <div className='flex flex-col xl:flex-row gap-10'>
                {/* Left side */}
                <div className='flex-1 relative'>
                    <img src={aboutImg} alt="" className='rounded-3xl rounded-tr-[155px] w-[488px]' />
                    <div className='bg-white absolute bottom-16 left-16 max-w-xs p-4 rounded-lg flexCenter flex-col'>
                        <span className='relative bottom-8 p-3 shadow-md bg-white h-12 w-12 flex items-center rounded-full'><RiThumbUpLine className='text-2xl' style={{color: "blue"}}/></span>
                        <p className='text-center relative bottom-3'>Local Expertise, Personalized Service and Professionalism</p>
                    </div>
                </div>
                {/* Right side */}
                <div className='flex-1 flex justify-center flex-col'>
                    <span className='medium-18'>The Comfort Of Your Dream House</span>
                    <h2 className='h2'>We are Committed to giving you the best and making sure you're satisfied</h2>
                    <p className='py-5'>
                    At  Gapribay, we understand that finding the perfect home is not just 
                    about the property; it's about finding a place that fits your lifestyle and fulfills 
                    your dreams. Whether you're looking to buy your first home, upgrade to a larger space, downsize, or explore rental options, we are here to guide you every step of the way.
                    </p>
                    {/* Statistics Container */}
                    <div className="flex flex-wrap gap-4">
                        { 
                            statistics.map((statistic, index) => (
                            <div key={index} className="bg-primary p-4 rounded-lg">
                                <div className='flex items-center gap-1'>
                                    <CountUp start={isVisible ? 0 : null} end={statistic.value} duration={10} delay={3}>
                                        {({ countUpRef }) => (
                                            <h3 ref={countUpRef} className="text-2xl font-semibold "></h3>
                                        )}
                                    </CountUp>
                                    <h4 className='bold-22'>k+</h4>
                                </div>
                                <p className="text-gray-600">{statistic.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
