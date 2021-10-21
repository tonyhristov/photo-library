const getImages = async (query) => {
   const promise = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=16&client_id=rwaJ3GgyP-TaInYs4_feYcsKsk2dEqZYkch40j16XSQ`,
      {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      }
   )
   const favorites = await promise.json()

   return favorites
}

export default getImages
