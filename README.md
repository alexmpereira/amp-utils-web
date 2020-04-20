# amp-utils-web
My package of useful functions for web applications on a daily basis

#### List of useful functions

- ListEstados
- formatCep
- isMobile
- formatCnpjCpf
- removeFormatCnpjCpf
- readCookie
- setCookie
- deleteCookie
- validateCpf
- validateCnpj
- validateCnpjCpf

#### How to use

Example:
```javascript
  const { formatCep, formatCnpjCpf } = require('amp-utils-web');

  console.log(formatCep(00000000));
  console.log(formatCnpjCpf('10238580024'));
```

In your project always keep updated by typing _npm update_