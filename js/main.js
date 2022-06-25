let dispMovies=document.getElementById("movies");
let allMovies=document.getElementById("allMovies");
let searchCurrentPage=document.getElementById("word");
let moviesContainer;

//api
async function movies(type){
    let response= await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=911e108235fef823a7157ef006909998&language=en-US&page=1`);
    let finalResponse= await response.json();
    moviesContainer=finalResponse.results;
    
    displayMovies(moviesContainer);
  
}
movies("now_playing");

//display Movies
function displayMovies(term){
    let list=``;
    for (let i = 0; i <term.length ; i++) {
        list+= ` <div class="col-md-4 rounded movie-poster position-relative overflow-hidden">
        <img src='https://image.tmdb.org/t/p/w500/${term[i].poster_path}' class="w-100 " alt="">
        <div class="layout position-absolute d-flex align-items-center">
            <div>
                <h2>${term[i].original_title}</h2>
                <p>${term[i].overview}</p>
                <p class="my-2">rate: ${term[i].vote_average}</p> release_date
                <p>${term[i].release_date}</p>
            </div>
    
        </div>
       </div>`
        
    };
    dispMovies.innerHTML=list;
};

//side-nav slider

let menuWidth=$(".menu").width();
$(".side-nav").css("left",`-${menuWidth}`)
$(".toggle-nav").click(function (){
      if( $("#side-nav").css("left") == "0px"){
        $("#side-nav").animate({left:`-${menuWidth}`}, 500)
        $(".open").css("display", "block")
        $(".close").css("display", "none")
        $(".item1").slideUp(700);
        $(".item2").slideUp(700);
        $(".item3").slideUp(700);
        $(".item4").slideUp(700);
        $(".item7").slideUp(700);
        $(".item6").slideUp(700);
     
    }else
    {
        $("#side-nav").animate({left:"0px"}, 500)
        $(".open").css("display", "none")
        $(".close").css("display", "block")
        $(".item1").slideDown(1000);
        $(".item2").slideDown(1000);
        $(".item3").slideDown(1000);
        $(".item4").slideDown(1000);
        $(".item5").slideDown(1000);
        $(".item6").slideDown(1000);
    }
             
});

$(".item").click(function (e) {
    let item=$(e.target).text();
       if(item =="Now playing")
    {
        movies("now_playing");
    }
    else if(item=="Popular")
    {
        movies("popular");
    }
    else if(item=="Top Rated")
    {
        movies("top_rated");
    }
    else if(item=="Trending")
    {
        
        movies("popular");
    }
    else if(item=="Upcoming")
    {
        movies("upcoming");
    }
    
})



//search by word


$("#allMovies").on("input",function (e){

  let searchValue=e.target.value;
 async function movies(){
    let response= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=911e108235fef823a7157ef006909998&fbclid=IwAR03wtVFSi9xZZbVQb8nJEKVar4I6WjtLR9EC84SRcxcFSPykCaBEZzdBTk&query=${ searchValue}`);
    let finalResponse= await response.json();
    moviesContainer=finalResponse.results;
    
    displayMovies(moviesContainer);
  
}
movies()               
 })

 //search 
    
function search(searchTerm){

    
        for (let i = 0; i < moviesContainer.length; i++) {
           let searchResult=[];
            if(moviesContainer[i].original_title.toLowerCase().includes(searchTerm.toLowerCase()) == true ){
                 searchResult.push(moviesContainer[i]);
                 displayMovies(searchResult);
        }
        }

   
};
$("#word").on("input",function (e){

    let searchValue=e.target.value;
    search(searchValue);
           
    })
 
 
 
// regex 

let NameInput=document.getElementById("NameInput");
let NameAlert=document.getElementById("namealert");
let EmailInput=document.getElementById("EmailInput");
let EmailAlert=document.getElementById("Emailalert");
let PhoneInput=document.getElementById("PhoneInput");
let PhoneAlert=document.getElementById("Phonealert");
let AgeInput=document.getElementById("AgeInput");
let AgeAlert=document.getElementById("Agealert");
let passwordInput=document.getElementById("passwordInput");
let passwordAlert=document.getElementById("passwordalert");
let RepasswordInput=document.getElementById("Repassword");
let RepasswordAlert=document.getElementById("Repasswordalert");

function validName(){
 
    let Regex =/^[A-Z][a-z]{3,15}$/;
    NameInput.addEventListener("focus",function () {
        NameAlert.classList.replace("d-none","d-block")
        NameInput.classList.add("is-invalid")
    })
    NameInput.addEventListener("input",function () {
        if(Regex.test(NameInput.value) == true )
        {
            NameAlert.classList.replace("d-block","d-none")
            NameInput.classList.replace("is-invalid","is-valid")
            return true;
        }
        else
        {
            NameAlert.classList.replace("d-none","d-block")
            NameInput.classList.replace("is-valid","is-invalid")
        }
    })

}
function validEmail(){
 
    let Regex =/^[a-zA-Z]+@(yahoo|gmail)\.com$/;
    EmailInput.addEventListener("focus",function () {
        EmailAlert.classList.replace("d-none","d-block")
        EmailInput.classList.add("is-invalid")
    })
    EmailInput.addEventListener("input",function () {
        if(Regex.test(EmailInput.value) == true )
        {
            EmailAlert.classList.replace("d-block","d-none")
            EmailInput.classList.replace("is-invalid","is-valid")
            return true;
        }
        else
        {
            EmailAlert.classList.replace("d-none","d-block")
            EmailInput.classList.replace("is-valid","is-invalid")
        }
    })

}
function validphone(){
 
    let Regex =/^(002){0,1}01[0125][0-9]{8}$/;
    PhoneInput.addEventListener("focus",function () {
        PhoneAlert.classList.replace("d-none","d-block")
        PhoneInput.classList.add("is-invalid")
    })
    PhoneInput.addEventListener("input",function () {
        if(Regex.test(PhoneInput.value) == true )
        {
            PhoneAlert.classList.replace("d-block","d-none")
            PhoneInput.classList.replace("is-invalid","is-valid")
            return true;
        }
        else
        {
            PhoneAlert.classList.replace("d-none","d-block")
            PhoneInput.classList.replace("is-valid","is-invalid")
        }
    })

}
function validAge(){
 
    let Regex =/^([1-9][0-9]?|100)$/;
    AgeInput.addEventListener("focus",function () {
        AgeAlert.classList.replace("d-none","d-block")
        AgeInput.classList.add("is-invalid")
    })
    AgeInput.addEventListener("input",function () {
        if(Regex.test(AgeInput.value) == true )
        {
            AgeAlert.classList.replace("d-block","d-none")
            AgeInput.classList.replace("is-invalid","is-valid")
            return true;
        }
        else
        {
            AgeAlert.classList.replace("d-none","d-block")
            AgeInput.classList.replace("is-valid","is-invalid")
        }
    })

}
function validpassword(){
 
    let Regex =/^[a-zA-Z]{8}[a-zA-Z]+[\d]+$/;
    passwordInput.addEventListener("focus",function () {
        passwordAlert.classList.replace("d-none","d-block")
        passwordInput.classList.add("is-invalid")
    })
    passwordInput.addEventListener("input",function () {
        if(Regex.test(passwordInput.value) == true )
        {
            passwordAlert.classList.replace("d-block","d-none")
            passwordInput.classList.replace("is-invalid","is-valid")
            return true;
        }
        else
        {
            passwordAlert.classList.replace("d-none","d-block")
            passwordInput.classList.replace("is-valid","is-invalid")
        }
    })

}
function validRepassword(){
 RepasswordInput.addEventListener("focus",function () {
    RepasswordAlert.classList.replace("d-none","d-block")
     RepasswordInput.classList.add("is-invalid")
    })
    RepasswordInput.addEventListener("input",function () {
        if(passwordInput.value ==  RepasswordInput.value )
        {
            RepasswordAlert.classList.replace("d-block","d-none")
            RepasswordInput.classList.replace("is-invalid","is-valid")
            return true;
        }
        else
        {
            RepasswordAlert.classList.replace("d-none","d-block")
            RepasswordInput.classList.replace("is-valid","is-invalid")
        }
    })

}
validName();
validEmail();
validphone();
validAge();
validpassword();
validRepassword();



$("#submitBtn").hover(function (){
    if(validName  && validEmail  && validphone  && validAge  && validpassword && validRepassword )
    {
        $("#submitBtn").css({"background-color":"#00FF80","color":"#fff" ,"border-color":"#FF8000"})
    }

}, function (){
    
    $("#submitBtn").css({"background-color": "transparent","color": "#dc3545" })
     
});








































//side-nav slider


