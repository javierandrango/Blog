const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const pageList = document.getElementsByClassName("custom-nabvar-item");

/**
 * Events listener
 */
/**------------------------------------------------------------------------------------------ */
//show hide new page with left/right click event
let clickCount = 0;
if (btnLeft && btnRight){
    btnLeft.addEventListener("click",function(){
        clickCount = clickCount - 1;
        if (clickCount < 0){
            clickCount = 0;
        };
        activeItemList(clickCount);
    });
    btnRight.addEventListener("click",function(){
        clickCount = clickCount + 1;
        if (clickCount > pageList.length-1){
            clickCount = pageList.length-1;
        };
        activeItemList(clickCount);
    });
}

// responsive design changes with resize
window.addEventListener("resize",function(){
    // when left/right button is hidden (display: "none");
    const buttonState = window.getComputedStyle(btnLeft).getPropertyValue("display");
    if (buttonState == "none"){
        //show all hidden items in page list
        for (let itemCount=0 ;itemCount<pageList.length; itemCount++){
            if(window.getComputedStyle(pageList[itemCount]).getPropertyValue('display')=="none"){
                pageList[itemCount].style.display = "flex";
            }
        }
    }
    else{
        // for small screens, it continue to display the current item of the 
        // page list while window it's being resized
        for (let itemCount=0 ;itemCount<pageList.length; itemCount++){
            if(window.getComputedStyle(pageList[itemCount]).getPropertyValue('display')=="flex"){
                activeItemList(itemCount);
            }
        }
    }
});

/**
 * User defined functions 
 */
/**------------------------------------------------------------------------------------------ */
//shows only one active page controlled by left/right button
function activeItemList (pageNum){
    for (const item of pageList){
        item.style.display = "none";
    };
    pageList[pageNum].style.display = "flex"; 
};
