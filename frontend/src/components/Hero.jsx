import React from 'react'
import {Link} from "react-router-dom"

const Hero = () => {
    return (
        <section className='max-padd-container pt-[99px]'>
            <div className='max-padd-container bg-hero bg-center bg-no-repeat bg-cover h-[655px] w-full rounded-3xl'>
                <div className='relative top-32 xs:top-52 '>
                    <span className='medium-18'>Welcome to Gapribay Homes</span>
                    <h1 className='h1 capitalize max-w-[40rem] ' style={{color: "white"}}>Discover your dream property with us</h1>
                    <p className='my-10 max-w-[33rem]' style={{color: "black"}}>Browse a curated selection of prime lands and homes 
                    tailored to your lifestyle. Whether you're investing, building, or settling down, find
                     the perfect place to call home with our expert guidance and extensive listings.</p>
                    {/* button */}
                    <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl'>
                        <div className='text-center regular-14 leading-tight pl-5'>
                            <h5 className='uppercase font-bold'>10% Off</h5>
                            <p className='regular-14'>On All Properties</p>
                        </div>
                        <Link to={'/listing'} className={"btn-secondary rounded-xl flexCenter !py-5"}>Book now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero