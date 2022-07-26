function showDate(){
    document.getElementById('pid1').innerHTML = Date();
    document.getElementById('pid1').style.color = 'green';
}

function marks(){
    const m = document.getElementById('m1');
    m.value = parseInt(Math.round(m.value));
}
function onmouseoverEvt(){
    document.getElementById('h1id').style.textShadow = '2px 2px 8px #FF0000';
}
function onmouseoutEvt(){
    document.getElementById('h1id').style.textShadow = '2px 2px 8px #00ff00';
}
function keydownEvt(){
    const k = document.getElementById('k1').value;
    alert('you have entered'+ k +'Make sure It is correct!!!')
}
function loading(){
    alert('Page is loading!!')
}