import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  
  if(!isAuthenticated) return <Login />;
  return (
    <div className="">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <LoadingScreen />
    {/* <button onClick={logout}>Logout</button> */}
    </div>
  )
}
