class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top and removed items are removed from the top .
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.top = null;
    }

    /**
     * Adds a new given item to the top.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top.
     * @returns {number} The new length of this stack.
     */
    push(val) {
        const node = new StackNode(val);

        if (this.isEmpty()) {
            this.top = node;
            return true;
        }

        node.next = this.top;
        this.top = node;
        return true;
    }

    /**
     * Removes the top item (the head).
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {any} The top item of the stack.
     */
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        //move top to next, remove next pointer and move top pointer
        const removedTop = this.top;
        this.top = removedTop.next;
        removedTop.next = null;

        return removedTop;
    }

    /**
     * Returns the top item of the stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {any} The top item.
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        } else return this.top;
    }

    /**
     * Determines if the stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {boolean}
     */
    isEmpty() {
        if (this.top === null) {
            return true;
        } else return false;
    }

    /**
     * Gets the count of items in the stack.
     * - Time: O(n) linear, n = list length.
     * - Space: O(1).
     * @returns {number} The total number of items.
     */
    size() {
        if (this.isEmpty()) {
            return 0;
        } else {
            let count = 0;
            const tempStack = new Stack();
            while (this.top) {
                //pop removes & returns the top, reassigns to removedTop.next
                tempStack.push(this.pop());
                count++;
            }
            //rebuild the og stack
            while (tempStack.top) {
                this.push(tempStack.pop());
            }
            return count;
        }
    }

    // Time: O(n) linear, n = list length
    // Space: O(n)
    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }
}


// comment out after finishing push()
const newStack = new Stack();
newStack.push(5)
newStack.push(4)
newStack.push(3)
newStack.push(2)
newStack.push(1)

console.log(newStack.size());