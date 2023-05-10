/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        return this.root === null ? true : false;
    }


    /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
    contains(searchVal) {
        if (this.isEmpty()) {
            return false;
        }

        let current = this.root;
        //move through the BST based on searchVal and current.data
        while (current) {
            if (current.data === searchVal) {
                return true;
            } else if (current.data < searchVal) {
                current = current.right;
            } else current = current.left
        }
        //if loop ends without exiting, searchVal does not exist
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if (this.isEmpty()) {
            return false;
        }
        //same as .contains(), but call self instead of while loop
        if (current === null) {
            return false;
        }
        else if (current.data === searchVal) {
            return true;
        }
        else {
            return current.data < searchVal ?
            this.containsRecursive(searchVal, current.right)
            : this.containsRecursive(searchVal, current.left);
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) {
        //go all left and all right, return the difference
        if (this.isEmpty()) {
            return this;
        }
        let leftRunner = startNode;
        let rightRunner = startNode;

        while (leftRunner.left) {
            leftRunner = leftRunner.left;
        }
        while (rightRunner.right) {
            rightRunner = rightRunner.right;
        }
        const range = rightRunner.data - leftRunner.data;
        return range;
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
const fullTree = new BinarySearchTree();
fullTree.root = new BSTNode(25);
fullTree.root.left = new BSTNode(15);
fullTree.root.left.left = new BSTNode(10);
fullTree.root.left.left.left = new BSTNode(4);
fullTree.root.left.right = new BSTNode(22);
fullTree.root.left.right.left = new BSTNode(18);
fullTree.root.left.right.right = new BSTNode(24);
fullTree.root.right = new BSTNode(50);
fullTree.root.right.left = new BSTNode(35);
fullTree.root.right.left.left = new BSTNode(31);
fullTree.root.right.left.right = new BSTNode(35);
fullTree.root.right.right = new BSTNode(70);
fullTree.root.right.right.left = new BSTNode(66);
fullTree.root.right.right.right = new BSTNode(90);

console.log(fullTree.containsRecursive(4231));
console.log(fullTree.contains(90));
console.log(fullTree.contains(54));
console.log(fullTree.contains(35));
console.log(fullTree.range());
fullTree.print();