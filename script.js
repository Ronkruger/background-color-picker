function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    // Corrected the cookie format, and added a path attribute
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Background color picker
const colorPicker = document.getElementById("color");
const colorHex = document.getElementById("colorCode");
const storedColor = getCookie('backgroundColor') || localStorage.getItem('backgroundColor');

if (storedColor) {
    document.body.style.backgroundColor = storedColor;
    colorPicker.value = storedColor;
    colorHex.textContent = "Hex code: " + storedColor;
}

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    setCookie('backgroundColor', color, 365); // Set the cookie with a 1-year expiration
    localStorage.setItem('backgroundColor', color);
}

color.addEventListener("input", function () {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
    if (selectedColor === 'black') {
        document.body.style.color = 'white'; // Corrected 'colorPicker' to 'color'
    }
    colorHex.textContent = "Hex code: " + selectedColor;
    setBackgroundColor(selectedColor);
});


//footer

const footer = document.getElementById("footer");
let date = new Date().getFullYear();
footer.innerHTML = `<p>${date} Ron el.</p>`