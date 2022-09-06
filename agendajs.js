let listaTelefonica = [];
let id = 0;

function cadastra(){
    let contato = {
        id: id++, 
        nome: document.getElementById('inputNome').value, 
        numero:document.getElementById('inputNumero').value
    };

    listaTelefonica.push(contato);

    // for(var as in listaTelefonica){
    //     console.log("id = " + listaTelefonica[as].id);
    //     console.log("nome = " + listaTelefonica[as].nome);
    //     console.log("numero = " + listaTelefonica[as].numero);
    // }

    listaContatos(listaTelefonica);
    document.getElementById('inputNome').value = ''; 
    document.getElementById('inputNumero').value = ''; 
}

function listaContatos(listaTelefonica){
    const tabela = document.getElementById('tableData');
    let data = '';

    for(var dados in listaTelefonica){
        data += `<tr><th>${listaTelefonica[dados].id}</th><td>${listaTelefonica[dados].nome}</td><td>${listaTelefonica[dados].numero}</td><td>
        <button class="btnRemover" onclick="removeContato(${listaTelefonica[dados].id})">-</button></td></tr>`;
    }
    tabela.innerHTML = data;
}

function removeContato(idRemovido){
    console.log("id = " + idRemovido);
    var listaNova = listaTelefonica.filter((contato) => contato.id !== idRemovido);
    listaTelefonica = listaNova;
    listaContatos(listaTelefonica);
    for(var as in listaTelefonica){
        console.log("id = " + listaTelefonica[as].id);
        console.log("nome = " + listaTelefonica[as].nome);
        console.log("numero = " + listaTelefonica[as].numero);
    }
}

function procuraContato(){
    var listaProcurado = listaTelefonica.filter((contato) => contato.nome.includes(document.getElementById('searchInput').value));
    for(var as in listaProcurado){
        console.log("id = " + listaProcurado[as].id);
        console.log("nome = " + listaProcurado[as].nome);
        console.log("numero = " + listaProcurado[as].numero);
    }
    listaContatos(listaProcurado);
    (document.getElementById('searchInput').value = '')
}

