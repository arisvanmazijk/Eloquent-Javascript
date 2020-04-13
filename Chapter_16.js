{/* <link rel="stylesheet" href="css/game.css">

<body>
<script>
  // The old runGame function. Modify it...
  async function runGame(plans, Display) {
    let lives = 3;
    for (let level = 0; level < plans.length;) {
      console.log(lives + " lives remaining");
      let status = await runLevel(new Level(plans[level]),
                                  Display);
      if (status == "won") { 
        level++;
      } else if(status == "lost") {
        lives--;
        if (lives == 0) { 
          level = 0;
          console.log("You've lost!");
        }
      }
    }
    console.log("You've won!");
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body> */}