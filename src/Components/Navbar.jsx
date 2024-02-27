import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import NewsContext from '../Context/NewsContext'
import { FetchNews } from '../Context/NewsAction'
import CloudIcon from '@mui/icons-material/Cloud';

const Navbar = () => {
  const { dispatch } = useContext(NewsContext)

  const [search, setSearch] = useState("")
  const handleSearch = async (e) => {
    e.preventDefault()
    const allnews = await FetchNews(search)

    dispatch({
      type: "GET_NEWS",
      payload: allnews
    })
    setSearch("")
  }
  return (
    <nav className="navbar navbar-expand-lg  shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/home">Ab-Tak</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active " aria-current="page" to="/">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active " aria-current="page" to="/politics">Politics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
            </li>


          </ul>
          <form className="d-flex  " role="search" onSubmit={handleSearch}>
            <input className="form-control form-input me-2" type="search" placeholder="Search" aria-label="Search"
              value={search} onChange={(e) => setSearch(e.target.value)} />
          </form>
          <Link to='/weather'>   <button className="btn  button cloud"><CloudIcon /></button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar