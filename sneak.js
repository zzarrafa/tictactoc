const WIDTH = 600;
const HIGHT = 600;
let player = false;
let canv;
const SIZE = WIDTH  / 3;
var arr = [
    [ ' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]
 
let overrec = false

let header = document.getElementById("header");


function setup()
{
    canv =  createCanvas(WIDTH, HIGHT);


}

function draw_tab()
{
    let x =10;
    let y =10;
    let i =0;
    let j =0;


    while (j < arr.length)
    {
        x = 10;
        i = 0;
        while (i < arr.length)
        {
            console.log(arr.length);
           
            stroke("black");
            rect(x,y,100,100);
            x += 110;
            i++
        }
        y += 110;
        j++;
    }
}
function draw ()
{
    // whille (y < HIGHT)
    // {

    // if ((mouseX > 10 && mouseX < 110 && mouseY > 10 && mouseY < 110) ||
    //     (mouseX > 120 && mouseX < 220 && mouseY > 10 && mouseY < 110)  ||
    //     (mouseX > 230 && mouseX < 330 && mouseY > 10 && mouseY < 110)  ||
    //     (mouseX > 10 && mouseX < 110 && mouseY > 10 && mouseY < 110) ||
    //     (mouseX > 120 && mouseX < 220 && mouseY > 10 && mouseY < 110)  ||
    //     (mouseX > 230 && mouseX < 330 && mouseY > 10 && mouseY < 110)  ||                                      )

    // draw_tab();
    //console.log("aa");
    //console.log(mouseX);
    let x= 0;
    let y = 0;
    for (let i = 0; i < arr.length ;i++){
        x= 0;
        for(let j = 0; j < arr[i].length; j++)
        {

            if ((x < mouseX && mouseX - SIZE < x )&&  ( y < mouseY && mouseY - SIZE < y) && arr[Math.floor(mouseY/ SIZE)][Math.floor(mouseX/ SIZE)] == ' ' )
                fill("pink");
            else
                fill("#74b9ff");
            stroke("#0984e3");
            strokeWeight(6);
            rect (x,y,SIZE,SIZE);
            fill("black");
            textSize(50);
            text(arr[i][j], x + (SIZE /2 ) , y + (SIZE /2));
            x += SIZE;

        }
        y += SIZE;
    }
}

// function update()
//     {
        

    // }
    function mousePressed()
{
    console.log("ss");
    if (arr[Math.floor(mouseY/ SIZE)][Math.floor(mouseX/ SIZE)] != ' ')
        return ;

    if (player)
     arr[Math.floor(mouseY/ SIZE)][Math.floor(mouseX/ SIZE)] = "x";
     else
     arr[Math.floor(mouseY/ SIZE)][Math.floor(mouseX/ SIZE)] = "0";

    if(checkwinner_by_brute_force() != " "){
        //alert("winner "+ );
        header.innerHTML  = "WINNER is " + checkwinner_by_brute_force();
        header.style.display = "block";
         document.getElementById("defaultCanvas0").style.display = "none";
    }

    player = !player;

}

 




function checkwinner_by_brute_force(){

        for(let j = 0; j < arr[0].length ; j++)
        {
            if (arr[0][j] == arr[1][j] && arr[0][j]== arr[2][j] && arr[0][j] != ' '){
                    return arr[0][j];
            }
            if (arr[j][0] == arr[j][1] && arr[j][0]== arr[j][2] && arr[j][0] != ' ')
                return arr[j][0];

            if (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2] && arr[0][0] != ' ')
            return arr[0][0];       
           
            if (arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0] && arr[0][2] != ' ')
            return arr[0][2]; 
      
        }
        let isspace = false;
        for (let i = 0; i <arr.length ; i++)
            for (let j = 0; j <arr[i].length ; j++){
                if(arr[i][j] == ' ')
                    isspace = true;
            }


        if (!isspace)
            alert("ta3adol");

     



        return " ";
}