const container = document.querySelector('.container')
const add = container.querySelector('.add')
const main = container.querySelector('.main')
const chat = main.querySelector('.chat')

main.addEventListener('click', function () {
  main.classList.remove('show')
  main.classList.remove('attachment')
  main.classList.remove('keyboard')
  Array.from(add.children).forEach(child => {
    child.classList.remove('show')
  })
})

add.addEventListener('click', function (evt) {
  const target = evt.target
  if (target.closest('.add__item_attachment')) {
    addShow(add.children[1])
    chat.scrollIntoView(false);
  }
  if (target.closest('.add__item_hash')) {
    addShow(add.children[2])
    chat.scrollIntoView(false)
  }
  if (target.closest('.add__item_keyboard')) {
    main.classList.remove('show')
    main.classList.remove('keyboard')
    main.classList.remove('attachment')
    Array.from(add.children).forEach(child => {
      child.classList.remove('show')
    })
  }
})

function addShow(target) {
  if (!main.classList.contains('show')) {
    main.classList.add('show')
    if (target.classList.contains('keyboard')) {
      main.classList.add('keyboard')
    } else if (target.classList.contains('attachment')) {
      main.classList.add('attachment')
    }
  } else {
    if (target.classList.contains('keyboard')) {
      main.classList.remove('attachment')
      main.classList.add('keyboard')
    } else if (target.classList.contains('attachment')) {
      main.classList.remove('keyboard')
      main.classList.add('attachment')
    }
  }
  Array.from(add.children).forEach(child => {
    child.classList.remove('show')
  })
  target.classList.add('show')
}