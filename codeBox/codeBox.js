
window.addEventListener("load",()=>{
    const codes = document.querySelectorAll('.custom-code-body');
    
    for (let i=0; i<codes.length; i++){

        //all code lines
        const codeLines = codes[i].innerHTML.split('\n')
        //extra white space in the first code line
        const whiteSpace = codeLines[0].match(/^\s*/)[0]
        
        //delete the original code line
        while(codes[i].childNodes.length > 0) {
			codes[i].removeChild(codes[i].childNodes[0]);
		}
        //add numered code line without initial white space
        for(let j=0; j < codeLines.length; j++){
            let span = document.createElement('span');
            span.className = 'line';
            span.innerText = codeLines[j].replace(new RegExp(`^${whiteSpace}`), '');
            codes[i].appendChild(span);
            codes[i].appendChild(document.createTextNode('\n'));
        }
    }

})

