import { get_size, calc_total_sizes } from "../js/utilities.js";

export default function ImagePreview({ state, type, prefix,  children }) {
    let prefixed = `${prefix}${state.selected_image_url}`;
    
    return (
	<div className="image-container-wrapper">
	  <div className="image-info-container">
	    <div className="image-info-size">{state.selected_image_url ? get_size(state, type, prefixed) : "No info"}</div>
	    <div className="image-info-size-total">Total: {calc_total_sizes(state, type)}</div>
	  </div>
	  <div className="image-container">
	    {
		state.selected_image ?
		    children :
		    <p>Select an Image to preview</p>
		    }
	  </div>
	</div> 	    
    );
};
