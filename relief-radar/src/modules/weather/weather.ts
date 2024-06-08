import React from "react";

const getImageFromString = (url: string) => {
	const urlParts = url.split("/");
	const imageNameAndFormat = urlParts[urlParts.length - 1];
	return imageNameAndFormat;
};

export default getImageFromString;
