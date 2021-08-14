const getGifs = async (category) =>{
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=NJ9tSPN3FIDxmPY3DGf2MdZgjTz7wlKS`
	const response = await fetch(url)
	const {data} = await response.json()

	const gifs = data.map(gif => {
		return {
			id: gif.id,
			title: gif.title,
			url: gif.images.downsized_medium.url
		}
	})

	return gifs
}

export default getGifs