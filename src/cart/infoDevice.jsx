import React, { Component } from 'react'

export default class Infodevice extends Component {

  render() {
    const { device } = this.props
    return (
      <>
        {/* Modal 2  */}
        <div className="modal fade" id="modelId2" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title modal-l">Thông tin sản phẩm</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className='table'>
                  <thead>
                    <tr className='font-weight-bold'>
                      <td>Tên sản phẩm</td>
                      <td></td>
                      <td>Giá</td>
                      <td>Mô tả</td>
                      <td>Còn lại</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{device.name}</td>
                      <td><img className='img-thumbnail' src={device.image} alt={device.alias} /></td>
                      <td>{device.price}</td>
                      <td>{device.description}</td>
                      <td>{device.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}


