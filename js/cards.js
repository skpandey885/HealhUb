// For Darkmode

const body=document.querySelector("body");
const darkswitch=document.getElementById("icon");

if(localStorage.getItem("theme")==null)
{
    localStorage.setItem("theme","light");
}

let localData=localStorage.getItem("theme");
if(localData=="light")
{
    // darkswitch.src="assets/darkmoon.png";
    document.body.classList.remove("dark-theme");
}
else if(localData=="dark")
{
    // darkswitch.src="assets/sun.png";
    darkswitch.classList.toggle("active");
    document.body.classList.add("dark-theme");

}

darkswitch.onclick=function ()
{
    darkswitch.classList.toggle("active");
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
    {
        // darkswitch.src="assets/sun.png";
        localStorage.setItem("theme","dark");
    }
    else
    {
        // darkswitch.src="assets/darkmoon.png";
        localStorage.setItem("theme","light");
    }
}