
let form= document.querySelector('#form1');
let inputs=form.querySelectorAll('input');

function getFormvalue() {
    //Write your code here
	let arr=[];
	
inputs.forEach((input)=>{
	arr.push(input.value);
})
arr.pop();
alert(arr.join(" "));
	return;
}
