number = document.querySelectorAll(".number")

//숫자 양식 지정.
for (let i = 0; i < number.length; i++) {
    number[i].textContent = parseInt(number[i].textContent).toLocaleString("ko-KR")
}

