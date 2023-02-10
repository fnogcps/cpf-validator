import CPF from "./cpf";

describe('CPF validation', function () {
  test("CPF w/o dots is valid", () => {
    const cpf = new CPF();
    expect(cpf.isValidCPF("13618365047")).toBe(true);
  });
  test("CPF w/dots is valid", () => {
    const cpf = new CPF();
    expect(cpf.isValidCPF("136.183.650-47")).toBe(true);
  });
  test("invalid CPF returns false", () => {
    const cpf = new CPF();
    expect(cpf.isValidCPF("1361865047")).toBe(false);
  });
  test("Invalid CPF returns false", () => {
    const cpf = new CPF();
    expect(cpf.isValidCPF("136183650447")).toBe(false);
  });
});

describe('Formatted output', function () {
  test("CPF w/o dots returns formatted CPF", () => {
    const cpf = new CPF();
    expect(cpf.formatCPF("13618365047")).toEqual("136.183.650-47");
  });
  test("Formatted CPF returns CPF w/o dots", () => {
    const cpf = new CPF();
    expect(cpf.formatCPF("136.183.650-47")).toEqual("13618365047");
  });
});
