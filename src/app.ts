let darkMode:boolean = false;

const switchTheme = () => {
    const r:HTMLInputElement|null = document.querySelector(":root");
    const urlLogoArgProgramaLight = "assets/images/logos/logo-argentina-programa.png";
    const urlLogoArgProgramaDark = "assets/images/logos/logo-argentina-programa-dark.png";
    const urlButtonThemeLight = "assets/images/icons/brightness-high.svg";
    const urlButtonThemeDark = "assets/images/icons/moon.svg";
    
    if(darkMode) {
        switchElementsClass("btn-outline-success", "btn-outline-warning");
        switchElementsClass("bg-dark", "bg-white");
        switchElementsClass("icon-dark", "icon-light");
        switchElementsClass("bg-black", "bg-light");
        switchElementsClass("text-white", "text-black");
        switchElementsClass("text-success", "text-warning");
        switchElementsClass("bg-success", "bg-warning");
        switchElementsClass("vr-dark", "vr-light");

        document.getElementById("logoArgPrograma")?.setAttribute("src", urlLogoArgProgramaLight);
        document.getElementById("buttonThemeImg")?.setAttribute("src", urlButtonThemeLight);

        darkMode = false;
    }
    else {
        switchElementsClass("btn-outline-warning", "btn-outline-success");
        switchElementsClass("bg-light", "bg-black");
        switchElementsClass("icon-light", "icon-dark");
        switchElementsClass("bg-white", "bg-dark");
        switchElementsClass("text-black", "text-white");
        switchElementsClass("text-warning", "text-success");
        switchElementsClass("bg-warning", "bg-success");
        switchElementsClass("vr-light", "vr-dark");

        document.getElementById("logoArgPrograma")?.setAttribute("src", urlLogoArgProgramaDark);
        document.getElementById("buttonThemeImg")?.setAttribute("src", urlButtonThemeDark);

        darkMode = true;
    }
}

const switchElementsClass = (oldClass:string, newClass:string) => {
    const elements:HTMLCollection = document.getElementsByClassName(oldClass);

    for(let element of Array.from(elements))
    {
        console.log(element);
        switchClass(element, oldClass, newClass);
    }
}

const switchClass = (element:Element, oldClass:string, newClass:string) => {
        element.classList.remove(oldClass);
        element.classList.add(newClass);
}

const buttonTheme:HTMLElement|null = document.getElementById("themeButton");

if(buttonTheme)
    buttonTheme.onclick = switchTheme;
