const users = [{name:"Mehmet",age:18},{name:"Murat",age:29},{name:"Sevilay,age:17"}]
/*
push
map
find
filter
some
every
includes
*/

//push
users.push('Ayşe')
console.log(users);

//map

users.map((item)=>{
    console.log(item);
})

//find -> verilen koşullarda arama işlemi yapar

const result = users.find((item)=>item.name === "Mehmet" && item.age>20)
console.log(result);

//filter 

const ageLowThirty = users.filter((item)=> item.age<30)
console.log(ageLowThirty);

//some -> verdiğimiz koşula array içindeki herhangi bir eleman uyuyorsa true döner yoksa false

const ageEighteen = users.some((item)=> item.age===18)
console.log(ageEighteen);

//every -> arrayin tüm elemanlarının verilen şarta uymasını bekler

const every = users.every((item)=> item.age>5)
console.log(every);

//includes -> içinde geçiryor mu geçmiyormu

const meyveler = ["elma","armut","muz"]

const isIncluded = meyveler.includes("muz")
console.log(isIncluded);