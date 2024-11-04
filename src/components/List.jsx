import Card from "./Card"

export default function List({hogs}){

    return(
        <div className="ui three stackable cards">
            {hogs.map((hog)=>(
                <Card key={hog.name} hog={hog}/>
            ))}
        </div>
    )
}