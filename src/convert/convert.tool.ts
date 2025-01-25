export class ConvertTool {
    /**
     * Converte uma string em Base64 para um ArrayBuffer.
     *
     * @param {string} base64 - A string em Base64 a ser convertida.
     * @returns {Uint8Array} O ArrayBuffer resultante.
     *
     * @example
     * const base64 = "SGVsbG8gV29ybGQh";
     * const arrayBuffer = ConvertTool.base64ToArrayBuffer(base64);
     * console.log(arrayBuffer); // Uint8Array [ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33 ]
     */
    public static base64ToArrayBuffer(base64: string): Uint8Array {
      const binaryString = atob(base64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
    }
  
    /**
     * Converte um ArrayBuffer para uma string em Base64.
     *
     * @param {Uint8Array} buffer - O ArrayBuffer a ser convertido.
     * @returns {string} A string em Base64 resultante.
     *
     * @example
     * const buffer = new Uint8Array([72, 101, 108, 108, 111]);
     * const base64 = ConvertTool.arrayBufferToBase64(buffer);
     * console.log(base64); // "SGVsbG8="
     */
    public static arrayBufferToBase64(buffer: Uint8Array): string {
      let binary = '';
      const len = buffer.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(buffer[i]);
      }
      return btoa(binary);
    }
  
    /**
     * Converte uma string para um ArrayBuffer.
     *
     * @param {string} str - A string a ser convertida.
     * @returns {Uint8Array} O ArrayBuffer resultante.
     *
     * @example
     * const str = "Hello";
     * const buffer = ConvertTool.stringToArrayBuffer(str);
     * console.log(buffer); // Uint8Array [ 72, 101, 108, 108, 111 ]
     */
    public static stringToArrayBuffer(str: string): Uint8Array {
      const encoder = new TextEncoder();
      return encoder.encode(str);
    }
  
    /**
     * Converte um ArrayBuffer para uma string.
     *
     * @param {Uint8Array} buffer - O ArrayBuffer a ser convertido.
     * @returns {string} A string resultante.
     *
     * @example
     * const buffer = new Uint8Array([72, 101, 108, 108, 111]);
     * const str = ConvertTool.arrayBufferToString(buffer);
     * console.log(str); // "Hello"
     */
    public static arrayBufferToString(buffer: Uint8Array): string {
      const decoder = new TextDecoder();
      return decoder.decode(buffer);
    }
  
    /**
     * Converte um objeto JSON para uma string.
     *
     * @param {object} json - O objeto JSON a ser convertido.
     * @returns {string} A string JSON resultante.
     *
     * @example
     * const obj = { name: "John", age: 30 };
     * const jsonString = ConvertTool.jsonToString(obj);
     * console.log(jsonString); // '{"name":"John","age":30}'
     */
    public static jsonToString(json: object): string {
      return JSON.stringify(json);
    }
  
    /**
     * Converte uma string JSON para um objeto.
     *
     * @param {string} str - A string JSON a ser convertida.
     * @returns {object} O objeto resultante.
     *
     * @example
     * const jsonString = '{"name":"John","age":30}';
     * const obj = ConvertTool.stringToJson(jsonString);
     * console.log(obj); // { name: "John", age: 30 }
     */
    public static stringToJson(str: string): object {
      return JSON.parse(str);
    }
  
    /**
     * Converte um número para uma string hexadecimal.
     *
     * @param {number} num - O número a ser convertido.
     * @returns {string} A string hexadecimal resultante.
     *
     * @example
     * const num = 255;
     * const hexString = ConvertTool.numberToHex(num);
     * console.log(hexString); // "ff"
     */
    public static numberToHex(num: number): string {
      return num.toString(16);
    }
  
    /**
     * Converte uma string hexadecimal para um número.
     *
     * @param {string} hex - A string hexadecimal a ser convertida.
     * @returns {number} O número resultante.
     *
     * @example
     * const hexString = "ff";
     * const num = ConvertTool.hexToNumber(hexString);
     * console.log(num); // 255
     */
    public static hexToNumber(hex: string): number {
      return parseInt(hex, 16);
    }
  }
  