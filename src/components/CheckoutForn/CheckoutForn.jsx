import { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { checkoutSchema } from '../../schemas/checkoutSchema';
import clsx from 'clsx';
import FormInput from '../FormInput/FormInput';
import SelectInput from '../SelectInput/SelectInput';
import styles from './CheckoutForn.module.css';
import RadioGroup from '../RadioGroup/RadioGroup';
import ProductItem from '../ProductItem/ProductItem';
import Button from '../Button/Button';
import PromocodeInput from '../PromocodeInput/PromocodeInput';

const products = [
  {
    name: 'Capsul White',
    drugForm: '15 Capsul',
    color: 'White',
    packs: 4,
    price: 35,
  },
  {
    name: 'Rainbow Drugs',
    drugForm: '10 Capsul',
    color: 'White',
    packs: 4,
    price: 35,
  },
  {
    name: 'Rainbow Drugs White',
    drugForm: '5 Capsul',
    color: 'White',
    packs: 4,
    price: 35,
  },
  {
    name: 'Zaitun Olive Oil',
    drugForm: '2 Bottle',
    color: 'White',
    packs: 4,
    price: 35,
  },
  {
    name: 'Acetylcysteine Pill',
    drugForm: '15 Capsul',
    color: 'White',
    packs: 4,
    price: 35,
  },
];

export default function CheckoutForm() {
  const [discount, setDiscount] = useState(0);

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

  const subTotal = products.reduce(
    (acc, product) => acc + product.packs * product.price,
    0
  );
  const SHIPPING_FEE = 40;
  const total = subTotal - discount + SHIPPING_FEE;

  const handleSubmit = (values, { resetForm }) => {
    console.log('Checkout form data:', { ...values, total });
    resetForm();
    setDiscount(0);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.deliveryDetails}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Personal Details</legend>
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
            <legend className={styles.legend}>Shipping Details</legend>
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

            <div>
              <fieldset className={styles.fieldset}>
                <legend className={styles.subLegend}>
                  Shipping Method{' '}
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
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              Payment Method{' '}
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
          <h2 className={styles.subTitle}>Order Summary</h2>
          <ul className={styles.productList}>
            {products.map((product, idx) => (
              <li key={idx}>
                <ProductItem {...product} />
              </li>
            ))}
          </ul>

          <h2 className={styles.promocodeTitle}>Apply Promocode</h2>
          <PromocodeInput
            subTotal={subTotal}
            setDiscount={setDiscount}
            discount={discount}
          />

          <div className={clsx(styles.totalBlock, styles.subTotalBlock)}>
            <h2 className={styles.totalTitle}>Sub total</h2>
            <p className={styles.totalAmount}>{subTotal}</p>
          </div>

          <div className={clsx(styles.totalBlock, styles.shippingFeeBlock)}>
            <h2 className={styles.totalTitle}>Shipping Fee</h2>
            <p className={styles.totalAmount}>{SHIPPING_FEE}</p>
          </div>

          <div className={styles.resultBlock}>
            <h2 className={styles.totalTitle}>Total</h2>
            <p className={styles.result}>{total}</p>
          </div>

          <Button type="submit" label="Checkout" />
        </div>
      </Form>
    </Formik>
  );
}
