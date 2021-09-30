import { css } from '@emotion/react';
import Layout from '../Components/Layout';
import Productcard from '../Components/Productcard';

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
`;

export default function Products() {
  return (
    <div>
      <Layout>
        <div css={wrapper}>
          <Productcard />
        </div>
      </Layout>
    </div>
  );
}
