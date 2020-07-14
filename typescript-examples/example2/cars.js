var carList = [
    { year: 1995, make: 'Ford', model: 'escort' },
    { year: 2018, make: 'Ford', model: 'fusion' },
    { year: 2019, make: 'Jeep', model: 'cherokee' }
];
function filterByMake(make) {
    var newCarList = carList.filter(function (car) { return car.make === make; });
    [];
    return newCarList;
}
console.log(filterByMake('Ford'));
