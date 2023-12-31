const boards = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    role: "Member",
    updatedDate: "2022-12-11",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    role: "Admin",
    updatedDate: "2023-06-05",
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    role: "Member",
    updatedDate: "2023-01-01",
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    role: "Admin",
    updatedDate: "2020-03-01",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    role: "Owner",
    updatedDate: "2023-09-15",
  },
  {
    id: 6,
    name: "Floyd Miles",
    title: "Principal Designer",
    role: "Member",
    updatedDate: "2023-12-01",
  },
];

export function getPosts() {
  return boards;
}

export function getPostById(id) {
  return postMessage.find((item) => item.id === parseInt(id));
}
