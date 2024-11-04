import React from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import { useState } from "react";
import List from "./List";

import hogs from "../porkers_data";

function App() {
	// Sort functionality hook
	const[sort, setSort]= useState("name")
    const [greased, setGreased] = useState(false)
// Sorting and filtering hogs based on state
	const sortAndFilter=hogs
	 .filter((hog) => {
		// Showing greased hogs if greased is true
		return greased ? hog.greased : true;
	 })
	 .sort((x,y) => {
		if(sort === "weight"){
		 	// If x is lighter,it comes first but if it is heavier,it comes after.
		 	return x.weight-y.weight
		 }
		//  Handling sorting by name
		 else if (sort === "name"){
		 	return x.name.localeCompare(y.name)
		 }
		return 0
	 })
		

	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav/>
			</div>
			<div className="sixteen wide column centered">
				<Filter greased={greased} sort={sort} changeGreased={setGreased} changeSort={setSort} />
			</div>
			<div className="sixteen wide column centered">
				<List hogs={sortAndFilter}/>
			</div>
		</div>
	);
}

export default App;
