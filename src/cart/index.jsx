import React, { Component } from 'react'
import Header from './header'
import Infodevice from './infoDevice';
// import Fordevice from './forDevice'
import Listdevice from './listDevice'
import data from "./data.json";
export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listDevice: data,
            info: data[0],
            cart: []
        }
    }
    handelInfo = (info) => {
        this.setState({
            info
        })
    }
    addCart = (device) => {
        let deviceNew = { ...device, soLuong: 1 }
        let deviceF = this.state.cart.find(item => item.id === device.id)
        if (deviceF) {
            deviceF.soLuong++
        }
        else {
            this.state.cart.push(deviceNew)

        }
        this.setState({
            cart: this.state.cart
        })
    }
    deleteDevice = (device) => {
        let cart = this.state.cart.filter(item => item.id !== device.id)
        this.setState({
            cart
        })
    }
    upDownDevice = (device, method) => {
        let cartCP=[...this.state.cart]
        let deviceFin = cartCP.find(item => item.id === device.id)
        if (deviceFin) {
            deviceFin.soLuong += method;
            this.setState({
                cart: this.state.cart
            })
            if (deviceFin.soLuong < 1) {
                if (window.confirm('ban co muon xoa san pham khong')) {
                    this.deleteDevice(device)
                }
                else {
                    deviceFin.soLuong = 1
                }
            }

        }
    }
    render() {
        const { listDevice, info, cart } = this.state
        return (
            <>
                <Header cart={cart} upDownDevice={this.upDownDevice} deleteDevice={this.deleteDevice} />
                <Listdevice addCart={this.addCart} handelInfo={this.handelInfo} listDevice={listDevice} />
                <Infodevice device={info} />
            </>
        )
    }
}
