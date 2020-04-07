
function runExplore(){
$('.enter').on('click', function(){
    clearPage();
    showProjects();
})
}

function clearPage(){
         $('.hero').hide();
        $('.tagline').hide();
        $('.enter').hide();
        $('footer').hide();
}

function handleProjectsClick(){
    $('.projects').on('click',function(){
        $('main').empty();
        showProjects();
    })
}

function showProjects(){
    $('main').append(`<div class="name">
    <p class= "projName"> The World's Greatest Sports Quiz
    </p>
   </div>
           <div class = "designs">
   <div class ="projDesignPC"><img class="screenShot" id="laptop" src= "laptopApp.png" alt="Laptop Screenshot" ></div>
   <div class ="projDesignTab"><img class="screenShot" id="tablet" src= "tabApp.png" alt="Tablet Screenshot" ></div>
   <div class ="projDesignMob"><img class="screenShot" id="mobile" src= "cellApp.png" alt="Mobile Screenshot" ></div>
           </div>
<div class = "writeAndLinks">
<p class ="projDes">
So, you think you know sports huh? Well, until you've proven yourself agianst 
'The World's Greatest Sports Quiz' - you don't know squat!! 'TWGSQ' brings you
 some of the toughest sports questions covering all the leagues you know and love. 
 NFL, NBA, MLB, NHL and even the NCAA - it's all here. Think you got what it takes? 
 Step up to the plate and bring your A-game. You're in the Big Leagues now!! 
</p>  
<p class ="techUsed">  <u>List of Technologies Used:</u> Html/Css/JavaScript/jQuery </p>
<div class="links">
   <a href="https://github.com/Rmungo/sportsApp">Repo</a>
   <a href="https://rmungo.github.io/sportsApp/">Live</a> 
</div>`)
$('footer').hide();
clearPage();

}

function runAboutMe(){
    $('.about').on('click',function(){
    clearPage();
    $('main').empty();
    $('main').append(`  <div class ="aboutMe">
    <img class="me" src="daKid.jpeg" alt = "Dat Boy Yung Mungs">
    <p class ="meDes"> <u><b>About Me</b></u>: I'm a recent graduate of the Fullstack Engineering Path bootcamp at Thinkful.
    What i love most about being a web developer is that it satisfies my need for structure and organization while simultaniously allowing me to be free and 
    creative. It scratches both itches. Being originally from the San Francisco
    Bay Area, I have seen first hand how tech can quickly and decisvely change the world. I love solving problems, and truly get excited learning new frameworks and discovering nw ways to do things.
    Aside from coding, I enjoy learning languages and am an aspiring polyglot. I guess you can say I love communicating 
    in as many ways as possible, be it with people or computers.
    </p>
</div>`)
})
}

function showContacts(){
    $('.contacts').on('click',function(){
        clearPage();
        $('main').empty();
        $('main').append(`<div class="contactsDiv">
        <input  class = "social contactsPage twitter" id="twitter" type ="image" src= "http://th02.deviantart.net/fs70/PRE/f/2012/268/e/1/twitter_neue_ios_icon_by_theintenseplayer-d5fwil3.png" data-target="https://twitter.com/">
        <p class ="twitterHandle handle"> @MungoRashaan </p>
        <input  class = "social contactsPage gmail"  type ="image" src= "https://thebottomline.as.ucsb.edu/wp-content/uploads/2018/05/Gmail_logo.max-2800x2800-696x696.png"data-target="mailto:rmungo49@gmail.com?subject=Hey! I had a look at your portfolio">
        <p class ="emailHandle handle"> rmungo49@gmail </p>
        <input  class = "social contactsPage linkd" id="linkd" type ="image" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Linkedin_Shiny_Icon.svg/1024px-Linkedin_Shiny_Icon.svg.png" data-target="https://www.linkedin.com/in/rashaanmungo/">
        <p class ="linkedHandle handle"> Rashaan Mungo </p>
        </div>
        `)
        handleContactLinks();
    })
}

function handleContactLinks(){
    $('#twitter1 , #gmail1 , #linkd1, .gmail, #twitter , #gmail , #linkd').on('click', function(e){
        e.preventDefault();
        window.location.href = $(this).data('target');
    })
}

function returnHome(){
    $('.home').on('click',function(){
        $('main').empty();
        $('.hero').show();
        $('.tagline').show();
        $('.enter').show();
        $('footer').show();
    })
}



function runSite(){
   runExplore();
   runAboutMe();
   handleContactLinks();
   showContacts();
   handleProjectsClick();
   returnHome();
}

$(runSite());