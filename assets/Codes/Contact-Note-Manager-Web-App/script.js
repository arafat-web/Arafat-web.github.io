// close button
alert("Note: Desktop Friendly and not for mobile devices")
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// hide after click
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// add button
function newContact() {
//View var
var li = document.createElement("li");
var br1 = document.createElement("BR");
var br2 = document.createElement("BR");
var br3 = document.createElement("BR");
var br4 = document.createElement("BR");
//getting values
var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var mobile = document.getElementById("mobile").value;
var email = document.getElementById("email").value;
var address = document.getElementById("address").value;
//view values
var t1 = document.createTextNode("First Name: "+firstname);
var t2 = document.createTextNode("Last Name: "+lastname);
var t3 = document.createTextNode("Mobile No: "+mobile);
var t4 = document.createTextNode("E-mail: "+email);
var t5 = document.createTextNode("Address: "+address);
//toast
var toast = document.getElementById("toast");
var toast2 = document.getElementById("toast2");
//append view values
  li.appendChild(t1);
  li.appendChild(br1);
  li.appendChild(t2);
  li.appendChild(br2);
  li.appendChild(t3);
  li.appendChild(br3);
  li.appendChild(t4);
  li.appendChild(br4);
  li.appendChild(t5);

//empty conditions
  if (firstname === '' || lastname === '' || mobile === '' || email === '') {
    //toast to invalid input
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
  } else {
    //add to view section
    document.getElementById("myUL").appendChild(li);
    //success toast
    toast2.className = "show";
    setTimeout(function(){ toast2.className = toast2.className.replace("show", ""); }, 3000);
  }
//set to null after adding
 document.getElementById("firstname").value = '';
 document.getElementById("lastname").value = '';
 document.getElementById("mobile").value = '';
 document.getElementById("email").value = '';
 document.getElementById("address").value = '';
    
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  console.log(span.appendChild(txt));
  console.log(li.appendChild(span));

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}

function newNote(){
    
    var note = document.getElementById("note").value;
    var p = document.createElement("P");
    var br = document.createElement("BR");
        var br2 = document.createElement("BR");
    
    var setNote = document.createTextNode("Your Note: "+note);
    var d = new Date();
    var monthName = [
		'January','February','March','April',
		'May','June','July','August','September',
		'October','November','December'
	];
    var t = "Created Time: "+d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var dt = " Created Date: "+ d.getDate()+ " "+ monthName[d.getMonth()] + " "+ d.getFullYear();
    
    var toast3 = document.getElementById("toast3");
    var toast4 = document.getElementById("toast4");
    
    p.append(t);
    p.append(br2);
    p.append(dt);
     p.append(br);
    p.append(setNote);
    if(note === ''){
        toast3.className = "show";
        setTimeout(function(){ toast3.className = toast3.className.replace("show", ""); }, 3000);
    }else{
  
        document.getElementById("addtext").appendChild(p);
        toast4.className = "show";
        setTimeout(function(){ toast4.className = toast4.className.replace("show", ""); }, 3000);
    
   }
     document.getElementById("note").value = '';
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
       span.className = "close";
       console.log(span.appendChild(txt));
       console.log(p.appendChild(span));

     for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
    
}

//Funtion for Read data of Tabs
function openTab(evt, tabName) {
  let data,
      content, 
      tab;
  content = document.getElementsByClassName("content");
  for (data = 0; data < content.length; data++) {
    content[data].style.display = "none";
  }
  tab = document.getElementsByClassName("tab");
  for (data = 0; data < tab.length; data++) {
    tab[data].className = tab[data].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
//default tab
document.getElementById("defaultOpen").click();
