import CPF from "./cpf";

test("Test if CPF is valid", () => {
  const cpf = new CPF();
  expect(cpf.isValidCPF("13618365047")).toBe(true);
});
