class NotasController {
    constructor() {
        let view = document.querySelector('.view')
        this.inputNotaView = new InputNotaView(view);
        this.resultadoView = new ResultadoView(view);

    }

    calculaNota(event) {
        event.preventDefault();
        let $ = document.querySelector.bind(document);

        let nota1 = {
            peso: $('#peso-nota1').value / 10,
            nota: $('#nota1').value
        }

        let nota2 = {
            peso: $('#peso-nota2').value / 10,
            nota: $('#nota2').value
        }

        let result = this._calculaMedia(nota1, nota2);
        this.resultadoView.update(result);
    }

    _calculaMedia(nota1, nota2) {
        var resultado = {};

        if (nota2.nota.length == 0) {
            resultado = this._calculaNotaNecessaria(nota1);
        } else {
            let nota = ((nota1.nota * nota1.peso) + (nota2.nota * nota2.peso));

            resultado = {
                nota: nota.toPrecision(3),
                mensagem: 'Sua Nota é'
            }
        }

        return resultado;
    }

    _calculaNotaNecessaria(nota1) {
        let media = 6;
        let nota = (media - (nota1.nota * nota1.peso)) / (1 - nota1.peso);

        let resultado = {
            nota: nota.toPrecision(3),
            mensagem: 'Nota necessária para ser aprovado com média ' + media
        }

        return resultado;
    }
}