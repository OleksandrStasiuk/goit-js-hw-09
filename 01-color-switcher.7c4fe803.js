const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body");let r=null;t.addEventListener("click",(function(){r=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.removeAttribute("disabled"),t.setAttribute("disabled","disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled","disabled"),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.7c4fe803.js.map
