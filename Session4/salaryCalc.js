const taxYearEnded = true;
let baseSalary = 20000;
let numberOfSales = 1000;
const bonus = 1000;
let commissionRate = 3.0;

if (taxYearEnded) {
   let totalSalary = baseSalary + (numberOfSales * commissionRate);
   // only give bonus when sales exceed 500:
   if (numberOfSales > 500) {
      totalSalary += bonus;
      console.log(`Total salary after bonus: ${totalSalary}`);
   } else {
      console.log(`Total salary: ${totalSalary}`);
   }
}

// sales person 2:
numberOfSales = 300;
baseSalary = 25000;
commissionRate = 2.0;

if (taxYearEnded) {
   let totalSalary = baseSalary + (numberOfSales * commissionRate);
   // only give bonus when sales exceed 500:
   if (numberOfSales > 500) {
      totalSalary += bonus;
      console.log(`Total salary after bonus: ${totalSalary}`);
   } else {
      console.log(`Total salary: ${totalSalary}`);
   }
}