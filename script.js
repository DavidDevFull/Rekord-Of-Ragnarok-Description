const btn_Enter_Creat = document.getElementById('btn_ToEnter_CreateAccount');
const cabeca = document.querySelector('header section')
btn_Enter_Creat.addEventListener('click', ()=>{
    selec()
})
function selec(){
    cabeca.style.background = 'radial-gradient(circle, rgba(27,61,114,1) 0%, rgba(27,38,59,1) 100%)';
}