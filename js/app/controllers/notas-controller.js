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
            peso: $('#peso-nota1').value,
            nota: $('#nota1').value
        }
        let nota2 = {
            peso: $('#peso-nota2').value,
            nota: $('#peso-nota2').value
        }
        console.log(this._calculaMedia(nota1, nota2));
    }

    _calculaMedia(nota1, nota2) {
        var resultado = 0;

        if (nota2.nota.length == 0) {
            resultado = this._CalculaNotaNecessaria(nota1.nota);
        } else {
            resultado = ((nota1.nota * nota1.peso) + (nota2.nota * nota2.peso)) / 10;
        }

        return resultado.toPrecision(3);
    }

    _CalculaNotaNecessaria(nota) {
        return (6 - (nota * 0.4)) / 0.6;
    }
}