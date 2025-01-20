const members = [
  { name: "Aman Makhija", age: 20 },
  { name: "Suresh Jsharma", age: 40 },
  { name: "Vijay Kumar Sahu", age: 41 },
  { name: "Rakesh Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

// 1. Get array of first names of everyone
const getFirstName = (name) => {
  let firstName = "";
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      break;
    }
    firstName = firstName + name[i];
  }
  return firstName;
};

const names = members.map((user) => {
  return getFirstName(user.name);
});
  console.log(names);

// 2. Make everyone's last names in UPPERCASE in given array of objects

const lastNameInUpperCase = members.map((user)=>{
    const names =   user.name.split(" ");
     const lastName = names.pop();
     user.name =  names.join(" ") + " " + lastName.toUpperCase();
    return user;
}) 

console.log(lastNameInUpperCase);

// 3. Get entries where age is between 41-60

 const ageFilteredMembers =  members.filter((user)=>{ 
  if(user.age >=41 && user.age <= 60){
  return user;
}}) 

// console.log(ageFilteredMembers);

// 4. Get average age

  const getAverageAge = ()=>{
    let sum = 0;
    for(let i=0 ; i<members.length ;i++){
        if(members[i].age){
        sum = sum + members[i].age ;
        }
    } 
     const avg = sum/members.length
    return avg;
     
  }

    const averageAge =  getAverageAge();
    // console.log(averageAge);
    
  


// 5. Get Person with maximum age

  const personWithMaxAge = members.reduce((acc, user)=>{      
      if(acc.age < user.age){
         return user;  
      }
      return acc;
  })

  // console.log(personWithMaxAge);

//   6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old

  const groups = ()=>{
      const obj = {
        'old' : [],
        'young' : [],
        'noage' : []
      }

     for(let i =0 ; i<members.length;i++){
        if(!members[i].age){
          obj.noage.push(members[i]);
        }
        else if(members[i].age < 35){
          obj.young.push(members[i]);
        }
        else {
          obj.old.push(members[i]);
        }
     }
     console.log(obj);
  } 

  // groups();


// 7. add a new member to same members array instance at index 2
    
    const addingMember = ()=>{
       const newMember =  { name : 'shyam singh' , age : 26};
       const newArr = [];
       for(let i=0 ; i< members.length ;i++){
           if(i==2){
             newArr.push(newMember);
           } 
           newArr.push(members[i]);
       }    
        console.log(newArr);
        
       return newArr;
    }

    // addingMember();

// 8. extract first and second element using destructing
 
   const useSperadeOperator = ()=>{
       const [FirstUser , SecondUser , ...OtherUsers] = members;
       console.log(FirstUser);
       console.log(SecondUser);
   }

  //  useSperadeOperator();


// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards

    const addingAtFirstIndex = ()=>{
        const newobj = {name :'Anuj kumar ', age : 36};
        const newArr = [newobj , ...members];
        return newArr; 
    }

    // console.log(addingAtFirstIndex());
    




// 10. Extract properties of object using destructuring
        const destructingObjElement = ()=>{
            const {name , age } = members[1];
             console.log(name);
             console.log(age);     
        } 

        //  destructingObjElement();





// 11. Rename extracted property of object while destructing

const renameObjElement = ()=>{
  const {name : userName , age : userAge} = members[1];
   console.log(userName);
   console.log(userAge);     
} 
//  renameObjElement();


// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object

     const obj  = {
      name : 'Aditya kumar',
      age : 45,
      email : 'aditya@gmail.com',
      dob : '25/10/2001',
      usertype : 'admin',
      image : 'xyz.png' 
     }

     const destructorObject = (user)=>{
       const {name , email , ...otherInfo} = user;
       console.log(name);
       console.log(email);   
     }
    //  destructorObject(obj);



// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step

  const overrideKey = ()=>{
     const newObj = {...obj , name :'Ramesh Singh'};
      return newObj;
  }

  const newObj = overrideKey();
  //  console.log(newObj);



   

// 14. Use reduce function on array and object



   // Arrays Example :-  using the reduce function for the array example :
    const values = [20,40,50, 10,3,46,34,32,42];
     // finding maximum in the array
      const min= values.reduce((acc,value)=>{
        if(acc>value){
          return value;
        }
        return acc;
      })
      // console.log(min);


   // Object Example :- using the reduce function for the object example :
   
   const obj2  = {
    name : 'anil kumar sharma',
    age : 28,
    email : 'anikumar@gmail.com',
    dob : '21/4/1992',
    usertype : 'student',
    image : 'abc.png' 
   }
     // making all key values in the uppercase letter
    const obj3 = Object.keys(obj2).reduce((acc, key) => {
      acc[key.toUpperCase()] = obj2[key];
      return acc;
    },{});

    // console.log(obj3);
    