// import { useState, useEffect } from 'react';

async function verifyToken(token) {

    console.log('Inside Verify Token function')
//   const [isValid, setIsValid] = useState(false);


    try{
        const res = await fetch('http://127.0.0.1:5000/api/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token // Include the token in the Authorization header
          }
        })
        // console.log('HAHA')
        const r = await res.json()

        // console.log(r)
        // console.log(r.payload.userId)

        return{
          valid: r.valid,
          _id: r.payload.userId
        }
        // console.log(r)
      }catch(e){
        return{
          valid: false
        }
      }
}

export default verifyToken;