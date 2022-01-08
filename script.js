var time1 = document.getElementById("eight");
var time1Btn = document.getElementById("eightbtn");
var time2 = document.getElementById("nine");
var time2Btn = document.getElementById("ninebtn")
var time3 = document.getElementById("ten");
var time3Btn = document.getElementById("tenbtn");
var time4 = document.getElementById("eleven");
var time4Btn = document.getElementById("elevenbtn");
var time5 = document.getElementById("noon");
var time5Btn = document.getElementById("noonbtn");
var time6 = document.getElementById("one");
var time6Btn = document.getElementById("onebtn");
var time7 = document.getElementById("two");
var time7Btn = document.getElementById("twobtn");
var time8 = document.getElementById("three");
var time8Btn = document.getElementById("threebtn");
var time9 = document.getElementById("four");
var time9Btn = document.getElementById("fourbtn");
var time10 = document.getElementById("five");
var time10Btn = document.getElementById("fivebtn");

function start() {
    loadOne();
    loadTwo();
    loadThree();
    loadFour();
    loadFive();
    loadSix();
    loadSeven();
    loadEight();
    loadNine();
    loadTen();
};
start();


time1Btn.addEventListener("click", function() {
saveOne();
loadOne();


});



function saveOne() {
    var oneText = {
        schedule: time1.value.trim()
    };

localStorage.setItem("oneText", JSON.stringify(oneText));

loadOne();
};


function loadOne() {
    var savedOne = JSON.parse(localStorage.getItem("oneText"));

    if (savedOne !== null) {
        time1.textContent = savedOne.schedule;
        } else{
        return;
        }
}


time2Btn.addEventListener("click", function() {
saveTwo();
loadTwo();


});

function saveTwo() {
    var twoText = {
        schedule: time2.value.trim()        
    };
    
localStorage.setItem("twoText", JSON.stringify(twoText));
    
loadTwo();
};
    
    
function loadTwo() {
    var savedTwo = JSON.parse(localStorage.getItem("twoText"));
    
    if (savedTwo !== null) {
        time2.textContent = savedTwo.schedule;
        } else{
        return;
        }
}





time3Btn.addEventListener("click", function() {
saveThree();
loadThree();


});



function saveThree() {
    var threeText = {
        schedule: time3.value.trim()
    };

localStorage.setItem("threeText", JSON.stringify(threeText));

loadThree();
};


function loadThree() {
    var savedThree = JSON.parse(localStorage.getItem("threeText"));

    if (savedThree !== null) {
        time3.textContent = savedThree.schedule;
        } else{
        return;
        }
}

time4Btn.addEventListener("click", function() {
    saveFour();
    loadFour();
    
    
    });
    
    
    
function saveFour() {
    var fourText = {
        schedule: time4.value.trim()
    };
    
localStorage.setItem("fourText", JSON.stringify(fourText));
    
loadFour();
};
    
    
function loadFour() {
    var savedFour = JSON.parse(localStorage.getItem("fourText"));
    
    if (savedFour !== null) {
        time4.textContent = savedFour.schedule;
        } else{
        return;
        }
}
time5Btn.addEventListener("click", function() {
    saveFive();
    loadFive();
    
    
    });
    
    
    
function saveFive() {
    var fiveText = {
        schedule: time5.value.trim()
    };
    
localStorage.setItem("fiveText", JSON.stringify(fiveText));
    
loadFive();
};
    
    
function loadFive() {
    var savedFive = JSON.parse(localStorage.getItem("fiveText"));
    
    if (savedFive !== null) {
        time5.textContent = savedFive.schedule;
        } else{
        return;
        }
}

time6Btn.addEventListener("click", function() {
    saveSix();
    loadSix();
    
    
    });
    
    
    
function saveSix() {
    var sixText = {
        schedule: time6.value.trim()        
    };

localStorage.setItem("sixText", JSON.stringify(sixText));
    
loadSix();
};
    
    
function loadSix() {
    var savedSix = JSON.parse(localStorage.getItem("sixText"));
    
    if (savedSix !== null) {
        time6.textContent = savedSix.schedule;
        } else{
        return;
        }
}


time7Btn.addEventListener("click", function() {
    saveSeven();
    loadSeven();
    
    
    });

function saveSeven() {
    var sevenText = {
        schedule: time7.value.trim()
    };

localStorage.setItem("sevenText", JSON.stringify(sevenText));

loadSeven();
};


function loadSeven() {
    var savedSeven = JSON.parse(localStorage.getItem("sevenText"));

    if (savedSeven !== null) {
        time7.textContent = savedSeven.schedule;
        } else{
        return;
        }
}

time8Btn.addEventListener("click", function() {
    saveEight();
    loadEight();
    
    
    });

function saveEight() {
    var eightText = {
        schedule: time8.value.trim()
    };

localStorage.setItem("eightText", JSON.stringify(eightText));

loadEight();
};


function loadEight() {
    var savedEight = JSON.parse(localStorage.getItem("eightText"));

    if (savedEight !== null) {
        time8.textContent = savedEight.schedule;
        } else{
        return;
        }
}

time9Btn.addEventListener("click", function() {
    saveNine();
    loadNine();
    
    
    });
    
    
    
    function saveNine() {
        var nineText = {
            schedule: time9.value.trim()
        };
    
    localStorage.setItem("nineText", JSON.stringify(nineText));
    
    loadOne();
    };
    
    
    function loadNine() {
        var savedNine = JSON.parse(localStorage.getItem("nineText"));
    
        if (savedNine !== null) {
            time9.textContent = savedNine.schedule;
            } else{
            return;
            }
    }

    time10Btn.addEventListener("click", function() {
        saveTen();
        loadTen();
        
        
        });
        
        
        
        function saveTen() {
            var tenText = {
                schedule: time10.value.trim()
            };
        
        localStorage.setItem("tenText", JSON.stringify(tenText));
        
        loadTen();
        };
        
        
        function loadTen() {
            var savedTen = JSON.parse(localStorage.getItem("tenText"));
        
            if (savedTen !== null) {
                time10.textContent = savedTen.schedule;
                } else{
                return;
                }
        }