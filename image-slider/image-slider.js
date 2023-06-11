//target using dom
let images = document.querySelectorAll("img"),
carousel = document.querySelector(".carousel"),
buttons = document.querySelectorAll(".button"),
wrapper = document.querySelector(".wrapper");
let imageIndex=1, intervalId;


//image will slide automatic

function autoSlide (){
  intervalId=setInterval( slideImage, 2000)
}
 // onloaded this function will called and image will slide automatically
autoSlide();

//this is a function how image index will change
function slideImage(){

  imageIndex++;
  console.log(imageIndex);

   if(imageIndex>=images.length){
     imageIndex=0;
     
   }else if(imageIndex<0){
     imageIndex=images.length-1; 
     
   }else{
     imageIndex=imageIndex;
     

   }

  
  // imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
 
   carousel.style.transform = `translate(-${imageIndex * 100}%)`;
   }


// onlcick event added with button
buttons.forEach((button)  =>button.addEventListener("click",function updateClick(e){
  clearInterval( intervalId);


  if (e.target.id === "next") {
    imageIndex += 1;
  }
   else {
    imageIndex += 1;
  };
  // imageIndex += e.target.id === "next" ? 1 : -1;

  slideImage();

  autoSlide();
 
}))


//mouse on wrapper will stop autosliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

//again sliding will star when mouse will over
wrapper.addEventListener("mouseleave", autoSlide);


