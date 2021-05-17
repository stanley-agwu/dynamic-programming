// UEFA Champions League Knock-Out Stage Draw:

// Build a simple program that gives accurate prediction of teams, 
// that each team could likely be drawn with at this round of 16 knock out stage.

// Seeded teams: Bayern Munich, Manchester City, Liverpool, Chelsea, 
//                 Borussia Dortmund, Juventus, PSG, Real Madrid

// Unseeded teams : FC Porto, Sevilla, Lazio, Barcelona, RB Leipzig, 
//                 Atalanta, Borussia Monchengladbach, Atletico Madrid

// Champions League draw rules: 
//     1. Seeded teams will be drawn against unseeded teams in the last-16.
//     2. Teams cannot play against a team from their own country at this stage, 
//         and will also be kept apart from the teams they faced in the group stages.

const draw16= (club) =>{
    const teams= [
        {group: "A", name: "bayern munich", country: "Germany", seed: "seeded"}, 
        {group: "G", name: "juventus", country: "Italy", seed: "seeded"}, 
        {group: "B", name: "real madrid", country: "Spain", seed: "seeded"}, 
        {group: "H", name: "psg", country: "France", seed: "seeded"}, 
        {group: "C", name: "manchester city", country: "England", seed: "seeded"}, 
        {group: "D", name: "liverpool", country: "England", seed: "seeded"},
        {group: "E", name: "chelsea", country: "England", seed: "seeded"}, 
        {group: "F", name: "borussia dortmund", country: "Germany", seed: "seeded"}, 
        {group: "F", name: "lazio", country: "Italy", seed: "unseeded"}, 
        {group: "D", name: "atalanta", country: "Italy", seed: "unseeded"}, 
        {group: "G", name: "barcelona", country: "Spain", seed: "unseeded"}, 
        {group: "A", name: "atletico madrid", country: "Spain", seed: "unseeded"}, 
        {group: "E", name: "sevilla", country: "Spain", seed: "unseeded"}, 
        {group: "H", name: "rb leipzig", country: "Germany", seed: "unseeded"},
        {group: "B", name: "borussia monchengladbach", country: "Germany", seed: "unseeded"}, 
        {group: "C", name: "fc porto", country: "Portugal", seed: "unseeded"}
    ]    
   
    const my_team = teams.find(team => team.name === (club).toLowerCase())
    const opp1= teams.filter(team => team.seed !== my_team.seed);
    const opp2= opp1.filter(team => team.country !== my_team.country);
    const likely_Opp= opp2.filter(team => team.group !== my_team.group);
    const opponents = (likely_Opp.map(team => (team.name).toUpperCase()));

    console.log(`The Likely Opponents of ${(club).toUpperCase()} are: `, opponents)

}

draw16("real madrid")
    



