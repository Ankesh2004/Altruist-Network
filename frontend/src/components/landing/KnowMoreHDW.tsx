import Link from "next/link";
import ArrowRight from "../../../public/icons/ArrowRight";

const KnowMoreHDW = () => {
  return (
    <div className="p-2 border shadow-md shadow-primaryColor underline text-primaryColor font-bold hover:text-yellow-600 text-lg flex items-center justify-center border-primaryColor text-center sm:max-w-[60%] max-w-[80%] bg-secondaryColor rounded-2xl">
      <Link
        href="/how-decntralization-works"
        className="flex flex-row"
      >
        Know More about how decentralization works on this platform
        <ArrowRight/>
      </Link>
    </div>
  );
};

export default KnowMoreHDW;
