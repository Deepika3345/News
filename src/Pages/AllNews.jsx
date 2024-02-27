import React, { useContext, useEffect } from 'react'
import HomeNews from '../Components/HomeNews'
import NewsContext from '../Context/NewsContext'
import { FetchNews } from '../Context/NewsAction'
import Weather from '../Components/Weather'
import Carousel from './Carousel'

const AllNews = () => {
    const { allnews, dispatch } = useContext(NewsContext)

    const getNews = async () => {
        const allnews = await FetchNews("everything")
        dispatch({
            type: "GET_NEWS",
            payload: allnews,
        })
    }

    useEffect(() => {
        getNews("everything")

    }, [])

    return (
        <>
            {/* <Weather/> */}
            <Carousel />



            <h1 className="display-1 text-center">Top News</h1>
            <div className='column' >
                {
                    allnews.map((news, index) =>
                        (<HomeNews key={index} news={news} />))
                }
            </div>
        </>
    )
}

export default AllNews