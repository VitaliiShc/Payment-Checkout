import * as Yup from 'yup';

export const checkoutSchema = Yup.object({
  fullName: Yup.string()
    .required('Full Name is required')
    .min(3, 'Must be at least 3 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(
      /^(\(\+\d{1,3}\)|\+\d{1,3})(\s?\d+|\s?\(\d+\))*(\s?\d+)*$/,
      'Invalid phone format. Examples: (+62) 853 1936 5220, +380 (67) 123 45 67'
    )
    .required('Phone number is required'),
  street: Yup.string().required('Street Address is required'),
  city: Yup.string().required('City is required'),
  zip: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code')
    .required('Zip is required'),
  country: Yup.string()
    .oneOf(['United Kingdom', 'USA', 'India'], 'Invalid country')
    .required('Country is required'),
  shipping: Yup.string()
    .oneOf(
      ['Odeon Express', 'Gorgom Express', 'Cipay Jet', 'Eunioa Fast'],
      'Invalid shipping method'
    )
    .required('Shipping method is required'),
  payment: Yup.string()
    .oneOf(['Credit Card', 'Paypal'], 'Invalid payment method')
    .required('Payment method is required'),
});
