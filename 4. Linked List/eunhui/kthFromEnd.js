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

    get_node_last(index) {
        if (index < 0 || index >= this.size) {
            return '범위를 벗어났습니다.';
        }

        let targetIndex = this.size - index - 1;
        let current = this.head;
        let count = 0;

        while (count < targetIndex) {
            current = current.next;
            count++;
        }

        console.log(current.data);
    }
}

let linked_list_q1 = new LinkedList(6);
linked_list_q1.append(7);
linked_list_q1.append(8);
linked_list_q1.get_node_last(2);
