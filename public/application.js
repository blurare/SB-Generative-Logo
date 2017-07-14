var triWidth = 134;
var triHeight = 87;
var i = 1;
var id ;

	var coordinates = 
	[
            [0 , 0 ],
			[1 , 0 ],
			[2 , 0 ],
			[3 , 0 ],
			[4 , 0 ],
			[6 , 0 ],
			[7 , 0 ],
			[8 , 0 ],
			[9 , 0 ],
			[10 , 0 ],
			[11 , 0 ],
		/*second Line*/
			[1.5 , 1 ],
			[2.5 , 1 ],
			[3.5 , 1 ],
			[4.5 , 1 ],
			[6.5 , 1 ],
			[7.5 , 1 ],
			[8.5 , 1 ],
			[9.5 , 1 ],
			[10.5 , 1],
		/*third Line*/
			[ 2 , 2 ],
			[ 3 , 2 ],
			[ 4 , 2 ],
			[ 5 , 2 ],
			[ 7 , 2 ],
			[ 8 , 2 ],
			[ 9 , 2 ],
			[ 10 , 2],
		/*forth Line*/
			[2.5 ,  3 ],
			[3.5 ,  3 ],
			[4.5 ,  3 ],
			[5.5 ,  3 ],
			[7.5 ,  3 ],
			[8.5 ,  3 ],
			[9.5 ,  3 ],
		/*fifth Line*/
			[ 3 ,  4 ],
			[ 4 ,  4 ],
			[ 5 ,  4 ],
			[ 6 ,  4 ],
			[ 8 ,  4 ],
			[ 9 ,  4 ],
		/*fifth Line*/
			[ 3.5 ,  5 ],
			[ 4.5 ,  5 ],
			[ 5.5 ,  5 ],
			[ 8.5 ,  5 ],
		/*sixth Line*/
			[ 4 ,  6 ],
			[ 5 ,  6 ],
		/*seventh Line*/
			[ 4.5 , 7 ]
    ];
setInterval(function() { CheckValue() }, 100);
function CheckValue(){
    var response = JSON.parse(httpGet("/check"));
    console.log(response.state);
    if(response.state){
        nextTri();
        //document.getElementById('image').style.display ="block";
    }
    //else
    //{
        //document.getElementById('image').style.display ="none";
    //}
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
	if (i<48){
		console.log( i+" ("+coordinates[i].x+" , "+coordinates[i].y+")");
		document.getElementById(id).style.left = (coordinates[i].x*triWidth).toString()+"px";
		document.getElementById(id).style.bottom = (coordinates[i].y*triHeight).toString()+"px";
		document.getElementById(id).style.display = "block";
		delete coordinates[i];
	}
	else {
		console.log("bonjur yopta!")
	}
};