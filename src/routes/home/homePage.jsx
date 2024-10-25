import SearchBar from "../../componants/searchbar/searchbar";
import "./homePage.scss";

function HomePage() {
    return (
       <div className="homePage">
         <div className="textContainer">
           <div className="wrapper">
              <h1 className="tagline">
                Discover your perfect haven with HeavenSeek
              </h1>
              <p>
                 Welcome to HeavenSeek, where your dream property
                 awaits. Explore our listings and step closer to 
                 finding your perfect home today!
              </p>
              <SearchBar/>
              <div className="boxes">
                <div className="box">
                  <h1>16+</h1>
                  <h2>Years of Experience</h2>
                </div>
                <div className="box">
                  <h1>200</h1>
                  <h2>Award Gained</h2>
                </div>
                <div className="box">
                  <h1>1200+</h1>
                  <h2>Property Ready</h2>
                </div>
              </div>
           </div>
         </div>
         <div className="imgContainer">
            <img src="/bg.png" alt="" />
         </div>
       </div>
    )
}

export default HomePage;