var row = 0; 
var column = 0;
var color = "white"; //white by default
var filling = false; //for mousedown and mouseover color drag

document.getElementById("addRow").addEventListener("click",function(){  
    if(row == 0 & column ==0)
    {
        //for the 1st time  
        initalBox();
    }else
    {
        // make a new row and add a box equal to the value of column
        let newRow = document.createElement("tr");
        row++;
        document.getElementById("grid").appendChild(newRow).setAttribute('id',"row"+ row.toString());
        for(let i =1; i <=column; i++)
        {   let newColumn = document.createElement("td");
            var columnID = "row"+ row.toString()+"column"+i.toString();
            document.getElementById("row" +row.toString()).appendChild(newColumn).setAttribute("id", columnID);
            document.getElementById(columnID).addEventListener("click",colorSelector(columnID));
            document.getElementById(columnID).style.backgroundColor = "white";      
            document.getElementById(columnID).addEventListener("mousedown",function(){
                filling = true;
                holdMode();
            });
            document.getElementById(columnID).addEventListener("mouseup",function(){
                filling = false;
            });
        }
    }
    
});

document.getElementById("addColumn").addEventListener("click",function(){
    if(row == 0 & column ==0)
    {
        //for the 1st time
        initalBox();
    }else
    {
        //make add one box to the end of every row
        column++;
        for(let i =1; i <=row; i++)
        {   let newColumn = document.createElement("td");
            var columnID = "row"+ i + "column"+ column.toString();
            document.getElementById("row" +i.toString()).appendChild(newColumn).setAttribute("id", columnID);
            document.getElementById(columnID).addEventListener("click",colorSelector(columnID));
            document.getElementById(columnID).style.backgroundColor = "white";
            document.getElementById(columnID).addEventListener("mousedown",function(){
                filling = true;
                holdMode();
            });
            document.getElementById(columnID).addEventListener("mouseup",function(){
                filling = false;
            });
            
        }
    }
});

document.getElementById("delRow").addEventListener("click",function(){
    let delrow = document.getElementById("row" +row.toString()); //get last row id
    document.getElementById("grid").removeChild(delrow); //delete that row
    row--;
    //if all of the rows are gone the column is reset
    if(row == 0)
    {
        column =0;
    }
});

document.getElementById("delColumn").addEventListener("click",function(){
   
    if(column == 0)
    {return;}
    for(let i =1; i <= row; i++){  
    let delColumn = document.getElementById("row" +i.toString()).getElementsByTagName("td")[column-1];  //get last column id
    document.getElementById("row" +i.toString()).removeChild(delColumn); //delete that column
   }

   column--;
   //if all of the column are gone the row is reset
   if(column == 0)
    {
        row =0;
    }
});

document.getElementById("fillEmpt").addEventListener("click",function(){
    ////fill all of the white background with the current color
    for(let i =1; i <= row; i++)
    {
        for(let j = 1; j <= column;j++)
        {   
            let columnID = "row"+ i + "column"+ j;
            let myDivBackGroundColor = document.getElementById(columnID).style.backgroundColor;
            console.log(myDivBackGroundColor);
            if(myDivBackGroundColor == "white")
            {
                document.getElementById(columnID).style.backgroundColor = color;
            }
        }
    }
});

document.getElementById("fillAll").addEventListener("click",function(){
   //fill all box with current color
    for(let i =1; i <= row; i++)
    {
        for(let j = 1; j <= column;j++)
        {   
            let columnID = "row"+ i + "column"+ j;
            document.getElementById(columnID).style.backgroundColor = color;
        }
    }
});

document.getElementById("resetColor").addEventListener("click",function(){
    //fill all box with white
    for(let i =1; i <= row; i++)
    {
        for(let j = 1; j <= column;j++)
        {   
            var columnID = "row"+ i + "column"+ j;
            document.getElementById(columnID).style.backgroundColor = "white";
        }
    }
});

//when color is change on dropdown, change value of color
document.getElementById("color").addEventListener("change",function(){
    color = document.getElementById("color").value.toString();
});

//when the box is click, change the background to current color
function colorSelector(colorColumn)
{
    document.getElementById(colorColumn).addEventListener("click", function(){
        document.getElementById(colorColumn).style.backgroundColor = color;
    });
}


function initalBox(){
        let newRow = document.createElement("tr");
        let newColumn = document.createElement("td");
        row =1;
        column =1;
        document.getElementById("grid").appendChild(newRow).setAttribute('id',"row"+ row.toString());
        var columnID = "row"+ row.toString()+"column"+column.toString();
        document.getElementById("row1").appendChild(newColumn).setAttribute("id", columnID);
        document.getElementById(columnID).addEventListener("click",colorSelector(columnID));
        document.getElementById(columnID).style.backgroundColor = "white";
        document.getElementById(columnID).addEventListener("mousedown",function(){
            document.getElementById(columnID).style.backgroundColor =  color;
            filling = true;
            holdMode();
        });
        document.getElementById(columnID).addEventListener("mouseup",function(){
            filling = false;
        });        
}

//when a box is has mousedown, update all of the td tag to have mouseover to change color when filling is true
function holdMode(){
for(let i =1; i <= row; i++)
{
    for(let j=1; j<= column; j++)
    {
        let columnID = "row"+ i + "column"+ j;
        document.getElementById(columnID).addEventListener("mouseover",function(){
        if(filling == true)
        {
                document.getElementById(columnID).style.backgroundColor = color;
        }
        });
    }
} 
}