import "./filter.scss"

function Filter() {
   return (
      <div className="filter">
         <h1>Search result for<b> hydrabad</b></h1>
         <div className="top">
            <div className="item">
               <label htmlFor="city">Location</label>
               <input type="text" id="city" name="city" placeholder="city location"/>
            </div>
         </div>
         <div className="bottom">
            <div className="item">
               <label htmlFor="type">Type</label>
               <select name="type" id="type">
                  <option value="">select</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
               </select>
            </div>
            <div className="item">
               <label htmlFor="property">Property</label>
               <select name="property" id="property">
                  <option value="">select</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="land">Land</option>
               </select>
            </div>
            <div className="item">
               <label htmlFor="minPrice">Min Price</label>
               <input type="number" id="minPrice" name="minPrice" placeholder="0"/>
            </div>
            <div className="item">
               <label htmlFor="maxPrice">Max Price</label>
               <input type="number" id="maxPrice" name="maxPrice" placeholder="0"/>
            </div>
            <div className="item">
               <label htmlFor="bedroom">Bedroom</label>
               <input type="text" id="bedroom" name="bedroom" placeholder="enter"/>
            </div>
            <button>
               <img src="/search.png" alt="" />
            </button>
         </div>
      </div>
   )
}

export default Filter