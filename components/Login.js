import Image from "next/image";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Typewriter from "typewriter-effect"
import {  LoginNameContext } from "../context/PageContext";
import { useContext, useRef } from "react";
import { useSpring, useTransition, animated, to } from '@react-spring/web'


function Login() {
    const n = useRef(0);

    const styles = useSpring({
        loop: () => 5 > n.current++,
        from :{rotateZ : 0},
        to :{rotateZ : 90},

    })
    const { authenticate } = useMoralis();
    const [loginName, setLoginName] = useContext(LoginNameContext);
   
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
        });
      }, []);

    return (
        <div className="bg-black relative">

           
        <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center mt-28 text-white space-y-4 ">

            {/* Papafam Logo */}
            {/* <div className="flex justify-center -mt-12">
                <button onClick={logout} className="bg-white border-2 border-white text-black hover:bg-black hover:text-white hover:border-black font-serif transform transition-all duration-500 ease-out rounded-lg p-3 shadow-md font-bold  -mr-[1000px] ">Logout</button>

            </div> */}


            <div className="bg-black bg-opacity-50 px-20 pb-10 pt-10">

                <div className=" flex justify-center">
                <animated.div 
                        style={{
                        
                            ...styles,
                        }
                        }
                    
                        >
                    <Image className="rounded-full" objectFit="cover" src="https://links.papareact.com/3pi" layout="fill"/>
                    </animated.div>
                
                    <div className="flex-col space-y-4 items-center text-5xl font-serif text-gray-200">
                    <div className="bg-gradient-to-r from-blue-800 to-black rounded-full p-2">
                        <Typewriter 
                    onInit ={(typewriter) =>{
                        typewriter.
                        typeString("Welcome") 
                        .pauseFor(5000)
                        .start()
                }}
                />
                </div>
                <div className="bg-gradient-to-l from-blue-800 to-black rounded-lg p-2">
               <Typewriter 
              onInit ={(typewriter) =>{
                typewriter.
                pauseFor(3000)
                .typeString("To the future")
                .pauseFor(5000)
                
                .start()
              }}
            />
            </div>
                        {/* <h2 data-aos="fade-in" data-aos-duration="3000"className="text-5xl font-serif text-gray-200">Welcome</h2>
                        <h5 className="font-serif text-gray-300 text-3xl border-b border-blue-500">To the future!</h5> */}
                    </div>
                   

                </div>
                     <div className="flex justify-center">
                        <div className="flex-col space-y-4 items-center pt-10">
                            <input value={loginName} onChange={(e) => setLoginName(e.target.value)}className="bg-transparent border-2 rounded-full focus:outline-none border-white text-gray-200 placeholder-white py-2 px-3"placeholder="Enter a name"/>
                        </div>
               
                     </div>
              
            
                {/* Login button */}
                <div className="flex justify-center">
                    <button onClick={authenticate} className="bg-white text-black border-2 border-black hover:bg-black hover:text-white font-serif transform transition-all duration-500 ease-out rounded-lg p-5 shadow-md font-bold animate-pulse mt-10">Get Started</button>

                </div>
            </div>
           
        </div>

        <div className="w-full h-screen">
            {/* Login Form */}
            
            <Image objectFit="cover" src="https://cdn.discordapp.com/attachments/817048198022430761/921840978397126757/wp9928080-metaverse-wallpapers.png" layout="fill" className="-z-0 bg"/>

            </div>
    </div>
    )
}

export default Login
