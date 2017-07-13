var triWidth = 134;
var triHeight = 87;
var i = 1;
var id ;
var coordinates = new Array(
	/*first Line*/
		{ x: 0 , y: 0 },
		{ x: 1 , y: 0 },
		{ x: 2 , y: 0 },
		{ x: 3 , y: 0 },
		{ x: 4 , y: 0 },
		{ x: 6 , y: 0 },
		{ x: 7 , y: 0 },
		{ x: 8 , y: 0 },
		{ x: 9 , y: 0 },
		{ x: 10 , y: 0 },
		{ x: 11 , y: 0 },
	/*second Line*/
		{ x: 1.5 , y: 1 },
		{ x: 2.5 , y: 1 },
		{ x: 3.5 , y: 1 },
		{ x: 4.5 , y: 1 },
		{ x: 6.5 , y: 1 },
		{ x: 7.5 , y: 1 },
		{ x: 8.5 , y: 1 },
		{ x: 9.5 , y: 1 },
		{ x: 10.5 , y: 1 },
	/*third Line*/
		{ x: 2 , y: 2 },
		{ x: 3 , y: 2 },
		{ x: 4 , y: 2 },
		{ x: 5 , y: 2 },
		{ x: 7 , y: 2 },
		{ x: 8 , y: 2 },
		{ x: 9 , y: 2 },
		{ x: 10 , y: 2 },
	/*forth Line*/
		{ x: 2.5 , y: 3 },
		{ x: 3.5 , y: 3 },
		{ x: 4.5 , y: 3 },
		{ x: 5.5 , y: 3 },
		{ x: 7.5 , y: 3 },
		{ x: 8.5 , y: 3 },
		{ x: 9.5 , y: 3 },
	/*fifth Line*/
		{ x: 3 , y: 4 },
		{ x: 4 , y: 4 },
		{ x: 5 , y: 4 },
		{ x: 6 , y: 4 },
		{ x: 8 , y: 4 },
		{ x: 9 , y: 4 },
	/*fifth Line*/
		{ x: 3.5 , y: 5 },
		{ x: 4.5 , y: 5 },
		{ x: 5.5 , y: 5 },
		{ x: 8.5 , y: 5 },
	/*sixth Line*/
		{ x: 4 , y: 6 },
		{ x: 5 , y: 6 },
	/*seventh Line*/
		{ x: 4.5 , y: 7 }
	);

setInterval(function() { CheckValue() }, 100);
function CheckValue(){
    var response = JSON.parse(httpGet("/check"));
    console.log(response.state);
    if(response.state){
        nextTri();
        document.getElementById('image').style.display ="block";
    }
    else
    {
        document.getElementById('image').style.display ="none";
    }
}
    
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function nextTri(){
	id = i.toString();
	//console.log( document.getElementById(id).css('width'));
	if (i<48){
		console.log( i+" ("+coordinates[i].x+" , "+coordinates[i].y+")");
		document.getElementById(id).style.left = (coordinates[i].x*triWidth).toString()+"px";
		document.getElementById(id).style.bottom = (coordinates[i].y*triHeight).toString()+"px";
		document.getElementById(id).style.display = "block";
		i++;
	}
	else {
		console.log("bonjur yopta!")
	}
};