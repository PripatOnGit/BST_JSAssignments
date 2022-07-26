function myEvt(){
    document.getElementById('h1id').innerHTML='Covid Virus-19'
    document.getElementById('h1id').style.fontSize = '40px'
    document.getElementById('h1id').style.color ='Red'
}
function showDate(){
    document.getElementById('p2id').innerHTML = Date()
    document.getElementById('p2id').style.color = 'green'
}
function changeToPink(){
    document.getElementById('div2').style.background = 'red'
}
function changeToVoilet(){
    document.getElementById('div2').style.background = 'blue'
}
function showData(){
    document.getElementById('info').style.width ='300px'
    document.getElementById('info').style.height ='500px'
    document.getElementById('info').style.marginLeft = '100px'
    document.getElementById('info').style.background ='cyan'
    document.getElementById('info').style.border = '5px outset grey'
    document.getElementById('info').style.borderRadius = '5px'
    document.getElementById('info').style.transition = 'all 2s'
    //document.getElementById('info').style.transitionDelay = '3s'
    document.getElementById('info').innerHTML = 'Coronaviruses are a family of viruses that can cause illnesses such as the common cold, severe acute respiratory syndrome (SARS) and Middle East respiratory syndrome (MERS).'
    
}
function getAlert(){
    window.alert('Cases Found')
}

function consoleMessage(){
    console.log("JSON here:  1:Red 2:Blue 3:Green")
}