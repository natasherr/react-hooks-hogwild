export default function Filter({greased, sort, changeGreased, changeSort}){

  function greasedOrNot(event){changeGreased(event.target.checked)}
  function sorting(event){changeSort(event.target.value)}

    return(
      <div className="FilterWrapper">
        <div className="ui menu">
          <div className="ui item">
            <label>Sort By:</label>
          </div>
          <div className="ui item">
            <select className="ui selection dropdown" name="sort" onChange={sorting} value={sort}>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
            </select>
          </div>
          <div className="ui item">
            <label>Greased</label>
          </div>
          <div className="ui item">
            <input className="ui toggle checkbox" checked={greased} onChange={greasedOrNot} type="checkbox"/>
          </div>
        </div>
      </div>
    )

}
