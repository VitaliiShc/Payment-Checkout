import { useState, useEffect } from 'react';
import { useTranslation } from '@/utils';
import { Formik, Form, ErrorMessage, useFormikContext } from 'formik';
import { useCart } from '@/context/cartContext';
import {
  SHIPPING_FEE,
  FORM_USER_DATA_LOCAL_STORAGE_KEY,
} from '@/constants/constants';
import { checkoutSchema } from '@/schemas/schemas';
import { FormInput, Button, SelectInput, RadioGroup } from '@/components/ui';
import { Cart, Calculation } from '@/components';
import styles from './CheckoutForm.module.css';

function PersistFormikValues({ enabled }) {
  const { values } = useFormikContext();

  useEffect(() => {
    if (!enabled) return;
    localStorage.setItem(
      FORM_USER_DATA_LOCAL_STORAGE_KEY,
      JSON.stringify(values)
    );
  }, [values, enabled]);

  return null;
}

export function CheckoutForm() {
  const [discount, setDiscount] = useState(0);
  const [persistEnabled, setPersistEnabled] = useState(true);
  const { cartList, sum, clearCart } = useCart();
  const { t } = useTranslation();
  const shippingFee = sum !== 0 ? SHIPPING_FEE : 0;
  const subTotal = sum - discount;
  const total = subTotal + shippingFee;

  const defaultValues = {
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

  const savedValues = JSON.parse(
    localStorage.getItem(FORM_USER_DATA_LOCAL_STORAGE_KEY) || 'null'
  );
  const initialValues = savedValues || defaultValues;

  const handleSubmit = (values, { resetForm }) => {
    const submitData = {
      ...values,
      items: cartList,
      sum,
      discount,
      shippingFee,
      total,
    };

    console.info('Checkout form data:', submitData);

    setPersistEnabled(false);
    localStorage.removeItem(FORM_USER_DATA_LOCAL_STORAGE_KEY);
    resetForm({ values: defaultValues });
    setDiscount(0);
    clearCart();
    setTimeout(() => setPersistEnabled(true), 0);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema(t)}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <PersistFormikValues enabled={persistEnabled} />

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
