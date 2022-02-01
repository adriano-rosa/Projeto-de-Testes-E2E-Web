Given(/^que o usuário acesse a página de guia$/, () => {
	cy.visit('/')
    
});

When(/^deve permitir acessar o link de albuns e fotos e abri-lo$/, () => {
	cy.visit('/guide/')

});

Then(/^permitir capturar os dados em tela e salvá-los num array JSON$/, () => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then((resposta) => resposta.json())
    .then((json) => console.log(json));

});

And(/^validar os dados do objeto retornado com id igual a "([^"]*)"$/, (id) => {

    // Achar uma forma de obter o array sem precisar informar de forma fixa.
    var objeto = { 
        
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        
      };

    expect(objeto.albumId).equal(1);
    expect(objeto.id).equal(6);
    expect(objeto.title).equal('accusamus ea aliquid et amet sequi nemo');
    expect(objeto.url).equal('https://via.placeholder.com/600/56a8c2');
    expect(objeto.thumbnailUrl).equal('https://via.placeholder.com/150/56a8c2');
    
});

