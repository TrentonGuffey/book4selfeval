import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li 
                    data-id="${child.id}" 
                    data-type="child" 
                    data-wish="${child.wish}">
                    ${child.name}
                    </li>`
    }

    html += "</ol>"
    return html
}
// click on child name, pop alert that displays thier wish
document.addEventListener("click",(clickEvent) => {
        const itemClick = clickEvent.target
        // Because of the data-id attribute, use innerText and getAttribute
        if (itemClick.getAttribute("data-type") === "child") {
            window.alert(`${itemClick.innerText}'s wish is to ${itemClick.getAttribute("data-wish")}`)
        }
    }
)

