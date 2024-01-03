/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from "../store/cartSlice";

const Cart = () => {

    const products = useSelector(state => state.cart)
    const dispatch = useDispatch()


    const removetocart = (id) => {
        dispatch(remove(id))
    }

    const cards = products.map(item => (
        <div className="col-md-12" style={{ marginBottom: '10px' }}>
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
                    <Button variant="danger" onClick={() => removetocart(item.id)}>Remove item</Button>
                </Card.Footer>

            </Card>
        </div>
    ))
    return (
        <div>
            {cards}
        </div>
    )
}

export default Cart