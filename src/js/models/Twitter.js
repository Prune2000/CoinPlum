export default class Twitter {
    constructor(coinid) {
        this.coinid = coinid;
    }

    async getResults() {
        try {
            const twitterRes = await fetch(`https://api.coinpaprika.com/v1/coins/${this.coinid}/twitter/`);
            const data = await twitterRes.json();
            console.log(data);
            //console.log(data[0]);

            return data;

        } catch (error) {
            alert('Oops! Cant find this coin');
        }
    }
}