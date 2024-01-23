window.addEventListener("load",()=>{
    let codeContainer = document.getElementsByClassName('custom-codebox-container');
    let lineNumbers = document.querySelector('.custom-line-numbers');
    let codeLines = document.querySelector('.custom-code-body');
    let numberCodeLines = codeLines.innerHTML.split('\n').length;
    
    console.log("number of code lines:",numberCodeLines);
    for (let i=2; i<=numberCodeLines; i++){
        let line = document.createElement('div');
        line.innerText = i;
        lineNumbers.appendChild(line);
    }

    lineNumbers.style.height = codeContainer.scrollHeight + 'px';
})