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

random[0] = "./pages/biling.html";
random[1] = "./pages/book.html";
random[2] = "./pages/chelsea.html";
random[3] = "./pages/crossness.html";
random[4] = "./pages/earls.html";
random[5] = "./pages/goj.html";
random[6] = "./pages/greenwich.html";
random[7] = "./pages/hoxton.html";
random[8] = "./pages/leadenhall.html";
random[9] = "./pages/neal.html";
random[10] = "./pages/stdun.html";
random[11] = "./pages/wilton.html";

function randomlink() {
  window.location = random[Math.floor(Math.random()*(12))];
}
