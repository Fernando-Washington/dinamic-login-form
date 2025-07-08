const btn = document.querySelector("#btn");
const body = document.querySelector("body");

const imgSection = document.querySelector("#img-section");

btn.onclick = () => {
    // reset css
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "Ubuntu, sans-serif";

    // body
    document.body.style.width = "100%";
    document.body.style.height = "100vh";

    // title
    const titulo = document.getElementById("title");
    titulo.style.color = "#ffffff";
    titulo.style.backgroundColor = "#000000";
    titulo.style.padding = "20px";
    titulo.style.borderRadius = "8px";
    titulo.style.textAlign = "center";
    titulo.innerHTML = "Now the page has style!";

    // img section
    imgSection.style.display = "flex";
    imgSection.style.justifyContent = "space-around";
    imgSection.style.alignItems = "center";
    imgSection.style.height = "100vh";
    imgSection.style.padding = "20px";
    imgSection.style.boxSizing = "border-box";
    imgSection.style.margin = "0 auto";
    imgSection.style.width = "100%";
    imgSection.style.borderRadius = "8px";
    imgSection.style.gap = "20px";

    // Divs with images
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    div1.style.width = "30%";
    div1.style.height = "70vh";
    div1.style.backgroundImage = "url('assets/images/augusta.jpg')";
    div1.style.backgroundSize = "cover";
    div1.style.backgroundPosition = "center";
    div1.style.float = "left";

    div2.style.width = "30%";
    div2.style.height = "70vh";
    div2.style.backgroundImage = "url('assets/images/turing.jpg')";
    div2.style.backgroundSize = "cover";
    div2.style.backgroundPosition = "center";
    div2.style.float = "left";

    div3.style.width = "30%";
    div3.style.height = "70vh";
    div3.style.backgroundImage = "url('assets/images/margaret.jpg')";
    div3.style.backgroundSize = "cover";
    div3.style.backgroundPosition = "center";
    div3.style.float = "left";

    // Button
    btn.style.color = "#ffffff";
    btn.style.backgroundColor = "#000000";
    btn.style.border = "none";
    btn.style.padding = "10px 20px";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "5px";
    btn.textContent = "Exit";
    btn.style.position = "relative";
    btn.style.left = "50%";
    btn.style.right = "50%";
    btn.style.top = "-48px";
    btn.setAttribute("id", "exit-btn");
    btn.onclick = () => {
        window.location.reload();
    };

    imgSection.appendChild(div1);
    imgSection.appendChild(div2);
    imgSection.appendChild(div3);
};
