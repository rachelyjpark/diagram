let mediafirst = document.querySelector('.mediacircle1');
let network = document.querySelector('.network');
let networktext = document.querySelector ('.networktext');

let mediasecond = document.querySelector('.mediacircle2');
let music = document.querySelector('.music');


let mediathird = document.querySelector('.mediacircle3');
let film = document.querySelector('.film');


let mediafour = document.querySelector('.mediacircle4');
let news = document.querySelector('.news');


let peopleone = document.querySelector('.peoplecircle1');
let direct = document.querySelector('.direct');

let peopletwo = document.querySelector('.peoplecircle2');
let indirect = document.querySelector('.indirect');

let abstractone = document.querySelector('.abstractcircle1');
let thoughts = document.querySelector('.thoughts');

let abstracttwo = document.querySelector('.abstractcircle2');
let imagination = document.querySelector('.imagination');

let abstractthree = document.querySelector('.abstractcircle3');
let growth = document.querySelector('.growth');

let abstractfour = document.querySelector('.abstractcircle4');
let wisdom = document.querySelector('.wisdom');

let abstractfive = document.querySelector('.abstractcircle5');
let love = document.querySelector('.love');

let mediaisland = document.querySelector('.mediaisland');

let exit = document.querySelector('.exit');

let svg1 = document.querySelector('.svg1');
let svg2 = document.querySelector('.svg2');
let svg3 = document.querySelector('.svg3');
let svg4 = document.querySelector('.svg4');
let svg5 = document.querySelector('.svg5');
let svg6 = document.querySelector('.svg6');


let networkinfo = document.querySelector('.networkinfo');
let instagram = document.querySelector('#instagram');
let tiktok = document.querySelector('#tiktok');
let linkedin = document.querySelector('#linkedin');
let behance = document.querySelector('#behance');
let pinterest = document.querySelector('#pinterest');
let dribble = document.querySelector('#dribble');


let filminfo = document.querySelector('.filminfo');
let interstellar = document.querySelector('#interstellar');
let insideout = document.querySelector('#insideout');
let soul = document.querySelector('#soul');
let intime = document.querySelector('#intime');
let monsters = document.querySelector('#monsters');
let morning = document.querySelector('#morning');

let newsinfo = document.querySelector ('.newsinfo');
let dailymail = document.querySelector ('#dailymail');
let cnn = document.querySelector('#cnn');
let nytimes = document.querySelector('#nytimes');
let buzzfeed = document.querySelector('#buzzfeed');
let business = document.querySelector('#business');
let vox = document.querySelector('#vox');
let newyorker = document.querySelector('#newyorker');

let directinfo = document.querySelector('.directinfo');
let heidi = document.querySelector('#heidi');
let mom = document.querySelector('#mom');
let dad = document.querySelector('#dad');
let ping = document.querySelector('#ping');
let kelly = document.querySelector('#kelly');
let jarrett = document.querySelector('#jarrett');
let beasley = document.querySelector('#beasley');
let june = document.querySelector('#june');
let fall = document.querySelector('#fallbranding');

let indirectinfo = document.querySelector('.indirectinfo');
let turrell = document.querySelector('#turrell');
let nadya = document.querySelector('#nadya');
let becky = document.querySelector('#becky');
let lomski = document.querySelector('#lomski');
let machado = document.querySelector('#machado');
let sukriti = document.querySelector('#sukriti');
let jilee = document.querySelector('#jilee');


let musicinfo = document.querySelector('.musicinfo');
let classical = document.querySelector('#classical');
let indie = document.querySelector('#indie');
let lofi = document.querySelector('#lofi');
let rb = document.querySelector('#rb');
let pop = document.querySelector('#pop');


let fireflies = document.querySelector('.firefly');
let fireflies1 = document.querySelector('.firefly:nth-child(1)');
let fireflies2 = document.querySelector('.firefly:nth-child(2)');
let fireflies3 = document.querySelector('.firefly:nth-child(3)');
let fireflies4 = document.querySelector('.firefly:nth-child(4)');


