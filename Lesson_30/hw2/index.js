import { addImage } from './addImage.js';

export const addImageV2 = (img) => {
    const promise = Promise((resolve, reject) => {
        addImage(img, (a, b) => {

            if (a) {
                reject(a)
                return
            }
            resolve(b)
        })
    })

    return promise
}

// const addImage = (imgSrc, callback) => {
//     const imgElem = document.createElement('img');
//     imgElem.setAttribute('alt', 'My Photo');
//     imgElem.src = imgSrc;
//     const containerElem = document.querySelector('.page');
//     containerElem.append(imgElem);

//     const onImageLoaded = () => {
//         const { width, height } = imgElem;
//         callback(null, { width, height });
//     };

//     imgElem.addEventListener('load', onImageLoaded);
//     imgElem.addEventListener('error', () => callback('Image load failed'));
// };




// addImageV2('asdfasdfasdf')
//     .then(data => console.log(data)).catch(error => console.log(error));;