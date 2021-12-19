import { useMoralis } from "react-moralis";
import { useState, useContext } from "react";
import { ClickedContext } from "../context/PageContext";

function ChangeUsername(){
    const [clicked, setClicked] = useContext(ClickedContext);

    const { setUserData, isUserUpdating, userError, user} = useMoralis();
    
    const setUsername = () => {
        const username = prompt(`Enter your new username (current: ${user.getUsername()})`)

        if(!username) return;
        
        setUserData({
            username,
        });
    }
    return (
        <div className="text-sm absolute top-5 right-5">
            
            <button 
            disabled = {isUserUpdating}
            onClick={() => setClicked(true)}
            className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white text-black font-serif transform transition-all duration-500 ease-out rounded-lg p-2 md:p-5 shadow-md font-bold  mt-10">Change  username</button>
        </div>
    )
}

export default ChangeUsername
