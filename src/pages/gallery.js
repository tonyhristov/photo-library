import React, { useState, useCallback, useEffect, useContext } from 'react'
import UserContext from '../context'
import { useHistory } from 'react-router'
import styled from '@emotion/styled'
import PageWrapper from '../wrappers/pageWrapper'
import getImages from '../utils/getImages'

const Container = styled.div`
   display: inline-grid;
   justify-content: center;
   align-items: flex-start;
   grid-template-columns: 400px 400px 400px 400px;
   grid-template-rows: 450px 450px 450px 450px;
   grid-column-gap: 50px;
   margin-left: 50px;
`

const Image = styled.img`
   width: 350px;
   height: 250px;
   border-radius: 50px;
`

const Exit = styled.button`
   margin-top: 25px;
   margin-left: 15px;
   background-color: red;
   border: none;
   color: white;
   padding: 7px 15px;
   text-align: center;
   text-decoration: none;
   font-size: 16px;
   cursor: pointer;
`

const Search = styled.input`
   width: 550px;
   height: 35px;
   font-size: 23px;
   margin-top: 5%;
   margin-left: 33%;
   margin-bottom: 5%;
`

const Gallery = (props) => {
   const [images, setImages] = useState([])
   const [search, setSearch] = useState('')
   const context = useContext(UserContext)
   const history = useHistory()

   const fetchImage = useCallback(async () => {
      const fetchImages = await getImages(search)
      setImages(fetchImages.results)
   })

   const renderImages = () => {
      return images.map((image) => {
         const img = image.urls.small
         const title = image.alt_description
         const description = image.description ? image.description : search

         const descriptionLength = description ? description.length : ''
         return (
            <div>
               <Image src={img} />
               <h3>{title}</h3>
               <p>
                  {descriptionLength > 200
                     ? `${description.substring(0, 200)}...`
                     : description}
               </p>
            </div>
         )
      })
   }

   const handleClick = () => {
      context.user(null)
      history.push('/')
   }

   useEffect(() => {
      fetchImage()
   }, [search])

   return (
      <PageWrapper user={props.user.userState}>
         <Exit onClick={handleClick}>Return to Login Page</Exit>
         <div>
            <Search
               onChange={(e) => {
                  setSearch(e.target.value)
               }}
            />
         </div>
         <Container>{renderImages()}</Container>
      </PageWrapper>
   )
}

export default Gallery
