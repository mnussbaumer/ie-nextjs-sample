import { Image } from "@imageengine/react";
import { get_size, handle_image, NON_OPTIMIZED_ADDRESS } from "../js/utilities";

export default function Thumbnails({ state, dispatch }) {
    
    return (
	<div className="main-area-thumbnails">
	  <div className="thumbnails-container optimized">
	    {state.force_load && state.images.map((image, index) => {
		let image_path = `${state.base_path}/${image}`,
		    thumb_id = `thumb_${image_path}`;
		return (
		    <div className="thumbnail-image" key={`thumbnail-optimized-${index}`} onClick={() => dispatch({type: "selected_image", value: image})}>
		      <div className="thumbnail-size">
			{get_size(state, "ie", thumb_id)}
		      </div>
		      <Image
			src={image_path}
			directives={{
			    outputFormat: "jp2",
			    height: 90,
			    width: 90,
			    fitMethod: "cropbox",
			    compression: 80
			}}
			onLoad={(event) => handle_image("ie", event.target, thumb_id, dispatch)}
			/>
		    </div>
		);
	    })}
	  </div>
	  <div className="thumbnails-container regular">
	    {state.force_load && state.images.map((image, index) => {
		let image_path = `${NON_OPTIMIZED_ADDRESS}${state.base_path}/${image}`;
		return (
		    <div className="thumbnail-image" key={`thumbnail-regular-${index}`} onClick={() => dispatch({type: "selected_image", value: image})}>
		      <div className="thumbnail-size">
			{get_size(state, "regular", image_path)}
		      </div>
		      <img src={image_path} onLoad={(event) => handle_image("regular", event.target, image_path, dispatch)} />
		    </div>
		);
	    })}
	  </div>
	</div>
    )
};
