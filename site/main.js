console.log("Olá, Mundo!");

const infos = document.getElementsByClassName("info");

for (const info of infos) {
    info.addEventListener("click", () => {
        info.classList.toggle("open");
    });
}
