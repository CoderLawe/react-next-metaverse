import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis"
import Message from "./Message";
import SendMessage from "./SendMessage";
// Only showing messages from the last 15 minutes

const MINS_DURATION  = 60
function Messages() {


    const { user } = useMoralis();
    const endOfMessagesRef = useRef(null);
    const { data, loading, error } = useMoralisQuery(
        'Messages',
        query => query.ascending('createdAt').greaterThan(
            'createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)),

            [],
            {
                live:true,
            }
        // query lets us have any kind od sorting mechanism when fetching the data
    )
    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis  variant="dark" style={{ marginLeft:"auto",  marginRight:"auto"}}/>
            </div>

            <div className="space-y-10 py-4 px-24">
                {/* Render each message */}
                {data.map(message => (
                    <Message key={message.id} message={message} />
                ))}
            </div>

            <div className="flex justify-center">
                {/* Send message */}
                <SendMessage endOfMessagesRef={endOfMessagesRef}/>
            </div>

            <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
                <p>You're up to date {user.getUsername()}!</p>
            </div>
        </div>
    )
}

export default Messages
