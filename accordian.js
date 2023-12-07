window.onload = function(){
var isOpen;
var imageShown = 'assets/images/icon-plus.svg';
const currImage = Array.from(document.getElementsByClassName('addSub'));
const accordian = Array.from(document.getElementsByClassName('answer'));
currImage.forEach(element => {
    element.src = imageShown;
});
accordian.forEach(ele => { ele.setAttribute('style', 'display: none')});
}

function toogleAccordian(index){
    const currImage = Array.from(document.getElementsByClassName('addSub'));
    const accordian = Array.from(document.getElementsByClassName('answer'));
    let currentAcc = accordian[index];
    const currUrl =  currImage[index].currentSrc;
    if(currUrl.includes('plus')){
        imageShown = 'assets/images/icon-minus.svg'
       isOpen = true
       currentAcc.setAttribute('style', 'display: visible');

    }
    else{
        imageShown= 'assets/images/icon-plus.svg';
        isOpen = false;
        currentAcc.setAttribute('style', 'display: none');
    }
    currImage[index].src = imageShown;
    

}