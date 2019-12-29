 export const getUsersBlogs = async(...userId) => {


     const wraper = userId;
     let test = []
     for (let index = 0; index < wraper.length; index++) {
         let response = await fetch(`https://api.github.com/users/${wraper[index]}`)
         if (!response.ok) throw new Error('Failed to load data');
         let userData = await (response.json())
         test.push(userData.blog)
     }

     return test
 }


 getUsersBlogs(['google', "facebook", 'shema1'])
     .then(response => console.log(response));