import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./Component/Posts";
import Pagination from "./Component/Pagination";
import Navbar from "./Component/Navbar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search,searchTerm] = useState("");
  const [selectedDate,setSelectedDate] = useState(null);
  
  useEffect(() => {
    const fetchPost = async () => {
      try{
        setLoading(true);
        const res = await axios.get(
        "https://bikewise.org:443/api/v2/incidents?page=1&incident_type=theft"
        );
        setPost(res.data.incidents);
        setLoading(false);
      }catch (e){
        alert("Opps there is some Problem");
        console.log(e);
      }
      
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
      <div className="row">
      <div className="col-5">
      <input style={{marginLeft:"20%"}} className="form-control mb-5 " type="text" placeholder="Search case title" value={search} onChange={(e)=>searchTerm(e.target.value)}/>
      </div>
      <div className="col-1"></div>
      <div className="col-3"><span>To: </span>
        <DatePicker selected={selectedDate} 
        onChange={date=>setSelectedDate(date)}/>
      </div>
      <div className="col-3" ><span>From: </span>
        <DatePicker selected={selectedDate} 
        onChange={date=>setSelectedDate(date)}/>
      </div>
      </div>
      
      
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
