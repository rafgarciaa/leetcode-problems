// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {
    let res = new ListNode();
    const head = res;
    let remainder = 0;

    while (l1 || l2 || remainder) {
        let sum = remainder;
        if (l1 && l2) {
            sum += l1.val + l2.val;
        } else if (l1) {
            sum += l1.val;
        } else if (l2) {
            sum += l2.val;
        }

        if (sum > 9) {
            res.val = sum % 10;
            remainder = 1;
        } else {
            res.val = sum;
            remainder = 0;
        }

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        if (l1 || l2 || remainder) {
            res.next = new ListNode();
            res = res.next;
        }
    }

    return head;
};