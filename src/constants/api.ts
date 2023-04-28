export const API_BASE = 'https://csgoskins.gg/api/v1/advanced-item-details'

export const API_KEY = process.env.REACT_API_KEY as string

const url = new URL(
	"https://csgoskins.gg/api/v1/advanced-item-details"
);



let body = {
	"page": 6,
	"limit": 5
};

// export const getbody = fetch(url, {
// 	method: "GET",
// 	headers,
// 	body: JSON.stringify(body),
// }).then(response => response.json());