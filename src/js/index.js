import Search from './models/Search.js';

/*
Global state of the app
- Search object
- Current recipe object
- Shopping list object
- Liked recipes
*/
const state = {};

const controlSearch = async () => {
    const query = 'burger'
    
    if (query) {
        state.search = new Search(query);

        try {
            await state.search.getResults();
            console.log(state.search.result);
        } catch (err) {
            alert('Something wrong with the search...');
        }
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});