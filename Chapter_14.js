<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  let table = document.createElement("table");
  let header = table.appendChild(document.createElement("tr"));

  for (let key of Object.keys(MOUNTAINS[0])) {
    let cell = header.appendChild(document.createElement("th"));
    cell.appendChild(document.createTextNode(key)); 
  }
  
  for (let row of MOUNTAINS) {
    let line = table.appendChild(document.createElement("tr"));
    
    for (let value of Object.values(row)) {
      let cell = line.appendChild(document.createElement("td"));
      cell.appendChild(document.createTextNode(value));
      if (!isNaN(value)) cell.style.textAlign = "right";
    }
  }
  
  document.getElementById("mountains").appendChild(table);
</script>