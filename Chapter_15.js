<p id="balloon">🎈</p>

<script>
  let currentSize;
  
  function updateSize(newSize) {
	currentSize = newSize
    document.getElementById("balloon").style.fontSize = currentSize + "px"
  }
  
  updateSize(20);
  
  function handleEvent() {
    if (event.key == "ArrowUp") { 
      if (currentSize > 70) {
        document.getElementById("balloon").textContent = "💥"
        document.body.removeEventListener("keydown", handleEvent)
      } else {
        updateSize(currentSize * 1.1)
        event.preventDefault();
      }
    }
    if (event.key == "ArrowDown") {
      updateSize(currentSize * 0.9)
      event.preventDefault();
    }
  }
  document.body.addEventListener("keydown", handleEvent);
</script>