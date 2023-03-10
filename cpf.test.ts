import CPF from "./cpf";
const cpf = new CPF();

describe('CPF validation', function () {
  test("CPF w/o dots is valid", () => {
    expect(cpf.isValidCPF("13618365047")).toBe(true);
  });
  test("CPF w/dots is valid", () => {
    expect(cpf.isValidCPF("136.183.650-47")).toBe(true);
  });
  test("Invalid CPF length returns false #1", () => {
    expect(cpf.isValidCPF("1361865047")).toBe(false);
  });
  test("Invalid CPF length returns false #2", () => {
    expect(cpf.isValidCPF("136183650447")).toBe(false);
  });
  test("CPF containing letters returns false #3", () => {
    expect(cpf.isValidCPF("1361836KZVa")).toBe(false);
  });
});

describe('Formatted output', function () {
  test("CPF w/o dots returns formatted CPF", () => {
    expect(cpf.formatCPF("13618365047")).toEqual("136.183.650-47");
  });
  test("Formatted CPF returns CPF w/o dots", () => {
    expect(cpf.formatCPF("136.183.650-47")).toEqual("13618365047");
  });
});
