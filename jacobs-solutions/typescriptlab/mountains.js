var mountains;
mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var tallest = mountains[0];
    mountains.forEach(function (m) {
        if (tallest.height < m.height) {
            tallest = m;
        }
    });
    return tallest.name;
}
var tallestName = findNameOfTallestMountain(mountains);
console.log(tallestName);
//# sourceMappingURL=mountains.js.map