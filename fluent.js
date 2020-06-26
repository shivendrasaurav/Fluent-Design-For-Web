function frosting(){

    document.querySelector(".frost_container:hover").onmousemove = e => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
    
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };
}

function ShowRange(){
  
    var slider = document.getElementById("slider");
    var output = document.getElementById("slidervalue");
    output.innerHTML = slider.value;
  
    slider.oninput = function() {
    output.innerHTML = this.value;
    }
  
}  


function openmod1(){
    document.getElementById("mod1").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closemod1(){
    document.getElementById("mod1").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}
function openmod2(){
    document.getElementById("mod2").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closemod2(){
    document.getElementById("mod2").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}
function openmod3(){
    document.getElementById("mod3").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closemod3(){
    document.getElementById("mod3").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}
function openmod4(){
    document.getElementById("mod4").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closemod4(){
    document.getElementById("mod4").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}
function openmod5(){
    document.getElementById("mod5").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closemod5(){
    document.getElementById("mod5").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}


function openside1(){
    document.getElementById("side1").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closeside1(){
    document.getElementById("side1").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}
function openside2(){
    document.getElementById("side2").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closeside2(){
    document.getElementById("side2").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}
function openside3(){
    document.getElementById("side3").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closeside3(){
    document.getElementById("side3").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}
function openside4(){
    document.getElementById("side4").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closeside4(){
    document.getElementById("side4").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}
function openside5(){
    document.getElementById("side5").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closeside5(){
    document.getElementById("side5").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}


function opendialog1(){
    document.getElementById("dialog1").style.display="Block";
}
function closedialog1(){
    document.getElementById("dialog1").style.display="None";
}
function opendialog2(){
    document.getElementById("dialog2").style.display="Block";
}
function closedialog2(){
    document.getElementById("dialog2").style.display="None";
}
function opendialog3(){
    document.getElementById("dialog3").style.display="Block";
}
function closedialog3(){
    document.getElementById("dialog3").style.display="None";
}
function opendialog4(){
    document.getElementById("dialog4").style.display="Block";
}
function closedialog4(){
    document.getElementById("dialog4").style.display="None";
}
function opendialog5(){
    document.getElementById("dialog5").style.display="Block";
}
function closedialog5(){
    document.getElementById("dialog5").style.display="None";
}
/*

$(function() {
$( ".dialogue_box" ).draggable();
});

*/
