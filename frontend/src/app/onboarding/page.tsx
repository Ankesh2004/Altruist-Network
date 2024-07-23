import React from 'react'
import DonorHands from '../../../public/icons/DonorHands'
import CampaignFlag from '../../../public/icons/CampaignFlag'

const page = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center p-4 h-full'>
        <h1 className='text-secondaryDarkColor text-2xl font-semibold'>I want to register as...</h1>
        <div className='flex flex-wrap gap-4'>
            <button className='flex flex-col items-center gap-1 transition-all transform hover:text-white hover:bg-secondaryColor text-secondaryColor border border-secondaryColor rounded-lg px-6 py-3'>
                <DonorHands />
                <p>Donor</p>
            </button>
            <button className='flex flex-col items-center gap-1 transition-all transform hover:text-white hover:bg-secondaryColor text-secondaryColor border border-secondaryColor rounded-lg px-6 py-3'>
                <CampaignFlag />
                <p>NGO</p>
            </button>
            
        </div>
    </div>
  )
}

export default page