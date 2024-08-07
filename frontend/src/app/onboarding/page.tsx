'use client'
import React, { useState } from 'react'
import { Button } from '@mantine/core'
import DonorHands from '../../../public/icons/DonorHands'
import CampaignFlag from '../../../public/icons/CampaignFlag'

const page = () => {
    const [role,setRole] = useState('');
  return (
    <div className='flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-secondaryDarkColor text-2xl font-semibold'>I want to register as...</h1>
        <div className='flex flex-wrap gap-4'>
            <button className={`flex flex-col items-center gap-1 transition-all transform hover:text-white hover:bg-secondaryColor ${role==='Donor' ? 'bg-secondaryColor text-white' : 'text-secondaryColor border-secondaryColor'}  border rounded-lg px-6 py-3`} 
            onClick={()=>{setRole('Donor')}}>
                <DonorHands />
                <p>Donor</p>
            </button>
            <button className={`flex flex-col items-center gap-1 transition-all transform hover:text-white hover:bg-secondaryColor ${role==='NGO' ? 'bg-secondaryColor text-white' : 'text-secondaryColor border-secondaryColor'} border rounded-lg px-6 py-3`}
            onClick={()=>setRole('NGO')}>
                <CampaignFlag />
                <p>NGO</p>
            </button>
        </div>
        
        {role !==  '' &&
        <Button variant="filled" color="#065471" size="lg" radius="md">
            Continue as {role}
        </Button>
        }

    </div>
  )
}

export default page