import React,{useEffect,useState} from 'react'

type Photo ={
  albumId: BigInteger
  id: BigInteger
  title: String
  url: String
  thumbnailurl: String
}


const PhotosComponents = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [photos, setPhotos] = useState<Photo[]>([])
    

    useEffect(() => {
        const getData = async () => {
          const res  =  await fetch('https://jsonplaceholder.typicode.com/photos')
          const responseJson:Photo[] = await res.json()

          setPhotos(responseJson) 
          setIsLoading(false)
        }
        getData()
    },[])

  return (
    <>
      {isLoading && <div>please wait data is loading</div>}
      {!isLoading && <div>
          {photos.map((photo:Photo, index:number) => <div key={`photos-${index}`}>
            {photo.title}
          </div>)}
      </div>}
    </>
  )
}

export default PhotosComponents