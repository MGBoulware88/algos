
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


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
    * Creates a new node with the given data and inserts that node at the front
    * of this list.
    * - Time: (?).
    * - Space: (?).
    * @param {any} data The data for the new node.
    * @returns {SinglyLinkedList} This list.
    */
    insertAtFront(data) {
        //instantiate the node
        const newNode = new ListNode(data);
        //check if this is the first node in the list
        if (isEmpty()) {
            this.head = newNode;
            return this;
        }
        //if not, make it the first node and reassign head to this new node
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeHead() {
        //hold the current head in a var
        const oldHead = this.head;
        //reassigns the head to 2nd node
        this.head = this.head.next;
        //deletes the pointer from previous head
        oldHead.next = null;
        return oldHead.data;
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        //create the vars needed to traverse the list
        let runner = this.head;
        let count = 0;
        let sum = 0;
        //as we stop at each node, add to count and sum, reassign our runner
        while (runner != null) {
            count++;
            sum += this.data;
            runner = runner.next;
        }
        return (sum / count)
    }




    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    oArr() {
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

console.log(biNodeList.removeHead());
  // Print your list like so:
  // console.log(firstThreeList.toArr());