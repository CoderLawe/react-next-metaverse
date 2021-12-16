import Image from 'next/image';
import { useState } from 'react';
import { useMoralis } from "react-moralis";

function LoadingScreen() {
    const [clicked, setClicked] = useState(false);
    const { isAuthenticated, logout } = useMoralis();

    return (
    <div className="bg-black relative">

           
        <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center mt-28 text-white space-y-4 ">

            {/* Papafam Logo */}
            <div className="flex justify-center -mt-12">
                <button onClick={logout} className="bg-white border-2 border-white text-black hover:bg-black hover:text-white hover:border-black font-serif transform transition-all duration-500 ease-out rounded-lg p-3 shadow-md font-bold  -mr-[1000px] ">Logout</button>

            </div>

           
            <div className="bg-black bg-opacity-75 p-32">
                <h2 className="text-4xl font-serif text-gray-200">Welcome</h2>
                <h5 className="font-serif text-gray-300 text-3xl">To the future</h5>
                {/* Login button */}
                <div className="flex justify-center">
                    <button className="bg-black border-2 border-black hover:bg-white hover:text-black font-serif transform transition-all duration-500 ease-out rounded-lg p-5 shadow-md font-bold animate-pulse mt-10">Get Started</button>

                </div>
            </div>
           
        </div>

        <div className="w-full h-screen">
            {/* Login Form */}
            
            <Image src="https://cdn.discordapp.com/attachments/817048198022430761/921000189026766848/pexels-bruno-thethe-1910236.jpg" layout="fill" objectFit="cover"/>

            </div>
    </div>

    )
}

export default LoadingScreen
