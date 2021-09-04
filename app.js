let check = document.getElementById("checkbox")

check.addEventListener("click", mycheck)


function mycheck() {
    
    if (check.checked == true) {
        document.querySelectorAll(".price")[0].innerHTML = "&dollar;199.99"
        document.querySelectorAll(".price")[1].innerHTML = "&dollar;249.99"
        document.querySelectorAll(".price")[2].innerHTML = "&dollar;399.99"
        document.querySelectorAll(".btn")[0].classList.add("btn-secondary")
        document.querySelectorAll(".btn")[2].classList.add("btn-secondary")
        document.querySelectorAll(".btn")[1].classList.add("btn-secondary2")
    }
    else {
        document.querySelectorAll(".price")[0].innerHTML = "&dollar;19.99"
        document.querySelectorAll(".price")[1].innerHTML = "&dollar;24.99"
        document.querySelectorAll(".price")[2].innerHTML = "&dollar;39.99"
        document.querySelectorAll(".btn")[0].classList.remove("btn-secondary")
        document.querySelectorAll(".btn")[2].classList.remove("btn-secondary")
        document.querySelectorAll(".btn")[1].classList.remove("btn-secondary2")
    }
}
