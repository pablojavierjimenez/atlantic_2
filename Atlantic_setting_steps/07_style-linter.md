# How Setting Stylelint as CSS/SASS Linter

## Nota

- [Stylelint Documentation](https://stylelint.io/)
- Here you can find the [Stylelint configuration Tutorial](https://dev.to/this-is-learning/incremental-stylesheet-linting-with-stylelint-and-the-nx-toolchain-3f5g)

- [stylelint-order Documentation](https://github.com/hudochenkov/stylelint-order)
- [stylelint-config-sass-guidelines Documentation](hhttps://github.com/bjankord/stylelint-config-sass-guidelines#stylelint-config-sass-guidelines)
- [stylelint-config-idiomatic-order Documentation](https://github.com/ream88/stylelint-config-idiomatic-order#stylelint--idiomatic-css--%EF%B8%8F)
- [stylelint-config-rational-order Documentation](https://github.com/constverum/stylelint-config-rational-order#stylelint-config-rational-order)

---

## Install

- **Step 1: Install Stylelint dependencies**

  ```bash
  :~$ npm install --save-dev stylelint stylelint-config-standard stylelint-order stylelint-config-sass-guidelines
  # I prefer use idiomatic and alphabetic order,
  # but you can choose the rational order as you wish
  :~$ npm install --save-dev stylelint-config-idiomatic-order
  :~$ npm install --save-dev stylelint-config-rational-order
  ```

- **Step 2: Run Stylelint**

  ```JSON
  {
    "extends": [
      "stylelint-config-standard",
      "stylelint-config-sass-guidelines",
      "stylelint-config-idiomatic-order"
    ],
    "rules": {
      "at-rule-no-unknown": null,
      "scss/at-rule-no-unknown": true,
      "order/order": [
        "custom-properties",
        "declarations"
      ],
      "order/properties-order": null
    }
  }
  ```

---
