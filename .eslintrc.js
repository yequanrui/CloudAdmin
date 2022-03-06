module.exports = {
  root: true,
  // 如果是SSR项目，则需要配置node:true
  env: {
    es6: true,
    browser: true,
    node: true
  },
  // 为什么是这样的parser配置？https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    // 让eslint可以规范vue文件
    "plugin:vue/base",
    // vue3的项目需要使用，如果是vue2项目，使用 plugin:vue/recommended
    "plugin:vue/vue3-recommended"
  ],
  plugins: [
    // 注意这里不能配置 html 选项，为什么？https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    "vue"
  ],
  // 配置自己的规则，覆盖上面继承的规则
  rules: {
    // 配置js的缩进为 2，switch case 语句的 case 也使用2个空格缩进
    indent: ["error", 2, { SwitchCase: 1 }],
    // 使用 eslint 检测 template里的代码，这里我配置 2 个空格缩进
    "vue/html-indent": ["error", 2]
  }
};
