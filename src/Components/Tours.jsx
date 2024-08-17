
import { Button, Card } from "react-bootstrap"
import './Tours.css'
const Tours = ({ toursItems }) => {
    return (
        <>

            {
                toursItems.map(item =>
                    <div className="col-12 col-md-4 mb-4">
                        <Card key={item.id}>
                            <div className="card-img">
                                <Card.Img variant="top" src={item.image} />
                            </div>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.info}
                                </Card.Text>
                                <Button variant="danger" className="m-0">{item.price} TL</Button>
                            </Card.Body>
                        </Card>
                    </div>


                )
            }
        </>
    )

}
export default Tours