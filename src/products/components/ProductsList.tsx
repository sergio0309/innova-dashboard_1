import { IProduct, ProductsCard } from '..'

interface Props {
    products: IProduct[]
}

export const ProductsList = ({ products}: Props) => {
  return (
    <div className='product__list'>
        {
            products.map(product =>(
                <ProductsCard product={product}/>
            ))
        }
    </div>
  )
}
