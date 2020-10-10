# Stack DataStructure 
Stack is a dynamic data structure, it works with the Last in fisrt out (LIFO) which means that the first element add is the last elemnt got removed from the stack but why ? <br>
Since In stack you can only access the last elemnt added to it,
 which have two main actions, **Push** and **POP**.
The push for insertion and pop for deletion, 
You can implement the stack using arrays or linked listswe will use linked lists to do it for now.

## Stack as linked lists 
We first must have the node sturct that will define the shaped of the linked list 
```
struct Node {
    int value;
    Node *next;
}
```
here in the Node struct we have 2 properties 
1. value: which will contains the stored data in the stcak elemnt 
2. next Node pointer: this will refres to the next node (elemnt) in the stack 

```
[(data)->][(data)->]......[->(data)] => top
```
* [] this refres to the elemnt in the stack (node)
* -> this refres to the next pointer 
* (data) the data stored 

## Push function
```
void push(t d) {
        Node *temp = new Node;
        temp->val = d;
        temp->next = top;
        top = temp;
        cout << "Added \n";
    }  
```
In this function we are pushing an element in the stack, first we create a temp pointer of type node to store the data we want to push in it.<br>
**First** we need to link the new element with the top element in the stack to make it to top and make the previous element to be the next element to the top element, we done this by making the pointer of the new element refers to the cur top element.<br>
```
temp->next = top;
```
We need to make the new element we pushed in the stack to be the first element in the stack, we done this by make the top pointer refers to the new element<br>
```
top = temp;
```
## POP Function
As we said the stack is working with LIFO term so the elemnt which will be removed is the last elemnt (top), but when we delete this ele (top) where is the top for the stack ? it will be the elem before the top of stack before we delete

**Stack**
```
(1)->(2)->(3) 
```
(3) is the top, So (3) will be removed and the top will be (2) 
So let's jump to the code and see how we can do this 

```
void pop(){
    // we first define a temp node to hold the current Top ele of the stack 
    Node *temp = top;
    // move the top of the stack to the ele before the currentTop in our example it will be (2) 
    top = top->next;
    // destroy the link between the deleted ele and the stack 
    // (1)->(2) (3) this how the stack will be look like
    temp->next = NULL;
    // delete the node from the ram 
    delete temp;
    // (1)->(2) final stack shape 
}
```


