let fruits = [
   { id: 1, title: 'Apple', price: 20, img: 'img/apple.jpg' },
   { id: 2, title: 'Orange', price: 30, img: 'img/orange.jpg' },
   { id: 3, title: 'Mango', price: 40, img: 'img/mango.jpg' }
]

const toHTML = fruit => `
<div class="col">
   <div class="card">
      <img class="card-img-top" style="height: 300px;" src="${fruit.img}" alt="${fruit.title}">
      <div class="card-body">
         <h5 class="card-title">${fruit.title}</h5>
         <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Show price</a>
         <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Delete</a>
      </div>
   </div>
</div>
`

function render() {
   const html = fruits.map(toHTML).join('')
   document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({
   title: 'Price per kilo',
   closable: true,
   width: '400px',
   footerButtons: [
      {
         text: 'Close', type: 'primary', handler() {
            priceModal.close()
         }
      }
   ]
})


document.addEventListener('click', event => {
   event.preventDefault()
   const btnType = event.target.dataset.btn
   const id = +event.target.dataset.id
   const fruit = fruits.find(f => f.id === id)
   if (btnType === 'price') {
      priceModal.setContent(`<p>Price for kilo ${fruit.title}: <strong>${fruit.price} $</strong></p>`)
      priceModal.open()
      console.log(id, fruit)
   } else if (btnType === 'remove') {
      $.confirm({
         title: 'Are you sure?',
         content: `<p>You delete this fruit: <strong>${fruit.title}</strong></p>`
      }).then(() => {
         fruits = fruits.filter(f => f.id !== id)
         render()
      }).catch(() => { console.log('Cancel') })
   }
})