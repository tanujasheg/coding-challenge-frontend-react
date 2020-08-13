import React from 'react'


const SearchBox=({searchTerm, setSearchTerm}) =>{
    const handleChange = e =>{
        //setSearchTerm(e.target.value);
        const data = e.target.value;
        console.log(data);
        setSearchTerm(data);
      };
    
    return (
        <div className="container">
            <div card card-body bg-dark mb-2>
                <h3>Search</h3>
                <form>
                    <div className="form-group">
                       <input type="text" className="form-control mb-3"
                       value={searchTerm}
                       placeholder="Search"
                       onChange={handleChange}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBox
