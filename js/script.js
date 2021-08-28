document.getElementById('second-tab').addEventListener('click', ()=>{
    document.getElementById('second-tab').classList.add('now-active');
    document.getElementById('first-tab').classList.remove('now-active');
    document.getElementById('third-tab').classList.remove('now-active');
})

document.getElementById('third-tab').addEventListener('click', ()=>{
    document.getElementById('third-tab').classList.add('now-active');
    document.getElementById('second-tab').classList.remove('now-active');
    document.getElementById('first-tab').classList.remove('now-active');
})

document.getElementById('first-tab').addEventListener('click', ()=>{
    document.getElementById('first-tab').classList.add('now-active');
    document.getElementById('second-tab').classList.remove('now-active');
    document.getElementById('third-tab').classList.remove('now-active');
})