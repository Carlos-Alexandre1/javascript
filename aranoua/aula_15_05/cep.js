// API CEP
// URL da API
const apiUrl = 'https://viacep.com.br/ws/';
function consultarCEP(cep) {
    fetch(`${apiUrl}${cep}/json/`)
    .then(response =>  {
        if (!response.ok) {
            throw new Error('Erro ao consutar o CEP');
        }
        return response.json();
    })
    .then (data => {
        console.log('CEP:', data.cep);
        console.log('Logradouro:', data.logradouro);
        console.log('Complemento:', data.complemento);
        console.log('Bairro:', data.bairro);
        console.log('Cidade:', data.localidade);
        console.log('Estado:', data.uf);
        console.log('Ddd:', data.ddd);
    })
    .catch(error => {
        console.error('Erro', error);
    });
}
consultarCEP('69046790');