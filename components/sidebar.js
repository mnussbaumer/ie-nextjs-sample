import React from "react";

export default function Sidebar({ state, dispatch }) {
    return (
	<div className="sidebar-wrapper">
	  <div className="sidebar">
	    <h2>Directives Optimizations</h2>
	    <select id="file_type" name="file_type" value={state.file_type || ""} onChange={(event) => dispatch({type: "file_type", value: event.target.value})}>
	      <option value="" >Pick a type</option>
	      {state.file_types.map((type, index) => {
		  return  <option value={type} key={`file_type-${index}`}>{type}</option>
	      })}
	    </select>
	    <br/>
	    <br/>
	    <select id="fit_type" name="fit_type" value={state.fit_type || ""} onChange={(event) => dispatch({type: "fit_type", value: event.target.value})}>
	      <option value="">Pick a fit type</option>
	      {state.fit_types.map((type, index) => {
		  return  <option value={type} key={`file_type-${index}`}>{type}</option>
	      })}
	    </select>
	    <br/>
	    <br/>
	    <input type="text" name="width" id="width" placeholder="Width directive in px, e.g: 25" value={state.width || ""} onChange={(event) => dispatch({type: "width", value: event.target.value})}/>
	      <br/>
	      <br/>
	      <input type="text" name="height" id="height" placeholder="Height directive in px, e.g: 50" value={state.height || ""} onChange={(event) => dispatch({type: "height", value: event.target.value})}/>
		<ul>
		  {state.images.map((image, index) => {
		      return <li key={`image-${index}`} className={`${image === state.selected_image ? "selected" : ""}`} onClick={() => dispatch({type: "selected_image", value: image})}>{image}</li>
		  })}
		</ul>
	  </div>
	</div>
    );
};
