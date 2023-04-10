import React, {useState ,useEffect} from 'react'


const Api = () => {
    const CLIENT_ID = "92d64cafcb7748a9a5a7514ba489b4ac";
    const CLIENT_SECRET = "454f33d7b3ef4d918f5bc76c42e6b484";

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