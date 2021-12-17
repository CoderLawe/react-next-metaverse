import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  
  if(!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-500">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="max-w-screen  mx-10">
        <Header />

        {/* Messages */}

        <Messages />

      </div>
    
    {/* <LoadingScreen /> */}
    {/* <button onClick={logout}>Logout</button> */}
    </div>
  )
}