exit.addEventListener('click', function (event) {
    networkinfo.style.display = 'none';
    musicinfo.style.display = 'none';
    filminfo.style.display = 'none';
    newsinfo.style.display = 'none';
    directnfo.style.display = 'none';
    indirectnfo.style.display = 'none';
})

// mediacover.addEventListener('click', function() {
    
mediafirst.addEventListener('mouseover', function (event) {
    network.style.display = 'block';
    exit.style.display = 'none';
    // instagram.style.display = 'block';
    // tiktok.style.display ='block';
    // linkedin.style.display = 'block';

});

mediafirst.addEventListener('click', function (event) {
    // directinfo.style.display = 'none';
    // indirectinfo.style.display = 'none';
    // newsinfo.style.display = 'none';
    networkinfo.style.display = 'block';
    instagram.style.display = 'block';
    tiktok.style.display ='block';
    linkedin.style.display = 'block';
    behance.style.display = 'block';
    pinterest.style.display = 'block';
    dribble.style.display = 'block';

});

//all other containers do div group to not show when there is a click event//
mediafirst.addEventListener('mouseout', function (event) {
    network.style.display = 'none';
    exit.style.display = 'block';
});



mediasecond.addEventListener('mouseover', function (event) {
    music.style.display = 'block';
    exit.style.display = 'none';

});
mediasecond.addEventListener('click', function (event) {
    classical.style.display = 'block';
    indie.style.display = 'block';
    lofi.style.display = 'block';
    rb.style.display = 'block';
    pop.style.display = 'block';

});

mediasecond.addEventListener('mouseout', function (event) {
    music.style.display = 'none';
    exit.style.display = 'block';
});



mediathird.addEventListener('mouseover', function (event) {
    film.style.display = 'block';
    exit.style.display = 'none';
});
mediathird.addEventListener('click', function (event) {
    filminfo.style.display = 'block';
    interstellar.style.display = 'block';
    insideout.style.display = 'block';
    soul.style.display = 'block';
    intime.style.display = 'block';
    monsters.style.display = 'block';
    morning.style.display = 'block';
})
mediathird.addEventListener('mouseout', function (event) {
    film.style.display = 'none';
    exit.style.display = 'block';
});



mediafour.addEventListener('mouseover', function (event) {
    news.style.display = 'block';
    exit.style.display = 'none';
});

mediafour.addEventListener('click', function (event) {
    newsinfo.style.display = 'block';
    dailymail.style.display = 'block';
    cnn.style.display = 'block';
    nytimes.style.display = 'block';
    buzzfeed.style.display = 'block';
    business.style.display = 'block';
    vox.style.display = 'block';
    guardian.style.display = 'block';
    newyorker.style.display = 'block';
});

mediafour.addEventListener('mouseout', function (event) {
    news.style.display = 'none';
    exit.style.display = 'block';
});


peopleone.addEventListener('mouseover', function (event) {
    direct.style.display = 'block';
    exit.style.display = 'none';
});

peopleone.addEventListener('click', function (event) {
    // direct.style.display = 'block';
    mom.style.display = 'block';
    dad.style.display = 'block';
    ping.style.display = 'block';
    heidi.style.display = 'block';
    kelly.style.display = 'block';
    jarrett.style.display = 'block';
    beasley.style.display = 'block';
    june.style.display = 'block';
    fall.style.display = 'block';

})
peopleone.addEventListener('mouseout', function (event) {
    direct.style.display = 'none';
    exit.style.display = 'block';
});


