export default  async function fetchDeck(count) {
    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=${count}`;

    try {
        const response = await fetch(url);
        
        if(!response.ok) {
            throw new Error(`Response status ${response.status}`, {
                mode: 'cors'
              });
        }

        const data = await response.json();

        return await data;


    } catch (error) {
        console.error(error.message);
    }

}