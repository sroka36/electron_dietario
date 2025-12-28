number = document.querySelectorAll(".number")

//숫자 양식 지정.
for (let i = 0; i < number.length; i++) {
    number[i].textContent = parseInt(number[i].textContent).toLocaleString("ko-KR")
}

function plusDietario(){
    const tbody = document.querySelector(".dietario")
    const newRow = document.createElement("tr")
    newRow.innerHTML = `
        <td>2025-12-27</td>
        <td>.</td>
        <td>.</td>
        <td class="number">3000</td>
    `
    tbody.appendChild(newRow)
}