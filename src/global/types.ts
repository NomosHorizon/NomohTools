declare global {
    interface String {
      /**
       * Converte a primeira letra de uma string para maiuscula e
       * todas as outras letras para minuscula.
       *
       * @returns {string}
       */
      capitalizeFirstLetter(): string; // PrimeiraLetraMaiuscula
  
      /**
       * Verifica se a string atual  nula ou vazia.
       *
       * @returns {boolean} true se a string for nula ou vazia, false caso contr rio.
       */
      isNullOrEmpty(): boolean; // StringIsNullOrEmpty
  
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
      format(...args: any[]): string; // StringFormat
  
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
      removeSpaces(): string; // RemoverEspacos
  
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
      countWords(): number; // ContarPalavras
  
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
      reverse(): string; // Reverter
  
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
      replaceFirstOccurrence(search: string, replace: string): string; // SubstituirPrimeiraOcorrencia
  
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
      capitalizeWords(): string; // PalavrasMaiusculas
  
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
      truncate(limit: number): string; // Truncar
  
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
      removeAccents(): string; // RemoverAcentos
    }
  }
  // Isso é necessário para transformar este módulo em uma extensão global
  export {}; 