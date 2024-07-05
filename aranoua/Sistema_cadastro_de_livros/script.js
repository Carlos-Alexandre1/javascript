//Aguada o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    //Recupera a lista de livros do localStorage, ou inicializa uma lista vazia se não houver dados
    let livros = JSON.parse(localStorage.getItem('livros')) || [];

    //Função para salvar a lista de livros no localStorage
    function salvarLivros() {
        localStorage.setItem('livros', JSON.stringify(livros));
    }

    //Função para exibir um formulário específico baseado no ID fornecido
    function showForm(formId) {
        //Seleciona todos os formulários
        const forms = document.querySelectorAll('.form-container');
        //Esconde todos os formulários
        forms.forEach(form => form.style.display = 'none');
        //Mostra o formulário específico baseado no ID
        const formToShow = document.getElementById(`form-${formId}`);
        if (formToShow) {
            formToShow.style.display = 'block';
        }
        //Esconde o container da lista de livros 
        document.getElementById('list-container').style.display = 'none';

        //Se o formulário for o de apagar, exibe os livros de apagar
        if (formId === 'apagar') {
            exibirLivrosParaApagar();
        }
    }

    //Função para cadastrar um livro
    function cadastrarLivro() {
        //Obtém os valores dos campos de entrada do formulário
        const title = document.getElementById('titulo').value;
        const author = document.getElementById('autor').value;
        const capa = document.getElementById('capa').files[0];

        // Verifica se o campo título está preenchido
        if (title) {
            //Se houver uma capa, lê a imagem
            if (capa) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    //Adiciona o livro com a imagem da capa à lista de livros
                    livros.push({ title, author, capa: e.target.result });
                    salvarLivros();
                    alert('Livro cadastrado com sucesso!')
                    //Limpa os campos do formulário
                    document.gerElementById('titulo').value = '';
                    document.getElementById('autor').value = '';
                    document.getElementById('capa').value = '';
                };
                reader.readAsDataURL(capa);
            } else {
                //Adiciona o livro sem capa à lista de livros 
                livros.push({ title, author, capa: null });
                salvarLivros();
                alert('Livro cadastrado com sucesso!');
                //Limpa os campos do formulário 
                document.getElementById('titulo').value = '';
                document.getElementById('autor').value = '';
            }     
        } else {
            alert('Por favor, preencha o título do livro.')
        }
    }
    //Adiciona evenntos aos botões do menu
    document.getElementById('btn-cadastrar').addEventListener('click', () => showForm('cadastrar'));
    document.getElementById('btn-consultar').addEventListener('click', () => showForm('consultar'));

    //Recarrega a página ao clicar em "Listar Livros" para exibir a lista de livros
    document.getElementById('btn-listar').addEventListener('click', () => {
        localStorage.setItem('listBooks', 'true');
        location.reload();
    });
    document.getElementById('btn-apagar').addEventListener('click', () => showForm('apagar'));

    //Adiciona eventos aos botões de submissão do formulário
    document.getElementById('btn-submit-cadastrar').addEventListener('click', cadastrarLivro);
    document.getElementById('btn-submit-consultar').addEventListener('click', consultarLivro);
    document.getElementById('btn-submit-apagar').addEventListener('click', apagarLivros);

    //Verifica se a página foi recarregada para listar os livros
    if (localStorage.getItem('listBooks') === 'true') {
        showBooks();
        localStorage.removeItem('listBooks');
    }
});//fim do JavaScript