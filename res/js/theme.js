window.onload = function () {
    init();
    choosePic();
    pageColors();
};

let pictures = [
    "overworld",
    "corruption",
    "crimson",
    "hallow",
    "jungle",
    "underground",
];

let href = location.href;

/*
    This took me much more time than it should have
*/
let extractRootDomain = function(filePath){
    const segments = filePath.split(/[\\/]/);
    const resIndex = segments.indexOf('res');
    
    if (resIndex !== -1) {
        const rootSegments = segments.slice(0, resIndex);
        return rootSegments.join('/') + "/";
    } else {
        return "";
    }
};

const prefixes = ["res/img/backgrounds/", "res/img/logos/", "res/img/themes/"];
let randomNum, theme, foot;

function init() {
    foot = document.getElementById("foot");
    randomNum = Math.floor(Math.random() * pictures.length);
    theme = pictures[randomNum];
}

function choosePic () {
    
    //You always miss it the first time, and so I did. But it should work on the second. Or the third. Or the fourth. Or the fifth...
    document.body.style.backgroundImage = `url("${extractRootDomain(href)}${prefixes[0]}${theme}.png")`;
    document.getElementById("logo").src = extractRootDomain(href) + prefixes[1] + "logo-" + theme + ".png";
    console.log(`url("${extractRootDomain(href)}${prefixes[2]}nav-${theme}.jpg")`);
    foot.style.backgroundImage = `url("${extractRootDomain(href)}${prefixes[2]}nav-${theme}.webp")`;
}

function pageColors() {
    const root = document.querySelector(':root');

    let colorVars = {
        "page-bg": "#5A433A",
        "selection": "#4B3932" 
    };

    switch (theme) {
        case "overworld":
            break;
        case "corruption":
            colorVars = {"page-bg": "#55424B", "selection": "#42363C"};
            break;
        case "crimson":
            colorVars = {"page-bg": "#5B3E40", "selection": "#473334"};
            break;
        case "hallow":
            colorVars = {"page-bg": "#806760", "selection": "#5F4E48"};
            break;
        case "jungle":
            colorVars = {"page-bg": "#4A422D", "selection": "#4B4233"};
            break
        case "underground":
            colorVars = {"page-bg": "#3E393D", "selection": "#383536"};
            break;
        default:
            break;
    }
    root.style.setProperty('--page-bg', colorVars["page-bg"]);
    root.style.setProperty('--selection', colorVars["selection"]);
    root.style.setProperty('--grass-top', `url("${extractRootDomain(href)}${prefixes[2]}grass-${theme}.webp") top left repeat-x`)
}