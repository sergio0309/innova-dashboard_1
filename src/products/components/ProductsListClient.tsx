//rafc crea el componente automaticamente
'use client'
import { ProductsCard } from './ProductsCard'
import styles from '@/shared/styles/styles.module.css'
import { useProducts } from '../hooks/useProducts'

export const ProductsListClient = ()  =>{

    const {isLoading, products} = useProducts();

    if(isLoading){
        return (
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className={styles.spinner}></div>
                <p>Cargando CSR..</p>
            </div>
        )
    }
    
    return (
        <div className='product__list'>
        {
            products?.map(product =>(
                <ProductsCard product={product}/>
            ))
        }
        </div>
    )
}



