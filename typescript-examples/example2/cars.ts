interface Car {
    year: number;
    make: string;
    model: string;
}

const carList: Car[] = [
    {year: 1995, make: 'Ford', model: 'escort'},
    {year: 2018, make: 'Ford', model: 'fusion'},
    {year: 2019, make: 'Jeep', model: 'cherokee'}
];

function filterByMake(make: string): Car[] {
    const newCarList = carList.filter(car => car.make === make); []
    return newCarList;
}

console.log(filterByMake('Ford'));