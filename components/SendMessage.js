import { useState } from "react"
import { useMoralis } from "react-moralis"
import { MailOpenIcon } from "@heroicons/react/solid"
function SendMessage({ endOfMessagesRef }) {
    const { user, Moralis } = useMoralis()
    const [message, setMessage] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()

        if(!message) return;
        
        // Creating a table in the database for messages
        const Messages = Moralis.Object.extend('Messages')
        const messages = new Messages()

        messages.save({
            message:message,
            username:user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then((message) => {
                // The object was saved succesfully
        }),
        (error) => {
            console.log(error.message);
        }
        endOfMessagesRef.current.scrollIntoView({ behavior:"smooth" })
        setMessage('');
    }    
    return (
            <form className="flex justify-center  rounded-lg fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl border-2 border-transparent hover:border-green-700 transform transition-all duration-500 ease-out">
                <input className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5" placeholder={`Enter a Message ${user.getUsername()}`} value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"/>

                <MailOpenIcon className="h-8 cursor-pointer hover:text-fuchsia-900 text-blue-500"onClick={sendMessage}  />
            </form>
    )
}

export default SendMessage
