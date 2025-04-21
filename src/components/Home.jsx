import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

export default function () {
  return (
    <div>
      <Header></Header>
      <div className='contenedor_productos'>
        <CardPizza img='../src/assets/img/pizza-napolitana.webp' nombre='Napolitana' precio={5950} ingredientes={['Mozzarella','Tomates','Jamón','Orégano']}></CardPizza>
        <CardPizza img='../src/assets/img/pizza-española.webp' nombre='Española' precio={6950} ingredientes={['Mozzarella','Gorgonzola','Parmesano','Provolone']}></CardPizza>
        <CardPizza img='../src/assets/img/pizza-pepperoni.webp' nombre='Pepperoni' precio={6950} ingredientes={['Mozzarella','Pepperoni','Orégano']}></CardPizza>
      </div>
    </div>
  )
}
