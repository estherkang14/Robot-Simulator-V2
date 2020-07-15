document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  let mainContainer = document.querySelector("#moves-container")
  document.addEventListener("keydown", function(e) {
    if (e.keyCode == '38') {
      let upLi = document.createElement("li")
      upLi.innerText = "up" 
      mainContainer.appendChild(upLi)
    }
    if (e.keyCode == '40') {
      let downLi = document.createElement("li")
      downLi.innerText = "down"
      mainContainer.appendChild(downLi)
    }
    if (e.keyCode == '37') {
      let leftLi = document.createElement("li")
      leftLi.innerText = "left"
      mainContainer.appendChild(leftLi)
    }
    if (e.keyCode == '39') {
      let rightLi = document.createElement("li")
      rightLi.innerText = "right"
      mainContainer.appendChild(rightLi)
    }
  })

  const moveButton = document.querySelector("button#move-button")
  moveButton.addEventListener("click", function(e) {
    let allChildren = mainContainer.childNodes
    let moveAction = mainContainer.firstChild
    move(moveAction.innerText)
    moveAction.remove()
  })

  document.addEventListener("keydown", function(e) {
    if (e.keyCode == '8') {
      let deleteChild = mainContainer.lastChild 
      deleteChild.remove()
    }
  })
})
