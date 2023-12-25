// let result = (function(){
//     return "Hello World"
// });

// console.log(result());

// let test = function(x){
//     return x * 10;
// }

// const test2 = (x) => x * 10;

// console.log(test(90))
// console.log(test2(90))

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {
//     test: 'one'
//     , score: 55
//         }, ['one', 'two']];

// theList[6].score //55
// theList[7][1] //two

// // let temp = Array.isArray(theList);
// theList.push("pushed")
// theList.pop();
// theList.shift()
// temp = theList.unshift("unshift")
// temp = theList.splice(1, 2)
// console.log(theList)
// console.log(temp)

// let myArr2 = [2, 5, 3, 7, 1, 'word'];
// myArr2.sort();
// console.log(myArr2)

// if(myArr2.indexOf('wor')!== -1){
//     console.log("item found")
// } else {
//     console.log("item not found")
// }
// myArr3 = [1, 4, 9 , 3, 2, 78, 26, 8];
// let newArr = theList.concat(myArr2);
// console.log(newArr);

// let found = myArr3.find(function(el){
//     console.log(el);
//     return el > 7;
// })

// let result2 = myArr3.filter(function(num){
//     console.log(num);
//     return num > 25
// })

// console.log(result2)

// let x = 0;
// while(x < 5){
//     console.log("while loop " + x)
//     x++;
// }

// let i = 0;
// do {
//     console.log("do while" + i)
//     i++
// } while(i < 5);

// const myWork = [];
// for(let x = 1; x < 10; x++){
//     let stat = x%2 ? true : false;
//     let temp = {name: `Lesson ${x}`, status: stat}
//     myWork.push(temp)
// }
// console.log(myWork);
// const getTrue = myWork.filter(function(el){
//     return el.status;
// })

// console.log(getTrue);

// const obj = {a:1, b:2, c:3};
// console.log(obj)
// for(let prop in obj){
//     console.log(prop, obj[prop])
// }

// const arr = ["a", "b", "c"]

// for (let x= 0; x < arr.length; x++){
//     console.log(x, arr[x])
// }

// for(el in arr ){
//     console.log(el, arr[el])
// }

// arr.forEach(function(el, index, array){
//     console.log(index, el);
// })

// const numArray = [2, 4, 76, 28, 10];

// let mapArray = numArray.map(function(x){
//     console.log(x)
//     return x * 5;
// })

// console.log(mapArray)

// const temp = document.querySelector('h1');
// console.log(temp)
// temp.setAttribute('class', 'red');
// temp.remove();

// const links = document.querySelectorAll('a');

// links.forEach(function(el){
//     console.log(el.getAttribute('href'));
//    el.setAttribute('href', 'http://www.discoveryvip.com')
// })


// listItems.forEach(function(item, cnt){
//     item.id = "li" + cnt;
//     item.textContent = 'list item #' + cnt;
//     if(item.getAttribute('class')){
//     console.log(item.getAttribute('class'))
//     }
// })

// const listItems = document.querySelectorAll('li');
// console.log(listItems);
// listItems.forEach(function(el, index){
//     console.log(el.className);
//     el.textContent = el.className ? el.className : "No Class";
//     el.classList.add('test');
//     el.classList.toggle('test1');
//     el.classList.replace('first', 'test3')
//     console.log(el.classList.contains('first'))
// })

// const el = document.querySelector('div.first');
// console.dir(el)

// for(let i = 0; i <el.children.length; i++){
//     console.log(el.children[i].textContent)
// }

// const div = document.createElement('div');
// div.style.backgroundColor = "blue";
// div.id = "New One";
// div.style.padding = "35px";
// div.style.fontSize = "45px";
// div.textContent = "hello";
// const textInside = document.createTextNode("Hello world")
// div.appendChild(textInside)
// document.body.appendChild(div);
// console.log(div)

// const h1 = document.querySelector("h1")
// document.body.insertBefore(div, h1);

// const temp = document.createElement('div');
// temp.classList.add("red");
// temp.id = "test";


// const tempText = document.createTextNode("Hello World2")
// temp.appendChild(tempText);
// console.log(temp)
// temp.textContent = "Hello, World"

// const myId = document.querySelector('#myId');
// myId.appendChild(temp)

// const h1 = document.getElementById("myId")

// h1.addEventListener('click', function(){
//     console.log('click')
// })

// h1.addEventListener("click", myFun);

// function myFun(){
//     console.log('clicked')
// }

// const listItems = document.querySelectorAll(".listItem")
// listItems.forEach(function(listItem){
//     listItem.addEventListener('click', function(){
//         listItem.classList.toggle('red')
//     })
// })

// const imgList = document.querySelectorAll("img");

// for(let i = 0; i< imgList.length; i++){
//     // imgList[i].addEventListener('click', function(){
//     //     console.log(this.src)

//     //     window.open(this.src, "myImage", "resizeable=yes, widtrh=500, height=500")
//     // })
//     imgList[i].onclick =function(){
//         console.log(this.src)

//         window.open(this.src, "myImage", "resizeable=yes, widtrh=500, height=500")
//     }
// }

// let clicker = document.getElementById('clicker');
// let inputEl = document.querySelector('input');
// let ulList = document.querySelector('ul');



// clicker.addEventListener('click', function(){
//     if(inputEl.value.length > 3){
//     let li = document.createElement('li')
//     let tempNode = document.createTextNode(inputEl.value)
//     li.appendChild(tempNode);
//     ulList.appendChild(li);
//     }
// })

// const btn = document.querySelector(".bg");
// btn.addEventListener('click', function(){
//     let myColor = "rgb("+random(255)+ ","+random(255)+","+random(255)+")";
//     document.body.style.backgroundColor = myColor;
// })

// const spans = document.querySelectorAll("span");
// spans.forEach(function(el, index){
//     el.style.padding = "35px";
//     el.style.border = "1px solid black";
//     el.style.display = "block"
//     el.addEventListener("click", function(e){
//         e.target.style.backgroundColor = ranColor();
//     })
// })
// function ranColor(){
//     return "rgb("+random(255)+ ","+random(255)+","+random(255)+")";
// }
// function random(num){
//     return Math.floor(Math.random()* (num + 1))
// }

// let keys = {};
// document.addEventListener("keydown", pressKeyOn)
// document.addEventListener("keyup", pressKeyOff)

// function pressKeyOn(event){
//     event.preventDefault();
//     keys[event.key] = true;
//     console.log(keys)
// }
// function pressKeyOff(event){
//     event.preventDefault();
//     keys[event.key] = false;
//     console.log(keys)
// }

// const ele = document.querySelector("input");
// ele.addEventListener("keypress", addItem);

// function addItem(event){
//     console.log(event)
//     document.querySelector("h1").textContent = ele.value;
//     if(ele.value.length > 5){
//         ele.style.backgroundColor = "red"
//     } else {
//         ele.style.backgroundColor = "white"
//     }
//     if(event.keyCode === 13 && ele.value.length > 1){
//         document.querySelector("h1").style.backgroundColor = "yellow"
//     }
// }

// const ul = document.querySelector("ul");
// document.addEventListener("keydown", function(e){
//     let li = document.createElement("li");
//     let temp = e.key + "(" + e.keyCode + ")";
//     let textC = document.createTextNode(temp);
//     li.appendChild(textC);
//     ul.appendChild(li);
// })

// const lis = document.querySelectorAll("li");
// for (let x = 0; x < lis.length; x++){
//     lis[x].addEventListener('mouseenter', function(){
//         this.classList.add("red");
//         this.style.backgroundColor = "yellow"
//     })
//     lis[x].addEventListener('mouseleave', function(){
//         this.classList.remove("red");
//         this.style.backgroundColor = "";
//     })

// }

// const inputSelect = document.querySelector("input[name='newItem']");
// const mainList = document.querySelector("ul");
// const allListItems = document.querySelectorAll("li");
// for(let x =0; x < allListItems.length; x++){
//     allListItems[x].addEventListener("click", myList);
// }

// inputSelect.addEventListener("keypress", function(event){
//     if(event.keyCode === 13){
//         makeNew();
//     }
// })

// function makeNew(){
//     let li = document.createElement('li');
//     li.addEventListener("click", myList);
//     let textValue = inputSelect.value;
//     inputSelect.value = "";
//     let tempNode = document.createTextNode(textValue);
//     li.appendChild(tempNode)
//     mainList.appendChild(li)
// }
// function myList(){
//     let temp = this.classList.toggle("red");
//     if(temp){
//         let span = document.createElement("span");
//         span.textContent = "X";
//         span.addEventListener("click", function(){
//             this.parentElement.remove();
//         })
//         this.appendChild(span);
//     } else {
//         this.getElementsByTagName("span")[0].remove();
//     }
// }

// const outputEl = document.querySelector("section");
// const els = document.querySelectorAll('div');

// for(let x = 0; x < els.length; x++){
//     let el = els[x];
//     el.style.border = "1px solid red";
//     el.style.width = "100px";
//     el.style.padding = "20px";
//     el.v = (x+1);
//     el.addEventListener("click", capture, true)
//     el.addEventListener("click", bubble, false)
// }

// function output(msg){
//     outputEl.innerHTML += `${msg}<br>`
// }

// function bubble(){
//     output('bubble:'+ this.v)
// }
// function capture(){
//     output('capture:'+ this.v)
// }

// let myNum1 = 10000.3244;
// let myNum2 = "1000";
// Number(myNum2);
// console.log(myNum1)
// console.log(myNum2)

// function getRan(min, max){
//     min= Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random()*(max - min)) + min;
// }

// const arr = [1, 2, 3];

// function member(val){
//     return(arr.includes(val)? "yes" : "no")
// }

// const arr = ["hello", "welcome", "bye bye"];
// let temp = randomItem(arr);
// let mes = document.createTextNode(temp);
// document.body.appendChild(mes)
// function randomItem(arr){
//     // return arr[1];
//     let temp = Math.floor(Math.random()* arr.length);
//     return arr[temp]
// }

// document.querySelector("button").addEventListener("click", function(){
//    document.body.style.backgroundColor = ranColor();
// })

// function ranColor(){
//   return "#" + Math.random().toString(16).substr(-6);
// }

// window.addEventListener('DOMContentLoaded', function(e){
//     console.log('ready')
// })

// let player = {
//     speed: 100,
//     x: 100,
//      y: 100
// }

// window.addEventListener("DOMContentLoaded", build);

// document.addEventListener('keydown', function(e){
//     let key = e.keyCode;
//     if(key === 37){player.x -= player.speed}
//     if(key === 38){player.y -= player.speed}
//     if(key === 39){player.x += player.speed}
//     if(key === 40){player.y += player.speed}
//     player.el.style.left = player.x + "px";
//     player.el.style.top = player.y + "px";
// })

// function build(){
//     player.el = document.createElement('div');
//     player.x = 100;
//     player.y = 100;
//     player.el.style.position = "absolute";
//     player.el.style.width = "100px";
//     player.el.style.height = "100px";
//     player.el.style.backgroundColor = "red";
//     player.el.style.top = player.x + "px";
//     player.el.style.left = player.y + "px";
//    document.body.appendChild(player.el);
// }

// let d = new Date();
// d = Date.now()
// d = new Date(2020, 10,  15, 5, 10, 30, 40);
// d = new Date(10000000);
// d = d.toDateString();
// d = new Date("2020-12-31")
// d = new Date("2020/12/31")
// val = d.getDate();
// val = d.getDay()
// val = d.getTime()
// val = d.getMilliseconds();
// val = d.getUTCMilliseconds();
// val = d.getHours();

// let days = 100;
// const newDate = new Date(Date.now() + (days*24*60*60*1000));
// console.log(newDate)

// console.log(val)

// const birthday = new Date(1975, 1, 7);
// console.log(birthday);

// const myObj = {first: "Akihiko", last: "Nakamura"}
// console.log(myObj)
// let myStr = JSON.stringify(myObj);
// console.log(myStr);
// let newObj = JSON.parse(myStr);
// console.log(newObj.first);
// console.log(newObj.last);

// const myObj = {first: "Akihiko", last: "Nakamura"}

// let temp = JSON.stringify(myObj);

// let nObj = JSOBN.parse(localStorage.getItem('obj'));
// console.log(nObj)
// console.log(nObj)
// localStorage.setItem('obj', temp)
// if(localStorage.getItem('num')){
//     let cnt = localStorage.getItem('num');
//     cnt = Number(cnt);
//     cnt++;
//     localStorage.setItem('num', cnt);
// } else {
//     localStorage.setItem('num', 1);
// }

// console.log(localStorage.getItem('num'));

// const intervalID = window.setInterval(myCallback, 500, "interval");
// const timeoutID = window.setTimeout(myCallback, 500, 'setTimeout');
// const el = document.querySelector('div');

// let y = 10;
// const inTimer = window.setInterval(counter, 100);
// function counter(){
//     el.textContent = y;
//     y--;
//     if(y<0){
//         clearInterval(inTimer);
//     }
// }
// function myCallback(mes){
//     console.log(mes);
// }

// function stopInterval(){
//     clearInterval(intervalID);
// }

// let x = 0;
// el.style.width = "100px";
// el.style.height = "100px";
// el.style.backgroundColor = "red";
// el.style.fontSize = "3em";
// function step(){
//     x++;
//     el.style.transform = 'translateX('+x+'px)';
//     if (x < 450){
//         window.requestAnimationFrame(step);
//     }
// }
// window.requestAnimationFrame(step);

// let url = window.location.href;
// console.log(url);
// let encodeurl = encodeURIComponent(url);
// let decodeurl = decodeURIComponent(encodeurl);
// console.log(encodeurl);
// console.log(decodeurl);

// let url2 = 'http://www.discoveryvip.com/?id=500&more=hello world';
// console.log(encodeURI(url2))
// console.log(decodeURI(encodeURI(url2)));
// console.log(encodeURIComponent(url2));

// let myStr = "Hello World 12 JavaScript 123 this works I love JavaScript 44";

// let reg = /(\w+)\s(\w+)/;
// let temp1 = myStr.replace("Hello", "People");
// temp1 = myStr.replace(reg, "Bye People")
// console.log(temp1);
// console.log(myStr.match(/J/))
// console.log(myStr.match(/J/gi))
// console.log(/JavaScript/.test(myStr))
// console.log(/[0-9]/.test(myStr))
// console.log(/\d+/.exec(myStr));
// let myArr = ["one", "two", "three", "four", "two"];
// let temp2 = myArr.toString();
// let temp3 = myArr.join('.....')
// console.log(temp3.search(/two/))
// console.log(temp3.match(/two/gi))

// let myStr2 = "HelloWorld JavaScript 123 this works sometestemail@gmail.com  I love temail@gmail.com JavaScript 44 sample@email.com";
// let exp2 = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let emailData = myStr2.match(exp2);
// console.log(emailData);
// for(let x = 0; x < emailData.length; x++){
//     console.log(emailData[x]);
// }

//  function Person(first, last){
//     this.firstName = first;
//     this.lastName = last;
//  }

//  Person.prototype.fullName = function(){
//     return this.firstName + " " + this.lastName;
//  }
//  const me = new Person("Aki", "Nakamura");
//  console.log(me)
//  console.log(me.fullName())

//  Date.prototype.addDays = function(days){
//     return new Date(this.valueOf() + days*864e5)
//  }

//  console.log(new Date().addDays(7))

// const el = document.createElement('input');
// el.setAttribute('type', 'text');
// el.setAttribute('value', '10');

// document.body.appendChild(el);
// const btn = document.querySelector('button');
// btn.addEventListener('click', cal);

// function cal(){
//     let num =   el.value;
//     try {
//         if(num === "") throw "No Value";
//         if(isNaN(num)) throw "not a number";
//         document.querySelector('div').textContent = num * 10;
//     } catch(error){
//         document.querySelector('div').textContent = error;
//     }
//     finally {
//        el.value = "";
//     }

// }

// let xhr = new XMLHttpRequest();
// const url = "https://api.chucknorris.io/jokes/random";

// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState == 4 && xhr.status == 200){
//         console.log(xhr.response)
//         let joke = JSON.parse(xhr.response);
//         console.log(joke.value)
//         document.querySelector('div').innerHTML = joke.value + '<br><img src="'+joke.icon_url+'">';
//     }
// }
// xhr.open("GET", url);
// xhr.send();

// console.log(xhr)

// const url = "https://randomuser.me/api/";
// const btn = document.querySelector('button');
// const el = document.createElement('input');
// const output = document.querySelector('div');
// el.setAttribute('type', 'number');
// el.setAttribute('value', 5);
// document.body.appendChild(el);
// btn.addEventListener('click', getUsers);

// function getUsers(){
//   let temp = url + '?results=' + el.value;
//     fetch(temp)
//     .then(function(rep){
//         return rep.json();
//     })
//     .then(function(data){
//         console.log(data.results);
//         let html;
//         for(let x = 0; x < data.results.length; x++){
//             console.log(data.results[x]);
//             html += data.results[x].name.first + '' + data.results[x].name.last + '<br>';
//         }
//         output.innerHTML = html;
//         document.querySelector('div').textContent = data.value;
//     })
// }

const url = "https://jsonplaceholder.typicode.com/todos";
const output = document.querySelector('div');
loadJSON();

function loadJSON(){
    fetch(url).then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        for(let x = 0; x< data.length; x++){
            let div = document.createElement('div');
            div.style.color = data[x].completed ? "green" : "red";
            div.textContent= data[x].id + "."+ data[x].title;
            output.appendChild(div);
        }
    })
}