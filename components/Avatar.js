import { useMoralis } from "react-moralis";
import Image from 'next/image';
function Avatar({ username, logoutOnPress}) {

    const { user, logout } = useMoralis();
    return <Image 
            className="rounded-full cursor-pointer hover:opacity-75 border-2 border-blue-500 p-3"
            src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`} 
            onClick={() => logoutOnPress && logout()}
            layout="fill"
    />
    // If true then logout
}

export default Avatar
