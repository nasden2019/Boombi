// const nav = document.querySelector('#navceti');


// if (document.documentElement.scrollTop >= 200)

// CARDS EFFECT
const effect = document.querySelector('.tarjetas')
const effect2 = document.querySelector('.tarjetas2')
const effect3 = document.querySelector('.tarjetas3')
const showUp = document.querySelector('.showUp')
const showUp2 = document.querySelector('.showUp2')
const showUp3 = document.querySelector('.showUp3')
const data = document.querySelector('data-aos')

// effect.addEventListener('mouseenter', () => {
//     showUp.classList.add('data')
// })

effect.addEventListener('mouseover', () => {
    console.log('hey')
    showUp.style.display = 'block'
})
effect.addEventListener('mouseout', () => {
    showUp.style.display = 'none'
})

effect2.addEventListener('mouseover', () => {
    showUp2.style.display = 'block'
})
effect2.addEventListener('mouseout', () => {
    showUp2.style.display = 'none'
})

effect3.addEventListener('mouseover', () => {
    showUp3.style.display = 'block'
})
effect3.addEventListener('mouseout', () => {
    showUp3.style.display = 'none'
})

// effect.addEventListener('mousemove', () => {
//     if (showUp.style.display === 'none') {
//         showUp.style.display = 'block';
//     } else {
//         showUp.style.display = 'none';
//     }
// })

// effect.forEach((each) => {
//     each.addEventListener('mouseover', () => {
//         if (showUp.style.display === 'none') {
//             showUp.style.display = 'block';
//         } else {
//             showUp.style.display = 'none';
//         }
//     })
// })


