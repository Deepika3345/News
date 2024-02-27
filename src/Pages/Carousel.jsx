import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleControlsNoTouching" className="carousel slide" >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://img.freepik.com/premium-photo/sample-news-website-shown-digital-tablet_746318-250.jpg?w=2000"
                     className="d-block w-100 h-60" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://media.istockphoto.com/id/456536851/photo/news-on-digital-tablet.jpg?s=612x612&w=0&k=20&c=g9JTLyG436T8xZqVsykOdT6Bb9xD8dgphkqybq-QrC8=" 
                    className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/photos-premium/tablette-site-actualites-pile-journaux-tous-contenus-sont-constitues_746318-2264.jpg?w=2000" 
                    className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel