export const getCurrencies = async () => {
	try {
		const request = await fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_U9sLWUL6id9DOgcgJENZDLiHnw2vjNr4eiuhiJ8F');
		return await request.json();

	}catch (e) {
		console.error(e);
	}
}