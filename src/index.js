import Twitter from './js/models/Twitter';
import Event from './js/models/Event';
import * as searchView from './js/views/searchView';
import { elements, renderLoader, clearLoader } from './js/views/base';
import Coininfo from './js/models/Coininfo';

const state = {};

/** 
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1) Get query from view
    const coinid = searchView.getInput();

    if (coinid) {
        // 2) New search object and add to state
        
        state.info = new Coininfo(coinid);
        state.tweet = new Twitter(coinid);
        state.event = new Event(coinid);
        
        // 3) Prepare UI for results

        searchView.cleanInput();
        searchView.cleanResults();
        
        renderLoader(elements.coinInfo);

        try {
            // 4) Search for tweets
            await state.info.getResults();
            await state.tweet.getResults();
            await state.event.getResults();
    
            // 5) Render results on UI
            clearLoader();
            searchView.renderTitles();
            searchView.renderInfoResults(state.info.resultInfo);
            searchView.renderEventResults(state.event.resultEvent);
            searchView.renderTweetResults(state.tweet.resultTweet);
            
        } catch (err) {
            alert('Cannot find this coin. Make sure you search in this format: btc-bitcoin; eth-ethereum, xlm-stellar, etc.');
            clearLoader();
            searchView.cleanResults();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});