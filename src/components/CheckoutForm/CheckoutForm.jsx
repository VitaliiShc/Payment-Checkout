import { useState } from 'react';
import { useTranslation } from '@/utils';
import { Formik, Form, ErrorMessage } from 'formik';
import { useCart } from '@/context/cartContext';
import { SHIPPING_FEE } from '@/constants/constants';
import { checkoutSchema } from '@/schemas/schemas';
import { FormInput, Button, SelectInput, RadioGroup } from '@/components/ui';
import { Cart, Calculation } from '@/components';
import styles from './CheckoutForm.module.css';

export function CheckoutForm() {
  const [discount, setDiscount] = useState(0);
  const { cartList, sum, clearCart } = useCart();
  const { t } = useTranslation();
  const shippingFee = sum !== 0 ? SHIPPING_FEE : 0;
  const subTotal = sum - discount;
  const total = subTotal + shippingFee;

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zip: '',
    country: '',
    shipping: '',
    payment: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const submitData = {
      ...values,
      items: cartList,
      sum,
      discount,
      shippingFee,
      total,
    };

    resetForm();
    setDiscount(0);
    clearCart();
    console.log('Checkout form data:', submitData);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema(t)}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.deliveryDetails}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{t('Personal Details')}</legend>
            <FormInput
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Jon Snow"
            />

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="example@mail.com"
            />

            <FormInput
              label="Phone Number"
              name="phone"
              type="text"
              placeholder="(+62) 853 1936 5220"
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{t('Shipping Details')}</legend>
            <FormInput
              label="Street Address"
              name="street"
              type="text"
              placeholder="Street Address"
            />

            <div className={styles.cityZip}>
              <FormInput
                label="City"
                name="city"
                type="text"
                placeholder="City"
              />

              <FormInput
                label="Zip Code"
                name="zip"
                type="text"
                placeholder="Zip Code"
              />
            </div>

            <SelectInput
              label="Country"
              name="country"
              placeholder="Select country"
              options={['United Kingdom', 'USA', 'India']}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.subLegend}>
              {t('Shipping Method')}{' '}
              <ErrorMessage
                name="shipping"
                component="span"
                className={styles.error}
              />
            </legend>
            <RadioGroup
              name="shipping"
              options={[
                'Odeon Express',
                'Gorgom Express',
                'Cipay Jet',
                'Eunioa Fast',
              ]}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              {t('Payment Method')}{' '}
              <ErrorMessage
                name="payment"
                component="span"
                className={styles.error}
              />
            </legend>
            <RadioGroup name="payment" options={['Credit Card', 'Paypal']} />
          </fieldset>
        </div>

        <div className={styles.orderDetails}>
          <h2 className={styles.subTitle}>{t('Order Summary')}</h2>

          <Cart />

          <Calculation
            discount={discount}
            setDiscount={setDiscount}
            shippingFee={shippingFee}
            subTotal={subTotal}
            total={total}
          />

          <Button type="submit" label="Checkout" />
        </div>
      </Form>
    </Formik>
  );
}
