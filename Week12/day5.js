
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null ? true : false
    }


    insertAtBack(data) {
        const newElement = new ListNode(data);

        if (this.head == null) {
            this.head = newElement;
            return this;
        }

        let runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = newElement;
        return this;
    }


    /**
     * Concatenates the nodes of a given list onto the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {SinglyLinkedList} addList An instance of a different list whose
     *    whose nodes will be added to the back of this list.
     * @returns {SinglyLinkedList} This list with the added nodes.
     */
    concat(addList) {
        //get to the end of this list
        //check if lists are empty
        if (this.isEmpty()) {
            this;
        }
        if (addList.isEmpty()) {
            return this;
        }

        let current = this.head;
        //stop at the end of this list
        while (current.next) {
            //reassign current until it becomes null
            current = current.next;
        }
        //add all the nodes from addList to this list starting with the head
        //the nodes in addList should already be pointing with .next so we just attach the head to add it to this.SLL
        current.next = addList.head;
        return this;
    }

    /**
     * Finds the node with the smallest data and moves that node to the front of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {SinglyLinkedList} This list.
     */
    moveMinToFront() {
        //check each .data and store location and data
        //when done find smallest
        //update pointer of that node to point to .head node
        //update .head to that node
        //update pointer to this node to the node behind it

        if (this.isEmpty()) {
            return this;
        }

        let current = this.head;
        let minValNode = this.head;
        let nodeBeforeMin = null;

        while (current) {
            if (current.next.data < minValNode.data) {
                minValNode = current.next;
                nodeBeforeMin = current;
            }
            current = current.next;
        }
        nodeBeforeMin.next = minValNode.next;
        this.head = minValNode;
        return this;
    }
    // EXTRA
    /**
     * Splits this list into two lists where the 2nd list starts with the node
     * that has the given value.
     * splitOnVal(5) for the list this(1=>3=>5=>2=>4) will change list to (1=>3)
     * and the return value will be a new list containing (5=>2=>4).
     * If the value is not in the list return -1
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value in the node that the list should be split on.
     * @returns {SinglyLinkedList} The split list containing the nodes that are
     *    no longer in this list.
     */
    splitOnVal(val) {
        if (this.isEmpty()) {
            return null;
        }

        if (this.dead.data === val) {
            const newList = new SinglyLinkedList();
            newList.head = this.head.next;
            this.head.next = null;
            return newList;
        }

        let current = this.head;
        let prev = null;

        while (current != null && current.data != val) {
            prev = current;
            current = current.next;
        }

        if (current == null) {
            return null;
        }

        const newList = new SinglyLinkedList();
        newList.head = current;
        prev.next = null;

        return newList;
    }

    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }


    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }
}

/******************************************************************* 
Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
*/
const emptyList = new SinglyLinkedList();

const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new SinglyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);


// Print your list like so:
console.log(firstThreeList.toArr());

  // uncomment when finished with concat
  // firstThreeList.concat(secondThreeList);
  // console.log(firstThreeList.toArr());