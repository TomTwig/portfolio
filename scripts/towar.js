const towarAnimation = document.getElementById("towarPreview-animation");
const differentAnimations = ["images/towar_viking.gif","images/towar_tank.gif","images/towar_rogue.gif"];


setInterval(()=>{
    let randomIndex = Math.floor(Math.random()* differentAnimations.length);
    towarAnimation.src = differentAnimations[randomIndex];
},2500);