import Twitter from './models/Twitter';
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
        console.log(coinid);
        state.search = new Twitter(coinid);
        
        // 3) Prepare UI for results

        try {
            // 4) Search for recipes
            await state.search.getResults();
    
            // 5) Render results on UI

        } catch (err) {
            alert('Something wrong with the search...');
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});