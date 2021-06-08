/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let cycleLen = findCycleLength(head);
  if (cycleLen === 0) return null;
  let pointer1 = head, pointer2 = head;
  while (cycleLen > 0) {
      pointer2 = pointer2.next;
      cycleLen--;
  }
  while (pointer1 !== pointer2) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
  }

  return pointer1;

};

var findCycleLength = function(head) {
  let slow = head, fast = head;
  while (fast !== null && fast.next !== null ) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) {
          let current = slow;
          slow = slow.next;
          let cycleLength = 1;
          while (slow !== current) {
              slow = slow.next;
              cycleLength++;
          }
          return cycleLength;
      }
  }
  return 0;
}