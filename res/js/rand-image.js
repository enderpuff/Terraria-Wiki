window.onload = choosePic;

var pictures = [
    [
        "overworld.png",
        "corruption.png",
        "crimson.png",
        "hallow.png",
        "jungle.png",
        "snow.png",
        "underground.png",
    ],
    [
        "logo.png",
        "logo-corruption.png",
        "logo-crimson.png",
        "logo-hallow.png",
        "logo-jungle.png",
        "logo-snow.png",
        "logo-underground.png",
    ],
];

var href = location.href;

/*
    This took me much more time than it should have
*/
var extractRootDomain = function(filePath){
    const segments = filePath.split(/[\\/]/);
    const resIndex = segments.indexOf('res');
    
    if (resIndex !== -1) {
        const rootSegments = segments.slice(0, resIndex);
        return rootSegments.join('/') + "/";
    } else {
        return "";
    }
};

var prefixes = ["res/img/backgrounds/", "res/img/logos/",];

function choosePic() {
    console.log(extractRootDomain(href));
    var randomNum = Math.floor(Math.random() * pictures[0].length);
    //You always miss it the first time, and so I did. But it should work on the second. Or the third. Or the fourth. Or the fifth...
    document.body.style.backgroundImage = `url("${extractRootDomain(href)}${prefixes[0]}${pictures[0][randomNum]}")`
    document.getElementById("logo").src = extractRootDomain(href) + prefixes[1] + pictures[1][randomNum];
}