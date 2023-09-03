document.getElementById("popup-minimize-button").addEventListener("close-popup", function () {
    const minimizeButton = document.getElementById("popup-minimize-button");

    minimizeButton.classList.add("button");

    setTimeout(function () {
        minimizeButton.classList.remove("button");
    }, 1000);
});