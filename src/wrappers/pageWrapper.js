import React from 'react'

const PageWrapper = (props) => {
   return (
      <div>
         <header>
            <h1>{props.user}</h1>
         </header>
         <div>{props.children}</div>
      </div>
   )
}

export default PageWrapper
