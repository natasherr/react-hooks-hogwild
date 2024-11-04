import Card from "./Card"
// The list component for displaying the hog cards
export default function List({hogs}){

    return(
        <div className="ui grid container">
            {hogs.map((hog)=>(
                <div className="ui eight wide column">
                <Card key={hog.name} hog={hog}/>
                </div>
            ))}
        </div>
    )
}