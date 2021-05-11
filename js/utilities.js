export const NON_OPTIMIZED_ADDRESS = process.env.NON_OPTIMIZED_ADDRESS;

export async function handle_image(image_type, img, selected_image_url, dispatch) {

    let head = await fetch(img.src, {method: "head"}),
	size = head.headers.get("content-length");

    if (size) {
	dispatch({type: "add_image_size", image_type: image_type, image: selected_image_url, size: parseInt(size)});
    }
}

export function get_size(state, type, url) {
    let size = state[build_type_key(type)][url];
    return  size || size === 0 ? display_size(size) : "No info";
};

export function calc_total_sizes(state, type) {
    let total_size = Object.values(state[build_type_key(type)]).reduce((acc, size) =>  acc + size, 0);
    return display_size(total_size);
};

export function build_type_key(type) {
    return `loaded_images_${type}`;
};

function display_size(size) {
    if (size > 1048576) {
	return (Math.round((size / 1048576 + Number.EPSILON) * 100) / 100) + "MB";
    } else if (size > 1024) {
	return (Math.round((size / 1024 + Number.EPSILON) * 100) / 100) + "Kb";
    } else {
	return size + "b";
    }
};
