import Data from "./Data"
import { useState } from "react"

export default function Card({hog}){
// Tracking if card is clicked
  const [whenClicked, setWhenClicked] = useState(false)
//   Tracking if data is shown
  const [showData, setShowData] = useState(false)
  // Function that will handle the action when the button is clicked(showing the rest of the data).
  function clickData(){
    setShowData((showData) => !showData) 
   }

   if(!whenClicked){return (
      <div className="ui card eight wide column pigTile">
                <h3>{hog.name}</h3>
                <img src={hog.image} alt={hog.name} /> 
                <button className="ui button" onClick={() => setWhenClicked(true)}>
                    Show Details
                </button>
            </div>
   )

   }
   const{name, image} = hog
   return(
    <div className="ui card eight wide column pigTile">
        <div className="image">
        {/*Displaying the name and image by default*/}
          <h3>{name}</h3>
          <img src={image} alt={name}/>
        </div>
        <div className="extra content">
        {/* displaying the rest of the data */}
         {showData ? <Data hog={hog}/> : null}
         <button className="ui button" onClick={clickData}>
            {showData ? "Less" : "More"}
         </button>
         <button className="ui button" onClick={()=> setWhenClicked(false)}>
            Hide
         </button>
        </div>

    </div>
   )



}