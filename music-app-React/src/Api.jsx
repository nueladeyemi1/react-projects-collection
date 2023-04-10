import React, {useState ,useEffect} from 'react'
import { CLIENT_ID, CLIENT_SECRET } from './details';

const Api = () => {

    const [accessToken, setAccesToken] = useState('')

      const authParameter = {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      };

      const spotifyApi = async function () {
          const data = await fetch(
            "https://accounts.spotify.com/api/token",
            authParameter
          );
          const response = await data.json() 

          setAccesToken(response.access_token);

          
   
      };

    useEffect(()=>{
      spotifyApi()

      console.log(accessToken);
    },[])


  return (
    <div>Api</div>
  )
}

export default Api