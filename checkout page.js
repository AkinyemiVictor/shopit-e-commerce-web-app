const cart = document.getElementById('cart');
const popup = document.getElementById('checkoutButton');
const closePop = document.getElementById('closePop');
popup.addEventListener("click", success);

function success () {
        document.getElementById('popup').style.display = "flex";
}

closePop.addEventListener("click", close);

function close () {
    document.getElementById('popup').style.display = "none";
}

function navigatetoCart () {
    window.location.href = "checkout page.html";
}

