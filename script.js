// select share icon
// select hidden share panel
// addeventlistener to share icon

const shareBtns = document.querySelectorAll(".share-icon-container")
const sharePanel = document.querySelector(".share-panel")
const previewCard = document.querySelector(".preview-card")

shareBtns.forEach((shareBtn) => {
  shareBtn.addEventListener("click", (event) => {
    event.stopPropagation()
    console.log("btn clicked")
    sharePanel.classList.toggle("open-panel")
  })
})
previewCard.addEventListener("click", (event) => {
  const clickedElement = event.target

  if (
    !sharePanel.contains(clickedElement) &&
    sharePanel.classList.contains("open-panel")
  ) {
    console.log("inside the if block")
    sharePanel.classList.remove("open-panel")
  }
})
