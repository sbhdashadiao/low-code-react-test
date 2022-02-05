// const plugins = ["@babel/plugin-proposal-class-properties"]
// if (process.env.NODE_ENV === 'development') {
//   plugins.push("react-refresh/babel")
// }
module.exports = {
  sourceType: "unambiguous",
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          // 大于相关浏览器版本无需用到 preset-env
          edge: 17,
          firefox: 60,
          chrome: 67,
          safari: "11.1"
        },
      }
    ],
    '@babel/preset-typescript',
    "@babel/preset-react",
  ],
  plugins: [[
    "import",{
      "libraryName":"antd",
      "style":true
    }
  ]]
}
