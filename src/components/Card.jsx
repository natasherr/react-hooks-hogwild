import Data from "./Data"
import { useState } from "react"

export default function Card({hog}){

  const [whenClicked, setWhenClicked] = useState(false)
  const [showData, setShowData] = useState(false)
  // Function that will handle the action when a tile is clicked(showing the rest of the data).
  function clickData(){
    setShowData((initShowData) => !initShowData) 
   }

   if(whenClicked===false){return null}
   const{name, image} = hog
   return(
    <div className="ui eight wide column pigTile">
        <div className="image">
        {/*Displaying the name and image by default*/}
          <h3>{name}</h3>
          <img src={image} alt={name}>{image}</img>
        </div>
        <div>
        {/* displaying the rest of the data */}
         {showData ? <Data hog={hog}/> : null}
         <button className="ui button" onClick={clickData}>
            {showData ? "Less" : "More"}
         </button>
         <button className="ui button" onClick={()=> setWhenClicked(true)}>
            Hide
         </button>
        </div>

    </div>
   )



}