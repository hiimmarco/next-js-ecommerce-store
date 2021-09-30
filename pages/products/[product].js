import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../Components/Layout';

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
`;

export default function Productdetail() {
  const router = useRouter();
  const { product } = router.query;
  return (
    <div>
      <Layout>
        <Head>
          <title>{product}</title>
        </Head>
        <div css={wrapper}>
          <h1>Product Detail Page for {product}</h1>
        </div>
      </Layout>
    </div>
  );
}
