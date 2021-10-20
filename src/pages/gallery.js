import React from 'react'
import PageWrapper from '../wrappers/pageWrapper'

const Gallery = (props) => {
   return (
      <PageWrapper user={props.user.userState}>
         <h1>Gallery</h1>
      </PageWrapper>
   )
}

export default Gallery
