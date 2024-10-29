import "./detailsPage.scss";
import Slider from "../../componants/slider/slider";
import {singleData} from "../../lib/singleData.js";
import Map from "../../componants/map/map.jsx";

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
            <div className="wapper">
               <p className="title">General</p>
               <div className="listvertical">
                  <div className="feature">
                     <img src="/utility.png" alt="" />
                     <div className="featureText">
                        <span>Utilities</span>
                        <p>Renter is responsible</p>
                     </div>
                  </div>
                  <div className="feature">
                     <img src="/pet.png" alt="" />
                     <div className="featureText">
                        <span>Pet Policy</span>
                        <p>Pets Allowed</p>
                     </div>
                  </div>
                  <div className="feature">
                     <img src="/fee.png" alt="" />
                     <div className="featureText">
                        <span>Property Fees</span>
                        <p>Must have 3X the rent in total household income</p>
                     </div>
                  </div>
               </div>
               <p className="title">Room Sizes</p>
               <div className="sizes">
                  <div className="size">
                     <img src="/size.png" alt="" />
                     <span>80sq Ft</span>
                  </div>
                  <div className="size">
                     <img src="/bed.png" alt="" />
                     <span>2 Bed</span>
                  </div>
                  <div className="size">
                     <img src="/bath.png" alt="" />
                     <span>1 Bathroom</span>
                  </div>
               </div>
               <p className="title">Nearby Places</p>
               <div className="listhorizontal">
               <div className="feature">
                     <img src="/school.png" alt="" />
                     <div className="featureText">
                        <span>School</span>
                        <p>250m away</p>
                     </div>
                  </div>
                  <div className="feature">
                     <img src="/bus.png" alt="" />
                     <div className="featureText">
                        <span>Bus Stop</span>
                        <p>100m away</p>
                     </div>
                  </div>
                  <div className="feature">
                     <img src="/restaurant.png" alt="" />
                     <div className="featureText">
                        <span>Restaurant</span>
                        <p>300m away</p>
                     </div>
                  </div>
               </div>
               <p className="title">Location</p>
               <div className="mapContainer">
                  <Map items={[singleData]}/>
               </div>
               <div className="buttons">
                  <button>
                     <img src="/chat.png" alt="" />
                     <p>Send a Massage</p>
                  </button>
                  <button>
                     <img src="/save.png" alt="" />
                     <p>Save the Place</p>
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DetailsPage