class InputNotaView extends View {

    template(model) {

        return `
        <form class="notas-form" onsubmit="notasController.calculaNota(event)">
            <div class="campo-nota1 form-group">
                <label for="peso1">Peso</label>
                <input id="peso-nota1" class="peso form-control" type="number" value="4" disabled>

                <label for="nota1">Nota</label>
                <input id="nota1" class="nota form-control" type="number" step="0.1" min="0" max="10" required autofocus>
            </div>
            <div class="campo-nota2">
                <label for="peso2">Peso</label>
                <input id="peso-nota2" class="peso form-control" type="number" value="6" disabled>

                <label for="nota2">Nota</label>
                <input id="nota2" class="nota form-control" type="number" step="0.1" min="0" max="10">
            </div>
            <div class="bnt-calcula-nota">
                <button class="btn btn-primary">Calcular</button>
            </div>                
        </form>
        `;
    }

}