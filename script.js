'use strict'
const queContainer = document.querySelector('.question__container')
const queItem = document.querySelectorAll('.question__box')

const boxImage = document.querySelector('.box')

queContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.question__box')
  clicked.classList.toggle('question__box--active')
})

// ///////////////// BUTTONS OPTIONAL
// queItem.forEach(function (e) {
//   e.addEventListener('click', function () {
//     this.classList.toggle('question__box--active')
//   })
// })

// BOX
queContainer.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('question__title')) {
    boxImage.classList.add('box-js')
  }
})
queContainer.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('question__title')) {
    boxImage.classList.remove('box-js')
  }
})
