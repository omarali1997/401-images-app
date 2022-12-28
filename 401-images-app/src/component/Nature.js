import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function Nature1(props) {

    const [nomOfLikes, setNumOdLikes] = useState(0);

    const increment = () => {
        setNumOdLikes(nomOfLikes + 1);
        props.Total();
    }


    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='i' variant="top" src={props.image_url}/>
                <Card.Body className='b'>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Likes : {nomOfLikes}
                    </Card.Text>
                    {/* <Button variant='success' onClick={increment}>Like</Button> */}
{/* <button class="button-74" role="button" onClick={increment}>Like</button> */}
<button class="button-85" role="button" onClick={increment}>Like</button>


                </Card.Body>
            </Card>
        </>
    )
}
export default Nature1;