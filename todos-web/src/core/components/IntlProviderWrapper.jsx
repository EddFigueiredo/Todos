import PropTypes from 'prop-types'
import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import enUS from '../i18n/en-US'

addLocaleData([...en])
addLocaleData({ locale: 'en-US', parentLocale: 'en' })

const messages = { 'en-US': enUS }
const language = 'en-US'

export const IntlProviderWrapper = ({ children }) => (
  <IntlProvider locale={language} messages={messages['en-US']}>
    {children}
  </IntlProvider>
)

IntlProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired
}
