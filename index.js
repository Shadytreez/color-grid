var row = 0;
var column = 0;

document.getElementById("addRow").addEventListener("click",function(){
    //for the 1st time    
    if(row == 0 & column ==0)
    {
        let newRow = document.createElement("tr");
        let newColumn = document.createElement("td");
        row =1;
        column =1;
        document.getElementById("grid").appendChild(newRow).setAttribute('id',"row"+ row.toString());
        document.getElementById("row1").appendChild(newColumn);
    }else
    {
        let newRow = document.createElement("tr");
        row++;
        document.getElementById("grid").appendChild(newRow).setAttribute('id',"row"+ row.toString());
        for(let i =0; i <column; i++)
        {   let newColumn = document.createElement("td");
            document.getElementById("row" +row.toString()).appendChild(newColumn);
        }
    }
    
});

document.getElementById("addColumn").addEventListener("click",function(){
    //for the 1st time
    
    if(row == 0 & column ==0)
    {
        let newRow = document.createElement("tr");
        let newColumn = document.createElement("td");
        row =1;
        column =1;
        document.getElementById("grid").appendChild(newRow).setAttribute('id',"row"+ row.toString());
        document.getElementById("row1").appendChild(newColumn).setAttribute('id',"colum"+ column.toString());
    }else
    {
        column++;
        for(let i =1; i <=row; i++)
        {   let newColumn = document.createElement("td");
            document.getElementById("row" +i.toString()).appendChild(newColumn);
        }
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
    
});

function colorSelector()
{

}