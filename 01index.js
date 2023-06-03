const companies = [
    {name:"company one", category: "Finanace", start: 1980, end: 1990},
    {name:"company Two", category: "Retail", start: 1992, end: 2008},
    {name:"company Three", category: "Auto", start: 1999, end: 2007},
    {name:"company Four", category: "Retail", start: 1989, end: 2010},
    {name:"company Five", category: "Technology", start: 2009, end: 2014},
    {name:"company Six", category: "Finanace", start: 1987, end: 2010},
    {name:"company Seven", category: "Auto", start: 1986, end: 1996},
    {name:"company Eight", category: "Technology", start: 2011, end: 2016},
    {name:"company Nine", category: "Retail", start: 1981, end: 1989},
    {name:"company Ten", category: "Finanace", start: 1990, end: 2020},

]; 

const ages = [33,2,20,16,5,54,21,44,61,13,15,45,25,64,32]; 

// for (let i = 0; i<companies.length; i++)
// {
//     console.log(companies[i]);
// }    

// forEach 
// companies.forEach(function(company){
//     console.log(company);
// });

// companies.forEach(function(company){
//     console.log(company.name);
// });

// companies.forEach(function(company){
//     console.log(company.category);
// }); 

// companies.forEach(function(company){
//     console.log(company.start);
// }); 

// companies.forEach(function(company){
//     console.log(company.end);
// });


// filter 
    // let canDrink = [];
    // for(let i = 0; i<ages.length;i++)
    // {
    //     if(ages[i]>=21)
    //     {
    //         canDrink.push (ages[i]);
    //     }
    // } 

    // console.log(canDrink);


    // const canDrink = ages.filter (function(age){
    //     if (age>=21)
    //     { return true;}
    // });
    // console.log(canDrink); 


    // by using arry function 
    
    // const canDrink = ages.filter (age =>age>=21); 
    // console.log(canDrink);


    // const retailcompanies = companies.filter(function(company){
    //     if (company.category ==='Retail'){
    //         return true;
    //     }
    // }); 
    // console.log(retailcompanies);


    // by using Arrow function 

    // const retailcompanies = companies.filter (company =>company.category ==='Retail');
    // console.log (retailcompanies);  

    // get 80s companies 

    // const eightiescompanies = companies.filter (company=>(company.start>=1980 && company.start <1990));
    // console.log(eightiescompanies);

    // get companies lastedTenYears 

    // const lastedTenYears = companies.filter(company=>(company.end-company.strt>=10));
    // console.log (lastedTenYears); 

    // map 
    // create arry of company names :
    // const companynames = companies.map(function(company){
    //     return company.name;
    // });
    // console.log(companynames);  

    // Create arry of 1:
    // const test = companies.map(function(company){
    //     return 1;
    // })
    // console.log(test); 

    // const testmap = companies.map(function(company){
    //     return `${company.name}[$ {company.start}${company.end}]`;
    // }) ;  
    // console.log(testmap);  

    // const testmap = companies.map(company =>`${company.name} 
    // [${company.start}-${company.end}]`);
    // console.log(testmap);


    // const agesquare = ages.map(age=>Math.sqrt(age));
    // console.log(agesquare); 

    // const agesTimesTwo = ages.map(age=>age*2);
    // console.log(agesTimesTwo);   
    
    // const agemap = ages.map(age=>Math.sqrt(age)).map(age =>age*2);
    // console.log(agemap);  


    // Sort :
    
    // const sortedcomapnaies = companies.sort (function(c1,c2){
    //     if(c1.start > c2.start)
    //     {
    //         return 1;}
    //         else{
    //             return -1;}
    // });
    // console.log(sortedcomapnaies);  

    // const sortedcomapnaies = companies.sort((a,b)=>(a.start > b.start ? 1:-1));
    // console.log(sortedcomapnaies); 

    // sortages 
    // Assending order :- =>(25,29,30)

    // const sortages = ages.sort ();
    // console.log(sortages); 

    // const sortages = ages.sort ((a,b)=>a-b);
    // console.log(sortages);


    // Descending order :-
    // const sortages = ages.sort((a,b)=>b-a);
    // console.log(sortages); 

    // reduce :-
    // let agesum = 0;
    // for (let i =0; i<ages.length; i++)
    // {
    //     agesum = agesum +ages[i];
    // }
    // console.log(agesum); 

    
    // adding by reduce :-
    // const agesum = ages.reduce(function(total,age){
    //     return total + age;
    // },0);
    // console.log(agesum);  

    // const agesum = ages.reduce((total,age)=>total+age,0);
    // console.log(agesum);

    
    // get total years for each companies:-

    // const totalyears = companies.reduce(function(total,company){
    //     return total +(company.end-company.start);
    // },0);
    // console.log(totalyears);

    // commbine methods;

    // const commbined = ages.map(age =>age*2)
    // .filter(age =>age >=40)
    // .sort ((a,b) =>a-b)
    // .reduce ((a,b) =>a+b,0);

    // console.log(commbined);   

    
























