class ResultadoView extends View {

    template(model) {

        return `
        <div class="row justify-content-md-center">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title nota-mensagem">${model.mensagem}</h5>
                        <p class="card-text nota-result">${model.nota}</p>
                        <button class="btn btn-primary" onclick="notasController.inputNotaView.update()">Voltar</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }    
}