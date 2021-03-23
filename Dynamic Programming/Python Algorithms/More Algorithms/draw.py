# UEFA Champions League Knock-Out Stage Draw:
# Which teams have qualified?

# Seeded teams: Bayern Munich, Manchester City, Liverpool, Chelsea, 
#                 Borussia Dortmund, Juventus, PSG, Real Madrid

# Unseeded teams : FC Porto, Sevilla, Lazio, Barcelona, RB Leipzig, 
#                 Atalanta, Borussia Monchengladbach, Atletico Madrid

# Champions League draw rules: 
#     1. Seeded teams will be drawn against unseeded teams in the last-16.
#     2. Teams cannot play against a team from their own country at this stage, 
#         and will also be kept apart from the teams they faced in the group stages.

def draw(club):    
    teams = [
        {"group": "A", "name": "bayern munich", "country": "Germany", "seed": "seeded"}, 
        {"group": "G", "name": "juventus", "country": "Italy", "seed": "seeded"}, 
        {"group": "B", "name": "real madrid", "country": "Spain", "seed": "seeded"}, 
        {"group": "H", "name": "psg", "country": "France", "seed": "seeded"}, 
        {"group": "C", "name": "manchester city", "country": "England", "seed": "seeded"}, 
        {"group": "D", "name": "liverpool", "country": "England", "seed": "seeded"},
        {"group": "E", "name": "chelsea", "country": "England", "seed": "seeded"}, 
        {"group": "F", "name": "borussia dortmund", "country": "Germany", "seed": "seeded"}, 
        {"group": "F", "name": "lazio", "country": "Italy", "seed": "unseeded"}, 
        {"group": "D", "name": "atalanta", "country": "Italy", "seed": "unseeded"}, 
        {"group": "G", "name": "barcelona", "country": "Spain", "seed": "unseeded"}, 
        {"group": "A", "name": "atletico madrid", "country": "Spain", "seed": "unseeded"}, 
        {"group": "E", "name": "sevilla", "country": "Spain", "seed": "unseeded"}, 
        {"group": "H", "name": "rb leipzig", "country": "Germany", "seed": "unseeded"},
        {"group": "B", "name": "borussia monchengladbach", "country": "Germany", "seed": "unseeded"}, 
        {"group": "C", "name": "fc porto", "country": "Portugal", "seed": "unseeded"}
    ]

    for team in teams:
        for key in team:
            if (team['name'] == club):
                my_team = team
    
    teams2= list(filter(lambda team: team['seed'] != my_team['seed'], teams))
    teams3= list(filter(lambda team: team['country'] != my_team['country'], teams2))
    opponents=list(map(lambda team: team['name'], teams3))

    return f"The likely Opponents of {my_team['name']} are: {opponents}"


print(draw("real madrid"))



# def check_seed(team):
    #     if (team['seed'] != my_team['seed']):
    #         return True
    #     else:
    #         False
    
    # def check_country(team):
    #     if (team['country'] != my_team['country']):
    #         return True
    #     else:
    #         False

    # def opp_names(team):
    #     for key in team:
    #         return team['name'] 



    







