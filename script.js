document.querySelector('#monitorizare-titlu').addEventListener('dblclick', function () {
    const images = ["imagine1.png", "imagine2.png", "imagine3.png"];
    const container = document.querySelector('.imagine-container');
    let index = 0;
    container.innerHTML = "";

    const showImage = () => {
        const img = document.createElement("img");
        img.src = images[index];
        img.alt = `Slide ${index + 1}`;
        img.className = "fade-image";
        container.innerHTML = "";
        container.appendChild(img);
        index = (index + 1) % images.length;
    };

    showImage();
    setInterval(showImage, 3000);
});
