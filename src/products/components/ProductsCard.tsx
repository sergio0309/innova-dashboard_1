import Image from 'next/image';
import { IProduct } from '..';
import Link from 'next/link';

interface Props {
    product: IProduct;
}

export const ProductsCard = ( {product}: Props ) => {

    const baseUrl = 'https://store.innovacode.online';
    return (
        <div className='product__card'>
            <Image
                src= { baseUrl + product.images[0].url }
                alt= {product.name}
                width={858}
                height={858}
            />
            <h3 className='mt-3'> {product.name} </h3>
            <p className='text-slate-500 line-clamp-2'> {product.description} </p>
            <Link
                className='btn btn-primary mt-3'
                href={`/server-side/product/${product.slug}`}
            >
                Ver Procuto
            </Link>
        </div>
    )
}
