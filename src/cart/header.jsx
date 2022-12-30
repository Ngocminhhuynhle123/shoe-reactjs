import React, { Component } from 'react'
import Cartdevice from './cartDevice'
export default class Header extends Component {
  render() {
    const { cart, upDownDevice,deleteDevice } = this.props

    return (
      <section id='header'>
        <div className='py-3 bg-dark btn-cart'>
          <h1 className='ml-5 mb-0 text-light'>Shoe</h1>
          <button type="button" className="btn btn-light mr-5" data-toggle="modal" data-target="#modelId">
            <i className='fa-solid fa-cart-shopping'></i>
          </button>
        </div>
        <Cartdevice cart={cart} upDownDevice={upDownDevice} deleteDevice={deleteDevice}/>
      </section>


    )

  }
}
