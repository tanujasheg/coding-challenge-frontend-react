import React from 'react';
import '../App.css';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
       <>

       
        <ul className=" caards" style={{listStyleType: "none"}}>
                {posts.map(post => (
                
              <li className="lists" key={post.id} >
                    <div className="card h-10 text-black border-primary mb-3">
                        <div className="row no-gutters">
                        <div class="col-md-4">
                            <img src={post.media.image_url_thumb} class="card-img border-secondary mb-3" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{post.title}</h5>
                                <p class="card-text">NULL{post.description}</p>
                                <p class="card-text"><small class="text-muted">Occurred at:{post.occurred_at}</small></p>
                            </div>
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