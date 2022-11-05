function createGame(player1,hour,player2){
  return`
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
      </li>
  `
}
let delay = -0.4;
function createCard(rodada,date,day,games){
  delay = delay + 0.4;
  return`
            <div class="card" style="animation-deley: ${delay}">
                <h2>${rodada} ${date}<span>${day}</span></h2>
                <ul>
                   ${games}
                </ul>
            </div>
  `
}
document.querySelector('#app').innerHTML=`
        <h1>Jogos do Grupo A</h1>
        <main id="cards">
            ${createCard("Primeira Rodada","20/11","Domingo",
              createGame("qatar","13:00","ecuador")  +
              createGame( "senegal","13:00","netherlands"))}
            ${createCard("Segunda Rodada","25/11","Sexta",
              createGame("qatar","10:00","senegal")+
              createGame("netherlands","13:00","ecuador"))}
            ${createCard("Terceira Rodada","29/11","Terça",
              createGame("netherlands","12:00","qatar")+
              createGame("ecuador","12:00","senegal"))}
        </main>
           <h1>Jogos do Grupo B</h1>
        <main id="cards">
            ${createCard("Primeira Rodada","21/11","Segunda",
              createGame("england","10:00","will")  +
              createGame( "united states","16:00","wales"))}
            ${createCard("Segunda Rodada","25/11","sexta",
              createGame("wales","07:00","will")+
              createGame("england","16:00","united states"))}
            ${createCard("Terceira Rodada","29/12","terça",
              createGame("will","16:00","united states")+
              createGame("wales","16:00","england"))}
        </main>
            <h1>Jogos do Grupo C</h1>
        <main id="cards">
              ${createCard("Primeira Rodada","22/11","terça",
                createGame("argentina","07:00","saudi arabia")  +
                createGame( "mexico","13:00","poland"))}
              ${createCard("Segunda Rodada","28/11","segunda",
                createGame("poland","07:00","saudi arabia")+
                createGame("argentina","13:00","mexico"))}
              ${createCard("Terceira Rodada","02/12","sexta",
                createGame("poland","16:00","argentina")+
                createGame("saudi arabia","16:00","mexico"))}
        </main>
            <h1>Jogos do Grupo D</h1>
        <main id="cards">
              ${createCard("Primeira Rodada","22/11","terça",
                createGame("denmark","10:00","tunisia")  +
                createGame( "france","16:00","australia"))}
              ${createCard("Segunda Rodada","26/11","sabado",
                createGame("tunisia","07:00","australia")+
                createGame("france","13:00","denmark"))}
              ${createCard("Terceira Rodada","30/11","quarta",
                createGame("tunisia","12:00","france")+
                createGame("australia","12:00","denmark"))}
        </main>
            <h1>Jogos do Grupo E</h1>
        <main id="cards">
              ${createCard("Primeira Rodada","23/11","quarta",
                createGame("germany","10:00","japan")  +
                createGame( "spain","13:00","costa rica"))}
              ${createCard("Segunda Rodada","27/11","domingo",
                createGame("japan","07:00","costa rica")+
                createGame("spain","16:00","germany"))}
              ${createCard("Terceira Rodada","01/12","quinta",
                createGame("japan","16:00","spain")+
                createGame("costa rica","16:00","germany"))}
        </main>
            <h1>Jogos do Grupo F</h1>
        <main id="cards">
              ${createCard("Primeira Rodada","23/11","quarta",
                createGame("morocco","07:00","croatia")  +
                createGame( "belgium","16:00","canada"))}
              ${createCard("Segunda Rodada","28/11","segunda",
                createGame("belgium","07:00","morocco")+
                createGame("croatia","13:00","canada"))}
              ${createCard("Terceira Rodada","02/12","sexta",
                createGame("croatia","16:00","belgium")+
                createGame("canada","16:00","morocco"))}
        </main>
            <h1>Jogos do Grupo G</h1>
        <main id="cards">
            ${createCard("Primeira Rodada","24/11","quinta",
              createGame("switzerland","07:00","cameroon")  +
              createGame( "brazil","16:00","serbia"))}
            ${createCard("Segunda Rodada","28/11","segunda",
              createGame("cameroon","07:00","serbia")+
              createGame("brazil","13:00","switzerland"))}
            ${createCard("Terceira Rodada","02/12","sexta",
              createGame("cameroon","16:00","brazil")+
              createGame("serbia","16:00","switzerland"))}
        </main>
            <h1>Jogos do Grupo H</h1>
        <main id="cards">
            ${createCard("Primeira Rodada","24/11","quinta",
              createGame("uruguay","10:00","south korea")  +
              createGame( "portugal","13:00","ghana"))}
            ${createCard("Segunda Rodada","28/11","segunda",
              createGame( "south korea","13:00","ghana")+
              createGame("portugal","16:00","uruguay"))}
            ${createCard("Terceira Rodada","02/12","sexta",
              createGame("south korea","12:00","portugal")+
              createGame("ghana","12:00","uruguay"))}
            </main>
       
       
        
        


`