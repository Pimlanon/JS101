//.filter
const nums = [1, -1, 2, 3];
//filter only positive numbers
const filtered = nums.filter(n => n >= 0); //เอาค่า n ที่มากกว่าหรือเท่ากับ 0
console.log(filtered); //1 2 3

const fruit =['apple','banana','orange','pineapple'];
// filter only positive numbers
const filterSecond = fruit.filter(n => n !== 'apple');    //if it match with this then add to new array
console.log(filterSecond);

randomNumbers = [375, 200, 3.14, 7, 13, 852];​
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(nums => {
    return nums < 250;
  });
  console.log(smallNumbers);