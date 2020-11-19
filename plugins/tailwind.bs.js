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
  // obj[`outline-${name}`] = `0 0 0 3px rgba(${rgb}, 0.45)`

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
      // => @media (min-width: 1200px) { ... } // Bootstrap

      '2xl': '1536px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current    : 'currentColor',
        black      : '#000',
        white      : '#fff',

        'red': {
          // ...colors.red,
          DEFAULT  : '#f44336',
          '50'     : '#ffebee',
          '100'    : '#ffcdd2',
          '200'    : '#ef9a9a',
          '300'    : '#e57373',
          '400'    : '#ef5350',
          '500'    : '#f44336',
          '600'    : '#e53935',
          '700'    : '#d32f2f',
          '800'    : '#c62828',
          '900'    : '#b71c1c',
          // 'a100': '#ff8a80',
          // 'a200': '#ff5252',
          // 'a400': '#ff1744',
          // 'a700': '#d50000',
        },
        'pink': {
          // ...colors.pink,
          DEFAULT  : '#e91e63',
          '50'     : '#fce4ec',
          '100'    : '#f8bbd0',
          '200'    : '#f48fb1',
          '300'    : '#f06292',
          '400'    : '#ec407a',
          '500'    : '#e91e63',
          '600'    : '#d81b60',
          '700'    : '#c2185b',
          '800'    : '#ad1457',
          '900'    : '#880e4f',
          // 'a100': '#ff80ab',
          // 'a200': '#ff4081',
          // 'a400': '#f50057',
          // 'a700': '#c51162',
        },
        'purple': {
          // ...colors.purple,
          DEFAULT  : '#9c27b0',
          '50'     : '#f3e5f5',
          '100'    : '#e1bee7',
          '200'    : '#ce93d8',
          '300'    : '#ba68c8',
          '400'    : '#ab47bc',
          '500'    : '#9c27b0',
          '600'    : '#8e24aa',
          '700'    : '#7b1fa2',
          '800'    : '#6a1b9a',
          '900'    : '#4a148c',
          // 'a100': '#ea80fc',
          // 'a200': '#e040fb',
          // 'a400': '#d500f9',
          // 'a700': '#aa00ff',
        },
        'deep-purple': {
          DEFAULT  : '#673ab7',
          '50'     : '#ede7f6',
          '100'    : '#d1c4e9',
          '200'    : '#b39ddb',
          '300'    : '#9575cd',
          '400'    : '#7e57c2',
          '500'    : '#673ab7',
          '600'    : '#5e35b1',
          '700'    : '#512da8',
          '800'    : '#4527a0',
          '900'    : '#311b92',
          // 'a100': '#b388ff',
          // 'a200': '#7c4dff',
          // 'a400': '#651fff',
          // 'a700': '#6200ea',
        },
        'indigo': {
          // ...colors.indigo,
          DEFAULT  : '#3f51b5',
          '50'     : '#e8eaf6',
          '100'    : '#c5cae9',
          '200'    : '#9fa8da',
          '300'    : '#7986cb',
          '400'    : '#5c6bc0',
          '500'    : '#3f51b5',
          '600'    : '#3949ab',
          '700'    : '#303f9f',
          '800'    : '#283593',
          '900'    : '#1a237e',
          // 'a100': '#8c9eff',
          // 'a200': '#536dfe',
          // 'a400': '#3d5afe',
          // 'a700': '#304ffe',
        },
        'blue': {
          // ...colors.blue,
          DEFAULT  : '#2196f3',
          '50'     : '#e3f2fd',
          '100'    : '#bbdefb',
          '200'    : '#90caf9',
          '300'    : '#64b5f6',
          '400'    : '#42a5f5',
          '500'    : '#2196f3',
          '600'    : '#1e88e5',
          '700'    : '#1976d2',
          '800'    : '#1565c0',
          '900'    : '#0d47a1',
          // 'a100': '#82b1ff',
          // 'a200': '#448aff',
          // 'a400': '#2979ff',
          // 'a700': '#2962ff',
        },
        'light-blue': {
          DEFAULT  : '#03a9f4',
          '50'     : '#e1f5fe',
          '100'    : '#b3e5fc',
          '200'    : '#81d4fa',
          '300'    : '#4fc3f7',
          '400'    : '#29b6f6',
          '500'    : '#03a9f4',
          '600'    : '#039be5',
          '700'    : '#0288d1',
          '800'    : '#0277bd',
          '900'    : '#01579b',
          // 'a100': '#80d8ff',
          // 'a200': '#40c4ff',
          // 'a400': '#00b0ff',
          // 'a700': '#0091ea',
        },
        'cyan': {
          DEFAULT  : '#00BCD4',
          '50'     : '#E0F7FA',
          '100'    : '#B2EBF2',
          '200'    : '#80DEEA',
          '300'    : '#4DD0E1',
          '400'    : '#26C6DA',
          '500'    : '#00BCD4',
          '600'    : '#00ACC1',
          '700'    : '#0097A7',
          '800'    : '#00838F',
          '900'    : '#006064',
          // 'a100': '#84FFFF',
          // 'a200': '#18FFFF',
          // 'a400': '#00E5FF',
          // 'a700': '#00B8D4',
        },
        'teal': {
          // ...colors.teal,
          DEFAULT  : '#009688',
          '50'     : '#E0F2F1',
          '100'    : '#B2DFDB',
          '200'    : '#80CBC4',
          '300'    : '#4DB6AC',
          '400'    : '#26A69A',
          '500'    : '#009688',
          '600'    : '#00897B',
          '700'    : '#00796B',
          '800'    : '#00695C',
          '900'    : '#004D40',
          // 'a100': '#A7FFEB',
          // 'a200': '#64FFDA',
          // 'a400': '#1DE9B6',
          // 'a700': '#00BFA5',
        },
        'green': {
          // ...colors.green,
          DEFAULT  : '#4CAF50',
          '50'     : '#E8F5E9',
          '100'    : '#C8E6C9',
          '200'    : '#A5D6A7',
          '300'    : '#81C784',
          '400'    : '#66BB6A',
          '500'    : '#4CAF50',
          '600'    : '#43A047',
          '700'    : '#388E3C',
          '800'    : '#2E7D32',
          '900'    : '#1B5E20',
          // 'a100': '#B9F6CA',
          // 'a200': '#69F0AE',
          // 'a400': '#00E676',
          // 'a700': '#00C853',
        },
        'light-green': {
          DEFAULT  : '#8BC34A',
          '50'     : '#F1F8E9',
          '100'    : '#DCEDC8',
          '200'    : '#C5E1A5',
          '300'    : '#AED581',
          '400'    : '#9CCC65',
          '500'    : '#8BC34A',
          '600'    : '#7CB342',
          '700'    : '#689F38',
          '800'    : '#558B2F',
          '900'    : '#33691E',
          // 'a100': '#CCFF90',
          // 'a200': '#B2FF59',
          // 'a400': '#76FF03',
          // 'a700': '#64DD17',
        },
        'lime': {
          DEFAULT  : '#CDDC39',
          '50'     : '#F9FBE7',
          '100'    : '#F0F4C3',
          '200'    : '#E6EE9C',
          '300'    : '#DCE775',
          '400'    : '#D4E157',
          '500'    : '#CDDC39',
          '600'    : '#C0CA33',
          '700'    : '#AFB42B',
          '800'    : '#9E9D24',
          '900'    : '#827717',
          // 'a100': '#F4FF81',
          // 'a200': '#EEFF41',
          // 'a400': '#C6FF00',
          // 'a700': '#AEEA00',
        },
        'yellow': {
          // ...colors.yellow,
          DEFAULT  : '#FFEB3B',
          '50'     : '#FFFDE7',
          '100'    : '#FFF9C4',
          '200'    : '#FFF59D',
          '300'    : '#FFF176',
          '400'    : '#FFEE58',
          '500'    : '#FFEB3B',
          '600'    : '#FDD835',
          '700'    : '#FBC02D',
          '800'    : '#F9A825',
          '900'    : '#F57F17',
          // 'a100': '#FFFF8D',
          // 'a200': '#FFFF00',
          // 'a400': '#FFEA00',
          // 'a700': '#FFD600',
        },
        'amber': {
          DEFAULT  : '#FFC107',
          '50'     : '#FFF8E1',
          '100'    : '#FFECB3',
          '200'    : '#FFE082',
          '300'    : '#FFD54F',
          '400'    : '#FFCA28',
          '500'    : '#FFC107',
          '600'    : '#FFB300',
          '700'    : '#FFA000',
          '800'    : '#FF8F00',
          '900'    : '#FF6F00',
          // 'a100': '#FFE57F',
          // 'a200': '#FFD740',
          // 'a400': '#FFC400',
          // 'a700': '#FFAB00',
        },
        'orange': {
          // ...colors.orange,
          DEFAULT  : '#FF9800',
          '50'     : '#FFF3E0',
          '100'    : '#FFE0B2',
          '200'    : '#FFCC80',
          '300'    : '#FFB74D',
          '400'    : '#FFA726',
          '500'    : '#FF9800',
          '600'    : '#FB8C00',
          '700'    : '#F57C00',
          '800'    : '#EF6C00',
          '900'    : '#E65100',
          // 'a100': '#FFD180',
          // 'a200': '#FFAB40',
          // 'a400': '#FF9100',
          // 'a700': '#FF6D00',
        },
        'deep-orange': {
          DEFAULT  : '#FF5722',
          '50'     : '#FBE9E7',
          '100'    : '#FFCCBC',
          '200'    : '#FFAB91',
          '300'    : '#FF8A65',
          '400'    : '#FF7043',
          '500'    : '#FF5722',
          '600'    : '#F4511E',
          '700'    : '#E64A19',
          '800'    : '#D84315',
          '900'    : '#BF360C',
          // 'a100': '#FF9E80',
          // 'a200': '#FF6E40',
          // 'a400': '#FF3D00',
          // 'a700': '#DD2C00',
        },
        'brown': {
          DEFAULT  : '#795548',
          '50'     : '#EFEBE9',
          '100'    : '#D7CCC8',
          '200'    : '#BCAAA4',
          '300'    : '#A1887F',
          '400'    : '#8D6E63',
          '500'    : '#795548',
          '600'    : '#6D4C41',
          '700'    : '#5D4037',
          '800'    : '#4E342E',
          '900'    : '#3E2723',
        },
        'gray': {
          // ...colors.gray,
          DEFAULT  : '#9e9e9e',
          '50'     : '#fafafa',
          '100'    : '#f5f5f5',
          '200'    : '#eeeeee',
          '300'    : '#e0e0e0',
          '400'    : '#bdbdbd',
          '500'    : '#9e9e9e',
          '600'    : '#757575',
          '700'    : '#616161',
          '800'    : '#424242',
          '900'    : '#212121',
        },
        'blue-gray': {
          DEFAULT  : '#607d8b',
          '50'     : '#eceff1',
          '100'    : '#cfd8dc',
          '200'    : '#b0bec5',
          '300'    : '#90a4ae',
          '400'    : '#78909c',
          '500'    : '#607d8b',
          '600'    : '#546e7a',
          '700'    : '#455a64',
          '800'    : '#37474f',
          '900'    : '#263238',
        },

        'inheritColor'  : 'inherit',

        // Brand Colors
        'dark'          : '#343a40',
        'light'         : '#f8f9fa',
        'velvet'        : '#ad1457',
        'whiteSmoke'    : '#f5f5f5',

        // Social Colors
        'adn'           : '#d87a68',
        'bitbucket'     : '#205081',
        'dropbox'       : '#1087dd',
        'facebook'      : '#3b5998',
        'flickr'        : '#2ba9e1',
        'foursquare'    : '#f94877',
        'github'        : '#444444',
        'google'        : '#dd4b39',
        'instagram'     : '#3f729b',
        'linkedin'      : '#007bb6',
        'microsoft'     : '#2672ec',
        'odnoklassniki' : '#f4731c',
        'openid'        : '#f7931e',
        'pinterest'     : '#cb2027',
        'reddit'        : '#eff7ff',
        'soundcloud'    : '#ff5500',
        'tumblr'        : '#cb2027',
        'twitter'       : '#55acee',
        'vimeo'         : '#1ab7ea',
        'vk'            : '#587ea3',
        'yahoo'         : '#720e9e',
      },
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
      }),
      /*
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
      */
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
      inset: {
        // '1/2' : '50%',
        // 'full': '100%',
        '-9999px': '-9999px',
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

