import { Link } from 'react-router-dom';
import { useTranslation } from '@/utils';
import clsx from 'clsx';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={clsx(styles.block, styles.info)}>
          <p className={styles.blockLabel}>Shopdoc</p>
          <p className={clsx(styles.text, styles.intro)}>
            {t('High quality and trusted medical shop service')}
          </p>
        </div>

        <div className={clsx(styles.block, styles.about)}>
          <p className={styles.blockLabel}>{t('About us')}</p>
          <div className={styles.links}>
            <Link to="/about" className={clsx(styles.link, styles.text)}>
              {t('Who We Are')}
            </Link>

            <Link to="/vision" className={clsx(styles.link, styles.text)}>
              {t('Vision & Mission')}
            </Link>

            <Link to="/values" className={clsx(styles.link, styles.text)}>
              {t('Core Values')}
            </Link>

            <Link to="/quality" className={clsx(styles.link, styles.text)}>
              {t('Quality Policy')}
            </Link>
          </div>
        </div>

        <div className={clsx(styles.block, styles.faq)}>
          <p className={styles.blockLabel}>{t('FAQ')}</p>
          <Link to="/faq" className={clsx(styles.link, styles.text)}>
            {t('FAQ')}
          </Link>
        </div>

        <div className={clsx(styles.block, styles.blog)}>
          <p className={styles.blockLabel}>{t('Blog')}</p>
          <Link to="/blog" className={clsx(styles.link, styles.text)}>
            {t('Blog')}
          </Link>
        </div>

        <div className={clsx(styles.block, styles.contact)}>
          <p className={styles.blockLabel}>{t('Contact us')}</p>
          <Link to="/contacts" className={clsx(styles.link, styles.text)}>
            {t('Get in touch is easy')}
          </Link>

          <div className={styles.socials}>
            <p className={clsx(styles.text, styles.socialsLabel)}>
              {t('Follow us')}
            </p>
            <div className={styles.icons}>
              <a
                className={styles.socialLink}
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={styles.socialIcon}>
                  <use href="/icons-sprite.svg#instagram"></use>
                </svg>
              </a>

              <a
                className={styles.socialLink}
                href="#"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={styles.socialIcon}>
                  <use href="/icons-sprite.svg#twitter"></use>
                </svg>
              </a>

              <a
                className={styles.socialLink}
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={styles.socialIcon}>
                  <use href="/icons-sprite.svg#facebook"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        {t('Copyrights © 2021 Shopdoc. All Rights Reserved.')}
      </div>
    </footer>
  );
}
