var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObj = { name:'Bill'};
var anythingVariable: string = "Hey";
var otherVariable: number = 25;
var arrayOne: boolean[] = [true, false, true, true];
var arrayTwo: any[] = [1, 'abc', true, 2];
var otherObj = { x: 5, y: 10 };
// object constructor
var MyNode = (function () {
    function MyNode(val: number): void{
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function (): void{
        this._priv = 10;
    };
    return MyNode;
}());
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction(): void{
    console.log("Hello World");
    return;
}
function sendingErrors(): never{
	throw new Error('Error message');
}
