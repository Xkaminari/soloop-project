import React, { Component } from 'react'
import {storage, db} from '../config/config'

export default class NewProduct extends Component {
    // Hover effect text for the creat product part
    displayText() {
        let hoverText = document.querySelector('.hover-text');
        setTimeout(() => {
            hoverText.style.visibility = "visible";
        }, 50)
        setTimeout(() => {
            hoverText.style.visibility = "hidden";
        }, 5000)
    }
    hideText() {
        let hoverText = document.querySelector('.hover-text');
        hoverText.style.visibility = "hidden";
    }
        // ----------------------------------------
    
    constructor(props) {
        super(props);
        this.productImg = React.createRef();
        this.state = {
            productName: '',
            productPrice: 0,
            productDescription:'',
            error:'',
        }
    }
    
    productImgHandler(e) {
        let selectiondFile = this.productImg.current.files[0];
        console.log(selectiondFile);
    }
    
    handleChage(e) {
        let nameInput = e.target.id
        this.setState({
            [nameInput] : e.target.value
        })
    }
    
    addProduct(e) {
        e.preventDefault();
        let productImg = this.productImg.current.files[0];
        // console.log(this.state.productName,this.state.productPrice,this.state.productDescription,this.productImg.current.files[0]);
        
        // storing the image
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => this.setState({error : err.message})
            , () => {
                // getting product url and if success then storing the product in db
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: this.state.productName,
                        ProductPrice: this.state.productPrice,
                        ProductDescription: this.state.productDescription,
                        ProductImg: url
                    }).then(() => {
                        this.setState({
                            productName: '',
                            productPrice: 0,
                            productDescription:'',
                            error:'',
                        })
                        document.querySelector('#productImg').value = '';
                    }).catch(err => this.setState({error : err.message}))
                })
            })
    }
    
    render() {
        return (
            <form className='add-new-product' onSubmit={this.addProduct.bind(this)}>
                <div className='img-fild'>
                    <label className='label-add-pruduct'  htmlFor="productImg">Product Image</label>
                    <input ref={this.productImg} onChange={this.productImgHandler.bind(this)} type="file" id="productImg" onMouseEnter={this.displayText.bind(this)} onMouseLeave={this.hideText.bind(this)} />
                    <p className='hover-text'>change image</p>
                    {/* {this.state.error&&<span className='errorMsg-Img'>{this.state.error}</span>} */}
                </div>
                <div className='Product-details-filds'>
                    <button className='add-product-btn'>Add</button>
                    <div className='fild'>
                        <label className='label-add-pruduct' htmlFor="productName">Product Name</label>
                        <input value={this.state.productName} onChange={this.handleChage.bind(this)} type="text" id="productName"/>
                    </div>
                    <div className='fild'>
                        <label className='label-add-pruduct' htmlFor="productPrice">Product Price</label>
                        <input value={this.state.productPrice} onChange={this.handleChage.bind(this)} type="number" id="productPrice"/>
                    </div>
                    <div className='fild'>
                        <label className='label-add-pruduct' htmlFor="productDescription">Product Description</label>
                        <textarea value={this.state.productDescription} onChange={this.handleChage.bind(this)} id="productDescription" cols="30" rows="10" placeholder='Enter the description'></textarea>
                    </div>
                </div>
            </form>
        )
    }
}