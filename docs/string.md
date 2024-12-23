# Documentação - Extensões de String do NomohTools 🚀

## Introdução
Este módulo fornece extensões úteis para a interface `String` em TypeScript, adicionando funcionalidades comuns e poderosas para manipulação de strings.

---

## Métodos Disponíveis

### 1. `capitalizeFirstLetter()` ✨
**Descrição:** Converte a primeira letra de uma string para maiúscula e todas as outras letras para minúscula.

**Retorno:**
- `string`

---

### 2. `isNullOrEmpty()` ❓
**Descrição:** Verifica se a string atual é nula ou vazia.

**Retorno:**
- `boolean`: Retorna `true` se a string for nula ou vazia, `false` caso contrário.

---

### 3. `format(...args: any[])`
**Descrição:** Formata a string atual com os argumentos fornecidos.

**Parâmetros:**
- `...args: any[]`: Argumentos para a formatação.

**Retorno:**
- `string`: A string formatada.

**Exemplo:**
```typescript
var str = "Olá {0}, seja bem-vindo ao {1}!";
var formatted = str.format("João", "NomohTools");
console.log(formatted); // "Olá João, seja bem-vindo ao NomohTools!"
```

---

### 4. `removeSpaces()` 🚮
**Descrição:** Remove todos os espaços em branco da string atual.

**Retorno:**
- `string`: A string sem espaços.

**Exemplo:**
```typescript
var str = "Este   é  um  exemplo  de  string";
var semEspacos = str.removeSpaces();
console.log(semEspacos); // "Esteéumexemplodestring"
```

---

### 5. `countWords()` 📊
**Descrição:** Conta o número de palavras na string atual.

**Retorno:**
- `number`: O número de palavras.

**Exemplo:**
```typescript
var str = "Este é um exemplo de string";
var numPalavras = str.countWords();
console.log(numPalavras); // 5
```

---

### 6. `reverse()` 🔄
**Descrição:** Reverte a string atual.

**Retorno:**
- `string`: A string invertida.

**Exemplo:**
```typescript
var str = "NomohTools";
var invertida = str.reverse();
console.log(invertida); // "slooThomoN"
```

---

### 7. `replaceFirstOccurrence(search: string, replace: string)` 🔁
**Descrição:** Substitui a primeira ocorrência de uma string por outra.

**Parâmetros:**
- `search: string`: A string a ser substituída.
- `replace: string`: A string que substituirá a primeira ocorrência.

**Retorno:**
- `string`: A string com a primeira ocorrência substituída.

**Exemplo:**
```typescript
var str = "Este é um exemplo de string";
var substituida = str.replaceFirstOccurrence("exemplo", "teste");
console.log(substituida); // "Este é um teste de string"
```

---

### 8. `capitalizeWords()` 🖊️
**Descrição:** Converte a primeira letra de cada palavra para maiúscula.

**Retorno:**
- `string`

**Exemplo:**
```typescript
var str = "este é um exemplo de string";
var maiusculas = str.capitalizeWords();
console.log(maiusculas); // "Este É Um Exemplo De String"
```

---

### 9. `truncate(limit: number)` ✂️
**Descrição:** Trunca a string atual para um comprimento especificado e adiciona reticências ("...").

**Parâmetros:**
- `limit: number`: O comprimento máximo permitido.

**Retorno:**
- `string`

**Exemplo:**
```typescript
var str = "Este é um exemplo de string muito longa";
var truncada = str.truncate(10);
console.log(truncada); // "Este é um..."
```

---

### 10. `removeAccents()` 🔤
**Descrição:** Remove acentos da string atual.

**Retorno:**
- `string`

**Exemplo:**
```typescript
var str = "Olá, como vai você?";
var semAcentos = str.removeAccents();
console.log(semAcentos); // "Ola, como vai voce?"
