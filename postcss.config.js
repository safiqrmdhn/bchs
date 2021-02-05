const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './themes/tailwind/layouts/**/*.html',
    './themes/tailwind/layouts/**/**/*.html',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
