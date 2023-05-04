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


    removeVal(val) {
        if (this.isEmpty()) {
            return false;
        }
        let current = this.head;
        let previous = this.head;
        while (current != null) {
            if (current.data == val) {
                if (current === this.head) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                return true;
            }
            else {
                previous = current;
                current = current.next;
            }

            return false;
        }
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

    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }
}

const emptyList = new SinglyLinkedList();

const singleNodeList = emptyList.insertAtBackMany([1]);
const biNodeList = emptyList.insertAtBackMany([1, 2]);
const firstThreeList = emptyList.insertAtBackMany([1, 2, 3]);
const secondThreeList = emptyList.insertAtBackMany([4, 5, 6]);
const unorderedList = emptyList.insertAtBackMany([-5, -10, 4, -3, 6, 1, -7, -2,]);

const testCase1 = firstThreeList.removeVal(2);
// const testCase2 = emptyList.removeVal(5);
// const testCase3 = emptyList.removeVal(-2);

console.log(testCase1);
// console.log(testCase2);
// console.log(testCase3);