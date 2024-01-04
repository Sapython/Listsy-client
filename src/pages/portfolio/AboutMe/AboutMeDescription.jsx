import { createSignal } from "solid-js"

export function AboutMeDescription() {
    const [descriptionType,setDescriptionType]  = createSignal("professional")
    const toggle = () => {
        if (descriptionType() == "professional") setDescriptionType("unProfessional")
        else setDescriptionType("professional")
    }
    return <div>
        { descriptionType() == "professional" && <p>I started coding with QBASIC when I was 10, and then learned C, HTML, and CSS. At 14, I made my own text editor with Python and Tkinter. That was a game-changer for me. I moved on to Angular and Typescript, which were challenging but rewarding. I became a professional programmer and worked on projects using Ionic, Firebase, GCP, AWS, Docker, and Kubernetes. I learned a lot and had fun along the way.</p>}
        { descriptionType()=="unProfessional" && <p>A vibing weeb, working as a programmer. Who loves to just create stuff, irrespective of field, and programming language. The one who considers JavaScript (Typescript) as a fake language, and GoLang, C++, Rust as the real deal. And a real sucker for good music.</p>}
        { descriptionType()=="unProfessional" && <p>Did you find that absurd, Congrats! It is.</p> }
        <div class="buttons">
            <button class="icon" onClick={toggle}>😒</button>
            <button >Read the real story</button>
        </div>
    </div>
}