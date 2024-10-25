import { useState } from "react";
import "./searchbar.scss";

const types = ["buy","rent"];

function SearchBar() {
    const [query,setQuery] = useState({
      type : "buy",
      location : "",
      minPrice : 0,
      maxPrice : 0
    })

    const switchType = (val)=>{
      setQuery( prv=> ({...prv,type:val}));
    }

    return (
       <div className="searchBar">
          <div className="type">
            { types.map((type)=>(
                <button key={type} onClick={() => switchType(type)} 
                 className={query.type === type ? "active" : ""}>
                   {type}
                </button>
              ))  
            }
          </div>
          <form action="/">
            <input action="/" type="text" name="location" placeholder="City"/>
            <input action="/" type="number" 
                   name="minPrice" min={0} max={10000000} 
                   placeholder="Min Price"/>
            <input action="/" type="number" 
                   name="maxPrice" min={0} max={10000000} 
                   placeholder="Max Price"/>
            <button>
              <img src="/search.png" alt="" />
            </button>
          </form>
       </div>
    )
}

export default SearchBar