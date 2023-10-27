// Create an index.html and dompractice.js. Connect the js file.
// Inside the body of your element write the code below to create a bunch of divs using Emmett shortcut.
// For example, div#frenchfry
// There should be a parent div which 6 children and each children has 3 children :)
// The names of the divs should contain the following class names.
// parent > child > grandchild

// ===== JavaScript =====
// Change the title of your webpage to 'DOM Practice' using textContent and without assigning an id or a class name
const webTitle = document.querySelector('title')
webTitle.textContent = "DOM Practice"

// Access the parent and apply the following properties to the parent.
// width 500px
// height of 450 px
// background color of red
const parentDiv = document.querySelector(".parent")
parentDiv.style.width = "500px"
parentDiv.style.height = "450px"
parentDiv.style.backgroundColor = "red"


// Access the children of parent and apply the following properties to them
// Width 100%
// Height 50px
// Background color of blue
// Margins 30 px at top and bottom and 0 on left and right
// Text align of center
// Font color of #E0D635
const childrenDiv = document.querySelectorAll(".child")
for(let child of childrenDiv){
    child.style.width = "100%"
    child.style.height = "50px"
    child.style.backgroundColor = "blue"
    child.style.margin = "30px 0px 30px 0"
    child.style.textAlign = "center"
    child.style.color = "#E0D635"
}


// Access the grandchildren give them the following properties
// width 100%
// height of 7px
// text that indicates index starting at 1
// margin top of 10px
const grandchildrenDiv = document.querySelectorAll(".grandchild")
let i = 1;
for(let grand of grandchildrenDiv){
    grand.style.width = "100%"
    grand.style.height = "7px"
    grand.textContent = `${i}`
    grand.style.marginTop = "10px"
    i++
}

// Grandma's favorite
// Access the 14th grandchild and give them a font color of pink and italicize
//use array index to access the child and use 'children' to access the grandchild. 
// Look at MDN DOM children property
// Assign a text color purple to the 14th grandchild

document.querySelectorAll('.grandchild')[13].style.color = 'pink';
document.querySelectorAll('.grandchild')[13].style.fontStyle = 'italic';


document.querySelectorAll('.child')[4].children[1].style.color = "purple"

// let child14 = grand14.parentNode

// let j =1;
// let grand14;
// let grand9 ;
// for(let grand of grandchildrenDiv){
//     if(j === 9){
//         grand9 = grand
//     }
//     if(j === 14){
//         grand.style.color = "pink"
//         grand.style.fontStyle = "italic" 
//     }
//     j++
//     grand14 = grand;
// }





// The JavaScript of Grandchildren
// Access the parent with the child named 9 and give the parent a position of relative
// Access the 9th child and assign it to a variable named blackSheep. Use the same method from above to access the child (children property)
// Give the following properties to blackSheep
// text color black
// font size 9rem
// text align right
// transform scale(-1, 1)
// position absolute
// top 30px
// left 500px

document.querySelectorAll('.child')[2].style.position = "relative"

let blackSheep = document.querySelectorAll('.child')[2].children[2]

blackSheep.style.color = "black"
blackSheep.style.fontSize = "9rem"
blackSheep.style.textAlign = "right"
blackSheep.style.transform = "scale(-1, 1)"
blackSheep.style.position = "absolute"
blackSheep.style.top = "30px"
blackSheep.style.left = "500px"


