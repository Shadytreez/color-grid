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
        document.getElementById("row1").appendChild(newColumn).addEventListener("click",colorSelector);
    }else
    {
        let newRow = document.createElement("tr");
        row++;
        document.getElementById("grid").appendChild(newRow).setAttribute('id',"row"+ row.toString());
        for(let i =0; i <column; i++)
        {   let newColumn = document.createElement("td");
            document.getElementById("row" +row.toString()).appendChild(newColumn).addEventListener("click",colorSelector);
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
        document.getElementById("row1").appendChild(newColumn).addEventListener("click",colorSelector);
    }else
    {
        column++;
        for(let i =1; i <=row; i++)
        {   let newColumn = document.createElement("td");
            document.getElementById("row" +i.toString()).appendChild(newColumn).addEventListener("click",colorSelector);
        }
    }
});

document.getElementById("delRow").addEventListener("click",function(){
    let delrow = document.getElementById("row" +row.toString());
    document.getElementById("grid").removeChild(delrow);
    row--;
    //if all of the rows are gone the column is reset
    if(row == 0)
    {
        column =0;
    }
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
    alert("dwdw");
}