import React, { useState, useCallback, useEffect } from 'react'
import styled from '@emotion/styled'
import PageWrapper from '../wrappers/pageWrapper'
import getImages from '../utils/getImages'

const Container = styled.div`
   display: inline-grid;
   justify-content: center;
   align-items: center;
   grid-template-columns: auto auto auto auto;
   grid-template-rows: auto auto auto auto;
   grid-column-gap: 50px;
   margin-left: 50px;
`

const Image = styled.img`
   width: 350px;
   height: 250px;
   border-radius: 50px;
`

const Gallery = (props) => {
   const [images, setImages] = useState([])
   const [search, setSearch] = useState('')

   const fetchImage = useCallback(async () => {
      const fetchImages = await getImages(search)
      setImages(fetchImages.results)
   })

   const renderImages = () => {
      return images.map((image) => {
         const img = image.urls.small
         const description = image.description

         return (
            <div>
               <Image src={img} />
               <h3>{description}</h3>
               <p>{description}</p>
            </div>
         )
      })
   }

   useEffect(() => {
      fetchImage()
   }, [search])

   console.log(search)
   return (
      <PageWrapper user={props.user.userState}>
         <input
            onChange={(e) => {
               setSearch(e.target.value)
            }}
         />
         <Container>{renderImages()}</Container>
      </PageWrapper>
   )
}

export default Gallery
