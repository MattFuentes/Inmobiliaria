
const gallery = document.querySelectorAll(".slider-section"),
    miniGallery = document.querySelectorAll(".small-img"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".slider-btn-close"),
    currentImg = previewBox.querySelector(".current-img"),
    shadow = document.querySelector(".shadow");

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        let newIndex = i; 
        let clickedImgIndex;
        console.log(sliderSectionLast);
        gallery[i].onclick = () => {
            clickedImgIndex = i; 
            function preview() {
                let imageURL = gallery[newIndex].querySelector("img").src; 
                previewImg.src = imageURL; 
            }
            preview(); 

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if (newIndex == 0) { 
                prevBtn.style.display = "none";
            }
            if (newIndex >= gallery.length - 1) { 
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = () => {
                newIndex--; 
                if (newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () => {
                newIndex++; 
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show");
            shadow.style.display = "block";
            closeIcon.onclick = () => {
                newIndex = clickedImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }

    }
}