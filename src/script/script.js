ScrollReveal({ reset: true });
window.sr = new ScrollReveal();

var left = [
    ".logo",
    ".box-title",
    ".box-list",
    ".box-button",
    ".left-content",
    ".form-title",
    ".form-div",
    ".left-footer"
]

var right = [
    ".phone",
    ".menu",
    ".right-content",
    ".contact-right",
    ".right-footer",
    ".responsive-menu"
]

var bottom = [
    ".text-box",
    ".box-content",
    ".center-image"
]

class hidden {
    constructor(classToAdd, direction){
        this.classToAdd = classToAdd;
        this.direction = direction;
    }

    init(){
        this.classToAdd ? this.effect() : console.log('An error has occurred with your hidden class.')
    }

    effect(){
        this.direction == "left" ? (
            this.classToAdd.forEach(myClass => {
                sr.reveal(myClass, {
                    delay: 300,
                    origin: 'left',
                    distance: '55px'
                })
            })
        ) : null

        this.direction == "right" ? (
            this.classToAdd.forEach((myClass) => {
                sr.reveal(myClass, {
                    delay: 300,
                    origin: 'right',
                    distance: '55px'
                })
            })
        ) : null
        
        this.direction == "bottom" ? (
            this.classToAdd.forEach((myClass) => {
                sr.reveal(myClass, {
                    delay: 300,
                    origin: 'bottom',
                    distance: '55px'
                })
            })
        ) : null
    }
}

var leftElements = new hidden(left, "left")
leftElements.init()
var rightElements = new hidden(right, "right")
rightElements.init()
var bottomElements = new hidden(bottom, "bottom")
bottomElements.init()

class Menu {
    constructor(links){
        this.links = document.querySelectorAll(links)
    }

    init()
    {
        this.links ? this.menuSystem() : console.log('An error has occurred with your menu.')
    }

    selected()
    {
        this.links.forEach(element => {
            element.classList.contains("selected") ? element.classList.remove("selected") : null
        });
    }

    menuSystem()
    {
        this.links.forEach(element => {
            element.addEventListener("click", () => {
                !element.classList.contains("selected") ? (
                    this.selected(),
                    element.classList.add("selected")
                ) : null
            })
        });
    }
}

var myMenu = new Menu(".nav-link");
myMenu.init()

var resMenu = new Menu(".res-link");
resMenu.init()

class ResponsiveMenu {
    constructor(icon, menu, divLinks){
        this.icon = document.querySelector(icon);
        this.menu = document.querySelector(menu);
        this.divLinks = document.querySelectorAll(divLinks);
    }

    init()
    {
        this.icon ? this.effect(this.icon, this.menu, this.divLinks) : console.log('An error has occurred')
    }

    effect(iconClass, menuClass, divlClass)
    {
        this.icon.addEventListener("click", () => {
            iconClass.classList.toggle("responsive-active")
            iconClass.classList.contains("clicked") ? (iconClass.classList.add("delay"),
            iconClass.classList.add("after-delay")) : (iconClass.classList.remove("delay"),
            iconClass.classList.remove("after-delay"))
            iconClass.classList.toggle("clicked")
            iconClass.classList.contains("clicked") ? (
                menuClass.style.transform = "scaleY(1)",
                divlClass.forEach(element => {
                    element.style.transform = 'scale(1)';
                    element.classList.contains("a-actived") ? element.classList.remove("a-actived") : null
                    element.classList.add("deactived")
                })
                
            ) : (
                menuClass.style.transform = "scaleY(0)",
                divlClass.forEach(element => {
                    element.style.transform = 'scale(0)';
                    element.classList.remove("deactived")
                    element.classList.add("a-actived")
                })
            )
        })
    }
}

var myResponsiveMenu = new ResponsiveMenu(".hamb-icon", ".menu-options-div", ".div-link")
myResponsiveMenu.init()

class Phone {
    constructor(power, phone){
        this.power = document.querySelector(power)
        this.phone = document.querySelector(phone)
    }

    init()
    {
        this.phone ? this.effect() : console.log('An error as occurred with your phone')
    }

    effect()
    {
        var dark = "src/images/cellphone.png";
        var white = "src/images/cellphone_white.png";

        this.power.addEventListener("click", () => {
            this.phone.classList.contains("dark") ? (
                this.phone.classList.remove("dark"),
                this.phone.classList.add("white"),
                this.phone.src = white
            ) : (
                this.phone.classList.remove("white"),
                this.phone.classList.add("dark"),
                this.phone.src = dark
            )
        })
    }
}

var myPhone = new Phone(".click", ".phone");
myPhone.init();