const addressResponse = (address) => {
  return {
    zipcode: address.cep,
    street: address.logradouro,
    neighborhood: address.bairro,
    city: address.localidade,
    uf: address.uf
  }
}

module.exports = {
  addressResponse
}