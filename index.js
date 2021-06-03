const fruits = [
   { id: 1, title: 'Apple', price: 20, img: '../img/apple.jpg' },
   { id: 2, title: 'Orange', price: 30, img: '../img/orange.jpg' },
   { id: 3, title: 'Mango', price: 40, img: '../img/mango.jpg' }
]


const modal = $.modal({
   title: 'BassAnatolii Modal',
   closable: true,
   content: `
   <h4>Modal is working</h4>
   <p>Lorem sgdg dgdg dgdg.</p>`,
   width: '400px',
   footerButtons: [
      {
         text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked')
            modal.close()
         }
      },
      {
         text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked')
            modal.close()
         }
      }
   ]
})