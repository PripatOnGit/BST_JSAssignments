function notify(){
    var text = document.getElementById('t1').value;
    //alert(text);
   // var text2 = text.replace('politics',"Indian Politics");
    var cnt = parseInt(text.length);
    //alert(cnt)
    if(cnt == 0){
        window.alert("Enter Tweet")
    }
    if(cnt <= 139){
       
        window.alert("Hey!! You have entered " + cnt + " characters. Only " + (140-cnt) + " characters are remaining.")
        //replace
        var text1 = text.replace(/politics/g,"#Indian Politics");
        var text1 = text.replace(/politics/i,"#Indian Politics");
        document.getElementById('username').innerHTML = "@priyankapatil says: ";
        document.getElementById('msgid').innerHTML = text1
        
        document.getElementById('t1').value = '';
        document.getElementById('msgid').style.width = '500px';
        document.getElementById('msgid').style.height = '150px';
        document.getElementById('msgid').style.border = 'none';
       // document.getElementById('msgid').style.borderRadius = '3px';
        document.getElementById('msgid').style.fontFamily ='Times New Roman, Helvetica, sans-serif';
        document.getElementById('msgid').style.fontSize = "20px";
       
    }
    else{
        window.alert("You have exeeded the limit of 140 Characters. Your Tweet will get Slices to 140 chars!! Do you wnat to reset it? Press 'reset' button.");
        var text1 = text.replace(/politics/g,"#Indian Politics");
        var text1 = text.replace(/politics/i,"#Indian Politics");

        var text2 = text.slice(0,140);
        document.getElementById("t1").value = text2;
        //document.getElementById('msgid').innerHTML = text2;
        //document.getElementById('msgid').style.width = '500px';
       // document.getElementById('msgid').style.height = '150px';
       // document.getElementById('msgid').style.border = 'none';
       // document.getElementById('msgid').style.borderRadius = '3px';
       // document.getElementById('msgid').style.fontFamily ='Times New Roman, Helvetica, sans-serif';
       // document.getElementById('msgid').style.fontSize = "20px";
        }
}


var obj = {
    firstname : "Priyanka",
    lastname  : "Patil",
    loadFunction : function(){
            return ("Welcome !! " + this.firstname + " " + this.lastname)
    }
}

function pageload(){
    document.getElementById('headid').innerHTML = obj.loadFunction();
}
