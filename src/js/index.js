const listaPokedevs = document.querySelectorAll(".pokedev");

listaPokedevs.forEach((pokedev) => {
	pokedev.addEventListener("click", () => {
		if (pokedev.classList.contains("ativo")) {
			return;
		}

		desativaPokedevAtivo();
		fechaCartaoAberto();
		ativaPokedev(pokedev);
		abreCartao(pokedev);
	});
});

function desativaPokedevAtivo() {
	const pokedevAtivo = document.querySelector(".ativo");
	pokedevAtivo.classList.remove("ativo");
}

function ativaPokedev(pokedev) {
	pokedev.classList.add("ativo");
}

function fechaCartaoAberto() {
	const cartaoAberto = document.querySelector(".aberto");
	cartaoAberto.classList.remove("aberto");
}

function abreCartao(pokedev) {
	const cartao = document.getElementById(`cartao-${pokedev.id}`);
	cartao.classList.add("aberto");
}
