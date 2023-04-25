import React from 'react'
import { userInputs } from '../../formSource'

import Sidebar from '../Sidebar'
import { data } from 'autoprefixer'

const ViewNews = () => {

    // const docRef = doc(db, 'student', 'iVUk7muJ2IlBIqZ4eJrO')
    // getDoc(docRef)
    //     .then((doc) => {
    //         console.log(doc.data(), doc.id)
    // })
    

    return (
        <div>
            <Sidebar/>
            <div className=" 2xl:ml-14 h-screen">
                <div className="min-h-screen p-6 flex items-center justify-center">
                    <div className="container max-w-screen-lg mx-auto">
                        <div>
                        <h2 className="font-semibold text-xl text-gray-600">Student Information</h2>
                        {/* <p className="text-gray-500 mb-6">Form is to add new Student Information.</p> */}
                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                                <div className=''>
                                    <img src={
                                            'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png'
                                        } 
                                        alt='profile'
                                        className='w-72 aspect-square border border-black rounded-md'/>
                                    {/* <img src={
                                            file ? URL.createObjectURL(file) : 'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png'
                                        } 
                                        alt='profile'
                                        className='w-72 aspect-square border border-black rounded-md'/> */}
                                </div>
                            </div>
                            <div class="lg:col-span-2 lg:mt-10 2xl:mt-10">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    {userInputs.map((input) => (
                                        <div className="md:col-span-2" key={data[input.id]}>
                                            <label>{input.label}</label>
                                            <input  
                                                id={input.id}
                                                type={input.type} 
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                placeholder={input.placeholder} 
                                                value={input.value}
                                                />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewNews