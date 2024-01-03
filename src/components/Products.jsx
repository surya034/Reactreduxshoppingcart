/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(res => setProducts(res))
    }, [])

    const addToCart = (p) => {
        dispatch(add(p))
    }


    const cards = products.map(item => (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card key={item.id}
                className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={item.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        USD$: {item.price}
                    </Card.Text>

                </Card.Body>
                <Card.Footer style={{ backgroundColor: 'white' }}>
                    <Button variant="primary" onClick={(i) => addToCart(i)}>Add to Cart</Button>
                </Card.Footer>

            </Card>
        </div>
    ))
    return (
        <>
            <h1>Product Dashboard</h1>
            <div className="row">{cards}</div>

        </>
    )
}

export default Products