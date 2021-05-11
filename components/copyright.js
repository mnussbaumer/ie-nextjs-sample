export default function Copyright({ state, dispatch }) {

    if (!state.selected_image) {
	return <div className="main-area-image-info"></div>;
    } else {
	let copyright = state.copyright[state.selected_image],
	    title = copyright[0],
	    description = copyright[1],
	    links = copyright[2];

	return (
	    <div className="main-area-image-info">
	      <h4>{title}<button className="collapse-btn" type="button" onClick={() => dispatch({type: "show_copyright", value: !state.show_copyright})}>{state.show_copyright ? "-" : "+"}</button></h4>
	      {state.show_copyright ? <div>
		    <p>{description}</p>
			{links.map((link, index) => <a href={link} target="_blank" key={`link-${state.selected_image}-${index}`}>{link}<br/></a>)}
	       </div> :
	       null}
	    </div>
	)
    }
};
