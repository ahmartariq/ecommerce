import { useState ,useEffect } from "react";
import axios from "axios";


function ProductsAPI() {
  const [products, setProducts] = useState([])
    const [callBack, setCallBack] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)


  useEffect(() => {
    const getproducts = async () => {
      const res = await axios.get(`/api/products?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
      setProducts(res.data.products);
      setResult(res.data.result)
    };
    getproducts();
  }, [callBack, category, sort, search, page]);


  return {
    products: [products, setProducts],
    callBack: [callBack, setCallBack],
    category: [category, setCategory],
    sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    result: [result, setResult]
  };
}

export default ProductsAPI;
