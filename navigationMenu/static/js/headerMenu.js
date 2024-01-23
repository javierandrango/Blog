const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const pageList = document.getElementsByClassName("custom-nabvar-item");
const pageListName = document.getElementsByClassName("custom-nabvar-item-name");
const pageListIcon = document.getElementsByClassName("navbar-icon");
const pageListUnderline = document.getElementsByClassName("custom-underline-list");
const homePageBtn = document.getElementById("home-button");
const homeIcon = document.getElementById("custom-icon-home");
const homeText = document.getElementById("custom-text-home");
const homeUnderline = document.getElementById("custom-underline-home");


// home section original style
/*
const homeOriginalStyle={
    iconColor: window.getComputedStyle(homeIcon).color,
    textColor: window.getComputedStyle(homeText).color,
    fontWeight: window.getComputedStyle(homeText).fontWeight,
    underline: window.getComputedStyle(homeUnderline).visibility,
}
*/
// home section new style
const homeNewStyle={
    iconColor: 'rgb(96, 125, 139)',
    textColor: 'rgb(96, 125, 139)',
    fontWeight: 'normal',
    underline: 'hidden',
}

//page list original Style
/*
const pageListOriginalStyle={
    iconColor: window.getComputedStyle(pageListIcon[0]).color,
    textColor: window.getComputedStyle(pageListName[0]).color,
    fontWeight: window.getComputedStyle(pageListName[0]).fontWeight,
    underline: window.getComputedStyle(pageListUnderline[0]).visibility,
}
*/
//page list new Style
const pageListNewStyle={
    iconColor: 'rgb(0, 0, 0)',
    textColor: 'rgb(0, 0, 0)',
    fontWeight: 'bold',
    underline: 'visible',
}


//subdirectory in url:
const subdirectory=[
    'electronics',
    'artificial-intelligence',
    'robotics',
    'software'
]

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
    const buttonState = window.getComputedStyle(btnLeft).getPropertyValue("display");
    const classifiedArticles =  findInSubdirectory(subdirectory)
    if (buttonState == "none"){
        //show all hidden items in page list
        for (let itemCount=0 ;itemCount<pageList.length; itemCount++){
            if(window.getComputedStyle(pageList[itemCount]).getPropertyValue('display')=="none"){
                pageList[itemCount].style.display = "flex";
            }
        }
    }
    else{
        // for small screens, display the current page 
        for (let itemCount=0 ;itemCount<pageList.length; itemCount++){
            if(pageList[itemCount].href.includes(window.location.pathname) && window.location.pathname != "/"){
                activeItemList(itemCount); 
            }

        }
        if (classifiedArticles>=0){
            activeItemList(classifiedArticles); 
        }
    }
});

//show changes on load
window.addEventListener("load",()=>{
    const buttonState = window.getComputedStyle(btnLeft).getPropertyValue("display");
    const classifiedArticles =  findInSubdirectory(subdirectory)
    if (buttonState == "block"){
        for (let itemCount=0 ;itemCount<pageList.length; itemCount++){
            if(pageList[itemCount].href.includes(window.location.pathname) && window.location.pathname != "/"){
                activeItemList(itemCount); 
            } 
        }
        if (classifiedArticles>=0){
            activeItemList(classifiedArticles); 
        }
    }
})

if (pageList){
    for (let i=0; i<pageList.length; i++){
        const classifiedArticles =  findInSubdirectory(subdirectory)
        if(pageList[i].href.includes(window.location.pathname) && window.location.pathname != "/" || i==classifiedArticles){
            // page new style
            pageListIcon[i].style.color = pageListNewStyle.iconColor;
            pageListName[i].style.color = pageListNewStyle.textColor;
            pageListName[i].style.fontWeight = pageListNewStyle.fontWeight;
            pageListUnderline[i].style.visibility = pageListNewStyle.underline;
            // home new style
            homeIcon.style.color = homeNewStyle.iconColor
            homeText.style.color = homeNewStyle.textColor
            homeText.style.fontWeight = homeNewStyle.fontWeight
            homeUnderline.style.visibility = homeNewStyle.underline
        } 
    } 
}



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

//find patern in url
function findInSubdirectory(list){
    for (let i = 0; i<list.length; i++){
        if(window.location.pathname.includes(list[i])){
            return i
        }
    }
}
