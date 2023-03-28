// import { useState, useEffect } from 'react';

async function verifyToken(token) {

    console.log('Inside Verify Token function')
//   const [isValid, setIsValid] = useState(false);

    var isValid = false


    try {
        await fetch('http://127.0.0.1:5000/api/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token // Include the token in the Authorization header
          }
        }).then(res=>res.json()).then(data=>{
            console.log(data.payload.email)

            return {
                userID: data.payload.userID,
                verify: true
            }
        })

        // console.log(response, 'RESPONSE FROM VERIFY TOKEN');
      } catch (error) {
        console.error(error,'ERROR IN VERIFY TOKEN');
        return {
            verify:false
        }
      }


  return {

  };
}

export default verifyToken;