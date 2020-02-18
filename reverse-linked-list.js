// ------PROBLEM

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

//--Pseudocode

//We know that a linked list loses it's previous node
// we will need to reassign previous node before traversing through the linked list
//we should use a loop to traverse through until we reach the beginning or hit null
//as long as head does not equal null.

//---solution

function reverseLL(head) {
    let prev = null;
    while(head){
        let nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
     
    return prev; 
 };

 reverseLL(head);



//---time and space complexity

// Time complexity : O(n). Assume that n is the list's length, the time complexity is O(n).

// Space complexity : O(1).
