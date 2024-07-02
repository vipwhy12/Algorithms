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
}

function get_linked_list_sum(linked_list_1, linked_list_2) {
    const linked_list_1_str = linked_list_1.print_all();
    const linked_list_2_str = linked_list_2.print_all();

    console.log(+linked_list_1_str + +linked_list_2_str);
}

let linked_list_1 = new LinkedList(6);
linked_list_1.append(7);
linked_list_1.append(8);

let linked_list_2 = new LinkedList(3);
linked_list_2.append(5);
linked_list_2.append(4);

get_linked_list_sum(linked_list_1, linked_list_2);
