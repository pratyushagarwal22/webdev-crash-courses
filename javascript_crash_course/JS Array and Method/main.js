const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Tech", start: 2009, end: 2014},
    {name: "Company Six", category: "Fin", start: 1986, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Tech", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// FOREACH
// for(let i = 0; i<companies.length; i++) {
//     console.log(companies[i]);
// }

// companies.forEach(function(company) { //function can take in 3 arguments, iterator, index, entire array
//     console.log(company.name);
// });




// FILTER - allows us to filter things from the array
// using for loop
// for(let i =0;i<ages.length; i++) {
//     if(ages[i]>=21) {
//         canDrink.push(ages[i]);
//     }
// }

// using filter function - to get 21 and older
// const canDrink1 = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

//using arrow function
// const canDrink2 = ages.filter(age => age >= 21);

// filter retail companies
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });

// const retailCompanies1 = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies1);

// get 80s companies
// let eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

//lasted atleast 10 years
// let duration = companies.filter(company => ((company.end-company.start)>=10));
// console.log(duration);



// MAP - create new arrays out of anything from a current array
// create array of company names
// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// const testMap = companies.map(function(company) {
//     return `${company.start}-${company.end}`;
// });

// const testMap = companies.map(company => {return company.name});
// console.log(testMap);

// const agesSquared = ages.map(age => age*age);
// console.log(agesSquared);
// const ageMap = ages
//     .map(age => age*2)
//     .map(age => Math.sqrt(age));

// console.log(ageMap);


// sort - takes 2 values to compare
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start>c2.start) {
//         return 1
//     }
//     else {
//         return -1;
//     }
// });
// console.log(sortedCompanies);

// short form
// const sortedCompanies = companies.sort((a,b) => (a.start>b.start ? 1 : -1));
// console.log(sortedCompanies);

// sort ages
// const sortages = ages.sort((a,b) => a-b); //ascending order. for descending order do b-a
// console.log(sortages);


// REDUCE
// let ageSum = 0;
// for(let i = 0; i<ages.length; i++) {
//     ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function(total, age) {
//     return total+age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total+age, 0);
// console.log(ageSum);

// get total year for all companies
// const totalYears = companies.reduce(function(total, company) {
//     return total+(company.end-company.start);
// }, 0);
// console.log(totalYears);

// const totalYears = companies.reduce((total, company) => total+(company.end-company.start), 0);
// console.log(totalYears);

// COMBINING METHODS

const combined = ages
    .map(age => age*2)
    .filter(age => age>=40)
    .sort((a, b) => a-b)
    .reduce((a, b) => a+b, 0);

console.log(combined);

























































