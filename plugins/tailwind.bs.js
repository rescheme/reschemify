const plugin = require('tailwindcss/plugin')
const hexRgb = require('hex-rgb')
const { colors, fontFamily, fontSize } = require('tailwindcss/defaultTheme')

const makeShadow = (name, rgb) => {
  const obj = {}
  // obj[`${name}-xs`] = `0 0 0 1px rgba(${rgb}, 0.05)`
  // obj[`${name}-xs`] = `0 0 0 1px rgba(${rgb}, 0.05)`
  // obj[`${name}-sm`] = `0 1px 2px 0 rgba(${rgb}, 0.05)`
  // obj[name] = `0 1px 3px 0 rgba(${rgb}, 0.1), 0 1px 2px 0 rgba(${rgb}, 0.06)`
  // obj[`${name}-md`] = `0 4px 6px -1px rgba(${rgb}, 0.1), 0 2px 4px -1px rgba(${rgb}, 0.06)`
  // obj[`${name}-lg`] = `0 10px 15px -3px rgba(${rgb}, 0.1), 0 4px 6px -2px rgba(${rgb}, 0.05)`
  // obj[`${name}-xl`] = `0 20px 25px -5px rgba(${rgb}, 0.1), 0 10px 10px -5px rgba(${rgb}, 0.04)`
  // obj[`${name}-2xl`] = `0 25px 50px -12px rgba(${rgb}, 0.25)`
  // obj[`${name}-inner`] = `inset 0 2px 4px 0 rgba(${rgb}, 0.06)`
  obj[`outline-${name}`] = `0 0 0 3px rgba(${rgb}, 0.45)`

  return obj
}

