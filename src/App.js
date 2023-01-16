// import "./App.css";

// function App() {

//   var products = [
//     { name: 'coca', price: 120, qty: 3, image: 'https://www.coca-cola.dz/content/dam/one/dz/fr/homepage/homepage-mobile-1.jpg' },
//     { name: 'pepsi', price: 70, qty: 12, image: 'https://www.coca-cola.dz/content/dam/one/dz/fr/homepage/homepage-mobile-1.jpg' },
//     { name: 'fanta', price: 80, qty: 7, image: 'https://www.coca-cola.dz/content/dam/one/dz/fr/homepage/homepage-mobile-1.jpg' }
//     ,
//     { name: 'sprite', price: 180, qty: 20, image: 'https://www.coca-cola.dz/content/dam/one/dz/fr/homepage/homepage-mobile-1.jpg' }
//   ]

//   return (
//     <div className="App">
//       {products.map(produit => {
//         return (
//           <div>
//             <img width={200} src={produit.image} alt="" />
//             <h1>{produit.name}</h1>
//             <h3>Quantité : {produit.qty} </h3>
//             <h3>{produit.price}</h3>
//           </div>
//         )
//       })}

//     </div>
//   );
// }


// export default App;
import React from 'react'
import './App.css'

export default function App() {
  var products = [
    { name: 'walid', adress: 'gourauya', image: 'https://i.pinimg.com/564x/25/78/61/25786134576ce0344893b33a051160b1.jpg' },
    // { name: 'pepsi', adress: 70, qty: 12, image: 'https://www.coca-cola.dz/content/dam/one/dz/fr/homepage/homepage-mobile-1.jpg' },
    // { name: 'fanta', price: 80, qty: 7, image: 'https://www.coca-cola.dz/content/dam/one/dz/fr/homepage/homepage-mobile-1.jpg' }
    // ,
    // { name: 'sprite', price: 180, qty: 20, image: 'https://www.coca-cola.dz/content/dam/one/dz/fr/homepage/homepage-mobile-1.jpg' }
  ]
  return (
    <div className='App'>
      {products.map(Element => {
        return (
          <div>
          <img  width={200}  src={Element.image} alt="" />
          <h1>{Element.name}</h1>
          <h2>{Element.adress}</h2>
          <h4>{Element.price}</h4>
          {/* <p>qt {Element.qty}</p> */}
          </div>
        )
      })}
    </div>
  )
}
