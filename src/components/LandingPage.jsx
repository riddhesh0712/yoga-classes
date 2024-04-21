import React from 'react'
import { Header } from './Header'
import HeroSec1 from '../images/HeroSec1.png'
import Sectioncard1 from '../images/SectionCard1.png'
import Sectioncard2 from '../images/Sectioncard2.png'
import Sectioncard3 from '../images/Sectioncard3.png'
import SectionBg from '../images/SectionBg.png'
import SectionBg2 from '../images/SectionBg2.png'
import SectionBg3 from '../images/SectionBg3.png'
import CardImg from '../images/CardImg.svg'

export const LandingPage = () => {
  return (
    <div className='bg-[#e2f5f3]'>
        <Header />
        {/* Hero Section starts */}
        <section>
            <div className='p-20 md:flex '>
                <div className='flex md:flex-1 justify-center items-center px-20 md:px-32 '>
                    <div className='flex flex-col  rounded-full overflow-hidden border-[#42b9af] border-4 shadow-lg shadow-[#77a8a4] mb-10 ' >
                        <img src={HeroSec1} alt="" />
                    </div>
                </div>
                
                <div className='flex flex-col md:flex-1 justify-center items-center text md:justify-items-center md:items-start '>
                    <h1 className='text-5xl md:text-7xl font-bold text-[#387c78] mb-4 md:mb-8'>Yoga Class</h1>
                    <p className='text-center md:text-start mb-4 md:mb-8 text-sm md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, labore? </p>
                    <button className='py-2 px-8 bg-[#387c78] rounded-full text-white font-bold '>
                        JOIN NOW
                    </button>
                </div>
            </div>
        </section>
        {/* Hero Section Ends */}

        {/* Choose class section starts */}
        <section className='flex flex-col bg-[#387c78] p-20 md:p-0 md:py-10'>
            <div className='flex flex-col justify-center items-center px-4 md:px-8 text-center'>
                <h1 className='text-4xl md:text-8xl text-white font-bold mb-4'>Choose Class</h1>    
                <p className='text-2xl text-white mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum tempora ab .</p>
            </div>
            <div className='flex flex-col lg:flex-row md:p-10'>
                <div className='flex flex-col justify-center items-center mb-10 md:mb-0 md:px-10'>
                    <div className='flex flex-col  rounded-full overflow-hidden border-[#9bd4d0] border-4 shadow-2xl shadow-[#87bdb8] mb-6 h-64 w-64 md:h-72 md:w-72'>
                        <img src={Sectioncard1} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl md:text-4xl font-bold text-white mb-2'>Newbie Class</span>
                        <p className='text-white text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mb-10 md:mb-0 md:px-10'>
                    <div className='flex flex-col  rounded-full overflow-hidden border-[#9bd4d0] border-4 shadow-2xl shadow-[#87bdb8] mb-6 h-64 w-64 md:h-72 md:w-72'>
                        <img src={Sectioncard2} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl md:text-4xl font-bold text-white mb-2'>Newbie Class</span>
                        <p className='text-white text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mb-10 md:mb-0 md:px-10'>
                    <div className='flex flex-col  rounded-full overflow-hidden border-[#9bd4d0] border-4 shadow-2xl shadow-[#87bdb8] mb-6 h-64 w-64 md:h-72 md:w-72'>
                        <img src={Sectioncard3} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl md:text-4xl font-bold text-white mb-2'>Newbie Class</span>
                        <p className='text-white text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>   
        </section>

        {/* Our Stats section starts */}
        <section className='relative bg-[#e2f5f3] md:p-20 py-10 text-[#387c78] z-0 bg-cover bg-center ' style={{ backgroundImage: `url(${SectionBg})` }}>
            <div className='absolute inset-0 h-full w-full bg-[#e2f5f3] bg-opacity-70 z-10'></div>
            <div className='relative flex flex-col justify-center items-center z-20'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl  md;text-8xl font-extrabold mb-8'>Statistics</h1>
                <p className='max-w-[60%] text-xl text-center mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias laborum voluptatum repellat perspiciatis inventore voluptate assumenda omnis maiores. Provident voluptatem dolore unde minus fugit.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center py-10 space-y-8 md:space-y-0 md:space-x-12'>
                <div className='flex flex-col justify-center items-center w-64 h-64 rounded-full border-4 border-[#387c78]'>
                    <span className='text-7xl font-extrabold'>7K</span>
                    <p className='text-2xl font-bold'>Customer</p>
                </div>
                <div className='flex flex-col justify-center items-center w-64 h-64 rounded-full border-4 border-[#387c78]'>
                    <span className='text-7xl font-extrabold'>109</span>
                    <p className='text-2xl font-bold'>Outlets</p>
                </div>
                <div className='flex flex-col justify-center items-center w-64 h-64 rounded-full border-4 border-[#387c78]'>
                    <span className='text-7xl font-extrabold'>35</span>
                    <p className='text-2xl font-bold'>Country</p>
                </div>
            </div>
            </div>
            
        </section>

        {/* Best Insructor section starts */}
        <section>
            <div className='flex flex-col md:flex-row justify-center items-center bg-[#387c78] text-white'>
                <div className=' flex-1 p-20'>
                    <h1 className='text-6xl font-bold mb-4'>Best Instructor</h1>
                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo provident, rem culpa facilis deserunt qui reiciendis soluta laborum voluptate illum!</p>
                    <button className='py-2 px-10 rounded-sm bg-white text-[#387c78]'>
                        Read More
                    </button>
                </div>
                <div className='flex-1'>
                    <img src={SectionBg2} alt="" />
                </div>
            </div>
        </section>
        {/* Best Instructor section ends */}

        {/* New Experience Section Starts */}
        <section>
            <div className='flex flex-col md:flex-row justify-center items-center p-20 text-[#387c78]'>
                <div className='flex-1'>
                    <img src={SectionBg3} alt="" />
                </div>
                <div className='flex-1 p-10'>
                    <h1 className='text-5xl font-bold mb-4'>New Experience</h1>
                    <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque corrupti velit, adipisci voluptas sapiente accusamus eligendi harum labore maxime!</p>
                    <button className='py-2 px-10 rounded-sm bg-[#387c78] text-white'>
                        Read More
                    </button>
                </div>
            </div>
        </section>
        {/* New Experience Section Ends */}

        {/* Pricing Section Starts */}
        <section>
            <div className='flex flex-col justify-center items-center p-20 bg-[#387c78] text-white'>
                <div className='max-w-[640px] text-center mb-10'>
                    <h1 className='text-6xl font-bold mb-4'>Pricing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, temporibus sequi! Rem eligendi molestias quaerat.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-around items-center md:space-x-10 space-y-6 md:space-y-0 text-[#387c78]'>
                    <div className='flex flex-col justify-center items-center text-center bg-[#e2f5f3] rounded-md p-8'>
                        <span className='text-2xl font-semibold mb-2'>NewBie Class</span>
                        <span className='text-2xl font-semibold mb-2'>$00.00</span>
                        <img src={CardImg} alt="" className='h-28' />
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur.</p>
                        <button className='font-bold bg-[#387c78] text-white py-2 px-6 rounded-sm'>
                            Register Now
                        </button>
                    </div> 
                    <div className='flex flex-col justify-center items-center text-center bg-[#e2f5f3] rounded-md p-8'>
                        <span className='text-2xl font-semibold mb-2'>Advnce Class</span>
                        <span className='text-2xl font-semibold mb-2'>$00.00</span>
                        <img src={CardImg} alt="" className='h-28'/>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur.</p>
                        <button className='font-bold bg-[#387c78] text-white py-2 px-6 rounded-sm'>
                            Register Now
                        </button>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center bg-[#e2f5f3] rounded-md p-8'>
                        <span className='text-2xl font-semibold mb-2'>Expert Class</span>
                        <span className='text-2xl font-semibold mb-2'>$00.00</span>
                        <img src={CardImg} alt="" className='h-28'/>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur.</p>
                        <button className='font-bold bg-[#387c78] text-white py-2 px-6 rounded-sm'>
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
        {/* Pricing Section Ends */}

        {/* Trainer Devandra section starts */}
        <section>
            <div className='flex flex-col justify-center items-center text-center text-[#387c78] py-16 px-20'>
                <div className='flexl justify-center items-center '>
                    <div className='flex flex-col  rounded-full overflow-hidden border-[#9bd4d0] border-4 shadow-2xl shadow-[#87bdb8] mb-10 h-64 w-64 md:h-72 md:w-72'>
                        <img src={Sectioncard1} alt="" />
                    </div>
                </div>
                <div className='max-w-[640px] '>
                    <p className='text-xl mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quaerat ab odit praesentium id facere et excepturi mollitia, quasi iste. Minus beatae placeat quo aliquam obcaecati deserunt dignissimos facilis cum?</p>
                    <h2 className='text-4xl font-bold'>Trainer Devandra</h2>
                </div>
            </div>
        </section>
        {/* Trainer Devandra section ends */}

        {/* Subscrbe section starts */}
        <section>
            <div className='flex flex-col justify-center items-center text-center text-white bg-[#387c78] p-20'>
                <h1 className='text-5xl font-bold mb-4'>Dont Miss Our Updates</h1>
                <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam culpa maiores quas enim. Aperiam odit enim ea voluptatum!</p>
                <div className='flex flex-col md:flex-row '>
                    {/* <input type="email" placeholder='Your Email' className='px-6 py-0 md:min-w-96'/>
                    <button className='bg-[#e2f5f3] text-[#387c78] font-bold py-4 px-8'>
                        Subscribe
                    </button> */}
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        className="bg-white text-black rounded-l-full py-4 px-16" 
                    />

                    <button className="bg-red-600 text-white py-4 px-10 rounded-r-3xl font-bold">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </section>
        {/* Subscrbe section ends */}

        
    </div>
  )
}
export default LandingPage