export default function switchTheme(){
    const main = document.querySelector("main")
    const root = document.querySelector(":root")
    //Verifica o tema atual e muda 
    if (main.dataset.theme === "dark"){
        
        root.style.setProperty("--bg-color", "#84A7A1")
        root.style.setProperty("--border-color", "#000000")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#0B60B0")
        root.style.setProperty("--card-color", "#40A2D8")

        main.dataset.theme = "light"
    } else {
        

        root.style.setProperty("--bg-color", "#000000")
        root.style.setProperty("--border-color", "white")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#40A2D8")
        root.style.setProperty("--card-color", "#0B60B0")
        
        main.dataset.theme = "dark"
    }
}