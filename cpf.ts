export default class CPF {
  isValidCPF(cpf: string): boolean {
    const fcpf: string = cpf.replace(/\.|-|[A-Z][a-z]/g, "");
    return fcpf.length == 11;
  }

  formatCPF(cpf: string): string {
    let fmt = cpf.replace(/\.|-/g, "");
    if (cpf.length == 11) {
      fmt = cpf.split(/(...)/).filter((ex) => ex.length > 2).join(".") + "-" + cpf.slice(-2);
    }
    return fmt;
  }
}