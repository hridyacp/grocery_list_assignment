function ajax(){
//Creating AJAX file
var xhttp = new XMLHttpRequest();
//Event listener
xhttp.onreadystatechange = function(){
    //condition
    if(this.readyState==4 && this.status==200){
var response = JSON.parse(this.responseText);
//console.log(response);
var Jpeople = response.people;
//console.log(Jpeople);
var imgs=document.getElementById("myimage");
var output="";
output+=`<tr>`;
output+=`<th> Sl No </th>`;
output+=`<th> Item </th>`;
output+=`<th> Quantity </th>`;
output+=`<th> Unit </th>`;
output+=`<th> Department </th>`;
output+=`<th> Notes </th>`;
output+=`<tr>`;
  for (i=0;i<Jpeople.length;i++) {
    output+=`<tr>`;
   output+=`<td> ${Jpeople[i].slno} </td>`;
   output += `<td> ${Jpeople[i].item} </td>`;
   output += `<td> ${Jpeople[i].quantity} </td>`;
   output += `<td> ${Jpeople[i].unit} </td>`;
   output += `<td> ${Jpeople[i].department} </td>`;
   output += `<td> ${Jpeople[i].notes} </td>`;
   output+=`</tr>`;
  }
  //$('#mytable').append(output);
  document.getElementById("mytable").innerHTML = output;
  document.getElementById("mytable").style.border="2px solid black";
  imgs.src="";
    }
}
xhttp.open("GET","tables.json",true);
xhttp.send();
}

