import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';
import Messages from '../components/Messages';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { UserContext, ClickedContext, LoginNameContext } from "../context/PageContext";
// import ClickedContext from "../context/PageContext";
import Image from "next/image";
import { useContext } from "react";

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,


}
export default function Home() {

  const { isAuthenticated, logout, setUserData, isUserUpdating, userError, user } = useMoralis();
  const [name, setName] = useContext(UserContext);

  const [clicked, setClicked] = useContext(ClickedContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setClicked(false);
  };

  const setUsername = () => {

    if(!name) return;
    const username = name;
    setUserData({
        username,
    });
}
  if(!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll ">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="max-w-screen  mx-10">
        <Header />

        {/* Messages */}

        <Image objectFit="cover" src="https://cdn.discordapp.com/attachments/817048198022430761/921840978397126757/wp9928080-metaverse-wallpapers.png" layout="fill" className="-z-0 bg"/>


        <Messages />

      </div>

      <div>
        

       <Modal 
       open={clicked}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
       >
         <Box 
         sx={style}
         className="bg-gradient-to-r from-blue-500 to-black  bg-opacity-90 focus:outline-none pb-32"
         >
          <div className="block">
            <div className="flex justify-center">
              <div className="flex-col space-y-4">
              <h5 className="font-serif font-bold  text-gray-300">Change your name here!</h5>
              <div className="flex justify-center">
                <input value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent p-2 rounded-full text-center font-serif placeholder-white focus:outline-none border-2 text-white focus:border-white" placeholder="Enter something cool"/>
              </div>
            </div>
             
              </div>
              

             


              <div className="flex justify-center mt-4">
                <button type="submit" className="bg-white text-black hover:bg-black hover:text-white transform transition-all duration-500 ease-out p-2" onClick={setUsername}>Submit</button>
              </div>
          </div>
         </Box>

       </Modal>
      </div>
    
    {/* <LoadingScreen /> */}
    {/* <button onClick={logout}>Logout</button> */}
    </div>
  )
}
