Feature: testeAutomacaoE2E

    Sendo um visitante do site Projeto de Testes E2E (Web)
    Quero poder acessar a sessão de albuns de fotos
    Para que possa capturar os dados exbidos e salvalos.

Scenario: Acessar sessão de albuns de fotos
    Given que o usuário acesse a página de guia
    When deve permitir acessar o link de albuns e fotos e abri-lo
    Then permitir capturar os dados em tela e salvá-los num array JSON
     And validar os dados do objeto retornado com id igual a "6"