num = parseInt(window.localStorage.getItem("num"))

if (num != 0) {
    const data = JSON.parse(localStorage.getItem("tempdiet"))
    for (let i = 0; i < num; i++) {
        const tbody = document.querySelector(".dietario")
        const newRow = document.createElement("tr")
        newRow.className = "row-" + i
        newRow.innerHTML = `
        <td>${data[i].days}</td>
        <td>${data[i].names}</td>
        <td>${data[i].types}</td>
        <td class="number">${data[i].amount}</td>
        <td>${data[i].details}</td>
        `
        tbody.appendChild(newRow)
    }
}

const addScreen = document.getElementById("addDialog")


const name = addScreen.querySelector(".name")
const day = addScreen.querySelector(".day")
const current = addScreen.querySelector(".current")
const detail = addScreen.querySelector(".content")
const type = addScreen.querySelector(".select")

addScreen.addEventListener('close', () => {
    if (addScreen.returnValue === "cancel") {return}
    num = parseInt(window.localStorage.getItem("num"))

    const cur = parseInt(current.value).toLocaleString("ko-KR")

    const tbody = document.querySelector(".dietario")
    const newRow = document.createElement("tr")
    newRow.className = "row-" + num
    newRow.innerHTML = `
        <td>${day.value}</td>
        <td>${name.value}</td>
        <td>${type.value}</td>
        <td class="number">${cur}</td>
        <td>${detail.value}</td>
    `
    tbody.appendChild(newRow)
    const data = {
        days : day.value,
        names : name.value,
        types : type.value,
        details : detail.value,
        amount : current.value
    }
    saveJson(data)
    addScreen.querySelector("form").reset();
    num += 1
    window.localStorage.setItem("num", num)
  });


document.querySelector(".setting").addEventListener("click", () =>{
    document.querySelector("#setting").showModal()
})

document.querySelector(".plusBtn").addEventListener("click", () => {
    addScreen.showModal()
    const sel = addScreen.querySelector("select")
    sel.innerHTML = `<option value="" disabled selected>유형을 선택해주세요</option>`
    const typelist = ["식비", "여가","도서"]
    typelist.forEach((item) => {
        sel.innerHTML += `<option value="${item}">${item}</option>`
    })
    
    day.value = new Date().toLocaleDateString('en-CA');
})

document.querySelector(".minusBtn").addEventListener("click", () => {
    const tbody = document.querySelector(".dietario")
    num = parseInt(window.localStorage.getItem("num"))
    if (num > 0) {
        const rowToDelete = document.querySelector(`.row-${num - 1}`)
        const data = JSON.parse(localStorage.getItem("tempdiet"))
        data.pop()
        localStorage.setItem("tempdiet", JSON.stringify(data))
        if (rowToDelete) { tbody.removeChild(rowToDelete) }
        num -= 1
        window.localStorage.setItem("num", num)
    }

})

function saveJson(json){
    const loadedData = JSON.parse(localStorage.getItem("tempdiet")) || []

    loadedData.push(json)

    localStorage.setItem("tempdiet", JSON.stringify(loadedData))
}


document.querySelector(".st-add").addEventListener("click", () => {
    document.querySelector(".tdlist").innerHTML += `<td>안녕</td>
    <td>안녕</td>`
})

number = document.querySelectorAll(".number")

//숫자 양식 지정.
for (let i = 0; i < number.length; i++) {
    number[i].textContent = parseInt(number[i].textContent).toLocaleString("ko-KR")
}