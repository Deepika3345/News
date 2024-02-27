import React, { useContext, useEffect } from 'react'
import NewsContext from '../Context/NewsContext'
import PoliticsNews from '../Components/PoliticsNews'
import { FetchNews } from '../Context/NewsAction'
import Carousel from './Carousel'

const Politics = () => {


  const { allnews, dispatch } = useContext(NewsContext)

  const getNews = async () => {
    const allnews = await FetchNews("Politics")
    dispatch({
      type: "GET_NEWS",
      payload: allnews,
    })
  }

  useEffect(() => {
    getNews("Politics")

  }, [])
  return (

    <>
    <Carousel />
      <h1 className="text-center display-1 my-2">Politics  News</h1>
      


      <div className='row' >
        {
          allnews.map((news, index) =>
            (<PoliticsNews key={index} news={news} />))
        }
      </div>

    </>

  )
}

export default Politics