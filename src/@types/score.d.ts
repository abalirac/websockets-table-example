export interface Score {
    id: nummber,
    games: Match[],
    series: Match
}

export interface Match {
    teams: TeamScore[]
}

 export interface TeamScore {
    id: nummber,
    score: string
}