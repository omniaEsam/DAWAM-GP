import React, { useEffect, useState } from "react";
import Navbar from "../Home/Components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./AdvancedSearch.css";

export default function AdvancedSearch() {
  // to do search in advancedSearch page
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const search = async () => {
    const respond = await axios.get(
      `http://afdinc-001-site5.itempurl.com/api/waqf/Search/${searchQuery}`
    );
    setSearchResults(respond.data);
  };
  useEffect(() => {
    search();
  }, [searchQuery]);

  const fetchResult = searchResults.map((item) => {
    return (
      <div className="col-md-12" key={item.id}>
        <div className="waqf-cards mb-4 d-flex rounded shadow ">
          <div className="ms-4 w-25">
            <img
              src={"http://afdinc-001-site5.itempurl.com" + item.imageUrl}
              className="w-100 "
              alt=""
            />
          </div>
          <div className="ps-5">
            <h3 className="pt-4 pb-2 fs-5 fw-bold"> {item.waqfName} </h3>
            <p className="desc-search fs-5">
              {item.waqfDescription.split("").slice(0, 105).join("")}
            </p>
            <Link
              className="btn btn-green m-3"
              to={`/ResultSearch/${item.id}`}
              role="button"
            >
              المزيد
            </Link>
          </div>
        </div>
      </div>
    );
  });

  // to show result of search in home
  const { searchQuerys } = useParams();
  const [searchResultsPage, setSearchResultsPage] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await axios.get(
        `http://afdinc-001-site5.itempurl.com/api/waqf/Search/${searchQuerys}`
      );
      console.log(response.data);
      setSearchResultsPage(response.data);
    };

    fetchSearchResults();
  }, [searchQuerys]);

  //  to show waqfs
  const [item, setItem] = useState([]);

  const waqfs = async () => {
    const respond = await axios.get(
      `http://afdinc-001-site5.itempurl.com/api/waqf`
    );
    setItem(respond.data);
  };

  useEffect(() => {
    waqfs();
  }, []);

  const fetchItem = item.map((item) => {
    return (
      <div className="col-md-12" key={item.id}>
        <div className="waqf-cards mb-4 d-flex rounded shadow ">
          <div className="ms-4  w-25 ">
            <img
              src={"http://afdinc-001-site5.itempurl.com" + item.imageUrl}
              className="w-100 "
              alt=""
            />
          </div>
          <div className="ps-5">
            <h3 className="pt-4 pb-2 fs-5 fw-bold"> {item.waqfName} </h3>
            <p className="desc-search fs-5">
              {item.waqfDescription.split("").slice(0, 105).join("")}
            </p>
            <Link
              className="btn btn-green m-3"
              to={`/ResultSearch/${item.id}`}
              role="button"
            >
              المزيد
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <div className="search-head text-center pb-3 pt-3">
        <h2 className="search-title">تصفح الأوقاف</h2>
        <form>
          <FontAwesomeIcon
            size="lg"
            icon={faSearch}
            className="advanced-search-icon"
          />
          <input
            className="form-control  m-auto w-50 my-4 rounded-pill "
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="container">
        <div className="row">
          <div>
            {" "}
            {fetchResult.length > 0} {fetchResult} {fetchItem}
          </div>
          <div>
            {searchResultsPage.map((item) => (
              <div className="col-md-12" key={item.id}>
                <div className="waqf-cards   mb-4 d-flex rounded shadow ">
                  <div className="ms-4 w-25">
                    <img
                      src={
                        "http://afdinc-001-site5.itempurl.com" + item.imageUrl
                      }
                      className="w-100 "
                      alt=""
                    />
                  </div>
                  <div className="ps-5">
                    <h3 className="pt-4 pb-2 fs-5 fw-bold">
                      {" "}
                      {item.waqfName}{" "}
                    </h3>
                    <p className="desc-search fs-5">
                      {item.waqfDescription.split("").slice(0, 105).join("")}
                    </p>
                    <Link
                      className="btn btn-green m-3"
                      to={`/ResultSearch/${item.id}`}
                      role="button"
                    >
                      المزيد
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
