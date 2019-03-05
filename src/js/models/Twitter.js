import axios from 'axios';
export default class Twitter {
    constructor(coinid) {
        this.coinid = coinid;
    }

    async getResults() {
        
        try {
            const twitterRes = await axios(`https://api.coinpaprika.com/v1/coins/${this.coinid}/twitter/`);
            this.result = twitterRes.data;
            //this.username = twitterRes.data.user_name;
            //this.date = twitterRes.data.date;
            //this.like = twitterRes.data.like_count;
            //this.retweet = twitterRes.data.retweet_count;
            //this.text = twitterRes.data.status;
            //this.image = twitterRes.data.user_image_link;
            //this.link = twitterRes.data.status_link;
            

        } catch (error) {
            alert('Oops! Cant find this coin');
        }
    }
}