import Head from "next/head";
import Sidebar from "../components/sidebar.js";
import ImagePreview from "../components/image_preview.js";
import Thumbnails from "../components/thumbnails.js";
import Copyright from "../components/copyright.js";

import { Image } from "@imageengine/react";

import { useReducer, useEffect } from "react";

import {
    build_type_key,
    handle_image,
    NON_OPTIMIZED_ADDRESS
} from "../js/utilities.js";


export default function Home() {
    const [state, dispatch] = useReducer(settings_reducer, initial_settings_state);

    useEffect(() => {
	setTimeout(() => dispatch({type: "force_load", value: true}), 25)
    }, []);
    
    return (
	<div className="main-container">
	  <Head>
	    <title>ImageEngine Optimized Assets</title>
	  </Head>
	  <Sidebar state={state} dispatch={dispatch} />
	  <div className="main-area">
	    <h2 className="page-title">ImageEngine (left) vs Unoptimized (right)</h2>
	    <Copyright state={state} dispatch={dispatch} />
	    <div className="main-area-images">
	      <ImagePreview state={state} type="ie" prefix={""}>
		<Image
		  src={state.selected_image_url}
		  directives={{
		      outputFormat: state.file_type,
		      height: state.height,
		      width: state.width,
		      fitMethod: state.fit_type
		  }}
		  onLoad={(event) => handle_image("ie", event.target, state.selected_image_url, dispatch)}
		  />
	      </ImagePreview>
	      <ImagePreview state={state} type="regular" prefix={NON_OPTIMIZED_ADDRESS}>
		<img src={NON_OPTIMIZED_ADDRESS + state.selected_image_url} onLoad={(event) => handle_image("regular", event.target, (NON_OPTIMIZED_ADDRESS + state.selected_image_url), dispatch)}/>
	      </ImagePreview>
	    </div>
	    <Thumbnails state={state} dispatch={dispatch} />
	  </div>
	</div>
    );
};


const initial_settings_state = {
    base_path: "/images",
    file_types: ["jpg", "jp2", "webp", "gif", "png", "bmp"],
    file_type: null,
    fit_types: ["stretch", "box", "letterbox", "cropbox"],
    fit_type: null,
    width: null,
    height: null,
    images: [
	"senja_norway.jpg",
	"buddha_shakyamuni.jpg",
	"vasnetsov_samolet.jpg",
	"great_wave_off_kanagawa.jpg"
    ],
    copyright: {
	"great_wave_off_kanagawa.jpg": ["Great Wave off Kanagawa", "By After Katsushika Hokusai - Restored version, Public Domain", ["https://commons.wikimedia.org/w/index.php?curid=5576388"]],
	"buddha_shakyamuni.jpg": ["Buddha Shakyamuni", "By Unknown author - Public Domain", ["https://www.metmuseum.org/collection/the-collection-online/search/75274", "https://commons.wikimedia.org/w/index.php?curid=39112914"]],
	"vasnetsov_samolet.jpg": ["The Flying Carpet", "By Viktor Mikhailovich Vasnetsov - belygorod.ru, Public Domain", ["https://commons.wikimedia.org/w/index.php?curid=1374733"]],
	"senja_norway.jpg": ["Island of Senja, Troms, Norway (August, 2014)", "By Ximonic (Simo Räsänen) - Own work, CC BY-SA 4.0", ["https://commons.wikimedia.org/w/index.php?curid=34693021"]]
	
    },
    show_copyright: false,
    loaded_images_ie: {},
    loaded_images_regular: {},
    selected_image: null,
    selected_image_url: null,
    force_load: false
};

function settings_reducer(state, action) {
    switch (action.type) {
    case "file_type":
    case "fit_type":
    case "width":
    case "height":
    case "force_load":
    case "show_copyright":
	state[action.type] = action.value;
	return {...state};
	
    case "selected_image":
	state.selected_image = action.value;
	state.selected_image_url = action.value ? `${state.base_path}/${action.value}` : null;
	return {...state};

    case "add_image_size":
	let state_key = build_type_key(action.image_type);
	
	state[state_key][action.image] = action.size;
	state[state_key] = {...state[state_key]};

	return {...state};
    default:
      throw new Error();
  }
};
