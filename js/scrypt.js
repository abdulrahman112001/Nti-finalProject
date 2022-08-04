
var loader= setTimeout(myLoader,1000)


function myLoader (){
    document.getElementById("preloader").style.display="none"
    
    
}


// scroll top 

var topBTN = document.getElementById("toping")


window.addEventListener("scroll",function(){
    console.log("window is scrolling");

    if (document.documentElement.scrollTop > 200) topBTN.classList.add("d-blocks") ;
    else topBTN.classList.remove("d-blocks")
})




// ---------------------------------------------
var formVaildation = document.getElementById("myForm")


function nameValid (ele){
    if (ele.value.trim().length  < 3){
        ele.classList.add("border-danger")
        ele.classList.remove("bg-success","bg-opacity-10")
        ele.nextElementSibling.innerText ="The name must contain at least three character"
    } 
    else{
        ele.nextElementSibling.innerText =""
        ele.classList.remove("border-danger")
        ele.classList.add( "bg-success","bg-opacity-10","border-success")
    } 
    

}
function emailValid (ele){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if ( emailPattern.test(ele.value) == false) {
        ele.classList.add("border-danger")
        ele.classList.remove("bg-success","bg-opacity-10")
        ele.nextElementSibling.innerText ="email not Valid"
    }
    else{
        ele.nextElementSibling.innerText =""
        ele.classList.remove("border-danger")
        ele.classList.add( "bg-success","bg-opacity-10","border-success")
    } 
    
}
function subjectlValid (ele){
    if (ele.value.trim().length < 8){
        ele.classList.add("border-danger")
        ele.classList.remove("bg-success","bg-opacity-10")
        ele.nextElementSibling.innerText ="The subject must contain at least eight character"
    }
    else{
        ele.nextElementSibling.innerText =""
        ele.classList.remove("border-danger")
        ele.classList.add( "bg-success","bg-opacity-10","border-success")
    } 
}
function messagelValid (ele){
    if (ele.value.trim().length < 8){
        ele.classList.add("border-danger")
        ele.classList.remove("bg-success","bg-opacity-10")
        ele.nextElementSibling.innerText ="The Message must contain at least eight character"
    }
    else{
        ele.nextElementSibling.innerText =""
        ele.classList.remove("border-danger")
        ele.classList.add( "bg-success","bg-opacity-10","border-success")
    } 
}




// formVaildation.addEventListener("submit",function(e){
//     e.preventDefault()

// })


formVaildation.addEventListener("input",function(e){

    if (e.target.id == "userName"){
        nameValid (e.target)
    }
    else if (e.target.id == "userEmail"){
        emailValid (e.target)

    }
    else if (e.target.id == "userSubject"){
        subjectlValid (e.target)
    }
    else if (e.target.id == "messageUser"){
        messagelValid (e.target)
    }
})



// --------------------
