function frosting(){

    document.querySelector(".frost_container:hover").onmousemove = e => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
    
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };
}
function openmod1(){
    document.getElementById("mod1").style.display="Block";
    document.getElementById("body").style.filter="saturate(250%) blur(25px)";
}
function closemod1(){
    document.getElementById("mod1").style.display="None";
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
function opendialog1(){
    document.getElementById("dialog1").style.display="Block";
}
function closedialog1(){
    document.getElementById("dialog1").style.display="None";
}
/*

$(function() {
$( ".dialogue_box" ).draggable();
});

*/
