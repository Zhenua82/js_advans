fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    expiresInMins: 30, // optional, defaults to 60
  })
})
.then(res => res.json())
.then(console.log);

(async () => {
    const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        
        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 30, // optional, defaults to 60
    })
    })
    console.log(await res.json())
})();

// Задача: Сделать генератор 3х идей от скуки
// https://www.boredapi.com/api/activity
// с отображением на странице
function getResp(){
   return fetch('https://www.boredapi.com/api/activity').then(res => res.json())  
};
// async function getResp(){
//     const resp = await fetch(`https://www.boredapi.com/api/activity`)
//     const acty = await resp.json()
//     return acty
// }
const mest = document.querySelector('.mesto');
function main(dann){
    dann.forEach((el, i) => {
        const element = document.createElement('div');
        element.innerHTML = `<div class="block${i}" style="color: white;
        margin: auto; margin-top: 10px; width: 50%; height: 40px; display: flex; 
        justify-content: center; align-items: center;">${el.activity}</div>`
        mest.appendChild(element);
        if (el.type === 'busywork'|| el.type === 'charity' ||  el.type === 'education'){
            document.querySelector(`.block${i}`).style.backgroundColor = 'red';
        }
        else if (el.type === 'recreational'|| el.type === 'cooking' ||  el.type === 'relaxation'){
            document.querySelector(`.block${i}`).style.backgroundColor = 'blue';
        }
        else if (el.type === 'social'|| el.type === 'diy' ||  el.type === 'music'){
            document.querySelector(`.block${i}`).style.backgroundColor = 'purple';
        } else{document.querySelector(`.block${i}`).style.backgroundColor = 'yellow';}
    })
    console.log(dann)
}
// (async () => {
//     let mass = Array(3).fill(1)
//     let data = await Promise.all(
//         mass.map(el => el = getResp())
//     )
//     main(data)
// })()
document.querySelector('button').addEventListener('click', async function(){
    // let divs = document.querySelectorAll('div');
    // if(divs.length > 0){
    //     Array.from(divs).forEach(el => el.remove())};//Код если const mest = document.querySelector('body');
    mest.innerHTML = ''
    let mass = Array(3).fill(1)
    let data = await Promise.all(
        mass.map(el => el = getResp())
    )
    main(data)   
});