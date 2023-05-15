window.addEventListener("load",() =>{
    const form=document.getElementById("multi-step-form");
    const formcontainerbox=document.getElementById("form-container-box");
    const step2=document.getElementById("step2");
    const step3=document.getElementById("step3");
    const steppage1=document.getElementById("step-page-1");
    const steppage2=document.getElementById("step-page-2");
    const steppage3=document.getElementById("step-page-3");
    const stepsuivant1=document.getElementById("step-suivant-1");
    const stepsuivant2=document.getElementById("step-suivant-2");
    const stepsuivant3=document.getElementById("step-suivant-3");
    const stepprec1=document.getElementById("step-precedent-1");
    const stepprec2=document.getElementById("step-precedent-2");
    form.addEventListener("submit",(e) =>{
        e.preventDefault();
    });
    stepsuivant1.addEventListener("click",()=>{
        steppage1.style.display="none";
       steppage2.style.display="block";
        step2.classList.add("active");
    });
    stepsuivant2.addEventListener("click",()=>{
        steppage2.style.display="none";
        steppage3.style.display="block";
        step3.classList.add("active"); 
    });
    stepprec1.addEventListener("click",()=>{
        steppage1.style.display="block";
        steppage2.style.display="none";
        step2.classList.remove("active");
    });
    stepprec2.addEventListener("click",()=>{
        steppage3.style.display="none";
        steppage2.style.display="block";
        step3.classList.remove("active");
    });
});
