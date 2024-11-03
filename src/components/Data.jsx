
export default function Data({hog}){
    const{specialty, greased, weight,medal} = hog

    return(
        <div>
            <p>Specialty:{specialty}</p>
            <p>Weight:{weight}</p>
            <p>{greased ? "Greased" : ""}</p>
            <p>Highest medal achieved:{medal}</p>
        </div>
    )
}