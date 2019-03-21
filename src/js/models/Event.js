import axios from 'axios';
export default class Event {
    constructor(coinid) {
        this.coinid = coinid;
    }

    async getResults() {
        
        try {
            const eventRes = await axios(`https://api.coinpaprika.com/v1/coins/${this.coinid}/events/`);

            this.resultEvent = eventRes.data.filter(event => new Date(event.date) > new Date()); // Filters through the array of results and picks only the future events

        } catch (error) {
            alert('Error in the event');
        }
    }
}