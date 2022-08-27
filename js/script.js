const cursor = document.querySelector(".cursor");
const circle = cursor.getBoundingClientRect();

function follow(e){
    gsap.to(cursor,{duration:0.3, left:e.pageX - circle.width, top:e.pageY - circle.height});
}
document.addEventListener("mousemove", follow);