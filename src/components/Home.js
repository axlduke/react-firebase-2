import React from 'react'
import Sidebar from './Sidebar'

import wall from '../assets/wall.jpg'

const Home = () => {
    return (
        <div className='bg-gray-100 w-screen h-screen'>
            <Sidebar />
            <div className='absolute left-64 top-5 mx-5'>
                <div className='flex flex-col w-[1060px]'>
                    <div>
                        <img 
                            src={wall} 
                            alt='bg_image'
                            className='w-96 h-52 lg:w-[1060px] 2xl:w-[1200px] lg:h-72 rounded-lg shadow-lg'
                            />
                    </div>
                    <div className='flex flex-row gap-2 mt-5'>
                        <div className='text-justify px-5 rounded-lg border border-gray-100 bg-white shadow-lg'>
                            <div className='flex justify-center'>
                                <h1 className='mt-2'>MISSION</h1>
                            </div>
                            <p className='my-3'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, rerum! Quidem repellat voluptas eaque, ipsum, molestias quos exercitationem cupiditate quis ad debitis a saepe molestiae animi beatae unde, accusantium quae?
                            </p>
                        </div>
                        <div className='text-justify px-5 rounded-lg border border-gray-100 bg-white shadow-lg'>
                            <div className='flex justify-center'>
                                <h1 className='mt-2'>MISSION</h1>
                            </div>
                            <p className='my-3'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, rerum! Quidem repellat voluptas eaque, ipsum, molestias quos exercitationem cupiditate quis ad debitis a saepe molestiae animi beatae unde, accusantium quae?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home