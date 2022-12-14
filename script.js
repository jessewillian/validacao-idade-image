function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const anoNasc = document.querySelector('#ano_nasc');
    const resultadoNasc = document.querySelector('.resultado-idade');

    if (anoNasc.value.length == 0 || anoNasc.value > ano) {
        window.alert('Error. Tente novamente, por favor.');
    } else {
        const sexoPessoa = document.getElementsByName('sexo_p');
        let idade = ano - Number(anoNasc.value);
        let genero = '';
        const img = document.createElement('img');
        img.setAttribute('class', 'foto');

        if (sexoPessoa[0].checked) {
            genero = 'Homem';
            document.body.style.backgroundColor = 'rgb(70, 142, 236)';
            if (idade >= 0 && idade < 13) {
                // Uma criança
                img.setAttribute('src', 'img/crianca-menino.jpg');
            } else if (idade < 24) {
                // Um jovem
                img.setAttribute('src', 'img/jovem-homem.jpg');
            } else if (idade < 60) {
                // Um adulto
                img.setAttribute('src', 'img/adulto-homem.jpg');
            } else {
                // Um idoso
                img.setAttribute('src', 'img/idoso-homem.jpg');
            }

        } else if (sexoPessoa[1].checked) {
            genero = 'Mulher';
            document.body.style.backgroundColor = 'rgb(255, 203, 219)';
            if (idade >= 0 && idade < 13) {
                // Uma criança
                img.setAttribute('src', 'img/crianca-menina.jpg');
            } else if (idade < 24) {
                // Um jovem
                img.setAttribute('src', 'img/jovem-mulher.jpg');
            } else if (idade < 60) {
                // Um adulto
                img.setAttribute('src', 'img/adulto-mulher.jpg');
            } else {
                // Um idoso
                img.setAttribute('src', 'img/idoso-mulher.jpg');
            }
        }
        resultadoNasc.style.textAlign = 'Center';
        resultadoNasc.innerHTML = `É ${genero} e está com ${idade} anos.`;
        img.style.borderRadius = '50%';
        img.style.marginTop = '15px';
        resultadoNasc.appendChild(img);
    }

}