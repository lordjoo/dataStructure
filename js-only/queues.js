// Here i'm trying to implement stack and queues in JS 
class Node {
    constructor(){
        this.value;
        this.next;
    }
} 

class Stack {
    "use-strict"
    constructor(){
        let arr = {};
        let top = null;
    }
    push(data) {
        let temp = new Node;
        temp.value = data;
        temp.next = this.top;
        this.top = temp;
        console.log("added");
    }
    display(){
        let temp = this.top;
        while (temp != null){
            console.log(temp.value)
            temp = temp.next;
        }
    }
}

class Queue {
    "use-strict"
    constructor(){
        this.rear = null;
        this.front = null;
        this.size = 0;
    }
    enQueue(data){
        let temp = new Node;
        temp.value = data;
        temp.next = null;
        if(this.size == 0){
            this.front = this.rear = temp ;
        } else {
            this.rear.next = temp;
            this.rear = temp;
        }
        this.size++;
        console.log("added");
    }

    display(){
        let temp = this.front;
        let str = "";
        while (temp != null) {
            str += temp.value + " <- "
            temp = temp.next
        }
        console.log(str);
    }
    deQueue(){
        if(this.size==0){
            console.log('already empty');
            return
        }
        let temp = this.front;
        this.front = this.front.next;
        temp=null;
        // temp can be garbage collected
    }
}


let q = new Queue;
q.deQueue();
q.display();

q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);
q.display();
q.deQueue();
q.display();

