const  form = document.querySelector("form"),
        nextbtn=form.querySelector(".nextbtn"),
        backbtn = form.querySelector(".backbtn"),
        allInput = form.querySelector(".first input");


        nextbtn.addEventListener("click",()=>{
            allInput.forEach(input=>{
                if(input.value!=""){
                    form.classList.add('secActive');
                }
                else{
                    form.classList.remove('secActive');
                    // alert("input is empty")
                }
            })
        })
        backbtn.addEventListener("click",()=>{
            form.classList.remove('secActive');
        })