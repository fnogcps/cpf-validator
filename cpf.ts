export default class CPF {
  isValidCPF(cpf: string): boolean {
    const fcpf: string = cpf.replace(/\.|-/g, "");
    return fcpf.length == 11;
  }
}