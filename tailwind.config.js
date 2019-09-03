/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      padding: {
        '5/6': '83.3333333%'
      }
    },
    customForms: (theme) => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.200'),
          '&:focus': {
            backgroundColor: theme('colors.white')
          }
        },
        select: {
          icon:
            '<svg fill="#e2e8f0" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>',
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.default'),
          borderColor: 'transparent',
          backgroundColor: theme('colors.gray.700'),
          lineHeight: theme('lineHeight.snug')
        },
        checkbox: {
          backgroundColor: theme('colors.gray.800')
        },
        radio: {
          backgroundColor: theme('colors.gray.800')
        }
      }
    })
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
}
