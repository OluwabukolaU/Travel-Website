import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaPinterest,
    FaInstagram
}
    from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-gray-100 py-16'>
            <div className='max-w-[1248] mx-auto flex flex-col px-4'>
                <div className='sm:flex text-center justify-between items-center'>
                    <h1>SEASIDES.</h1>
                    <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                        <FaFacebook className='icons' />
                        <FaTwitter className='icons' />
                        <FaYoutube className='icons' />
                        <FaPinterest className='icons' />
                        <FaInstagram className='icons' />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <ul className='lg:flex'>
                        <li>About</li>
                        <li>Partnership</li>
                        <li>Careers</li>
                        <li>Adversitement</li>
                    </ul>
                    <ul className='text-right lg:flex'>
                        <li>Home</li>
                        <li>Destination</li>
                        <li>Travel</li>
                        <li>View</li>
                        <li>Book</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Footer