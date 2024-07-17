//süre tamamlandıktan sonra fonksiyon çalışacak
setTimeout(() => {
  console.log(deneme);
}, 2000);

setInterval(() => {
  console.log("Merhaba, ben her saniye çalışacağım");
}, 1000);

const sayHi = (cb) => {
  console.log("Merhaba");
  cb();
};

sayHi(() => {
  console.log("Hello");
});

//veri kaynağına bağlanıp veriyi bize gösterir
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    console.log("Users çekildi", users);
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((user) => user.json())
      .then((gelenUser) => console.log("User1 çekildi", gelenUser));
  });

//üsttekine göre daha okunaklı async await
async function getData() {
  //await olan yerde bekler çalıştırıp işlem bitince sonraki satıra geçer
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  const user1 = await (
    await fetch("https://jsonplaceholder.typicode.com/users/1")
  ).json();

  console.log(data);
  console.log(user1);
}

getData();

//anon fonksiyon
(() => {
  console.log("selam");
})();
