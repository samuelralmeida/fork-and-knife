import axios from 'axios';
import { apiKey } from '../config';
import { recipeSearchResponse} from '../rawData'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            // RawData
            const res = recipeSearchResponse

            // API
            // const res = await axios(`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${this.query}`);
            this.result = res.data.results;
        } catch (error) {
            alert(error);
        }
    }
}