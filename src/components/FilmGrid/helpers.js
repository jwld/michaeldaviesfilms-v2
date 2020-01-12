export const countWins = (awards = []) => {
  return awards.filter(award => award.result === 'won').length
}
