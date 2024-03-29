import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { HiOutlineHome } from 'react-icons/hi'
import { BsNewspaper } from 'react-icons/bs'
import { FaUsers, FaUserGraduate } from 'react-icons/fa'
import classNames from 'classnames'

const links = [
    { name: 'Home', icon: <HiOutlineHome />, link: '/' },
    { name: 'Students List', icon: <FaUsers />, link: '/student_list' },
    { name: 'Faculty List', icon: <FaUserGraduate />, link: '/faculty_list' },
    { name: 'New & Events', icon: <BsNewspaper />, link: '/annoucement_list' },
];

const Sidebar = () => {

    const [activeLink, setActiveLink] = useState('/')

    return (
        <div className='absolute bg-gray-800 w-64 h-screen'>
            <div className='py-5 ml-5 text-lg font-bold text-[#7551FF]'>
                Oas South Central School
            </div>
            <div className='flex flex-col'>
                {links.map((item, index) => (
                    <Link key={index} to={item.link} className={classNames('flex items-center text-white pl-5 py-3', { 'bg-gray-700 border-r-8 border-[#7551FF] text-[#886aff]': setActiveLink === item.link,})} >
                        <span className="mr-3">{item.icon}</span>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar