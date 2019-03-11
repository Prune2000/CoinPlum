import axios from 'axios';
export default class Event {
    constructor(coinid) {
        this.coinid = coinid;
    }

    async getResults() {
        
        try {
            const eventRes = await axios(`https://api.coinpaprika.com/v1/coins/${this.coinid}/events/`);
            this.resultEvent = (eventRes.data).reverse();
            console.log(this.resultEvent);

        } catch (error) {
            alert('Oops! Cant find this coin');
        }
    }
}