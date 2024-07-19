import CampaignFlag from '../../../public/icons/CampaignFlag'
import VerifyCheck from '../../../public/icons/VerifyCheck'
import verifyNGOImage from '../../../public/assets/landingCards/verifyNGO.jpeg'
import startCampaignImage from '../../../public/assets/landingCards/startCampaign.jpeg'
import { StaticImageData } from 'next/image'

export type OverviewCardDataTypes = {
    heading: JSX.Element;
    description: string;
    refLink: string;
    coverImage: StaticImageData;
}
export const overviewCardsData = [
    {
        heading: 
        <div className='flex flex-row gap-2 items-center'>
            <VerifyCheck/>
            <h1 className="text-2xl font-bold text-primaryColor">Verify NGOs before donating</h1>
        </div>,
        description:'Ensure your charitable contributions make a real impact by verifying NGOs before donating. Our decentralized platform leverages blockchain technology to provide transparent, immutable records of NGO credentials and activities. This allows donors to make informed decisions based on verified information, enhancing trust and accountability in the charitable sector.',
        refLink:'/how-to-donate',
        coverImage: verifyNGOImage
    },
    {
        heading:
        <div className='flex flex-row gap-2 items-center'>
            <CampaignFlag/>
            <h1 className="text-2xl font-bold text-primaryColor">Register as NGO and start campaign</h1>
        </div>,
        description:"Join our decentralized platform to increase your organization's visibility, credibility, and reach. By registering, you gain access to a global network of donors who value transparency and accountability. Our blockchain-based system allows you to showcase your mission, achievements, and financial integrity to a discerning donor base.",
        refLink:'/how-to-start-a-campaign',
        coverImage: startCampaignImage
    }
];