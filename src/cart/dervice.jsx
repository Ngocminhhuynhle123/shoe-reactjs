import React, { Component } from 'react'
export default class Dervice extends Component {
  render() {
    const { device, handelInfo,addCart } = this.props
    return (

      <div className="card">
        <img className="card-img-top" src={device.image} alt="" />
        <div className="card-body">
          <h4 className="card-title card-title-modal1">{device.name}</h4>
          <h5 className="card-text">{device.price} $</h5>
          <button type="button" onClick={()=>handelInfo(device)} className="btn btn-light" data-toggle="modal" data-target="#modelId2">
            Xem thêm
          </button>
        </div>
        <button onClick={()=>addCart(device)} className="btn btn-dark btnCardCT" data-toggle="modal" data-target="#modelId">Add to cart +</button>
      </div>

    )
  }
}
