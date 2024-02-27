import React, { useContext, useEffect } from 'react'
import NewsContext from '../Context/NewsContext'
import BusinessNews from '../Components/BusinessNews'
import { FetchNews } from '../Context/NewsAction'
import Carousel from './Carousel'



const Business = () => {

  const { allnews, dispatch } = useContext(NewsContext)

  const getNews = async () => {
    const allnews = await FetchNews("Business")
    dispatch({
      type: "GET_NEWS",
      payload: allnews,
    })
  }

  useEffect(() => {
    getNews("Business")

  }, [])


  return (
    <>
    <Carousel />

      <h1 className="display-1 text-center">Business</h1>
      <div className='column' >
        {
          allnews.map((news, index) =>
            (<BusinessNews key={index} news={news} />))
        }
      </div>
    </>
  )
}

export default Business