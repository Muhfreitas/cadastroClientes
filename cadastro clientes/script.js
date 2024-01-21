document.addEventListener('DOMContentLoaded', function () {
    const clienteList = document.getElementById('cliente-list');
    const errorMessage = document.getElementById('error-message');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');

    const clientes = [];

    function renderClientes() {
        clienteList.innerHTML = '';
        clientes.forEach(cliente => {
            const li = document.createElement('li');
            li.textContent = `${cliente.nome} - ${cliente.email} - ${cliente.telefone}`;
            clienteList.appendChild(li);
        });
    }

    function cadastrarCliente() {
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const telefone = telefoneInput.value.trim();

        if (!nome || !email || !telefone) {
            errorMessage.textContent = 'Por favor, preencha todos os campos.';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.textContent = 'Formato de e-mail inválido.';
            return;
        }

        const telefoneRegex = /^[0-9-]+$/;
        if (!telefoneRegex.test(telefone)) {
            errorMessage.textContent = 'Formato de telefone inválido.';
            return;
        }


        const novoCliente = { nome, email, telefone };
        clientes.push(novoCliente);

        nomeInput.value = '';
        emailInput.value = '';
        telefoneInput.value = '';
        errorMessage.textContent = '';


        renderClientes();
    }

    renderClientes();


    window.cadastrarCliente = cadastrarCliente;
});


