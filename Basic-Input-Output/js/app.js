// console.log(window);
// console.dir(document);
// console.log(console);

// // window
// let x = window.prompt("Input first number");
// let y = window.prompt("Input second number");

// // console.log(x + y);//typeOf ကိုစစ်ကြည့်ရင် string တွေဖြစ်နေတာမို့ concatပဲဖြစ်သွားမယ်

// const result = parseFloat(x) + parseFloat(y);
// // console.log(result);

// // console မှာမဟုတ်ပဲ window မှာထုတ်မယ်ဆိုရင်
// window.alert(`Your result is ${result}`)


// // How old are you?
// // Your birth year = 

// let age = window.prompt("How old are you ?");
// const birthYear = 2025 - parseInt(age);

// window.alert(`Your birth Year is ${birthYear}`)


// const answer = window.confirm("Do you finish your HomeWork ?");
// console.log(answer ? "Yes" : "No");

// _____________________________________________________________________________

// DOM
// console.log(document);

// select an element
// const heading = document.getElementById("heading");
// console.log(heading);
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// heading.innerText = "HI"

// const listGroup = document.getElementById("listGroup")
// console.log(listGroup);
// console.log(listGroup.innerHTML); //child html will include
// console.log(listGroup.innerText);

// const txtInput = document.getElementById("txtInput");
// console.log(txtInput);

// const btn = document.getElementById("btn");
// console.log(btn);
// console.log(btn.innerText);
// console.log(btn.innerHTML);


// change title
// 1.select 
const heading = document.getElementById("heading");
const txtInput = document.getElementById("txtInput");
const btn = document.getElementById("btn");

// 2.set
const changeTitle = () => {
    heading.innerText = txtInput.value;

    //3.clear
    txtInput.value = "";
};

// 4. event listener
// btn.onclick = changeTitle;
// btn.addEventListener("click", changeTitle);