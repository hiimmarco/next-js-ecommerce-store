import { css } from '@emotion/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </nav>
        <a href="https://www.google.at" className="buttonLink">
          <button>Shopping cart</button>
        </a>
      </div>
    </footer>
  );
}
