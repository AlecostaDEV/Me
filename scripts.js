const languageSwitch = document.getElementById("checkbox");


onLanguageChange = () => {
    //"en" e "pt" texts
    const enTxt = document.getElementById("en-txt")
    const ptTxt = document.getElementById("pt-br-txt")

    //MENU texts
    const home = document.getElementById("home")
    const aboutMe = document.getElementById("about-me")
    const projects = document.getElementById("projects")
    const contact = document.getElementById("contact")

    //Home Intro texts
    const homeIntro = document.getElementById("home-intro")
    const resumeButtonBack = document.getElementById("resume-button-back")
    const resumeButtonFront = document.getElementById("resume-button-front")
    const homePhrase = document.getElementById("home-phrase")

    //HOME TOOLS texts
    const myToolsTitle = document.getElementById("my-tools-title")
    const frontendBoxTxt = document.getElementById("frontend-box-txt")
    const javascriptBoxTxt = document.getElementById("javascript-box-txt")
    const passionTitle = document.getElementById("passion-title")
    const passionBoxTxt = document.getElementById("passion-box-txt")

    //ABOUT ME texts
    const aboutMeTitle = document.getElementById("about-me-title")
    const aboutMeTxt = document.getElementById("about-me-txt")

    if (languageSwitch.checked) {//opções para pt

        //cores e pesos dos textos "en" e "pt"
        enTxt.style.color = "rgb(56, 56, 56)"
        enTxt.style.opacity = 0.4
        ptTxt.style.color = "#2c96bf"
        ptTxt.style.opacity = 1

        //MENU
        home.innerHTML = "INÍCIO"
        aboutMe.innerHTML = "SOBRE MIM"
        projects.innerHTML = "PROJETOS"
        contact.innerHTML = "CONTATO"

        //INTRO
        homeIntro.innerHTML = "Olá, eu sou"
        resumeButtonBack.innerHTML = "Baixar Currículo"
        resumeButtonFront.innerHTML = "Baixar Currículo"
        homePhrase.innerHTML = "Primeiro, resolva o problema. Depois, escreva o código."

        //HOME TOOLS
        myToolsTitle.innerHTML = "FERRAMENTAS"
        frontendBoxTxt.innerHTML = "Meus trabalhos são na maior parte focados em front-end, HTML e CSS"
        javascriptBoxTxt.innerHTML = "Ferramenta muito poderosa e dinâmica, minha favorita até o momento"
        passionTitle.innerHTML = "Paixão"
        passionBoxTxt.innerHTML = "Minha paixão pela programação é a minha ferramenta mais forte"

        //ABOUT ME texts
        aboutMeTitle.innerHTML = "SOBRE MIM"
        aboutMeTxt.innerHTML = "Olá, sou o Alexandre Costa, um programador do Brasil, apaixonado em FrontEnd, atualmente trabalhando como freelancer. Fui apresentado a programação quando tinha 17 anos, e desde então, minha paixão por programar nunca parou de crescer. Passou uns anos, me juntei a um grupo de desenvolvedores numa comunidade focada em FrontEnd, chamada DevClub. Foi onde conheci meu mentor, Rodolfo, que me fez acreditar que eu poderia ser um deles. Meu objetivo é continuar melhorando minhas habilidades de programação. <br><br>Eu amo minha esposa e nossa filha, gosto de tocar minha Viola clássica, ir a igreja, cozinhar comidas deliciosas e de construir mais codigos."

    } else {//opções para en 

        //cores e pesos dos textos "en" e "pt"
        enTxt.style.color = "#2c96bf"
        enTxt.style.opacity = 1
        ptTxt.style.color = "rgb(56, 56, 56)"
        ptTxt.style.opacity = 0.4

        //MENU
        home.innerHTML = "HOME"
        aboutMe.innerHTML = "ABOUT ME"
        projects.innerHTML = "PROJECTS"
        contact.innerHTML = "CONTACT"

        //INTRO
        homeIntro.innerHTML = "Hello, I'm"
        resumeButtonBack.innerHTML = "Download Resume"
        resumeButtonFront.innerHTML = "Download Resume"
        homePhrase.innerHTML = "First, solve the problem. Then, write the code."
   
        //HOME TOOLS
        myToolsTitle.innerHTML = "MY TOOLS"
        frontendBoxTxt.innerHTML = "My works are mostly front-end focused, HTML and CSS"
        javascriptBoxTxt.innerHTML = "FSuch a powerful and dinamic tool, my favorite so far"
        passionTitle.innerHTML = "Passion"
        passionBoxTxt.innerHTML = "My passion for coding is the strongest tool I have"

        //ABOUT ME texts
        aboutMeTitle.innerHTML = "ABOUT ME"
        aboutMeTxt.innerHTML = "Hi, I'm Alexandre Costa, a passionate FrontEnd developer from Brazil, currently working as a freelancer. I was introduced to coding when I was 17 years old, and since then, my passion for coding has never stopped increasing. A few years later, I joined a group of developers in a FrontEnd based community called DevClub. It was there that I met my mentor, Rodolfo, who made me believe that I could be one of them. My goal is to keep improving my dev abilities.<br><br>I love my wife and our little daughter, enjoy playing my classic Viola, going to church, cooking delicious meals, and building more code."
    }
}


//  PRÓXIMO PASSO:
//    - DEIXAR O HOME E ABOUT ME NA FORMATAÇÃO CORRETA NO SWITCH
//    - BARRA DE ROLAGEM SUAVE AO CLICAR NAS ANCORAS

languageSwitch.addEventListener("change", onLanguageChange);
