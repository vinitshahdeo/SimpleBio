
// JS
//  The Javascript code was developed by collaboration with Chat GPT

// SIDE MENU
function openNav() {
    document.getElementById("mySidenav").style.width = "490px";
  }
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// BIG GALLERY PICTURE
    // pictures
    const images = {
        item1: 'img/works/gallery_big/oceanblue.png',
        item2: 'img/works/gallery_big/daydreaming.png',
        item3: 'img/works/gallery_big/dessertdessolate.png',
        item4: 'img/works/gallery_big/wonder.png',
        item5: 'img/works/gallery_big/greenoasis.png',
        item6: 'img/works/gallery_big/focus.png',
    };
    
    const listItems = document.querySelectorAll('li');
    const image = document.getElementById('all-work-image');
    const backBtn = document.getElementById('back-btn');
    const forwardBtn = document.getElementById('forward-btn');
    let selectedItemId = 'item1';
    
    listItems.forEach(item => {
    item.addEventListener('click', () => {
        const itemId = item.getAttribute('id');
        const imageName = images[itemId];
        image.setAttribute('src', imageName);
        selectedItemId = itemId;
        updateSelected();
    });
    });

    function updateSelected() {
    listItems.forEach(item => {
        const itemId = item.getAttribute('id');
        if (itemId === selectedItemId) {
        item.classList.add('active');
        } else {
        item.classList.remove('active');
        }
    });

// DESCRIPTION
    const title = document.querySelector('.all_work_item-4 h4');
    const year = document.querySelector('.all_work_item-4 p:nth-of-type(1)');
    const medium = document.querySelector('.all_work_item-4 p:nth-of-type(2)');
    const size = document.querySelector('.all_work_item-4 p:nth-of-type(3)');

    // descriptions
    switch (selectedItemId) {
        case 'item1':
        title.innerText = 'Ocean blue';
        year.innerText = '2023';
        medium.innerText = 'Acrylic on canvas';
        size.innerText = '75x100';
        break;
        case 'item2':
        title.innerText = 'Daydreaming';
        year.innerText = '2023';
        medium.innerText = 'Acrylic on canvas';
        size.innerText = '100x100';
        break;
        case 'item3':
        title.innerText = 'Dessert dessolate';
        year.innerText = '2023';
        medium.innerText = 'Acrylic on canvas';
        size.innerText = '80x100';
        break;
        case 'item4':
        title.innerText = 'Wonder';
        year.innerText = '2023';
        medium.innerText = 'Acrylic on canvas';
        size.innerText = '80x80';
        break;
        case 'item5':
        title.innerText = 'Green oasis';
        year.innerText = '2023';
        medium.innerText = 'Acrylic on canvas';
        size.innerText = '80x80';
        break;
        case 'item6':
        title.innerText = 'Focus';
        year.innerText = '2023';
        medium.innerText = 'Acrylic on canvas';
        size.innerText = '100x100';
        break;
    default:
        title.innerText = '';
        year.innerText = '';
        medium.innerText = '';
        size.innerText = '';
        break;
        }
    }
      
// SMALL IMAGE GALLERY
    document.addEventListener('DOMContentLoaded', () => {
        const listItems = document.querySelectorAll('.list-item');
        const imageContainer = document.querySelector('.image-container');
    
        function updateImages(imageIds) {
            const smallImages = imageContainer.querySelectorAll('img');
            smallImages.forEach((image) => {
                switch (imageIds.includes(image.id)) {
                case true:
                    image.style.display = 'block';
                    break;
                case false:
                    image.style.display = 'none';
                    break;
                }
            });
        }
    
        // set first list item as active
        listItems[0].classList.add('active');
        const imageIds = listItems[0].dataset.imageIds.split(',');
        updateImages(imageIds);
    
        listItems.forEach((listItem) => {
            listItem.addEventListener('click', () => {
                listItems.forEach((item) => {
                item.classList.remove('active');
                });
        
                listItem.classList.add('active');
        
                const imageIds = listItem.dataset.imageIds.split(',');
                updateImages(imageIds);
            });
        });
        
        // images
        const smallImages = [
            { id: 'oceanblue1', src: 'img/works/gallery/oceanblue/oceanblue1.png' },
            { id: 'oceanblue2', src: 'img/works/gallery/oceanblue/oceanblue2.png' },
            { id: 'oceanblue3', src: 'img/works/gallery/oceanblue/oceanblue3.png' },
            { id: 'oceanblue4', src: 'img/works/gallery/oceanblue/oceanblue4.png' },
            { id: 'oceanblue5', src: 'img/works/gallery/oceanblue/oceanblue5.png' },
            { id: 'daydreaming1', src: 'img/works/gallery/daydreaming/daydreaming1.png' },
            { id: 'daydreaming2', src: 'img/works/gallery/daydreaming/daydreaming2.png' },
            { id: 'daydreaming3', src: 'img/works/gallery/daydreaming/daydreaming3.png' },
            { id: 'daydreaming4', src: 'img/works/gallery/daydreaming/daydreaming4.png' },
            { id: 'daydreaming5', src: 'img/works/gallery/daydreaming/daydreaming5.png' },
            { id: 'dessertdessolate1', src: 'img/works/gallery/dessertdessolate/dessertdessolate1.png' },
            { id: 'dessertdessolate2', src: 'img/works/gallery/dessertdessolate/dessertdessolate2.png' },
            { id: 'dessertdessolate3', src: 'img/works/gallery/dessertdessolate/dessertdessolate3.png' },
            { id: 'dessertdessolate4', src: 'img/works/gallery/dessertdessolate/dessertdessolate4.png' },
            { id: 'dessertdessolate5', src: 'img/works/gallery/dessertdessolate/dessertdessolate5.png' },
            { id: 'wonder1', src: 'img/works/gallery/wonder/wonder1.png' },
            { id: 'wonder2', src: 'img/works/gallery/wonder/wonder2.png' },
            { id: 'wonder3', src: 'img/works/gallery/wonder/wonder3.png' },
            { id: 'wonder4', src: 'img/works/gallery/wonder/wonder4.png' },
            { id: 'wonder5', src: 'img/works/gallery/wonder/wonder5.png' },
            { id: 'wonder6', src: 'img/works/gallery/wonder/wonder6.png' },
            { id: 'greenoasis1', src: 'img/works/gallery/greenoasis/greenoasis1.png' },
            { id: 'greenoasis2', src: 'img/works/gallery/greenoasis/greenoasis2.png' },
            { id: 'greenoasis3', src: 'img/works/gallery/greenoasis/greenoasis3.png' },
            { id: 'focus1', src: 'img/works/gallery/focus/focus1.png' },
            { id: 'focus2', src: 'img/works/gallery/focus/focus2.png' },
            { id: 'focus3', src: 'img/works/gallery/focus/focus3.png' },
            { id: 'focus4', src: 'img/works/gallery/focus/focus4.png' },
            { id: 'focus5', src: 'img/works/gallery/focus/focus5.png' },
        ];
    
        smallImages.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.id = image.id;
        imgElement.src = image.src;
        imageContainer.appendChild(imgElement);
        });
        updateImages(listItems[0].dataset.imageIds.split(','));
    });

    
// mobile alert 
window.addEventListener("DOMContentLoaded", function() {
    var mobileWarning = document.getElementById("mobile-warning");
    var content = document.querySelectorAll("body > *:not(#mobile-warning)");
    
    if (window.innerWidth <= 767) {
        mobileWarning.style.display = "block";
        content.forEach(function(element) {
            element.classList.add("hide-content");
        });
    }
});
  