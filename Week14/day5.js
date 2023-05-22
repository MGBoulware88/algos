class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    insertAtFront(data) {
        const newHead = new Node(data);

        if (this.isEmpty()) {
            this.head = newHead;
            this.tail = newHead;
            return this;
        }

        this.head.prev = newHead;
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }


    insertAtBack(data) {
        const newTail = new Node(data);

        if (this.isEmpty()) {
            // if no head set the newTail to be both the head and the tail
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;

            this.tail = newTail;
        }
        return this;
    }

    /**
   * Inserts a new node with the given newVal after the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
    // insertAfter(targetVal, newVal) {
    //     const newNode = new Node(newVal);
    //     let runner = this.head;

    //     while (runner != null) {
    //         if (runner.data == targetVal) {
    //             newNode.next = runner.next;
    //             newNode.prev = runner;
    //             runner.next = newNode;
    //         }


    //     }

    //     // runner = this.head;
    //     // runner.data = newVal.data
    //     // then runner.next.prev = newVal
    //     // newVal.next = runner.next
    //     // newVal.prev = runner
    //     // runner.next = newVal
    // }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) {
        if (this.isEmpty()) {
            return false;
        }
        const newNode = new Node(newVal);
        //set runners to move through the list
        let headRunner = this.head;
        let tailRunner = this.tail;
        //condition for headRunner being to the left of tailRunner
        while (headRunner.prev !== tailRunner) {
            console.log("Head Runner is: ", headRunner.data);
            console.log("Tail Runner is: ", tailRunner.data);

            if (headRunner.data === targetVal || tailRunner.data === targetVal) {
                //check which runner found it instead of having 2 if conditionals
                const runner = headRunner.data === targetVal ? headRunner : tailRunner
                //insert the node after runner
                newNode.next = runner;
                newNode.prev = runner?.prev;
                newNode.prev.next = newNode;
                runner.prev = newNode;

                return true;

            } else {
                headRunner = headRunner.next;
                tailRunner = tailRunner.prev;
            }
        }
        return false;
    }



    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }
}

const emptyList = new DoublyLinkedList();

const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
    -5,
    -10,
    4,
    -3,
    6,
    1,
    -7,
    -2,
]);

console.log(unorderedList.insertBefore(6, 12));
console.log(unorderedList.toArray());