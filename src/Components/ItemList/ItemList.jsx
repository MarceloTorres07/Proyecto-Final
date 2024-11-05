import Item from "../Item/item.jsx"
import { getProducts } from "../../Data/DataItem.jsx"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading.jsx";

export default function ItemList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        getProducts().then((data) =>{
            setProducts(data);
            setLoading(false)
        });
    }, []);

    return(
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <div className="flex flex-wrap">
                    {products.map((prod) =>(
                        <Item {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
}