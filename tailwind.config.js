module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '1': '1', '2': '2', '3': '3', '4': '4', '5': '5',
        'auto': 'auto'
      },
      fontSize: {
        'xxs': '.55rem',
      },
      maxHeight:  {
        'vh2.5/10': '25vh',
        'vh5/10': '50vh',
        'vh7/10': '70vh',
        'vh7.5/10': '75vh',
        'vh8/10': '80vh',
        'vh8.5/10': '85vh',
        'vh9/10': '90vh',
        'vhfull': '100vh',
      },
      minHeight: {
        '50px': '50px',
      },
      width:  {
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
