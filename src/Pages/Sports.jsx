import React, { useContext, useEffect } from 'react'
import NewsCard from '../Components/NewsCard'
import NewsContext from '../Context/NewsContext'
import { FetchNews } from '../Context/NewsAction'
// import Weather from '../Components/Weather'
import Carousel from './Carousel'


// import { NewsAction } from '../Context/NewsAction'

const Sports = () => {

  const { allnews, dispatch } = useContext(NewsContext)


  const getNews = async () => {
    const allnews = await FetchNews("Sports")
    dispatch({
      type: "GET_NEWS",
      payload: allnews,
    })
  }

  useEffect(() => {
    getNews()

  }, [])

  return (
    <>
      <Carousel />
      <h1 className="text-center display-1 my-2">Sports</h1>

      <div className='column' >
        {
          allnews.map((news, index) =>
            (<NewsCard key={index} news={news} />))
        }
      </div>
      {/* <div className='row d-flex  '>

       
        <div className="col-md-6 col-sm-12">
          {
            allnews.map((news, index) =>
              (<NewsCard key={index} news={news} />))
          }
        </div>


      </div> */}

    </>
  )
}

export default Sports