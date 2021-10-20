import React from 'react'
import Login from '../components/login/login'
import PageWrapper from '../wrappers/pageWrapper'

const Home = (props) => {
   return (
      <PageWrapper user={props.user.userState}>
         <Login />
      </PageWrapper>
   )
}

export default Home
