import React, { Component } from 'react'
import Dervice from './dervice'
export default class Listdevice extends Component {
  handelDevice = () => {
    const { listDevice, handelInfo,addCart } = this.props
    return listDevice.map(item => {
      return <div key={item.id} className='col-md-4 mt-4'>
        <Dervice key={item.id} addCart={addCart} handelInfo={handelInfo} device={item} />
      </div>
    })
  }

  render() {
    return (
      <>
        <section id='content'>
          <div className="container">
            <div className='row'>
              {this.handelDevice()}
            </div>
          </div>
        </section>
      </>
    )
  }
}
