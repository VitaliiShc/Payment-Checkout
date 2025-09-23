/**
 * Temporary stub for preparing the project for i18n.
 *
 * This function mimics the 'useTranslation' hook from 'react-i18next',
 * but does not perform any actual translations - it simply returns the input string.
 *
 * Usage:
 *   const { t } = useTranslation();
 *   t("Some text"); // returns "Some text"
 *
 * Later, when integrating the real library:
 *   1. Remove this file.
 *   2. Replace imports:
 *        import { useTranslation } from '@/utils/useTranslation';
 *      with:
 *        import { useTranslation } from 'react-i18next';
 */

export function useTranslation() {
  function t(key) {
    return key;
  }
  return { t };
}
