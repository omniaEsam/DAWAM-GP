import React ,{ useEffect, useState } from 'react'
import Navbar from '../Home/Components/Navbar/Navbar'
import axios from 'axios';
// import ReactPaginate from 'react-paginate';
import { Link} from 'react-router-dom';
import './Waqfs.css'

export default function Waqfs() {
  const [result , setResult ] = useState([]);
  // const [postsPerPage] = useState(5);
  // const [offset, setOffset] = useState(1);
  // const [pageCount, setPageCount] = useState(0)
   const search= async()=>{
     const respond = await axios.get(`http://afdinc-001-site5.itempurl.com/api/waqf`);
    //  const data =respond.data
    //  const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
    //  setResult(slice);
    //  setPageCount(Math.ceil(data.length / postsPerPage));
    setResult(respond.data);
   }
  //  const handlePageClick = (e) => {
  //   const selectedPage = e.selected;
  //   setOffset(selectedPage + 1)
  // };
  
  useEffect(()=>{
      search();
  },[]);
  const fetchResult = result.map((item)=>{
      return(
                <div className='col-md-12' key={item.id}>
                <div className='waqf-cards  mt-5 d-flex '>
                  <div className='ms-4 w-25'>
                  <img src={"http://afdinc-001-site5.itempurl.com"+item.imageUrl} className='w-100 ' alt=""/>
                  </div>
                  <div className='ps-5' >
                  <h3 className='pt-4 pb-2 fs-5 fw-bold'>  {item.waqfName} </h3>
                  <p className='desc-search'>{item.waqfDescription.split('').slice(0 , 105).join('')}</p>
                  <Link className="btn btn-green mt-3" to={`/ResultSearch/${item.id}`} role="button">المزيد</Link>              
                  </div>
                </div>
              </div>
      )
  })
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <div className='row'>
        {fetchResult}
        {/* <ReactPaginate
       previousLabel={"previous" }
       nextLabel={ "next" }
       breakLabel={ "..." }
       breakClassName={ "break-me" }
       pageCount={ pageCount }
       onPageChange={ handlePageClick }
       containerClassName={ "pagination" }
       subContainerClassName={ "pages pagination" }
       activeClassName={ "active" } /> */}
        </div>
      </div>
    </div>
  )
}
