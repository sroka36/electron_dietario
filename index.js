num = parseInt(window.localStorage.getItem("num"))

if (num != 0) {
    for (let i = 0; i < num; i++) {
        const tbody = document.querySelector(".dietario")
        const newRow = document.createElement("tr")
        newRow.className = "row-" + i
        newRow.innerHTML = `
        <td>2025-12-27</td>
        <td>.</td>
        <td>.</td>
        <td class="number">3000</td>
        `
        tbody.appendChild(newRow)
    }
}

const addScreen = document.getElementById("addDialog")


function closeDialog() {
    
    num = parseInt(window.localStorage.getItem("num"))

    const cur = parseInt(document.querySelector(".current").textContent)

    const tbody = document.querySelector(".dietario")
    const newRow = document.createElement("tr")
    newRow.className = "row-" + num
    newRow.innerHTML = `
        <td>2025-12-27</td>
        <td>.</td>
        <td>.</td>
        <td class="number">${cur}</td>
    `
    tbody.appendChild(newRow)
    num += 1
    window.localStorage.setItem("num", num)
    addScreen.close()
}



document.querySelector(".plusBtn").addEventListener("click", () => {
    
    
    addScreen.showModal()

}
)
document.querySelector(".minusBtn").addEventListener("click", () => {
    const tbody = document.querySelector(".dietario")
    num = parseInt(window.localStorage.getItem("num"))
    if (num > 0) {
        const rowToDelete = document.querySelector(`.row-${num - 1}`)
        if (rowToDelete) { tbody.removeChild(rowToDelete) }
        num -= 1
        window.localStorage.setItem("num", num)
    }

}
)

number = document.querySelectorAll(".number")

//숫자 양식 지정.
for (let i = 0; i < number.length; i++) {
    number[i].textContent = parseInt(number[i].textContent).toLocaleString("ko-KR")
}