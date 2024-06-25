console.log("First line execut");
console.log("Second line execute");
function hello()
{
    console.log("This wiil execute after some time");
}
setTimeout(hello,3000);
console.log("Third line execute");
console.log("Forth line execute");

export default hello;