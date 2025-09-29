const A = document.getElementById("first")
const d = document.getElementById("d")
const i = document.getElementById("i")
const j = document.getElementById("t")
const y = document.getElementById("y")
const a = document.getElementById("a")
const aditya = document.getElementById("complete")

A.addEventListener("click", () => {
    A.style.display = "none";
    d.style.display = "block";
});

d.addEventListener("click", () => {
    d.style.display = "none";
    i.style.display = "block";
});

i.addEventListener("click", () => {
    i.style.display = "none";
    t.style.display = "block";
});

t.addEventListener("click", () => {
    t.style.display = "none";
    y.style.display = "block";
});
y.addEventListener("click", () => {
    y.style.display = "none";
    a.style.display = "block";
});

a.addEventListener("click", () => {
    a.style.display = "none";
    aditya.style.display = "block";
});

aditya.addEventListener("click", () => {
    aditya.style.display = "none";
    A.style.display = "block";
});


