// src\components\Footer\Footer.jsx

import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.block}>
          <p className={styles.blockLabel}>Shopdoc</p>
          <p className={clsx(styles.text, styles.intro)}>
            High quality and trusted medical shop service
          </p>
        </div>
        <div className={styles.block}>
          <p className={styles.blockLabel}>About us</p>
          <ul className={styles.links}>
            <li>
              <Link to="/about" className={clsx(styles.link, styles.text)}>
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/vision" className={clsx(styles.link, styles.text)}>
                Vision & Mission
              </Link>
            </li>
            <li>
              <Link to="/values" className={clsx(styles.link, styles.text)}>
                Core Values
              </Link>
            </li>
            <li>
              <Link to="/quality" className={clsx(styles.link, styles.text)}>
                Quality Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <p className={styles.blockLabel}>FAQ</p>
          <Link to="/faq" className={clsx(styles.link, styles.text)}>
            FAQ
          </Link>
        </div>
        <div className={styles.block}>
          <p className={styles.blockLabel}>Blog</p>
          <Link to="/blog" className={clsx(styles.link, styles.text)}>
            Blog
          </Link>
        </div>
        <div className={styles.block}>
          <p className={styles.blockLabel}>Contact us</p>
          <Link to="/contacts" className={clsx(styles.link, styles.text)}>
            Get in touch is easy
          </Link>

          <div className={styles.socials}>
            <p className={clsx(styles.text, styles.socialsLabel)}>Follow us</p>
            <ul className={styles.icons}>
              <li>
                <a
                  className={styles.socialLink}
                  href="#"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={styles.socialIcon}>
                    <use href="/icons/icons-sprite.svg#icon-instagram"></use>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className={styles.socialLink}
                  href="#"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={styles.socialIcon}>
                    <use href="/icons/icons-sprite.svg#icon-twitter"></use>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className={styles.socialLink}
                  href="#"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={styles.socialIcon}>
                    <use href="/icons/icons-sprite.svg#icon-facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        Copyrights © 2021 Shopdoc. All Rights Reserved.
      </div>
    </footer>
  );
}
