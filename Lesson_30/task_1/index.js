const addImage = (imgSrc) => {
    const p = new Promise((resolve, reject) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        function onImageLoaded() {
            const { width, height } = imgElem;
            resolve({ width, height });
        };

        imgElem.addEventListener('load', onImageLoaded);
        imgElem.addEventListener('error', () => reject(new Error('Image load failed')));
    });

    return;
};


// const imgSrc = 'https://i.5sfer.com/post/postImage/thumb-8ipwnn.jpg';
// const resultPromice = addImageWithPromise(imgSrc)



export { addImage };