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
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        const newNode = new BSTNode(newVal);
        if (this.isEmpty()) {
            this.root = newNode;
            return this;
        }
        //set a runner to check the existing node values
        let current = this.root;
        //check is newVal is > or < any existing nodes
        while (current.data) {
            //if val is smaller, try to move left
            if (newVal < current.data) {
                if (current.left) {
                    current = current.left;
                } else { //if there is no left, put the newNode there
                    current.left = newNode;
                    break; //break once node is placed
                }
            }
            //if val is = or larger, try to move right
            if (newVal >= current.data) {
                if (current.right) {
                    current = current.right;
                } else { //if there is no right, put the newNode there
                    current.right = newNode;
                    break; //break once node is placed
                }
            }
        }
        //after while loop, node will be placed somewhere
        return this;

    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) {
        //early exit if this is the first node
        if (this.isEmpty()) {
            const newNode = new BSTNode(newVal);
            this.root = newNode;
            return this;
        }
        //move our runner by calling the function with a new value for curr
        if (newVal < curr.data) {
            if (curr.left) {
                return this.insertRecursive(newVal, curr.left);
            } else {
                const newNode = new BSTNode(newVal);
                curr.left = newNode;
                return this;
            }
        } else { //this is newVal>=curr.data
            if (curr.right) {
                return this.insertRecursive(newVal, curr.right)
            } else {
                const newNode = new BSTNode(newVal);
                curr.right = newNode;
                return this;
            }
        }

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

fullTree.insert(4231);
fullTree.print();
fullTree.insert(90);
fullTree.print();
fullTree.insert(54);
fullTree.print();
fullTree.insertRecursive(35);
fullTree.print();
fullTree.insertRecursive(9);
fullTree.print();
