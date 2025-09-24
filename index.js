const galleryImages=document.querySelectorAll(".image-container img");
const lightbox=document.getElementById("lightbox");
const lightBoxing=document.getElementById("lightbox-img");
const closeBtn=document.getElementById("close");
const prevBtn=document.getElementById("prev");
const nextBtn=document.getElementById("next");

let currentIndex=0;

function showLightBox(index){
    lightbox.style.display="flex";
    lightBoxing.src=galleryImages[index].src;
    currentIndex=index;
}

galleryImages.forEach((img,index)=>{
    img.addEventListener("click",()=>showLightBox(index));
});

closeBtn.addEventListener("click",()=>{
    lightbox.style.display="none";
});

prevBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex-1+galleryImages)%galleryImages.length;
    lightBoxing.src=galleryImages[currentIndex].src;
});

nextBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex+1)%galleryImages.length;
    lightBoxing.src=galleryImages[currentIndex].src;
});

window.addEventListener("click",(e)=>{
    if(e.target===lightbox){
        lightbox.style.display="none";
    }
});

function filterImages(category){
    galleryImages.forEach(img=>{
        if(category==='all'||img.classList.contains(category)){
            img.style.display="block";
        }else{
            img.style.display="none";
        }
    });
}