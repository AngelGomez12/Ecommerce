import React, { useEffect } from 'react'
import { getProducts } from '../services/Products'

export const Cards = () => {
    const [product, setProduct] = React.useState([])
    useEffect(() => {
        getProducts().then((data) => {
            setProduct(data)
        })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div>{product.map(
            (product) => {
                return (
                    <div key={product.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={product.images} alt={product.title} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.title}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        )}</div>
    )
}
