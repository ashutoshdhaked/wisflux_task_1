const _ = require("lodash");
const { omit } = require('lodash');

const members = [
  { name: "Aman Makhija", age: 20 },
  { name: "Suresh Jsharma", age: 40 },
  { name: "Vijay kumar Sahu", age: 41 },
  { name: "Rakesh Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

// 1. Get array of first names of everyone

const firstNames = _.map(members, (user) => {
  return _.split(user.name, " ", 1);
});
//  console.log(firstNames);

// 2. Make everyone's last names in UPPERCASE in given array of objects
const upperCaseLastName = _.map(members, (user) => {
  const namesArr = _.split(user.name, " ");
  const lastName = _.last(namesArr);
  user.name = _.join(namesArr, " ") + " " + lastName.toUpperCase();
  return user;
});
// console.log(upperCaseLastName);

// 3. Get entries where age is between 41-60

const users = _.filter(members, (user) => {
  return user.age > 41 && user.age < 60;
});
//  console.log(users);

// 4. Get average age

const getAverageAge = () => {
  let sum = 0;
  for (let i = 0; i < members.length; i++) {
    if (members[i].age) {
      sum = sum + members[i].age;
    }
  }
  const avg = sum / members.length;
  return avg;
};

const averageAge = getAverageAge();
//  console.log(averageAge);

// 5. Get Person with maximum age
const maxAge = _.reduce(members, (user, acc) => {
  if (acc.age < user.age) {
    return user;
  }
  return acc;
});

const maxAge2 = _.maxBy(members,'age');
console.log(maxAge2);
   

console.log(maxAge);

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old

const groups = () => {
  const obj = {
    old: [],
    young: [],
    noage: [],
  };
  _.map(members, (user) => {
    if (!user.age) {
      obj.noage.push(user);
    } else if (user.age < 35) {
      obj.young.push(user);
    } else {
      obj.old.push(user);
    }
  });

  console.log(obj);
};

// groups();

// 7. add a new member to same members array instance at index 2
members.splice(2, 0, { name: "Ajay Kumar Sharma", age: 56 });
// console.log(members);


// 8. extract first and second element using destructing
const destructorElement = ()=>{
  const [first , second , ...OtherUsers] = members;
  console.log(first);
  console.log(second);
}
// destructorElement();


// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards


const addingNewElement = ()=>{
  const obj = {name :'Rahul Singh', age : 28};
  const newArr = [obj , ...members];
  return newArr; 
}
// console.log(addingNewElement());




// 10. Extract properties of object using destructuring
       const obj2 = {
        name :'ajay kumar',
        email : 'ajaykumar@gmail.com',
        image :'xyz.jpeg',
        phone :'7231273123',
        password :'3723273'
       }
       const extract = ()=>{
        const nameAndEmail =  omit(obj2,'image','phone','password');
         console.log(nameAndEmail); 
       } 
      
      //  extract();





// 11. Rename extracted property of object while destructing
       
const renameProperty = ()=>{
  const nameAndEmail =  omit(obj2,'image','phone','password');
  const {name :userName , email : userEmail} = nameAndEmail;
   console.log({userName,userEmail});
     
 } 

//  renameProperty();




// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object

      const getSomeProperty = ()=>{
           const {name,phone ,...otherproperty} = obj2;
           console.log({name , phone});
      }
      // getSomeProperty();



// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step

  const getNewObj = ()=>{
     const newObj =  {...obj2 , email :'kumar@gmail.com', password :'1234'};
      console.log(newObj);
      
  }    

  // getNewObj();





// 14. Use reduce function on array and object
    // 1 -  Reduce function on the array
        const maxAgeObject = _.reduce(members,(user,acc)=>{
                 return user.age<acc.age?acc:user;
        }) 

        // console.log(maxAgeObject);

     // 2 - reduce method on the Object 
         const obj3 =  _.reduce(Object.keys(obj2),(acc,key)=>{
          acc[key.toUpperCase()] = obj2[key];
          return acc;        
            },{})
          //  console.log(obj3);
            
     
        
     

