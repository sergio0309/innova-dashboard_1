import { ProductsListClient } from "@/products";
import TasksPage from "./tasks/page";

export default function HomePage() {
  return (
    
    <div>
      {/* <h1 className="">Hello Page 1</h1> */}
      <TasksPage/>
      <ProductsListClient />
    </div>
  );
}