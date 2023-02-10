import CPF from "./cpf";

describe('CPF validation', function () {
  test("Is CPF without dots valid", () => {
    const cpf = new CPF();
    expect(cpf.isValidCPF("13618365047")).toBe(true);
  });
  test("Is formated CPF valid", () => {
    const cpf = new CPF();
    expect(cpf.isValidCPF("136.183.650-47")).toBe(true);
  });
  test("Invalid CPF returns false", () => {
    const cpf = new CPF();
    expect(cpf.isValidCPF("1361865047")).toBe(false);
  });
});