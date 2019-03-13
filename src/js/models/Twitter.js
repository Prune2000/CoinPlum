import axios from 'axios';
export default class Twitter {
    constructor(coinid) {
        this.coinid = coinid;
    }

    async getResults() {
        
        try {
            const twitterRes = await axios(`https://api.coinpaprika.com/v1/coins/${this.coinid}/twitter/`);
            this.resultTweet = twitterRes.data.slice(0, 10);
            

        } catch (error) {
            alert('Oops! Cant find this coin');
        }
    }
}