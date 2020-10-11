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
        let str = "";
        while (temp != null) {
            str += temp.value + " -> "
            temp = temp.next;
        }
        console.log(str);
    }
    pop(){
        if(this.top == null){
            console.log('already empty');
            return
        }
        let temp = this.top 
        this.top = this.top.next;
        temp = null;
    }
}

let s = new Stack;
s.pop();
s.push(1);
s.push(2);
s.push(3);
s.display();
s.pop();
s.display();