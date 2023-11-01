//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
};


const createSet = (node) => {
    const set = new Set();

    let newNode = node;

    while (newNode?.val || newNode?.next) {

        set.add(newNode?.val);

        if (newNode?.next) {
            newNode = newNode.next;
        }
        else {
            break;
        };
    };

    return set;
};


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return head;

    const set = createSet(head);
    const iterator = set.values();
    const nodeValsArr = [];

    for (const val of iterator) {
        nodeValsArr.push(val)
    };

    let newHead = new ListNode(val = nodeValsArr[0]);
    let nextNode = newHead;

    for (let i = 1; i < nodeValsArr.length; i++) {
        let newNode = new ListNode(val = nodeValsArr[i]);
        nextNode.next = newNode;
        nextNode = newNode;
    };

    return newHead;
};