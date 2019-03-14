import axios from 'axios';

export default class Coininfo {
    constructor(coinid) {
        this.coinid = coinid;
    }

    async getResults() {
        
        try {
            const coinInfo = await axios(`https://api.coinpaprika.com/v1/coins/${this.coinid}/`);
            this.resultInfo = coinInfo.data;

            // control the number of words in the description
            let arrayOfWords = this.resultInfo.description.split(' ');
            
            if (arrayOfWords.length >= 40) {
                let limitedArray = arrayOfWords.slice(0, 40);
                let limitedDescription = limitedArray.join(' ');
                this.resultInfo.description = limitedDescription;
            }
            
            

        } catch (error) {
            return error;
        }
    }
}