class ResultadoView extends View {

    template(model) {

        return `
        <div class="row">
            <div class="col s6 center offset-s3">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">${model.menssagem}</span>
                        <p id="nota-result" class="nota-result">${model.resultado}</p>
                    </div>
                    <div class="card-action">
                        <button class="btn">Voltar</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }    
}