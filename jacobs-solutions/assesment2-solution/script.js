const countDown = () => {
    for (let i = 5; i > 0; i--) {
        console.log(i);
    }
}

//countDown();

function countUp(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

//countUp(4, 10);

function isLong(word) {
    if (word.length > 10) {
        return true;
    }
    return false;
}

// const word1 = '1234567890';
// const word2 = '123456789';
// const word3 = '12345678901';
// console.log(isLong(word1));
// console.log(isLong(word2));
// console.log(isLong(word3));

function whatWaterState(temp) {
    if (temp <= 32) {
        console.log('solid');
    } else if (temp > 32 && temp < 212) {
        console.log('liquid');
    } else if (temp >= 212) {
        console.log('gas');
    }
}

// whatWaterState(0);
// whatWaterState(-30);
// whatWaterState(32);
// whatWaterState(200);
// whatWaterState(212);
// whatWaterState(282);
// whatWaterState('random');

const sandwiches = [
    { type: 'italian', calories: 1000, cost: 7.69, isVegetarian: false },
    { type: 'veggie', calories: 500, cost: 7.00, isVegetarian: true },
    { type: 'meatball', calories: 900, cost: 6, isVegetarian: false },
    { type: 'jackfruit', calories: 650, cost: 10, isVegetarian: true }
];

function makeSandwhich(sandwichArray, type, calories, cost, isVegetarian) {
    const sandwich = { type, calories, cost, isVegetarian };
    sandwichArray.push(sandwich);
}

// makeSandwhich(sandwiches, 'newType', 500, 10.05, true);
// console.log(sandwiches);

function findVegetarianSandwich(sandwichArray) {
    // will return last veg sandwich (not first)
    // let sandwich = sandwichArray[0];
    // for (const sand of sandwichArray) {
    //     if (sand.isVegetarian) {
    //         sandwich = sand;
    //     }
    // }
    // return sandwich;
    return sandwichArray.find(element => element.isVegetarian);
}

// console.log(findVegetarianSandwich(sandwiches));

function findCheapestSandwich(sandwichArray) {
    let sandwich = sandwichArray[0];
    for (let sand of sandwichArray) {
        if (sand.cost < sandwich.cost) {
            sandwich = sand;
        }
    }
    return sandwich;
}

// console.log(findCheapestSandwich(sandwiches));