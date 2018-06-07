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
            nota: $('#nota2').value
        }
        let result = this._calculaMedia(nota1, nota2);
        this.resultadoView.update(result);
    }

    _calculaMedia(nota1, nota2) {
        var resultado = {};
        
        let nota = ((nota1.nota * nota1.peso) + (nota2.nota * nota2.peso)) / 10;
        resultado =  {
            nota: nota.toPrecision(3),
            mensagem: 'Sua Nota é'
        }

        return resultado;
    }
}