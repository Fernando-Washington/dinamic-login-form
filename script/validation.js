const btn = document.querySelector("#btn");

const Login = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
    } else if (email === "admin@gmail.com" && password === "admin123") {
    window.location.href = "dashboard.html";
    } else {
    alert("Invalid email or password.");
    alert("Try: email: admin@gmail.com and password: admin123");
    }
};

btn.onclick = function (e) {
    e.preventDefault();
    Login();
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    Login();
});
