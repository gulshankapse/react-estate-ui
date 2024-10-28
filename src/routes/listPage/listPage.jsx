import "./listPage.scss";
import {listData} from "../../lib/dummyData.js"
import Filter from "../../componants/filter/filter.jsx"
import Card from "../../componants/card/card.jsx"
import Map from "../../componants/map/map.jsx"

function ListPage() { 
   const data = listData;

   return (
      <div className="listpage">
         <div className="listcontainer">
            <div className="wrapper">
               <Filter/>
               {data.map(item=>(
                  <Card key={item.id} item={item}/>
               ))}
            </div>
         </div>
         <div className="mapcontainer">
            <Map items={data}/>
         </div>
      </div>
   )
}

export default ListPage

