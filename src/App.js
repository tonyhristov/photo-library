import React, { useState } from 'react'
import UserContext from './context'

const App = (props) => {
   const [userState, setUserState] = useState(null)

   const user = (user) => {
      setUserState(user)
   }

   return (
      <UserContext.Provider value={{ userState, user }}>
         {props.children}
      </UserContext.Provider>
   )
}

export default App
