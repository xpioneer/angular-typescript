// tailwind.config.js
module.exports = {
  mode: 'jit',
  // purge: ['./src/**/*.{html,js}'], // 用于清除未使用的 CSS
  content: [
    // './src/**/*.{html,js,ts,tsx}',
    './src/app/doubleball/doubleballlist/doubleballlist.html'
  ],
  darkMode: false, // 可以设置为 'media' 或 'class' 来启用暗模式
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
