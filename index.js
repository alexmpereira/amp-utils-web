/**
 * List states of brazil in json format
 */
exports.ListEstados = function (){
  const jsonEstados = {"AC": "Acre", "AL": "Alagoas", "AM": "Amazonas", "AP": "Amapá", "BA": "Bahia", "CE": "Ceará", "DF": "Distrito Federal", "ES": "Espírito Santo", "GO": "Goiás", "MA": "Maranhão", "MG": "Minas Gerais", "MS": "Mato Grosso do Sul", "MT": "Mato Grosso", "PA": "Pará", "PB": "Paraíba", "PE": "Pernambuco", "PI": "Piauí", "PR": "Paraná", "RJ": "Rio de Janeiro", "RN": "Rio Grande do Norte", "RO": "Rondônia", "RR": "Roraima", "RS": "Rio Grande do Sul", "SC": "Santa Catarina", "SE": "Sergipe", "SP": "São Paulo", "TO": "Tocantins"};
  return jsonEstados;
}

/**
 * Formats zip code
 */
exports.formatCep = function(value) {
	return String(value).replace(/\D/g, "").slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2");
}

/**
 * isMobile() : boolean
 * Tests the browser userAgent against a regular expression to see if the user is on a mobile device or not
 */
exports.isMobile = function(){
  return (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent));
}

/*
 * formatCnpjCpf(campoTexto: string) : string
 * Function to format CNPJCPF
 */
exports.formatCnpjCpf = function(campoTexto) {
  if (campoTexto.length <= 11) {
      campoTexto = maskCpf(campoTexto);
      return campoTexto;
  } else {
      campoTexto = maskCnpj(campoTexto);
      return campoTexto;
  }
}

function maskCpf(valor) {
  return String(valor).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
}
function maskCnpj(valor) {
  return String(valor).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
}

/**
 * Remove a CNPJ / CPF formatting
 */
exports.removeFormatCnpjCpf = function(campoTexto) {
  campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g, "");
}

/**
 * readCookie(name: string) : string | null
 * Function that takes the value of the cookie
 */
exports.readCookie = function(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ')
          c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0)
          return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
* setCookie(name: string, value: string, duration: int)
* Function that returns the value of the cookie
*/
exports.setCookie = function(name, value, expires) {
  if (typeof expires === 'string') {
      expires = new Date(getTimestampFuturaPorString(expires));
  } else if (typeof expires === 'undefined') {
      expires = new Date(getTimestampFuturaPorString('+1 day'));
  }

  var cookie = name + "=" + escape(value) + '; path=/' +
          ((expires) ? "; expires=" + expires.toUTCString() : "");
  document.cookie = cookie;
}

/**
* deleteCookie(name: string)
* Function that removes the value of the cookie
*/
exports.deleteCookie = function(name) {
  document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}
