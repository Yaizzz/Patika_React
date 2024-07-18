import axios from "axios";
// //süre tamamlandıktan sonra fonksiyon çalışacak
// setTimeout(() => {
//   console.log(deneme);
// }, 2000);

// setInterval(() => {
//   console.log("Merhaba, ben her saniye çalışacağım");
// }, 1000);

// const sayHi = (cb) => {
//   console.log("Merhaba");
//   cb();
// };

// sayHi(() => {
//   console.log("Hello");
// });

// //veri kaynağına bağlanıp veriyi bize gösterir
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users çekildi", users);
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((user) => user.json())
//       .then((gelenUser) => console.log("User1 çekildi", gelenUser));
//   });

// //üsttekine göre daha okunaklı async await
// async function getData() {
//   //await olan yerde bekler çalıştırıp işlem bitince sonraki satıra geçer
//   const data = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   const user1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/1")
//   ).json();

//   console.log(data);
//   console.log(user1);
// }

// getData();

// //anon fonksiyon
// (async () => {
//   await console.log("selam");
// })();

// async function getData() {

//   const [users] = await axios("https://jsonplaceholder.typicode.com/users");//obje dönüyor onun içindeki {data ile görebiliriz}
//   const userData = users.data

//   const {data: user1} = await axios("https://jsonplaceholder.typicode.com/users/1");

//   console.log(data);
//   console.log(user1);
// }

// getData();

//.then fetch promise dönüyor demek anlamına geliyor
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users çekildi", users);
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((user) => user.json())
//       .then((gelenUser) => console.log("User1 çekildi", gelenUser));
//   });

//resolve olursa olumlu ve then'e düşer reject olumsuz ve .catch()'e düşer
const getComments = (number) => {
  return new Promise((resolve, reject) => {
    //console.log("comments");
    //eğer gönderilen 1 ise kabul değil ise ret
    if (number === 1) {
      resolve("Comments");
    } else {
      reject("Bir problem oluştu");
    }
  });
};

//anon promise kullanımı
(async ()=>{
  const comments = await getComments()
  console.log(comments);
})

getComments(1)
  .then((data) => console.log(data)) //çıktı comments olur
  .catch((e) => console.log(e));

  //birden çok promise varsa
Promise.all([getComments()])
.then(console.log())
.catch(console.log());


import axios from "axios";

async function getData(id) {
	try {
		const [user, post] = await Promise.all([
			axios.get("https://jsonplaceholder.typicode.com/users/" + id),
			axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + id),
		]);
		const userData = user.data; // Kullanıcının bilgilerini al
		const userPosts = post.data; // Kullanıcının post'larını al

// Yeni bir nesne oluştur ve kullanıcı bilgilerini ve post'ları içine yerleştir
const combinedData = {
  ...userData, // Kullanıcının bilgileri
  posts: userPosts, // Kullanıcının post'ları
};

console.log(combinedData);

	} catch (error) {
		console.error(error);
	}
}

export { getData };