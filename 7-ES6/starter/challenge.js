/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

const ages = [];
const lengths = [];
const sizeClassification = ['tiny', 'small', 'normal', 'big', 'huge'];

class Element {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Parks extends Element {
    constructor (name, buildYear, numTrees, area) {
        super(name, buildYear);
        this.numTrees = numTrees;
        this.area = area;
    }
    treeDensity() {
        let density = this.numTrees / this.area
        console.log(`The ${this.name}, built in ${this.buildYear} has ${this.numTrees} trees for an area of ${this.area} and a density of ${density}`);        
    }
    averageAge() {
        ages.push(this.buildYear);
        const allAges = ages.reduce((a, b) => a + b, 0) ;
        let age = parseInt(allAges / 3);
        console.log(`The average age of ${this.name} is ${age}`);  
        console.log('--------------');       
    } 

    displayPark() {
        if (this.numTrees >= 1000) {
            console.log(`${this.name} has more of 1000 trees.`);
            console.log('--------------');       
        }
    }
}

class Streets extends Element {
    constructor (name, buildYEar, length = 'normal') { //size = 3) 
        super(name, buildYEar);
        this.length = length;
        // this.size = size;
    }

    averageLength() {
        lengths.push(this.length);
        const allLengths = parseInt(lengths.reduce((a, b) => a + b, 0));
        let streetLength = allLengths / 4;
        // console.log(this.length);
        console.log(`${this.name} has an average of ${streetLength} meters of street.`);
        console.log('--------------');       
    }

    sizeClassement() {
        if (this.length <= 500) {
            this.name === sizeClassification[0];
            console.log(`${this.name} is ${sizeClassification[0]} `); 
            console.log('--------------');       

        } else if (this.length >= 1000 && this.length <= 2000) {
            this.name === sizeClassification[2];
            console.log(`${this.name} is ${sizeClassification[2]} `);
            console.log('--------------');       

        } else if(this.length >= 2500) {
            this.name === sizeClassification[4];
            console.log(`${this.name} is ${sizeClassification[4]} `);
            console.log('--------------');       

        }
        // const classification = new Map();
        // classification.set(1, 'tiny');
        // classification.set(2, 'small');
        // classification.set(3, 'normal');
        // classification.set(4, 'big');
        // classification.set(5, 'huge');
        // console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    } 
}

// const allParks = [new Parks('Jardin public', 1890, 2000, 1000),
//                 new Parks('City hotel garden', 1690, 1500, 500),
//                 new Parks('Balguerie Stuttenberg', 1780, 200, 50)];


// const allStreets = [new Streets('Gambetta street', 1999, 1.1, 4),
//                     new Streets('Alsace-Lorraine street', 2008, 2.7, 2),
//                     new Streets('Balguerie Stuttenberg street', 2015, 0.8),
//                     new Streets('Sunset Boulevard', 1982, 2.5, 5)];


// function reportsParks(p) {
//     p.forEach(el => el.treeDensity());
//     p.forEach(el => el.averageAge()); 
//     p.forEach(el => el.displayPark());   
// }

// function reportsStreets(s) {
//     s.forEach(el => el.averageLength());
//     s.forEach(el => el.sizeClassement());
// }

// reportsParks(allParks);
// reportsStreets(allStreets);




const firstParks = new Parks('Jardin public', 1890, 2000, 1000);
const firstParkLength = new Streets('Gambetta street', 1890, 500);

const secondParks = new Parks('City hotel garden', 1690, 1500, 500);
const secondParkLength = new Streets('Alsace-Lorraine street', 1690, 3500)

const thirdParks = new Parks('Balguerie Stuttenberg', 1780, 200, 50);
const thirdParkLength = new Streets('Balguerie Stuttenberg street', 1780, 1500)


firstParks.treeDensity();
firstParks.averageAge();
firstParks.displayPark();
firstParkLength.averageLength();
firstParkLength.sizeClassement();

secondParks.treeDensity();
secondParks.averageAge();
secondParks.displayPark();
secondParkLength.averageLength();
secondParkLength.sizeClassement();



thirdParks.treeDensity();
thirdParks.averageAge();
thirdParks.displayPark();
thirdParkLength.averageLength();
thirdParkLength.sizeClassement();














