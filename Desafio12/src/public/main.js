const socket = io.connect()

const renderProducts = data => {
    const prodContainer = document.getElementById('productos')
    if(data.length){
        const bodyTable = data.map(p => (
            `<tr>
                <td>${p.title}</th>
                <td>${p.price}</td>
                <td><img src=${p.thumbnail} class="img-thumbnail rounded"></td>
            </tr>`
        )).join(' ')

        prodContainer.innerHTML = `
        <table class="table table-light table-striped table-borderless table-hover">
            <thead>
                <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Imagen</th>
                </tr>productos
            </thead>
            <tbody>
                ${bodyTable}
            </tbody>
        </table>`
    }
    else{
        prodContainer.innerHTML = '<div class="alert alert-info" role="alert">No hay productos dados de alta</div>'
    }
}

socket.on('productos', productos => { renderProducts(productos) })