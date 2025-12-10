function randomId(length = 8) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

const sportsmensList = [
  {
    id: randomId(),
    name: "John Doe",
  },
  {
    id: randomId(),
    name: "Jane Smith",
  },
  { id: randomId(), name: "Mike Johnson" },
  {
    id: randomId(),
    name: "Emily Davis",
  },
  { id: randomId(), name: "David Wilson" },
  { id: randomId(), name: "Sarah Brown" },
  { id: randomId(), name: "Chris Lee" },
  { id: randomId(), name: "Anna Garcia" },
];
export default sportsmensList;
