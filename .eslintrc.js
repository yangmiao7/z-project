module.exports = {
  parser:  '@typescript-eslint/parser', //定义ESLint的解析器
  extends: [
    'plugin:react/recommended' ,       //用于检测tsx文件
    'plugin:@typescript-eslint/recommended',
    "standard",
    "standard-jsx"
  ],//定义文件继承的子规范
  plugins: ['@typescript-eslint', 'react-hooks'],//定义了该eslint文件所依赖的插件
  env:{                          //指定代码的运行环境
    node: true,
    browser: true,
  },
  rules: {
    indent: ['error', 2],
    'jsx-quotes': [2, 'prefer-single'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    '@typescript-eslint/no-var-requires': 0,
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  },
  settings: {             //自动发现React的版本，从而进行规范react代码
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  parserOptions: {        //指定ESLint可以解析JSX语法
    "ecmaVersion": 2019,
    "sourceType": 'module',
    "ecmaFeatures":{
      jsx:true
    }
  }
}
