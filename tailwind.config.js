const { spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      spacing: {
        gutter: spacing[6]
      }
    },
    colors: {
      primary: '#321E41',
      secondary: '#FF3464',
      white: '#fff',
      'white-75': 'rgba(255,255,255,0.75)',
      gray: {
        '100': '#F5F4F6',
        '500': '#6D6E71',
        '900': '#29292A',
      }
    }
  }
}
