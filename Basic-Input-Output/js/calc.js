// 1. select
const result = document.getElementById("result");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");
const width = document.getElementById("width");
const breath = document.getElementById("breath");
const calcBtn = document.getElementById("calcBtn");
const recordList = document.getElementById("recordList");

// 2. fun
const area = (w, b) => w * b;

// 3.calculate event
calcBtn.onclick = () => {
    // process
    const w = width.valueAsNumber;
    const b = breath.valueAsNumber;
    const a = area(w, b);

    result.innerText = `${w} ft * ${b} ft = ${a} sqft`;

    width.value = "";
    breath.value = ""
}

// 4.clear event
clearBtn.onclick = () => {
    result.innerText = "";
    recordList.innerHTML = ""
};

// 5.store event
storeBtn.onclick = () => {
    recordList.innerHTML += `<li>${result.innerText}<\li>`;
    result.innerText = "";
}