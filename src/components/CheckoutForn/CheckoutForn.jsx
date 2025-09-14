import { Formik, Form, ErrorMessage } from 'formik';
import { checkoutSchema } from '../../schemas/checkoutSchema';
import FormInput from '../FormInput/FormInput';
import SelectInput from '../SelectInput/SelectInput';
import styles from './CheckoutForn.module.css';
import RadioGroup from '../RadioGroup/RadioGroup';

export default function CheckoutForm() {
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

  const handleSubmit = (values) => {
    console.log('Checkout form data:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.leftBlock}>
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

        <div className={styles.rightBlock}>
          <button type="submit">Checkout</button>
        </div>
      </Form>
    </Formik>
  );
}
