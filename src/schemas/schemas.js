import * as Yup from 'yup';

export const checkoutSchema = (t) =>
  Yup.object({
    fullName: Yup.string()
      .required(t('Required'))
      .min(3, t('Must be at least 3 characters')),
    email: Yup.string()
      .email(t('Invalid email format'))
      .required(t('Required')),
    phone: Yup.string()
      .matches(
        /^(\(\+\d{1,3}\)|\+\d{1,3})(\s?\d+|\s?\(\d+\))*(\s?\d+)*$/,
        t(
          'Invalid phone format. Examples: (+62) 853 1936 5220, +380 (67) 123 45 67'
        )
      )
      .required(t('Required')),
    street: Yup.string().required(t('Required')),
    city: Yup.string().required(t('Required')),
    zip: Yup.string()
      .matches(/^\d{5}(-\d{4})?$/, t('Invalid ZIP'))
      .required(t('Required')),
    country: Yup.string()
      .oneOf(['United Kingdom', 'USA', 'India'], t('Invalid country'))
      .required(t('Required')),
    shipping: Yup.string()
      .oneOf(
        ['Odeon Express', 'Gorgom Express', 'Cipay Jet', 'Eunioa Fast'],
        t('Invalid shipping method')
      )
      .required(t('Required')),
    payment: Yup.string()
      .oneOf(['Credit Card', 'Paypal'], t('Invalid payment method'))
      .required(t('Required')),
  });
