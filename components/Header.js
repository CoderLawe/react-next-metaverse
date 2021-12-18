import { useMoralis } from "react-moralis"
import Image from 'next/image';
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
function Header() {
    const { user } = useMoralis()
    return (
        <div className="sticky top-0 p-5 z-50 bg-black rounded-md bg-opacity-80 shadow-sm text-pink-500 ">
            {/* Left */}
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image className="rounded-full" objectFit="cover" src="https://links.papareact.com/3pi" layout="fill"/>
                </div>

                <div className="col-span-4 text-left lg:text-center">
                    {/* Avatar */}
                    <div className="relative h-32 w-32 lg:mx-auto border-pink-500 bordder-8 drunded-full"> 
                        <Avatar logoutOnPress />
                    </div>
                    {/* Welcome message */}
                    {/* <h1 className="text-3xl">Welcome to the PAPAFAM Metaverse</h1> */}
                    {/* Username */}
                    <h2 className="text-3xl font-serif font-thin truncate text-gray-200">{user.getUsername()}</h2>
                    {/* change username component */}
                    <ChangeUsername />
                </div>
            </div>
          
        </div> 
    )
}

export default Header
