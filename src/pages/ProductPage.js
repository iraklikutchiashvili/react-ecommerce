import React, { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'
import axios from 'axios';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    img: "",
    id: "",
    description: ""
  })
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data)
      })
      .catch((error) => console.log(error))
  }, [id]);
  return (
    <div></div>
  )
}

export default ProductPage