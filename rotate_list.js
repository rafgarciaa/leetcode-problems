// Given a linked list, rotate the list to the right by k places, where k is non - negative.

// Example 1:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL, k = 2
// Output: 4 -> 5 -> 1 -> 2 -> 3 -> NULL
// Explanation:
// rotate 1 steps to the right: 5 -> 1 -> 2 -> 3 -> 4 -> NULL
// rotate 2 steps to the right: 4 -> 5 -> 1 -> 2 -> 3 -> NULL
// Example 2:

// Input: 0 -> 1 -> 2 -> NULL, k = 4
// Output: 2 -> 0 -> 1 -> NULL
// Explanation:
// rotate 1 steps to the right: 2 -> 0 -> 1 -> NULL
// rotate 2 steps to the right: 1 -> 2 -> 0 -> NULL
// rotate 3 steps to the right: 0 -> 1 -> 2 -> NULL
// rotate 4 steps to the right: 2 -> 0 -> 1 -> NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null || k <= 0) {      // account for edge cases
        return head;
    }

    let length = 1;
    let currNode = head;

    while (currNode.next !== null) {    // this loop stops at node 5
        currNode = currNode.next;
        length++;                       // length = 5
    }                                   // currNode will be 5 after this loop executes;

    currNode.next = head;               // point currNode.next to the head; 1 -> 2 -> 3 -> 4 -> 5 -> go back to head;

    let rot = Math.abs(length - (k % length)) - 1; // 5 - (2 % 5) - 1; rot = 2; meaning 2 rotations;

    currNode = head;                    // reset currNode to point to head which is still 1;

    while (rot) {
        currNode = currNode.next;
        rot--;
    }                                   // currNode will be 3 -> 4 -> 5 -> 1 -> 2 -> 3 -> 4 -> so on.... after this loop executes;

    head = currNode.next;               // now just have to set the head to be 4.
    currNode.next = null;               // and set currNode.next to null since 3 is the tail after rotating the linked list 2 times;

    return head;                        // return head
};