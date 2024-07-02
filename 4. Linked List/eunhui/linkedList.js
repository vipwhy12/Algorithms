class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.size = 1;
    }

    append(value) {
        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = new Node(value);
        this.size++;
    }

    print_all() {
        let current = this.head;
        let str = '';

        while (current) {
            str += current.data;
            current = current.next;
        }

        return str;
    }

    get_node(index) {
        let count = 0;
        let current = this.head;

        while (count <= index) {
            if (count === index) {
                return current.data;
            } else {
                current = current.next;
                count++;
            }
        }
    }

    add_node(index, value) {
        if (index < 0 || index > this.size) {
            console.log('범위를 벗어났습니다.');
            return;
        }

        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let currentIndex = 0;
            let prev = null;

            while (currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }

            newNode.next = current;
            prev.next = newNode;
        }

        this.size++;
    }

    delete_node(index) {
        let count = 0;
        let current = this.head;
        let prev = null;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (count <= index) {
                if (count === index) {
                    prev.next = current.next;
                } else {
                    prev = current;
                    current = current.next;
                }

                count++;
            }
        }
    }
}

let linked_list = new LinkedList(5);
linked_list.append(12);
linked_list.print_all();
const result = linked_list.get_node(0);
linked_list.add_node(1, 1);
linked_list.print_all();
console.log('-------------------------');
linked_list.delete_node(0);
linked_list.print_all();
