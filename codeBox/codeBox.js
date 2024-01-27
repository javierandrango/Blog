//highlights module
//about the library: 
//https://github.com/highlightjs/highlight.js#importing-the-library

import hljs from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/highlight.min.js';
/*
import language_javascript from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/languages/javascript.min.js';
import language_html from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/languages/xml.min.js';
import language_c_plus_plus from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/languages/cpp.min.js';
hljs.registerLanguage('javascript',language_javascript);
hljs.registerLanguage('html',language_html);
hljs.registerLanguage('C++',language_c_plus_plus);
*/

const codes = document.querySelectorAll('.custom-code');
const copyButtons = document.querySelectorAll('.custom-button-copy-code');

if (codes){
    //numered code lines
    window.addEventListener("load",()=>{
        for (let i=0; i<codes.length; i++){
            //all code lines
            const codeLines = codes[i].textContent.split('\n')
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

                //highlight every code line
                hljs.highlightElement(span);
                span.style.backgroundColor = 'white';

                //append new code line numered and styled
                codes[i].appendChild(span);
                codes[i].appendChild(document.createTextNode('\n'));
            }
        }
    })
}

//copy code from box
if (copyButtons){
    // new copy method: clipboard requires a secure origin (HTTPS) to copy 
    if ('clipboard' in navigator){
        for (let i=0; i<copyButtons.length;i++){
            copyButtons[i].addEventListener("click",async ()=>{           
                try{
                    await navigator.clipboard.writeText(codes[i].textContent);
                    console.log('code copied!');
                    alert("Code copied!");    
                }
                catch(err){
                    console.error('Failed to copy: ', err);
                }
            })
        }
    }
    // deprecated copy method : work for test 
    else{
        for (let i=0; i<copyButtons.length;i++){
            copyButtons[i].addEventListener("click",()=>{
                const textArea = document.createElement('textarea');
                textArea.textContent = codes[i].textContent;
                document.body.append(textArea);
                textArea.select();
                document.execCommand("copy");
                console.log('code copied!');
                alert("Code copied!");         
            })
        }
    }
}