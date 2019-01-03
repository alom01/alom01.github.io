//var random = new Array();

//random[0]=".././biling.html";
//random[1]=".././book.html";
//random[2]=".././chelsea.html";
//random[3]=".././crossness.html";
//random[4]=".././earls.html";
//random[5]=".././goj.html";
//random[6]=".././greenwich.html";
//random[7]=".././hoxton.html";
//random[8]=".././leadenhall.html";
//random[9]=".././neal.html";
//random[10]=".././stdun.html";
//random[11]=".././leadenhall.html";

//function randomlink() {
//  window.location = random[Math.floor(Math.random()*random.length)];
//}


var random = new Array();

random[0] = "./biling.html";
random[1] = "./book.html";
random[2] = "./chelsea.html";
random[3] = "./crossness.html";
random[4] = "./earls.html";
random[5] = "./goj.html";
random[6] = "./greenwich.html";
random[7] = "./hoxton.html";
random[8] = "./leadenhall.html";
random[9] = "./neal.html";
random[10] = "./stdun.html";
random[11] = "./wilton.html";

function randomlink() {
  window.location = random[Math.floor(Math.random()*(12))];
}
