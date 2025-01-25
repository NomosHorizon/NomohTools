export class MaskTool {
    /**
     * Remove todos os caracteres que não são dígitos.
     */
    public static removerMascara(valor: string): string {
      return valor.replace(/\D/g, "");
    }
  
    /**
     * Aplica máscara de CPF (000.000.000-00).
     */
    public static aplicarMascaraCPF(valor: string): string {
      const numeros = this.removerMascara(valor);
      return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
  
    /**
     * Aplica máscara de CNPJ (00.000.000/0000-00).
     */
    public static aplicarMascaraCNPJ(valor: string): string {
      const numeros = this.removerMascara(valor);
      return numeros.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }
  
    /**
     * Aplica máscara de CEP (00000-000).
     */
    public static aplicarMascaraCEP(valor: string): string {
      const numeros = this.removerMascara(valor);
      return numeros.replace(/(\d{5})(\d{3})/, "$1-$2");
    }
  
    /**
     * Aplica máscara de Telefone (fixo e celular).
     * Exemplos:
     * - Fixo: (00) 0000-0000
     * - Celular: (00) 00000-0000
     */
    public static aplicarMascaraTelefone(valor: string): string {
      const numeros = this.removerMascara(valor);
      if (numeros.length === 10) {
        return numeros.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
      }
      if (numeros.length === 11) {
        return numeros.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
      }
      return valor; // Retorna o valor original se não tiver 10 ou 11 dígitos
    }
  
    /**
     * Aplica máscara de valor monetário (R$ 1.234,56).
     */
    public static aplicarMascaraMonetaria(valor: string | number): string {
      const numero = typeof valor === "string" ? parseFloat(this.removerMascara(valor)) : valor;
      return numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
  }
  