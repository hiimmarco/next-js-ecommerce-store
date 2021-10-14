import { css } from '@emotion/react';
import { useState } from 'react';

const buttons = css`
  display: flex;
`;

// Set count function with restricting to go under 1 item

export default function Counter() {
  const [quantity, setQuantity] = useState(1);
  const addCountHandler = () => {
    setQuantity(quantity + 1);
  };
  const removeCountHandler = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };
  return (
    <div css={buttons}>
      <button onClick={removeCountHandler}>-</button>
      <p>{quantity}</p>
      <button onClick={addCountHandler}>+</button>
      <button>Add to cart</button>
    </div>
  );
}
