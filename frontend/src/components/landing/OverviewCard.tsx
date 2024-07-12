import { OverviewCardDataTypes } from "@/data/landing/overviewCardsData"
import ArrowRight from "../../../public/icons/ArrowRight"

const OverviewCard = (data:OverviewCardDataTypes) => {
  return (
    <div className="flex flex-col bg-secondaryDarkColor">
        <h1 className="text-primaryColor">
            {data.heading}
        </h1>
        <p>
            {data.description}
        </p>
        <button className="flex flex-row gap-1 bg-primaryColor shadow-md shadow-primaryColor">
            <p>Know More</p>
            <ArrowRight/>
        </button>
    </div>
  )
}

export default OverviewCard