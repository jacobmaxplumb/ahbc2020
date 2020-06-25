// 1
interface Mountain {
    name: string;
    height:  number;
}

// 2
let mountains: Mountain[];

// 3
mountains = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
]

// 4
function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallest: Mountain = mountains[0];
    mountains.forEach(m => {
        if (tallest.height < m.height) {
            tallest = m;
        }
    });
    return tallest.name;
}

// 5
const tallestName = findNameOfTallestMountain(mountains);

// 6
console.log(tallestName);
