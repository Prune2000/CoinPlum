import axios from 'axios';
export default class Event {
    constructor(coinid) {
        this.coinid = coinid;
    }

    async getResults() {
        
        try {
            const eventRes = await axios(`https://api.coinpaprika.com/v1/coins/${this.coinid}/events/`);
            this.resultEvent = (eventRes.data).reverse().slice(0, 10); // reversing the array because the events are starting with the oldest and I want to display the most recent first
            //console.log(this.resultEvent);

        } catch (error) {
            return error;
        }
    }
}