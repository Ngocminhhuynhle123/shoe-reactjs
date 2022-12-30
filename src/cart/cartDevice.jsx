import React, { Component } from 'react'

export default class Cartdevice extends Component {
    handelCart = () => {
        const { cart,upDownDevice,deleteDevice } = this.props
        return cart.map(item => {
            return <tr key={item.id}>
                <td>{item.name}</td>
                <td><img className='imgModal'src={item.image} alt={item.alias} /></td>
                <td>{item.price}</td>
                <td>
                    <button onClick={()=>upDownDevice(item,1)} className='btn btn-light'>+</button>
                    {item.soLuong}
                    <button onClick={()=>upDownDevice(item,-1)} className='btn btn-light'>-</button>

                </td>
                <td>
                {parseInt(item.soLuong)*parseInt(item.price)}

                </td>
                <td>
                <button onClick={()=>deleteDevice(item)} className='btn btn-danger'>delete</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
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
                                            <td>Số lượng</td>
                                            <td>Tổng tiền</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.handelCart()}
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
