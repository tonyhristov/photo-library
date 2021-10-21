import React from 'react'
import styled from '@emotion/styled'

const HeaderText = styled.h3`
   float: right;
   margin-right: 15px;
   margin-top: 25px;
`

const PageWrapper = (props) => {
   return (
      <div>
         <header>
            <HeaderText>{props.user}</HeaderText>
            {}
         </header>
         <div>{props.children}</div>
      </div>
   )
}

export default PageWrapper
