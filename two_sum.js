// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

let twoSum = function (nums, target) {
    // initialize an hash table
    const obj = {};

    // iterate over elements in the array
    for (let i = 0; i < nums.length; i++) {

        // set obj[currentElement] to a variable
        const test = obj[nums[i]];

        // check to see if it already exists. If it is, return the indices.
        if (test !== undefined) return [test, i];

        // set target - currentElement as key in the hash table and it's index as the value.
        obj[target - nums[i]] = i;
    }
};