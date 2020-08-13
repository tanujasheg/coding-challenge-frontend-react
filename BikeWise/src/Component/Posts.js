import React from 'react';
import '../App.css';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
       <>

       
        <ul className="card-columns caards" style={{listStyleType: "none"}}>
                {posts.map(post => (
                
              <li className="lists" key={post.id} >
                  <div className="card h-100 text-white bg-dark mb-3">
                   <img src= {post.media.image_url}
                   class="card-img-top p-1" alt="..."/>
                    <div className="card-body">
                    <h6 className="card-title">{post.title}</h6>
                    <p class="card-text">{post.address}</p>
                    <a href={post.source.html_url} target="_blank"class="btn btn-primary">See More</a>
                    <div class="card-footer mb-0">
                <small class="text-muted text-white">Occured at:{post.occurred_at}</small>
                    </div>
                    </div>
                  </div>
              </li> 
            ))}
        </ul>
        
        </>
    )
}

export default Posts;