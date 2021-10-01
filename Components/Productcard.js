import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
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

const buttons = css`
  display: flex;
`;

const image = css`
  border-radius: 5px;
`;
export default function Productcard(props) {
  return (
    <div css={productcard}>
      <Link href={props.link}>
        <a>
          <Image src={Burrito} alt="Picture of a burrito" css={image} />
          <h3>{props.name}</h3>
        </a>
      </Link>
      <p>{props.desc}</p>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
      </ul>
      <p>{props.price}</p>
      <div css={buttons}>
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
    </div>
  );
}
