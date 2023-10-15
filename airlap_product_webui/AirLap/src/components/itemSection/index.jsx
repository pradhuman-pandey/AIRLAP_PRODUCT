// import items from "../../mockData/items.json";
import ItemList from '../itemList';
// Here I have to import the Custom for fetching the product list //
// import {useProductList} from '../../hooks';

export default function ItemSection({filterProduct}){
  console.log(filterProduct);
    return (
      <section>
        <ItemList filterProduct={filterProduct}/>
      </section>
    )
}
