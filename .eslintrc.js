{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "react-app"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
  "rules": {
    // "react/react-in-jsx-scope": "off",
    // "camelcase": "error",
    // "spaced-comment": "error",
    // "no-duplicate-imports": "error"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
