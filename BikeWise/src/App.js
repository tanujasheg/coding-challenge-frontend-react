import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./Component/Posts";
import Pagination from "./Component/Pagination";
import Navbar from "./Component/Navbar";

const App = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search,searchTerm] = useState("")
  
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://bikewise.org:443/api/v2/incidents?page=1&incident_type=theft"
      );
      setPost(res.data.incidents);
      setLoading(false);
    };

    fetchPost();
  }, []);

  console.log(posts);
  
  function searchDesc(posts){
    return posts.filter((post)=> post.title.toString().toLowerCase().indexOf(search.toLowerCase()) > -1);
  }
  
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //For changing page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  
  return (
    <div className="container  mt-5">
      <Navbar />
      <input  class="form-control mb-5" type="text" placeholder="Search" value={search} onChange={(e)=>searchTerm(e.target.value)}/>
      <Posts posts={searchDesc(currentPosts)} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