module.exports = plugin(function({ addUtilities, e, theme, variants }) {
  // ...
}, {
  // prefix: 'rsx-',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 992px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      colors: {
        'red': {
          // ...colors.red,
          'default': '#F44336',
          '50'  : '#FFEBEE',
          '100' : '#FFCDD2',
          '200' : '#EF9A9A',
          '300' : '#E57373',
          '400' : '#EF5350',
          '500' : '#F44336',
          '600' : '#E53935',
          '700' : '#D32F2F',
          '800' : '#C62828',
          '900' : '#B71C1C',
          // 'a100': '#FF8A80',
          // 'a200': '#FF5252',
          // 'a400': '#FF1744',
          // 'a700': '#D50000',
        },
        'pink': {
          // ...colors.pink,
          'default': '#E91E63',
          '50'  : '#FCE4EC',
          '100' : '#F8BBD0',
          '200' : '#F48FB1',
          '300' : '#F06292',
          '400' : '#EC407A',
          '500' : '#E91E63',
          '600' : '#D81B60',
          '700' : '#C2185B',
          '800' : '#AD1457',
          '900' : '#880E4F',
          // 'a100': '#FF80AB',
          // 'a200': '#FF4081',
          // 'a400': '#F50057',
          // 'a700': '#C51162',
        },
        'purple': {
          // ...colors.purple,
          'default': '#9C27B0',
          '50'  : '#F3E5F5',
          '100' : '#E1BEE7',
          '200' : '#CE93D8',
          '300' : '#BA68C8',
          '400' : '#AB47BC',
          '500' : '#9C27B0',
          '600' : '#8E24AA',
          '700' : '#7B1FA2',
          '800' : '#6A1B9A',
          '900' : '#4A148C',
          // 'a100': '#EA80FC',
          // 'a200': '#E040FB',
          // 'a400': '#D500F9',
          // 'a700': '#AA00FF',
        },
        'deep-purple': {
          'default': '#673AB7',
          '50'  : '#EDE7F6',
          '100' : '#D1C4E9',
          '200' : '#B39DDB',
          '300' : '#9575CD',
          '400' : '#7E57C2',
          '500' : '#673AB7',
          '600' : '#5E35B1',
          '700' : '#512DA8',
          '800' : '#4527A0',
          '900' : '#311B92',
          // 'a100': '#B388FF',
          // 'a200': '#7C4DFF',
          // 'a400': '#651FFF',
          // 'a700': '#6200EA',
        },
        'indigo': {
          // ...colors.indigo,
          'default': '#3F51B5',
          '50'  : '#E8EAF6',
          '100' : '#C5CAE9',
          '200' : '#9FA8DA',
          '300' : '#7986CB',
          '400' : '#5C6BC0',
          '500' : '#3F51B5',
          '600' : '#3949AB',
          '700' : '#303F9F',
          '800' : '#283593',
          '900' : '#1A237E',
          // 'a100': '#8C9EFF',
          // 'a200': '#536DFE',
          // 'a400': '#3D5AFE',
          // 'a700': '#304FFE',
        },
        'blue': {
          // ...colors.blue,
          'default': '#2196F3',
          '50'  : '#E3F2FD',
          '100' : '#BBDEFB',
          '200' : '#90CAF9',
          '300' : '#64B5F6',
          '400' : '#42A5F5',
          '500' : '#2196F3',
          '600' : '#1E88E5',
          '700' : '#1976D2',
          '800' : '#1565C0',
          '900' : '#0D47A1',
          // 'a100': '#82B1FF',
          // 'a200': '#448AFF',
          // 'a400': '#2979FF',
          // 'a700': '#2962FF',
        },
        'light-blue': {
          'default': '#03A9F4',
          '50'  : '#E1F5FE',
          '100' : '#B3E5FC',
          '200' : '#81D4FA',
          '300' : '#4FC3F7',
          '400' : '#29B6F6',
          '500' : '#03A9F4',
          '600' : '#039BE5',
          '700' : '#0288D1',
          '800' : '#0277BD',
          '900' : '#01579B',
          // 'a100': '#80D8FF',
          // 'a200': '#40C4FF',
          // 'a400': '#00B0FF',
          // 'a700': '#0091EA',
        },
        'cyan': {
          'default': '#00BCD4',
          '50'  : '#E0F7FA',
          '100' : '#B2EBF2',
          '200' : '#80DEEA',
          '300' : '#4DD0E1',
          '400' : '#26C6DA',
          '500' : '#00BCD4',
          '600' : '#00ACC1',
          '700' : '#0097A7',
          '800' : '#00838F',
          '900' : '#006064',
          // 'a100': '#84FFFF',
          // 'a200': '#18FFFF',
          // 'a400': '#00E5FF',
          // 'a700': '#00B8D4',
        },
        'teal': {
          // ...colors.teal,
          'default': '#009688',
          '50'  : '#E0F2F1',
          '100' : '#B2DFDB',
          '200' : '#80CBC4',
          '300' : '#4DB6AC',
          '400' : '#26A69A',
          '500' : '#009688',
          '600' : '#00897B',
          '700' : '#00796B',
          '800' : '#00695C',
          '900' : '#004D40',
          // 'a100': '#A7FFEB',
          // 'a200': '#64FFDA',
          // 'a400': '#1DE9B6',
          // 'a700': '#00BFA5',
        },
        'green': {
          // ...colors.green,
          'default': '#4CAF50',
          '50'  : '#E8F5E9',
          '100' : '#C8E6C9',
          '200' : '#A5D6A7',
          '300' : '#81C784',
          '400' : '#66BB6A',
          '500' : '#4CAF50',
          '600' : '#43A047',
          '700' : '#388E3C',
          '800' : '#2E7D32',
          '900' : '#1B5E20',
          // 'a100': '#B9F6CA',
          // 'a200': '#69F0AE',
          // 'a400': '#00E676',
          // 'a700': '#00C853',
        },
        'light-green': {
          'default': '#8BC34A',
          '50'  : '#F1F8E9',
          '100' : '#DCEDC8',
          '200' : '#C5E1A5',
          '300' : '#AED581',
          '400' : '#9CCC65',
          '500' : '#8BC34A',
          '600' : '#7CB342',
          '700' : '#689F38',
          '800' : '#558B2F',
          '900' : '#33691E',
          // 'a100': '#CCFF90',
          // 'a200': '#B2FF59',
          // 'a400': '#76FF03',
          // 'a700': '#64DD17',
        },
        'lime': {
          'default': '#CDDC39',
          '50'  : '#F9FBE7',
          '100' : '#F0F4C3',
          '200' : '#E6EE9C',
          '300' : '#DCE775',
          '400' : '#D4E157',
          '500' : '#CDDC39',
          '600' : '#C0CA33',
          '700' : '#AFB42B',
          '800' : '#9E9D24',
          '900' : '#827717',
          // 'a100': '#F4FF81',
          // 'a200': '#EEFF41',
          // 'a400': '#C6FF00',
          // 'a700': '#AEEA00',
        },
        'yellow': {
          // ...colors.yellow,
          'default': '#FFEB3B',
          '50'  : '#FFFDE7',
          '100' : '#FFF9C4',
          '200' : '#FFF59D',
          '300' : '#FFF176',
          '400' : '#FFEE58',
          '500' : '#FFEB3B',
          '600' : '#FDD835',
          '700' : '#FBC02D',
          '800' : '#F9A825',
          '900' : '#F57F17',
          // 'a100': '#FFFF8D',
          // 'a200': '#FFFF00',
          // 'a400': '#FFEA00',
          // 'a700': '#FFD600',
        },
        'amber': {
          'default': '#FFC107',
          '50'  : '#FFF8E1',
          '100' : '#FFECB3',
          '200' : '#FFE082',
          '300' : '#FFD54F',
          '400' : '#FFCA28',
          '500' : '#FFC107',
          '600' : '#FFB300',
          '700' : '#FFA000',
          '800' : '#FF8F00',
          '900' : '#FF6F00',
          // 'a100': '#FFE57F',
          // 'a200': '#FFD740',
          // 'a400': '#FFC400',
          // 'a700': '#FFAB00',
        },
        'orange': {
          // ...colors.orange,
          'default': '#FF9800',
          '50'  : '#FFF3E0',
          '100' : '#FFE0B2',
          '200' : '#FFCC80',
          '300' : '#FFB74D',
          '400' : '#FFA726',
          '500' : '#FF9800',
          '600' : '#FB8C00',
          '700' : '#F57C00',
          '800' : '#EF6C00',
          '900' : '#E65100',
          // 'a100': '#FFD180',
          // 'a200': '#FFAB40',
          // 'a400': '#FF9100',
          // 'a700': '#FF6D00',
        },
        'deep-orange': {
          'default': '#FF5722',
          '50'  : '#FBE9E7',
          '100' : '#FFCCBC',
          '200' : '#FFAB91',
          '300' : '#FF8A65',
          '400' : '#FF7043',
          '500' : '#FF5722',
          '600' : '#F4511E',
          '700' : '#E64A19',
          '800' : '#D84315',
          '900' : '#BF360C',
          // 'a100': '#FF9E80',
          // 'a200': '#FF6E40',
          // 'a400': '#FF3D00',
          // 'a700': '#DD2C00',
        },
        'brown': {
          'default': '#795548',
          '50'  : '#EFEBE9',
          '100' : '#D7CCC8',
          '200' : '#BCAAA4',
          '300' : '#A1887F',
          '400' : '#8D6E63',
          '500' : '#795548',
          '600' : '#6D4C41',
          '700' : '#5D4037',
          '800' : '#4E342E',
          '900' : '#3E2723',
        },
        'gray': {
          // ...colors.gray,
          'default': '#9E9E9E',
          '50'  : '#FAFAFA',
          '100' : '#F5F5F5',
          '200' : '#EEEEEE',
          '300' : '#E0E0E0',
          '400' : '#BDBDBD',
          '500' : '#9E9E9E',
          '600' : '#757575',
          '700' : '#616161',
          '800' : '#424242',
          '900' : '#212121',
        },
        'blue-gray': {
          'default': '#607D8B',
          '50'  : '#ECEFF1',
          '100' : '#CFD8DC',
          '200' : '#B0BEC5',
          '300' : '#90A4AE',
          '400' : '#78909C',
          '500' : '#607D8B',
          '600' : '#546E7A',
          '700' : '#455A64',
          '800' : '#37474F',
          '900' : '#263238',
        },

        'inheritColor'  : 'inherit',

        // Brand Colors
        'dark'          : '#343A40',
        'light'         : '#F8F9FA',
        'velvet'        : '#AD1457',
        'whiteSmoke'    : '#F5F5F5',

        // Social Colors
        'adn'           : '#D87A68',
        'bitbucket'     : '#205081',
        'dropbox'       : '#1087DD',
        'facebook'      : '#3B5998',
        'flickr'        : '#2BA9E1',
        'foursquare'    : '#F94877',
        'github'        : '#444444',
        'google'        : '#DD4B39',
        'instagram'     : '#3F729B',
        'linkedin'      : '#007BB6',
        'microsoft'     : '#2672EC',
        'odnoklassniki' : '#F4731C',
        'openid'        : '#F7931E',
        'pinterest'     : '#CB2027',
        'reddit'        : '#EFF7FF',
        'soundcloud'    : '#FF5500',
        'tumblr'        : '#CB2027',
        'twitter'       : '#55ACEE',
        'vimeo'         : '#1AB7EA',
        'vk'            : '#587EA3',
        'yahoo'         : '#720E9E',
      },
      boxShadow: (theme) => {
        // Handle color objects as well
        const regex = /^#([0-9A-F]{3}){1,2}$/i;

        const fresh = Object.values(
          Object.entries(theme('colors')).reduce((acc, curr) => {
            const [k, v] = curr;

            // if (typeof v === 'string' && v !== 'transparent' && v !== 'currentColor' && v !== 'inherit') {}
            if (typeof v === 'string' && regex.test(v)) {
              const { red, green, blue } = hexRgb(v);
              acc[k] = makeShadow(k, `${red}, ${green}, ${blue}`);
            }

            if (typeof v === 'object') {
              Object.entries(v).forEach(([_k, _v]) => {
                const { red, green, blue } = hexRgb(_v);
                acc[`${k}-${_k}`] = makeShadow(`${k}-${_k}`, `${red}, ${green}, ${blue}`);
              });
            }
            return acc
          }, {}),
        ).reduce((acc, cur) => ({ ...acc, ...cur }), {})

        return {
          // xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
          // sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          default: '0 .5rem 1rem rgba(0,0,0,.15)',
          // md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          // lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          // xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          // '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          // inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
          // outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
          // none: 'none',
          ...fresh
        };
      },
      fontFamily: {
        'base'                   : ['"Rescheme Sans"', 'Manrope', 'Inter', 'Roboto', '"Segoe UI"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'comics'                 : ['Bangers', 'cursive'],
        'cursive'                : ['Cookie', 'cursive'],
        'display'                : ['"DM Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        // 'mono'                   : ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'rounded'                : ['Quicksand', 'Calibri', 'Candara', 'Segoe', 'Optima', 'Arial', 'sans-serif'],
        'sans'                   : ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        'serif'                  : ['"Roboto Slab"', 'Lucida', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],

        // Font Stacks
        //------------------------------
        // Sans
        'stack-inter'               : ['Inter', '"Segoe UI"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        // 'stack-kumbh-sans'       : ['Kumbh Sans', 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'stack-manrope'             : ['Manrope', '"Segoe UI"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        // 'stack-metropolis'       : ['Metropolis', 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        // 'stack-roboto'           : ['Roboto', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        // 'stack-red-hat-display'  : ['Red Hat Display', 'Manrope', 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'stack-rescheme'            : ['"Rescheme Sans"', 'Manrope', '"Segoe UI"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],

        // Display
        // 'stack-dm-sans'          : ['DM Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        // 'stack-gilroy-light'     : ['Gilroy-Light', 'Manrope', 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        // 'stack-gilroy-extrabold' : ['Gilroy-ExtraBold', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],

        // Rounded
        // 'stack-mplus-rounded'    : ['"M PLUS Rounded 1c"', 'Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima', 'Arial', 'sans-serif'],
        'stack-quicksand'           : ['Quicksand', 'Calibri', 'Candara', 'Segoe', 'Optima', 'Arial', 'sans-serif'],

        // Mono
        // 'stack-roboto-mono'      : ['Roboto Mono', 'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],

        // Slabs
        // 'stack-bitter'           : ['Bitter', 'Roboto Slab', 'Lucida', 'Georgia', 'serif'],
        // 'stack-roboto-slab'      : ['Roboto Slab', 'Lucida', 'Georgia', 'serif'],

        // Handwriting
        // 'stack-bangers'          : ['Bangers', 'cursive'],
        // 'stack-cookie'           : ['Cookie', 'cursive'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '5rem',
      },
      inset: {
        '1/2' : '50%',
        'full': '100%',
        '-9999px': '-9999px',
      },
      opacity: {
        '05': '0.05',
        '10': '0.10',
        '90': '0.90',
      },
      margin: {
        'full': '100%',
      },
      padding: {
        'full': '100%',
      },
      transitionDuration: {
        '35': '35ms',
      },
      transitionProperty: {
        'height' : 'height',
        'spacing': 'margin, padding',
        'width'  : 'width',
      },
      zIndex: {
        '1'   : 1,
        '2'   : 2,
        '1000': 1000,
        '1020': 1020,
        '1030': 1030,
        '1040': 1040,
        '1050': 1050,
        '1060': 1060,
        '1070': 1070,
      }
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    borderWidth: ['responsive', 'hover', 'focus', 'first', 'last'],
    boxShadow  : ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus'],
    textColor  : ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    zIndex     : ['responsive', 'hover', 'focus'],
  },
})

