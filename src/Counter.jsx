import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function Counter() {
  const [count, setCount] = useState(1);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="d-flex flex-column mt-4 justify-content-center  align-items-center">
      {count === 0 ? (
        <div class="alert alert-danger" role="alert">
          Your count is zero! You can not decrease it more than that!!
        </div>
      ) : null}

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <div className="m-4 text-lg">Count is : {count}</div>
          <div className="d-flex flex-row gap-3 m-4">
            <Button onClick={onIncrease}>Increase</Button>
            <Button variant="danger" onClick={onDecrease}>
              Decrease
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Counter;
