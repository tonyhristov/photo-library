import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../context'
import GoogleLogin from 'react-google-login'
import styled from '@emotion/styled'

const Wrapper = styled.div`
   margin: auto;
   margin-left: 47%;
   margin-top: 25%;
`

const Login = () => {
   const context = useContext(UserContext)
   const history = useHistory()

   const responseGoogle = (response) => {
      context.user(response.profileObj.name)
      history.push('/gallery')
   }

   return (
      <Wrapper>
         <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText='Log in'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
         />
      </Wrapper>
   )
}

export default Login
