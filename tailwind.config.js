const plugin = require('tailwindcss/plugin')

module.exports = {
  // prefix: 'rsx-',
  mode: 'jit',
  purge: {
    content: ['./.storybook/**/*.{html,js,jsx,ts,tsx,vue,txt}'],
    // layers: ['components', 'utilities'],
    // options: {
    //   safelist: ['bs-popover-top', 'modal-open', 'modal-scrollbar-measure'],
    // }
  },
  darkMode: false, // or 'media' or 'class'
  // important: true,
  theme: {},
  variants: {},
  plugins: [
    require('./plugins/tailwind.bs')
    // plugin(function({ addUtilities, addComponents, e, prefix, config }) {
    //   const newUtilities = {
    //     '.skew-10deg': {
    //       transform: 'skewY(-10deg)',
    //     },
    //     '.skew-15deg': {
    //       transform: 'skewY(-15deg)',
    //     },
    //   }
    //   addUtilities(newUtilities)
    // }),
    // plugin(function({ addComponents }) {
    //   const buttons = {
    //     '.btn': {
    //       "@apply font-bold py-2 px-4 rounded": {},
    //     },
    //     '.btn-blue': {
    //       "@apply bg-blue-500 text-white": {},
    //       '&:hover': {
    //         "@apply bg-blue-700": {},
    //       },
    //     },
    //   }
    //   addComponents(buttons)
    // })
  ]
}
