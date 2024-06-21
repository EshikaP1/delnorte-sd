function toggleNavDrop(element, isDown) {
    lastHovered = element
    let dropTriangle = element.querySelector(".dropTriangle")
    let dropOptions = element.querySelector(".DropDownWrapper")
    if (isDown) {
        dropTriangle.style.transform = "rotate(180deg)"
        dropOptions.style.display = "grid"
        dropOptions.style.filter = "opacity(0)"
        window.setTimeout(function(){dropOptions.style.filter = "opacity(1)"},20)
        return
    }
    dropTriangle.style.transform = "rotate(0deg)"
    dropOptions.style.filter = "opacity(0)"
    dropOptions.style.display = "none"

}