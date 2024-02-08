document.getElementById('preencher').addEventListener('click', function(){
    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
        .then(response => response.json())
        .then(data =>) {
            if(data.erro)
            {
                document.getElementById('endereco').textContent = 'CEP não encontrado'
            }
            else {
                const endereco = `${data.logradouro}, ${data.bairro}`
                document.getElementById('endereco').textContent = endereco
            }
        }
        .catch(error =>) {
            document.getElementById('endereco').textContent = "Erro ao buscar o CEP"
        }
})