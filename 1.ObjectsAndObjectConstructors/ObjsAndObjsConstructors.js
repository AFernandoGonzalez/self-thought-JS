
let salaries = {
    Jhon: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key]
}

console.log(sum);


// Multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj) => {
    for(let key in obj){
        if(obj[key] > 0 ){
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
menu