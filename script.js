function RandomTeam(items) {
  return items[Math.floor(Math.random() * items.length)];
}

let flag=true;
let arr = ['Night Raid','100 Throwers','Ligma','Gamenix','Beta Division','Team DeX','Gamenix1',' NazgÃ»ls'];
function buttonclicked(){
  if(flag){
    function removefrom(a){
      for( let i = 0; i < arr.length; i++){
        if ( arr[i] === a) {
          arr.splice(i, 1);
        }
      }
    }
    if(arr.length%2!=0){
      arr.push('Bye');
    }
    $('#Valo')[0].innerHTML="<div id='table1'><span>Team 1</span><br></div><div id='table2'><span>Team 2</span><br></div>";
    while(arr.length>1)
    {
      let a=RandomTeam(arr);
      removefrom(a);
      let b=RandomTeam(arr);
      removefrom(b);
      $('#table1').append(a+'<br>');
      $('#table2').append(b+'<br>');
    }
    document.querySelector('#Valo').innerHTML;
    flag=false;
  }
}
function addname() {
  if($('#teamnames')[0].value!=""){
    $('#Valo').append($('#teamnames')[0].value+'<br>');
    arr.push($('#teamnames')[0].value);
    $('#teamnames')[0].value="";
  }
  else {
    alert("Enter Team Name");
  }
}


{
  for (let i = 0; i < arr.length; i++) {
    $('#Valo').append(arr[i]+'<br>');
  }
  let a=document.querySelector('#button');
  a.addEventListener('mousedown', function() {
    a.style.height='40px';
    a.style.width='14%';
    a.style.left='75%';
    a.style.fontSize='17px';
  });
  a.addEventListener('mouseup', function() {
    a.style.height='50px';
    a.style.width='15%';
    a.style.left='75%';
    a.style.fontSize='20px';
  });
  let b=document.querySelector('#submit');
  b.addEventListener('mousedown', function() {
    b.style.height='4.5%';
    b.style.width='14%';
    b.style.left='80%';
    b.style.fontSize='18px';
  });
  b.addEventListener('mouseup', function() {
    b.style.height='5%';
    b.style.width='15%';
    b.style.left='80%';
    b.style.fontSize='20px';
  });
}
