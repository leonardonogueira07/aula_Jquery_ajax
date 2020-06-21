function consultaCep(){
	$(".progresso").show();
	var cep = document.getElementById("cep").value;
	var url = "https://viacep.com.br/ws/" + cep + "/json/";
	console.log(url);
	$.ajax({
		url: url,
		type: "get",
		success: function(response){
			console.log(response);
			$("#logradouro").html(response.logradouro);
			$("#bairro").html(response.bairro);
			$("#localidade").html(response.localidade);
			$("#uf").html(response.uf);
			$("#titulo_cep").html("CEP " + response.cep);
			$(".cep").show();
			$(".progresso").hide();


			/*$("#logradouro").html(response.logradouro);
			$("#bairro").html(response.bairro);
			$("#localidade").html(response.localidade);
			$("#uf").html(response.uf);*/

			// MESMO RESULTADO POR EM MAIS COMPLEXO 

			/*document.getElementById("Logradouro").innerHTML = response.logradouro;
			document.getElementById("Bairro").innerHTML = response.bairro;
			document.getElementById("Localidade").innerHTML = response.localidade;
			document.getElementById("uf").innerHTML = response.uf;*/
		}
	})
}


window.onload = function(){
	$(".cep").hide();
	$(".progresso").hide();
};