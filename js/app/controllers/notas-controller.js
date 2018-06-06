class NotasController {
    constructor() {
        this.campoPesoNota1 = document.querySelector('#peso-nota1')
        this.campoNota1 = document.querySelector('#nota1');

        this.campoPesoNota2 = document.querySelector('#peso-nota2')
        this.campoNota2 = document.querySelector('#nota2');

        let view = document.querySelector('.view')
        this.inputNotaView = new InputNotaView(view);
        this.resultadoView = new ResultadoView(view);
    }

    calculaNota() {
        let nota1 = {
            peso: this.campoPesoNota1.value,
            nota: this.campoNota1.value
        }
        let nota2 = {
            peso: this.campoPesoNota2.value,
            nota: this.campoNota2.value
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