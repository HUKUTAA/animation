const boxs = document.querySelectorAll('.box');

for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener('mouseover', function () {
       boxs[i].style.width="100%"
    })

    boxs[i].addEventListener("mouseleave", function () {
        boxs[i].style.width="10%"
     })
}