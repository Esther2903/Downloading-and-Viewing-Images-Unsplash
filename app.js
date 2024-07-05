const accessKey = 'lK_mCOvOjidH3otEh_0DSzqQVW_QRMqT7_HbEjufhUQ'

async function searchImage(query = 'food') {
    const url =`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=18`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayImages(data.results);
    } catch (error) {
        displayError(error.message);
    }
}

function displayImages(images) {
    const imageContainer = document.getElementById('imageId');
    imageContainer.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imageContainer.appendChild(imgElement);
    });
}

function displayError(message) {
    const imageContainer  = document.getElementById('imageId');
    imageGrid.innerHTML = `<p>${message}</p>`;
}

function search() {
    console.log('function triggered');
    const query = document.getElementById('search-input').value;
    console.log(query);
    searchImage(query);
}

searchImage();