import Twitter from './models/Twitter';
import Event from './models/Event';
import * as searchView from './views/searchView';
import { elements } from './views/base';

const state = {};

/** 
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1) Get query from view
    const coinid = searchView.getInput();

    if (coinid) {
        // 2) New search object and add to state
        
        state.tweet = new Twitter(coinid);
        state.event = new Event(coinid);
        
        // 3) Prepare UI for results

        try {
            // 4) Search for tweets
            await state.tweet.getResults();
            await state.event.getResults();
    
            // 5) Render results on UI
            searchView.renderEventResults(state.event.resultEvent);
            searchView.renderTweetResults(state.tweet.resultTweet);
            
        } catch (err) {
            alert('Something wrong with the search...');
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});