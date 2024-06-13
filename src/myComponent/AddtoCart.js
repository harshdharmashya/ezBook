import React, { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import '../CSS/AddtoCart.css'
import '../CSS/Bestseller.css'


export default function AddtoCart({ cart, setCart, setshow, handlechange, amtprice, setamtprice,mode}) {
    // const location = useLocation();
    // console.log(location)                              


    const handleprice = () => {
        let ans = 0;
        cart.map((item, i) => (
            ans = ans + (item.price * item.quantity)
        ))
        setamtprice(ans)
    }
    useEffect(() => {
        handleprice();
    })

    let deletecart = (item) => {
        let filterCart = cart.filter((v, i) => i != item)
        setCart(filterCart);
    }

    return (
        <>
            <section>
                <table className="table"  style={{ color: mode === 'light' ? 'rgba(0,0,0,.55)' : 'rgba(255, 255, 255, .55)', backgroundColor: mode === 'light' ? 'white' : 'black' }}>
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quanity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map((dataB, i) =>
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td><img className='imagadd' src={dataB.image} alt="" /></td>
                                    <td>{dataB.name}</td>
                                    <td>{dataB.price}</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                            <button type="button" className="btn-danger p-1 m-1" onClick={() => handlechange(i, -1)}>-</button>
                                            <button type="button" className="p-1 m-1 border-0">{dataB.quantity}</button>
                                            <button type="button" className="btn-success p-1 m-1" onClick={() => handlechange(i, 1)}>+</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={() => deletecart(i)} className='btn m-0'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <span>Rs.{amtprice}</span>
                <button className='btn p-1 backbtn' onClick={() => setshow(true)}>Go Back</button>
            </section>
        </>
    )
}
