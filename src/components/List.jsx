import Card from "./Card"
// The list component for displaying the hog cards
export default function List({hogs}){

    return(
        <div className="ui three stackable cards">
            {hogs.map((hog)=>(
                <Card key={hog.name} hog={hog}/>
            ))}
        </div>
    )
}