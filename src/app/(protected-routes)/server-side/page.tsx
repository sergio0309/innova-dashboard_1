import { IProduct, IProductsResponse } from "@/products";
import { ProductsList } from '../../../products/components/ProductsList';
import { Metadata } from "next";
// import { metadata } from '../../layout';

const getAllProducts = async (): Promise <IProduct[]> => {
  //? GET SERVER SIDE PROPS
  //Son consultas que se hacen en el servidor y se envian al cliente
  const {data}: IProductsResponse = await fetch("https://store.innovacode.online/api/products",{
    cache: 'no-store'
  })
    .then((res) => res.json())
  return data;
}

//Pagina para reenderizar en el servidor 
export default async function  ServeSidePage() {
  const products = await getAllProducts();
  return (
    <div>
      <h1>Server Side Renderi</h1>
      <ProductsList products={products}/>
    </div>
  );
}


export const metadata: Metadata ={
  title: 'Server Side Rendering',
  description: 'Server Side Rendering in Next Js 13 with Innova Code ',
}