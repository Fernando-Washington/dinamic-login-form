const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const imgSection = document.querySelector("#img-section");

btn.onclick = () => {
    // Reset CSS
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "Ubuntu, sans-serif";

    // Body
    document.body.style.width = "100%";
    document.body.style.height = "100vh";

    // Title
    const titulo = document.getElementById("title");
    titulo.style.color = "#ffffff";
    titulo.style.backgroundColor = "#000000";
    titulo.style.padding = "20px";
    titulo.style.borderRadius = "8px";
    titulo.style.textAlign = "center";
    titulo.innerHTML = "Now the page has style!";

    // Img Section
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

    // Div with images
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    [div1, div2, div3].forEach(div => {
        div.style.width = "30%";
        div.style.height = "70vh";
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "center";
        div.style.float = "left";
    });

    div1.style.backgroundImage = "url('assets/images/augusta.jpg')";
    div2.style.backgroundImage = "url('assets/images/turing.jpg')";
    div3.style.backgroundImage = "url('assets/images/margaret.jpg')";

    // Botão de saída
    btn.style.color = "#ffffff";
    btn.style.backgroundColor = "#000000";
    btn.style.border = "none";
    btn.style.padding = "10px 20px";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "5px";
    btn.textContent = "Exit";
    btn.style.position = "relative";
    btn.style.left = "50%";
    btn.style.top = "-48px";
    btn.setAttribute("id", "exit-btn");
    btn.onclick = () => {
        window.location.reload();
    };

    const divs = [div1, div2, div3];

    divs.forEach((div, index) => {
      setTimeout(() => {
        imgSection.appendChild(div);
      }, index * 1000); 
    });
};
