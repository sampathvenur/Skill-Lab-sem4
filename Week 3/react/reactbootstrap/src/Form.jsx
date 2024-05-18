import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  const [jerryPosition, setJerryPosition] = useState(0);

  const animateJerry = () => {
    const tomPosition = document.getElementById("tom").offsetLeft;
    const jerry = document.getElementById("jerry");
    const jerryWidth = jerry.offsetWidth;
    const targetPosition = tomPosition - jerryWidth;

    const animation = setInterval(() => {
      if (jerryPosition < targetPosition) {
        setJerryPosition(prevPosition => prevPosition + 5); 
      } else {
        clearInterval(animation);
      }
    }, 10); 
    setTimeout(() => {
      clearInterval(animation);
    }, 2500);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Gender</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Male"
              name="genderRadios"
              id="genderRadio1"
            />
            <Form.Check
              type="radio"
              label="Female"
              name="genderRadios"
              id="genderRadio2"
            />
            <Form.Check
              type="radio"
              label="Other"
              name="genderRadios"
              id="genderRadio3"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Example select</Form.Label>
          <Form.Control as="select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTextarea">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div style={{ position: 'relative' }}>
        <img id="tom" src="https://e7.pngegg.com/pngimages/982/326/png-clipart-tom-and-jerry-tom-and-jerry.png" alt="Tom" style={{ position: 'absolute', right: 0, bottom: 0, width: '150px' }} />
        <img id="jerry" src="https://icon2.cleanpng.com/20171221/jgq/jerry-free-png-clip-art-5a3bbb3b22f979.0122604515138639951433.jpg" alt="Jerry" style={{ position: 'absolute', left: `${jerryPosition}px`, bottom: 0, width: '150px' }} />
      </div>
      <Button variant="primary" onClick={animateJerry}>Animate Jerry</Button>
    </div>
  );
}

export default BasicExample;
