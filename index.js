var row = 0;
var column = 0;

document.getElementById("addRow").addEventListener("click",function(){
    //for the 1st time
    if(row == 0 & column ==0)
    {
        row =1;
        column =1;
        let newRow = document.createElement("tr");
        let newColumn = document.createElement("td");
        document.getElementById("grid").appendChild(newRow).setAttribute('id',"row"+ row.toString());
        document.getElementById("row1").appendChild(newColumn).setAttribute('id',"colum"+ column.toString());
    }
    
});

document.getElementById("addColumn").addEventListener("click",function(){
    //for the 1st time
    if(row == 0 & column ==0)
    {
        row =1;
        column =1;
        let newRow = document.createElement("tr");
        let newColumn = document.createElement("td");
        document.getElementById("grid").appendChild(newRow).setAttribute('id',"row"+ row.toString());
        document.getElementById("row1").appendChild(newColumn).setAttribute('id',"colum"+ column.toString());
    }
});

document.getElementById("delRow").addEventListener("click",function(){
    alert("dwdw");
});

document.getElementById("delColumn").addEventListener("click",function(){
    alert("dwdw");
});

document.getElementById("fillEmpt").addEventListener("click",function(){
    alert("dwdw");
});

document.getElementById("fillAll").addEventListener("click",function(){
    alert("dwdw");
});

document.getElementById("resetColor").addEventListener("click",function(){
    alert("dwdw");
});