import {useState, useEffect} from 'react'
import { IProduct, IProductsResponse } from '..';
import axios from 'axios';

export const useProducts = () => {
  //guardar los productos
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllProducts = async () => {
      try {
          setIsLoading(true);
          //axios es una libreria que nos permite hacer peticiones http
          const {data: {data}} = await axios.get<IProductsResponse>('https://store.innovacode.online/api/products'); //desestructuramos la data
          // console.log(data);
          setProducts(data);
          setIsLoading(false);
          
      } catch (error) {
          console.log(error);
      } finally {
          setIsLoading(false);
      }
  };

  //sirve para ejecutar una funcion cuando el componente se monta
  useEffect(()=>{
      getAllProducts();
  }, [])
  
  return{
        products,
        isLoading
  }
}
