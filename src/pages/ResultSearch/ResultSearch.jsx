import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ResultSearch.css' ;
import Navbar from "../Home/Components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function ResultSearch() {
  const [result, setResult] = useState([]);
  const params = useParams();
  const resultSearch = async (id) => {
    const respond = await axios.get(
      `http://afdinc-001-site5.itempurl.com/api/waqf/${id}`
    );
    setResult(respond.data);
  };

  useEffect(() => {
    resultSearch(params.id);
  });
  return (
    <div className='resultsearch-bg'>
       <Navbar/>
     <div>
     <div className="container">
        <div className="row g-1 my-4">
            <h2 className="text-center mb-5 resultS-header"> {result.waqfName}</h2>
            <div className=" col-md-6 offset-1 data mt-5">
              <ul>
                <li className="pb-2 fs-5">
                  <span className="fw-bold fs-4"> إسم الواقف: </span>
                  {result.founderName}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold fs-4">تاريخ الوقف هجريا:</span>
                  {result.establishmentDateH}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold fs-4">تاريخ الوقف ميلاديا:</span>
                  {result.establishmentDate}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold fs-4">نوع الوقف:</span>
                  {result.waqfType}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold fs-4">تصنيف الوقف :</span>
                  {result.waqfActivity}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold fs-4"> ريع الوقف :</span>
                  {result.waqfCountry}-{result.waqfCity}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold fs-4">وصف الوقف :</span>
                  {result.waqfDescription}
                </li>
                <Link className="btn btn-lg btn-green mt-3" to={"http://afdinc-001-site5.itempurl.com/" + result.documentUrl} target="_blank"  role="button">عرض الوثيقة</Link>  
                
              </ul>
                 </div>
            <div className=" col-md-5">
                <img
                  src={"http://afdinc-001-site5.itempurl.com" + result.imageUrl}
                  className="w-75 rounded"
                  alt=""
                />
          
          </div>
        </div>
        </div>
      </div>
     </div>
  );
}
