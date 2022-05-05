const companies=[{name:"Company one",category:"Finance",start:1981,end:2003},
{name:"Company one",category:"Finance",start:1981,end:2003},
{name:"Company two",category:"Retail",start:1998,end:2003},
{name:"Company three",category:"Auto",start:2016,end:2019},
{name:"Company four",category:"Retail",start:1971,end:2022},
{name:"Company five",category:"Technology",start:1991,end:2007},
{name:"Company six",category:"Finance",start:2000,end:2003},
{name:"Company seven",category:"Auto",start:2015,end:2019},
{name:"Company eight",category:"Technology",start:2002,end:2007},
{name:"Company nine",category:"Retail",start:1985,end:2003}
];

const ages=[12,56,48,36,26,25,14,33,36,42,40,58,76,89];

//Normal for loop
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);    
}
//forEach -------------->Better way to trough an Array
console.log("ForEach: ");
companies.forEach(function (Company) { //We can also get (index,companie,name...wherever)
    console.log(Company.name);
});

//Filter with for loop
let canDrink=[];
for (let i = 0; i < ages.length; i++) {
    if(ages[i]>=21){
        canDrink.push(ages[i]);
    }
}
console.log("Filter with For");
console.log(canDrink);

//Filter like forEach
const canDrink1=ages.filter(function (age) {
    if(age>=21){
        return true;
    }
});
console.log("Filter with ForEAch ");
console.log(canDrink1);

//Filter with arrow function BEST WAY
const canDrink2=ages.filter(age=> age>=21);  //ARROW FUNCTION => CONDITION age>=21
console.log("Filter with arrowFunction");
console.log(canDrink2);

//Filter Reatail(category) companies
console.log("Filter Reatail(category) companies:")
const retailCompanies=companies.filter(company=>company.category =="Retail");
console.log(retailCompanies);