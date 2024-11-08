// The additional data when the "Show Details " button is pressed
export default function Data({hog}){
    const{specialty, greased, weight,medal} = hog

    return(
        <div className="ui segment">
            <p>Specialty:{specialty}</p>
            <p>Weight:{weight}</p>
            <p>{greased ? "Greased" : ""}</p>
            <p>Highest medal achieved:{medal}</p>
        </div>
    )
}