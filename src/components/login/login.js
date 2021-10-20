import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../context'
import GoogleLogin from 'react-google-login'

const Login = () => {
   const context = useContext(UserContext)
   const history = useHistory()

   const responseGoogle = (response) => {
      context.user(response.profileObj.name)
      history.push('/gallery')
   }

   return (
      <div>
         <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText='Log in'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
         />
      </div>
   )
}

export default Login