peopletwo.addEventListener('mouseover', function (event) {
    indirect.style.display = 'block';
    exit.style.display = 'none';
});
peopletwo.addEventListener('click', function (event) { 
    turrell.style.display = 'block';
    nadya.style.display = 'block';
    becky.style.display = 'block';
    lomski.style.display = 'block';
    machado.style.display = 'block';
    sukriti.style.display = 'block';
    yoon.style.display = 'block';
    jilee.style.display = 'block';
});
peopletwo.addEventListener('mouseout', function (event) {
    indirect.style.display = 'none';
    exit.style.display = 'block';
});


abstractone.addEventListener('mouseover', function (event) {
    thoughts.style.display = 'block';
    exit.style.display = 'none';

});
abstractone.addEventListener('click', function (event) {
    fireflies.style.display = 'block';

});
abstractone.addEventListener('mouseout', function (event) {
    thoughts.style.display = 'none';
    exit.style.display = 'block';
});


abstracttwo.addEventListener('mouseover', function (event) {
    imagination.style.display = 'block';
    exit.style.display = 'none';
});
abstracttwo.addEventListener('click', function (event) {
    fireflies1.style.display = 'block';

});
abstracttwo.addEventListener('mouseout', function (event) {
    imagination.style.display = 'none';
    exit.style.display = 'block';
});


abstractthree.addEventListener('mouseover', function (event) {
    growth.style.display = 'block';
    exit.style.display = 'none';
});
abstractthree.addEventListener('click', function (event) {
    fireflies2.style.display = 'block';

});
abstractthree.addEventListener('mouseout', function (event) {
    growth.style.display = 'none';
    exit.style.display = 'block';
});

abstractfour.addEventListener('mouseover', function (event) {
    wisdom.style.display = 'block';
    exit.style.display = 'none';
});
abstractfour.addEventListener('click', function (event) {
    fireflies3.style.display = 'block';

});
abstractfour.addEventListener('mouseout', function (event) {
    wisdom.style.display = 'none';
    exit.style.display = 'block';
});


abstractfive.addEventListener('mouseover', function (event) {
    love.style.display = 'block';
    exit.style.display = 'none';
});
abstractfive.addEventListener('click', function (event) {
    fireflies4.style.display = 'block';

});
abstractfive.addEventListener('mouseout', function (event) {
    love.style.display = 'none';
    exit.style.display = 'block';
});


svg1.addEventListener('click', function (event) {
    alert("Find me again in a few years");
})

svg2.addEventListener('click', function (event) {
    alert("Find me again in a few years");
})
svg3.addEventListener('click', function (event) {
    alert("Find me again in a few years");
})
svg4.addEventListener('click', function (event) {
    alert("Find me again in a few years");
})
svg5.addEventListener('click', function (event) {
    alert("Find me again in a few years");
})
svg6.addEventListener('click', function (event) {
    alert("Find me again in a few years");
})
// svg5.addEventListener('click', function (event) {
//     alert("I am in development!");
// })




window.onload = function(){
    var bsDiv = document.querySelector('.me');
  
  
    var x, y;
  
  // On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
    window.addEventListener('mousemove', function(event){
        x = event.clientX;
        y = event.clientY;                    
        if ( typeof x !== 'undefined' ){
            bsDiv.style.left = x + "px";
            bsDiv.style.top = y + "px";
        }  else if (e.targetTouches) {
          posX = e.targetTouches[0].clientX;
          posY = e.targetTouches[0].clientY;
          e.preventDefault();
          }
    }, false);
  }
  

    // let hill = document.querySelector('.hill');
    // let sky = document.querySelector('#screen');
    // let sunrise = document.querySelector('.sunrise');
    // let button = document.querySelector('#button');
    
    // button.addEventListener('click', function (event) {
    
    //     sunrise.style.top = '50%';
    //     sunrise.style.left = '35%';
    //     sunrise.style.background = '#fac657';
    //     sunrise.style.boxShadow = '0 0 60px 30px #fac657, 0 0 100px 60px #ffcc99, 0 0 140px 90px rgb(235, 110, 21)';
    //     sky.style.backgroundColor = 'rgb(177,63,35)';
    
    // });