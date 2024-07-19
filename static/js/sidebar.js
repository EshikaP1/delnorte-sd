let sidebarModal = document.getElementById("SidebarDarkModal")
let sidebar = document.getElementById("Sidebar")
function toggleSidebar()
{
    if(window.getComputedStyle(sidebarModal).opacity == 0)
    {
        sidebarModal.style.opacity = 100;
        sidebar.style.cssText = "transform: translateX(0px); box-shadow: 41px 0px 27px 10px #0000002b;"
    }
    else
    {
        sidebarModal.style.opacity = 0;
        sidebar.style.cssText = "transform: translateX(-300px); box-shadow: 0;"
    }
}

function toggleDropdown(el)
{
 let parent = el.parentElement
 let dropContent = parent.querySelector(".DropdownContent") 
 if(window.getComputedStyle(dropContent).maxHeight == "0px")
 {
    dropContent.style.maxHeight = dropContent.scrollHeight + "px"
    el.querySelector("span").innerText = "unfold_less"
    return
 }
 dropContent.style.maxHeight = "0px"
 el.querySelector("span").innerText = "unfold_more"
}