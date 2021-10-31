// variáveis de confirmação de seleção;
let comidaSelecionada = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;

// variáveis para retornar o nome de cada item escolhido;
let tipoComida;
let tipoBebida;
let tipoSobremesa;

// valores de cada item selecionado e cálculo do valor total ao final da func finalizarPedido();
let valorComida = 0;
let valorBebida = 0;
let valorSobremesa = 0;

let valorTotal = 0;

function toggle1(comida) {
    const selecionado = document.querySelector(".borda1");
    const check = comida.querySelector(".checkmark");

    if (selecionado !== null) {
        const mark = selecionado.querySelector(".checkmark");
        selecionado.classList.remove("borda1");
        mark.classList.add("noDisplay");

        valorComida = 0;    //reseta o valor com a troca de itens;
    }
    comida.classList.toggle("borda1");
    check.classList.toggle("noDisplay");

    let valor = parseFloat(comida.querySelector(".valor").innerHTML.replace(",", "."));
    valorComida = valor;    //atribui o valor do item a uma varíavel para futuro cáculo de valores;

    tipoComida = comida.querySelector(".nome").innerHTML; // atribui o nome do item selecionado a uma variável;
    comidaSelecionada = true;   // confirmação da seleção de um item;

    finalizarPedido();
}


function toggle2(bebida) {
    const selecionado = document.querySelector(".borda2");
    const check = bebida.querySelector(".checkmark");

    if (selecionado !== null) {
        const mark = selecionado.querySelector(".checkmark");
        selecionado.classList.remove("borda2");
        mark.classList.add("noDisplay");

        valorBebida = 0;
    }
    bebida.classList.toggle("borda2");
    check.classList.toggle("noDisplay");

    let valor = parseFloat(bebida.querySelector(".valor").innerHTML.replace(",", "."));
    valorBebida = valor;

    tipoBebida = bebida.querySelector(".nome").innerHTML;
    bebidaSelecionada = true;

    finalizarPedido();
}


function toggle3(sobremesa) {
    const selecionado = document.querySelector(".borda3");
    const check = sobremesa.querySelector(".checkmark");

    if (selecionado !== null) {
        const mark = selecionado.querySelector(".checkmark");
        selecionado.classList.remove("borda3");
        mark.classList.add("noDisplay");

        valorSobremesa = 0;
    }
    sobremesa.classList.toggle("borda3");
    check.classList.toggle("noDisplay");

    let valor = parseFloat(sobremesa.querySelector(".valor").innerHTML.replace(",", "."));
    valorSobremesa = valor;

    tipoSobremesa = sobremesa.querySelector(".nome").innerHTML;
    sobremesaSelecionada = true;

    finalizarPedido();
}


function finalizarPedido() {
    const button = document.querySelector(".botao button");
    if (comidaSelecionada === true && bebidaSelecionada === true && sobremesaSelecionada === true) {
        button.classList.remove("disabled");
        button.classList.add("enabled");
        button.innerHTML = "Finalizar pedido";
    } else {
        button.classList.remove("enabled");
        button.classList.add("disabled");
    }
    valorTotal = valorComida + valorBebida + valorSobremesa;
}


function fechamentoWP() {
    let msg = String;

    let total = valorTotal.toFixed(2);

    if (comidaSelecionada === true && bebidaSelecionada === true && sobremesaSelecionada === true) {
        let name = prompt("Qual é o seu nome?");
        let address = prompt("Qual é o seu endereço?");

        msg = encodeURIComponent(
            `Olá, gostaria de fazer o pedido:\n- Prato: ${tipoComida}\n- Bebida: ${tipoBebida}\n- Sobremesa: ${tipoSobremesa}\nTotal: R$ ${total}
            \nNome: ${name}\nEndereço: ${address}`
        );
        window.open(` https://wa.me/+5547996988923?text=${msg}`);
    }
}