class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer =appetizer;
        this.entree =entree;
        this.dessert=dessert;
    }
}

class Chef {
    constructor(name, dinnerArray=[]){
        this.name = name;
        this.dinnerArray = dinnerArray;
    }

    cookDinner(appetizer, entree, dessert){
        const newDener = new Dinner(appetizer, entree, dessert);
        this.dinnerArray.push(newDener)
        return newDener;
    }

}

// Chef.cookDinner('Stuffed Mushrooms', 'Checken', 'Ice Cream')
// Chef.cookDinner('Jalapeño Poppers', 'beef', 'cake')
// Chef.cookDinner('Caprese Skewers', 'Ramin', 'cake')

const abdul = new Chef('Abdul')
abdul.cookDinner('Stuffed Mushrooms', 'Checken', 'Ice Cream')
abdul.cookDinner('Jalapeño Poppers', 'beef', 'cake')
abdul.cookDinner('Caprese Skewers', 'Ramin', 'cake')

console.log(abdul.dinnerArray.forEach(dinner => {
    console.log(dinner)
}))
