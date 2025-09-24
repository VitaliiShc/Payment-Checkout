import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '@/components/ui';
import { Footer, Features, Header } from '.';
import styles from './App.module.css';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ReviewsPage from '../pages/ReviewsPage';
import ContactPage from '../pages/ContactPage';
import ShopPage from '../pages/ShopPage';
import SearchPage from '../pages/SearchPage';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const AboutPage = lazy(() => import('../pages/AboutPage'));
// const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));
// const ContactPage = lazy(() => import('../pages/ContactPage'));
// const ShopPage = lazy(() => import('../pages/ShopPage'));
// const SearchPage = lazy(() => import('../pages/SearchPage'));
// const CartPage = lazy(() => import('../pages/CartPage'));
// const ProfilePage = lazy(() => import('../pages/ProfilePage'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export default function App() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <Features />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
