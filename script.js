const esport_img = document.getElementsByClassName("esport-img")[0];
const arr_esport_img = ["img/esport-1.png", "img/esport-2.png", "img/esport-3.png", "img/esport-4.png", "img/esport-5.png"];
const prev_img = document.getElementsByClassName("prev-img")[0];
const next_img = document.getElementsByClassName("next-img")[0];
prev_img.addEventListener("click", () => {
    let idx = arr_esport_img.indexOf(esport_img.getAttribute("src"));
    --idx;
    if(idx < 0) idx = 4;
    esport_img.classList.remove("fade");
    setTimeout(() => {
        esport_img.setAttribute("src", arr_esport_img[idx]);
        esport_img.classList.add("fade");
    }, 200);
});
next_img.addEventListener("click", () => {
    let idx = arr_esport_img.indexOf(esport_img.getAttribute("src"));
    ++idx;
    if(idx > 4) idx = 0;
    esport_img.classList.remove("fade");
    setTimeout(() => {
        esport_img.setAttribute("src", arr_esport_img[idx]);
        esport_img.classList.add("fade");
    }, 400);
});