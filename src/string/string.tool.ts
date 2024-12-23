/**
 * Converte a primeira letra de uma string para maiuscula e
 * todas as outras letras para minuscula.
 *
 * @returns {string}
 */
String.prototype.capitalizeFirstLetter = function (): string {
  if (this.length === 0) {
    return this as string;
  }

  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

/**
 * Verifica se a string atual  nula ou vazia.
 *
 * @returns {boolean} true se a string for nula ou vazia, false caso contr rio.
 */
String.prototype.isNullOrEmpty = function (): boolean {
  var str = this as string;
  return str === null || str === undefined || str.trim() === "";
};

/**
 * Formata a string atual com os argumentos informados.
 *
 * @param {...any[]} args - Argumentos a serem utilizados na formata o.
 * @returns {string} A string formatada.
 *
 * @example
 * var str = "Ol  {0}, seja bem-vindo ao {1}!";
 * var formatted = str.StringFormat("Jo o", "NomohTools");
 * console.log(formatted); // "Ol  Jo o, seja bem-vindo ao NomohTools!"
 */
String.prototype.format = function (...args: any[]): string {
  return this.replace(/{(\d+)}/g, (match, index) => args[index] || "");
};

/**
 * Remove acentos da string atual.
 *
 * @returns {string} A string sem acentos.
 *
 * @example
 * var str = "Olá, como vai você?";
 * var semAcentos = str.RemoverAcentos();
 * console.log(semAcentos); // "Ola, como vai voce?"
 */

String.prototype.removeAccents = function (): string {
  return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

/**
 * Trunca a string atual para um comprimento especificado e adiciona 
 * reticências ("...") no final, se necessário.
 *
 * @param {number} limite - O comprimento máximo permitido para a string.
 * @returns {string} A string truncada com reticências, se necessário.
 *
 * @example
 * var str = "Este é um exemplo de string muito longa";
 * var truncada = str.Truncar(10);
 * console.log(truncada); // "Este é um..."
 */

String.prototype.truncate = function (limite: number): string {
  if (this.length <= limite) {
    return this as string;
  }
  return this.slice(0, limite) + "...";
};

/**
 * Converte a primeira letra de cada palavra da string atual para mai sculo.
 *
 * @returns {string} A string com as primeiras letras das palavras em mai sculo.
 *
 * @example
 * var str = "este   um exemplo de string";
 * var maiusculas = str.PalavrasMaiusculas();
 * console.log(maiusculas); // "Este   Um Exemplo De String"
 */
String.prototype.capitalizeWords = function (): string {
  return this.replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Substitui a primeira ocorrência de uma string por outra.
 *
 * @param {string} busca - A string a ser substitu da.
 * @param {string} substituto - A string que substitui a primeira ocorr ncia.
 * @returns {string} A string com a primeira ocorr ncia substitu da.
 *
 * @example
 * var str = "Este   um exemplo de string";
 * var substituida = str.SubstituirPrimeiraOcorrencia("exemplo", "teste");
 * console.log(substituida); // "Este   um teste de string"
 */
String.prototype.replaceFirstOccurrence = function (
  busca: string,
  substituto: string
): string {
  return this.replace(busca, substituto);
};

/**
 * Reverte a string atual.
 *
 * @returns {string} A string invertida.
 *
 * @example
 * var str = "NomohTools";
 * var invertida = str.Reverter();
 * console.log(invertida); // "slooThomoN"
 */

String.prototype.reverse = function (): string {
  return this.split("").reverse().join("");
};

/**
 * Conta o número de palavras na string atual.
 *
 * @returns {number} O número de palavras na string.
 *
 * @example
 * var str = "Este é um exemplo de string";
 * var numPalavras = str.ContarPalavras();
 * console.log(numPalavras); // 5
 */

String.prototype.countWords = function (): number {
  return this.trim().split(/\s+/).length;
};

/**
 * Remove todos os espaços em branco da string atual.
 *
 * @returns {string} A string sem espaços.
 *
 * @example
 * var str = "Este   é  um  exemplo  de  string";
 * var semEspacos = str.RemoverEspacos();
 * console.log(semEspacos); // "Esteéumexemplodestring"
 */

String.prototype.removeSpaces = function (): string {
  return this.replace(/\s+/g, "");
};
