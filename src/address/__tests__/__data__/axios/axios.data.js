const mockHTTPGetAddressByZipcode = {
  cep: "14403-734",
  logradouro: "Rua João Maurício de Souza",
  complemento: "",
  bairro: "Jardim Samello Woods",
  localidade: "Franca",
  uf: "SP",
  ibge: "3516200",
  gia: "3104",
  ddd: "16",
  siafi: "6425"
}

const mockHTTPGetAddressWithError = {
  erro: true
}

module.exports = {
  mockHTTPGetAddressByZipcode,
  mockHTTPGetAddressWithError
}