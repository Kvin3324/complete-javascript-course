import axios from 'axios';


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = '32e69b75c7fe599b515002c517915d4e';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}


