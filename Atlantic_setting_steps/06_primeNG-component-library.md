# How Setting PrimeNG as a component library

**[⬅️ back to index](./00_index.md)**

## \*IMPORTANT

- _I use this tutorial to set up again_ [_*LINK HERE*_](https://www.digitalocean.com/community/tutorials/angular-primeng)

### Nota

- [PrimeNG Documentation](https://primefaces.org/primeng/showcase/#/setup)
- Here you can find the [PrimeNG -Video tutorialsa](https://www.youtube.com/channel/UCTgmp69aBOlLnPEqlUyetWw/videos)

---

## Installation

- run this command to download and install Prime NG

  ```bash
  :~$ npm install primeng --save
  :~$ npm install primeicons --save
  ```

- set this lines onto stylesection in youtr `angular.json` file.

  ```JSON
  {
  ...
   "styles": [
      "src/styles.scss",
      "node_modules/primeicons/primeicons.css",
      "node_modules/primeng/resources/themes/saga-blue/theme.css",
      "node_modules/primeng/resources/primeng.min.css"
    ],
  ...
  }
  ```
