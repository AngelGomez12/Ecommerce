import React, { useEffect } from 'react'
import { getProducts } from '../services/Products'
import { Link } from 'react-router-dom'

export const Cards = () => {

    const [product, setProduct] = React.useState([])
    useEffect(() => {
        getProducts().then((data) => {
            setProduct(data)
            console.log(data);
        })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className='flex flex-row justify-center gap-2 mt-2 mb-2 w-full flex-wrap'>{product.slice(0, 40).map(
            (product) => {
                return (
                    <Link key={product.id} to={`/product/${product.id}`} className='h-40 w-28'>
                        <div className="card bg-base-100 shadow-xl h-40 w-28 mb-3 hover:cursor-pointer">
                            <div className='h-110'>
                                <img src={product.images} alt={product.title} height='110' width='112' className='object-fit rounded-t-lg' />
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="text-xs">{product.title}</h2>
                                <p className='text-xs'>$ {product.price}</p>
                            </div>
                        </div>
                    </Link>
                )
            }
        )}
        </div>
    )
}
