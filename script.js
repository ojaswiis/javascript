// let fname=[1,2,3]
// let sum=fname[0]+fname[1]+fname[2]
// console.log(sum)

// let fname=[3,6,78,98,5]
// console.log(fname.length)

//let fname=["tejaswi","ojaswi"]
// console.log(fname.toString())

//fname.push("ojaswi")
//console.log(fname)

// let num=[1,2,3,4,5]
// let doublednum= num.map(item => item*2 );
// console.log(doublednum)

// let fname=["suchana","ojaswi"]
// fname.pop()
// console.log(fname)

// let num=[1,3,5]
// let numm= num.map(item=>item*2)
// console.log(numm)

// let num=[1,2,4,6,7,8,9,33]
// let evenar= num.filter(item=> item%2===0)
// console.log(evenar)

// let num=[1,2,3,4]
// let numm=num.map(item=>item*2)
// console.log(numm)

// const numbers=[2,4,6,8];
// const doubled= numbers.map(num=>num*2);
// console.log(doubled);

// let fname="ojaswi"
// let uppercase=fname.toUpperCase()
// console.log(uppercase)

// let names=["ojaswi","suchana","sikshya","surakshya"]
// let uppercase=names.map(item=>item.toUpperCase())
// console.log(uppercase)

// let fname=["aj","john","sujan","sanchit"]
// let names=fname.filter(item =>item.length>4)
// console.log(names)

// let num=[1,2,3,4,5]
// let numm=num.filter(item => item<5)
// let doubled=numm.map(n=>n*2)
// console.log(doubled)


// let language=["python","java","sujan"]
//  let lee=language.map(item=> item[0])
// console.log(lee)

// num=[0,-3,4,4,-7]
//  let numm= num.filter(item=>item<0)
// console.log(numm)

// let variableh1=document.querySelector("h1")
// console.log(variableh1)

// let variableh1=document.querySelector("h1")
// variableh1.innerHTML="new year new me"

//let paragraph=document.querySelector("#para")
// let heading3=document.querySelector(".heading3")
// console.log(paragraph,heading3)
//paragraph.innerHTML="my name is suchana"

//let hello=document.querySelector(".para")
//parag.style.backgroundColor = "red"
 //hello.classList.add("sample")

 //let btn=document.querySelector(".btn")
 //let hello=document.querySelector(".para")
 //function changecontent(){
 // hello.style.backgroundColor="red"
// }
 //btn.addEventListener("click",changecontent)
// btn.addEventListener("click",function(){
 // hello.innerHTML="asdfg"
 //})
// btn.addEventListener("click",function(){
  //alert("hello")
 //})
//function hello()
// {
//   console.log("hello i am ojaswi")
// }
// hello()


let todoinput=document.querySelector(".todo-input");
let btn=document.querySelector(".btn");
let todos=document.querySelector(".todos")

// console.log(todoinput)
// console.log("btn")
// console.log("todos")


btn.addEventListener("click",function(){
  // console.log("hello")


let todovalue= todoinput.value 
let Li = document.createElement("Li")
let delbtn =document.createElement("button")
delbtn.innerHTML="delete todo"
todos.appendChild(delbtn)
console.log(delbtn)

Li.innerHTML=todovalue
todos.appendChild(Li)
delbtn.addEventListener("click",function(){
  todos.removeChild(Li)
  todos.removeChild(delbtn)
})
//console.log(Li)
})

