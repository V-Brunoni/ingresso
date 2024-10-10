function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade <= 0) {
        alert('A quantidade inserida é 0 ou negativa. Favor verifique!');
        return;
    }

    switch (tipoIngresso.value) {
        case 'pista':
            if(quantidade > quantidadePista){
                alert('Quantidade informada está maior do que o disponível!');
            } else {
                quantidadePista = quantidadePista - quantidade;
                document.getElementById('qtd-pista').textContent = quantidadePista;
                alert('Compra realizada com sucesso!');
            }
            break;
        case 'superior':
            if(quantidade > quantidadeSuperior){
                alert('Quantidade informada está maior do que o disponível!');
            } else {
                quantidadeSuperior = quantidadeSuperior - quantidade;
                document.getElementById('qtd-superior').textContent = quantidadeSuperior;
                alert('Compra realizada com sucesso!');
            }
            break;
        default:
            if(quantidade > quantidadeInferior){
                alert('Quantidade informada está maior do que o disponível!');
            } else {
                quantidadeInferior = quantidadeInferior - quantidade;
                document.getElementById('qtd-inferior').textContent = quantidadeInferior;
                alert('Compra realizada com sucesso!');
            }
    }
}

//    if (tipoIngresso.value == 'pista') {
//         if(quantidade > quantidadePista){
//             alert('Quantidade informada acima do disponível!');
//         } else {
//             quantidadePista = quantidadePista - quantidade;
//             document.getElementById('qtd-pista').textContent = quantidadePista;
//             alert('Compra realizada com sucesso!');
            
//         }

//    } else if (tipoIngresso.value == 'superior') {
//         if(quantidade > quantidadeSuperior){
//             alert('Quantidade informada acima do disponível!');
//         } else {
//             quantidadeSuperior = quantidadeSuperior - quantidade;
//             document.getElementById('qtd-superior').textContent = quantidadeSuperior;
//              alert('Compra realizada com sucesso!');
        
//         }

//     } else {
//         if(quantidade > quantidadeInferior){
//             alert('Quantidade informada acima do disponível!');
//         } else {
//             quantidadeInferior = quantidadeInferior - quantidade;
//             document.getElementById('qtd-inferior').textContent = quantidadeInferior;
//              alert('Compra realizada com sucesso!');
        
//         }

//     }
