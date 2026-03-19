//A colony of 800 puffins is increasing at the rate of 4% annually. When will their population first exceed 1200?

const growthRate = 0.04; // 4%
let population = 800; // initial population
let year = 0; // zero, i.e. present time
while (population <= 1200) {
    let tempPopulation = population * (1 + growthRate);
    population = tempPopulation;
    year++;
}
console.log(`Population first goes over 1200 after ${year} years`);
console.log(`Population is: ${population}`);

