// const posts = [
//   {
//     "userId": 1,
//     "id": 11,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 2,
//     "id": 22,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 3,
//     "id": 33,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   }
// ]

// const post = posts.find(post => post.id === 22)
// console.log(post)


// const post = posts.findIndex((post) => post.id === 11)
// console.log(posts[post]);
  

axios.get('http://localhost:3000/post/12')
    .then(function (response) {
        console.log(response.data)
        saida.innerText = response.data.body
      })
      .catch(function (error) {
        console.error(error);
      })