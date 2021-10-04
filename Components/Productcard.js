import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const productcard = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 350px;
  padding: 8px;
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const image = css`
  border-radius: 5px;
`;
export default function Productcard(props) {
  return (
    <div css={productcard}>
      <Link href={`/products/${props.link}`}>
        <a>
          <Image
            src={props.img}
            alt="Picture of a burrito"
            css={image}
            width="332"
            height="249"
          />
          <h3>{props.name}</h3>
        </a>
      </Link>
      <p>{props.desc}</p>

      <p>€ {props.price}</p>
    </div>
  );
}
