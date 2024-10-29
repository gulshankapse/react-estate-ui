import "./detailsPage.scss";
import Slider from "../../componants/slider/slider";
import {singleData} from "../../lib/singleData.js";

function formatPrice(price) {
   return price.toLocaleString("en-IN");
} 

function DetailsPage() { 
   return (
      <div className="detailsPage">
         <div className="details">
            <div className="wapper">
               <Slider images={singleData.img}/>
               <div className="info">
                  <div className="top">
                     <div className="post">
                        <h1>{singleData.title}</h1>
                        <div className="address">
                           <img src="/pin.png" alt="" />
                           <span>{singleData.address}</span>
                        </div>
                        <div className="price">₹ {formatPrice(singleData.price)}</div>
                     </div>
                     <div className="user">
                        <img src="/favicon.png" alt="" />
                        <span>gulshan</span>
                     </div>
                  </div>
                  <div className="bottom">
                     {singleData.description}
                  </div>
               </div>
            </div>
         </div>
         <div className="features">
            <div className="wapper"></div>
         </div>
      </div>
   )
}

export default DetailsPage