console.log('INDEX STARTED')

const fs = require('fs')
const request = require('request')
const rp = require('request-promise')
const postURL = 'https://jsonplaceholder.typicode.com/posts'
const albumURL = 'https://jsonplaceholder.typicode.com/albums'

const promise = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.toString())
      }
    })
  })
}

const getFiles = async () => {
  try {
    const start = await promise('start.txt')
    const middle = await promise('middle.txt')
    const end = await promise('end.txt')

    debugger

    console.log(start)
    console.log(middle)
    console.log(end)
    console.log('done')
  } catch (error) {
    console.log(error)
  }
}

getFiles()
//----------------------------------------------------------------------------------

// getPosts = (postURL, albumURL) => {
//     if (error) return error;
//     request(postURL, (error, response, body) => {
//         let posts = JSON.parse(body);
//         console.log('posts', posts.slice(0, 9));
//     });
//     request(albumURL, (error, response, body) => {
//         if (error) return error;
//         let albums = JSON.parse(body);
//         console.log('albums', albums.slice(0,19));
//         console.log('Done!');
//     })
// }

// getPosts('https://jsonplaceholder.typicode.com/posts/1','https://jsonplaceholder.typicode.com/albums/1')

//---------------------------------------------------------------------------------

// const promise = url => {
//   return new Promise((resolve, reject) => {
//     request(postURL, (error, response, body) => {
//       let posts = JSON.parse(body)
//       if (error) {
//         reject(error)
//       }
//       resolve(posts)
//     })
//   })
// }

// const getPromise = async () => {
//   try {
//     const posts = await promise(postURL)
//     const albums = await promise(albumURL)
//     console.log('[POSTS]', posts.slice(0, 2))
//     console.log('[ALBUMS]', albums.slice(0, 3))
//     console.log('Done!')
//   } catch (error) {
//     console.log('error')
//   }
// }

// getPromise()

// promise(postURL)
//   .then(res => console.log("[POSTS]", res.slice(0, 9)))
//   .then(() => promise(albumURL))
//   .then(res => {
//     console.log("[ALBUMS]", res.slice(0, 19));
//     console.log("Done!");
//   })
//   .catch(err => console.log(err));

//---------------------------------------------------------------------------------

// getPosts = () => {
//     console.log('GET POSTS')
//     rp(postURL)
//         .then(res => console.log(res))
//         .then(() => getAlbums())
//         .catch(err => console.log(err))
// }

// getAlbums = () => {
//     console.log('GET ALBUMS')
//     rp(albumURL)
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }

//getPosts();

//---------------------------------------------------------------------------------

// const getPosts = async url => {
//   try {
//     const posts = await rp(postURL);
//     const albums = await rp(albumURL);
//     console.log("[POSTS]", JSON.parse(posts).slice(0, 2));
//     console.log("[ALBUMS]", JSON.parse(albums).slice(0, 3));
//     console.log("Done!");
//   } catch (error) {
//     console.log(error);
//   }
// };

// getPosts();
