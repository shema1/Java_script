 export const getUsersBlogs = async(userId) => {

     let test = []
     try {
         //  const wraper = userId;
         for (let index = 0; index < wraper.length; index++) {
             let response = await fetch(`https://api.github.com/users/${userId[index]}`)
             if (!response.ok) throw new Error('Failed to load data');
             let userData = await (response.json())
             test.push(userData.blog)
         }

         // wraper.map(elem => {
         //     let response = await fetch(`https://api.github.com/users/${elem}`)
         //     let userData = await (response.json())
         //     test.push(userData.blog)
         // })
         return test
             //  console.log(test)
     } catch (e) {
         //  throw new Error('Failed')
         console.log(e)
     }
 }


 getUsersBlogs(["facebook", "google"])
     .then(response => console.log(response))