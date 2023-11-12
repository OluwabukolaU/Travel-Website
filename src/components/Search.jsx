import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
    return (
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h2 className='py-4'> LUXURY INCLUDED FOR TWO PEOPLE</h2>
                    <p>
                        Escape to a seaside resort with our luxury vacation for two. Experience
                        opulence by the ocean at seaside Resort, where gourmet dining and spa
                        treatments await. Enjoy romantic moments with sunset beach walks and
                        private dinners by the sea. Explore pristine beaches and vibrant
                        cultures worldwide. Book now for an unforgettable seaside escape.
                        Stroll hand in hand on the beach, witnessing breathtaking sunsets,
                        and relish private candlelit dinners right by the sea. Your romantic
                        journey will be filled with cherished moments that you'll treasure forever.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button><RiCustomerService2Fill size={50}/></button>
                    
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className=''> ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button><MdOutlineTravelExplore size={50}/></button>
                    
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className=''> ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='border text-center'>
                    <p className='pt-2'>GET  AN ADDITIONAL 10% OFF</p>
                    <p className='py-4'> 12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
                </div>
                <form className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label>Destination</label>
                        <select className='border rounded-md p-2'>
                            <option>Borabora</option>
                            <option>Maldives</option>
                            <option>Key West</option>
                            <option>Santorini</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-4'> 
                        <label>Check-In</label>
                        <input className='border rounded-md p-2' type='date' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label>Check-Out</label>
                        <input className='border rounded-md p-2' type='date' />
                    </div>
                    <button className='w-full'>Rates & Avaliabilities</button>
                </form>
                
            </div>

        </div>
    )
}

export default Search