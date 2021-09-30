import { css } from '@emotion/react';
import Image from 'next/image';
import Burrito from '../public/images/burrito.jpeg';

const productcard = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 350px;
  padding: 8px;
  border-radius: 5px;
`;

const image = css`
  border-radius: 5px;
`;
export default function Productcard() {
  return (
    <div css={productcard}>
      <Image src={Burrito} alt="Picture of a burrito" css={image} />
      <h3>Title</h3>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
      </ul>
      <p>Price</p>
    </div>
  );
}
