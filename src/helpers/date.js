const dateBetween = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const randomReleaseDate = () => dateBetween(new Date(1982, 0, 1), new Date())

export { dateBetween, randomReleaseDate }

