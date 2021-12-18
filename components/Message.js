import { useMoralis } from "react-moralis";
import Avatar from './Avatar';
import TimeAgo from "react-timeago";

function Message({message}) {
    
      
    const { user } = useMoralis();
    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
    return (
        <div className={`flex items-end space-x-2 relative ${
            isUserMessage && "justify-end"
        }`}>
            <div className={`relative h-8 w-8 ${
                isUserMessage && "order-last ml-2"
            }`}>
                <Avatar username ={message.get("username")}/>
            </div>
            <div className={`flex space-x-4 p-3 rounded-lg ${
                isUserMessage ? "rounded-br-none bg-gradient-to-r from-blue-900 to-black text-white border-2 border-white bg-opacity-75 font-serif":"rounded-bl-none bg-gradient-to-l from-yellow-700 to-black text-black font-serif border-black bg-opacity-75"
            }`}>
                <p>{message.get("message")}</p>
            </div>
            {/* Timeago stamp */}
            <TimeAgo  

            className={`text-[10px] italic text-gray-400 `}
            datetime={message.createdAt}/>
            <p className={`absolute -mb-5 text-xs ${isUserMessage ? "text-pink-300": "text-blue-400"}`}>{message.get("username")}</p>
        </div>
    )
}

export default Message
