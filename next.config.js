module.exports = {
    env: {
	DELIVERY_ADDRESS: process.env.DELIVERY_ADDRESS || "http://localhost:3000",
	NON_OPTIMIZED_ADDRESS: process.env.NON_OPTIMIZED_ADDRESS || ""
    },
};
