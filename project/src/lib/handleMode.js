const handleMode = (mode, setMode) => {
    let root = document.querySelector(":root");
    let styleRoot = getComputedStyle(root);

    if(mode === "light") {
        setMode("dark");
        root.style.setProperty("--main-bg", "#1E1E1E");
        root.style.setProperty("--main-color", "#D9D9D9");

    } else {
        setMode("light");
        root.style.setProperty("--main-bg", "#FFF");
        root.style.setProperty("--main-color", "#000");
    }
}

export default handleMode