document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const imageUrlInput = document.getElementById('imageUrl');
    const addButton = document.getElementById('addButton');
    const deleteButton = document.getElementById('deleteButton');
    let selectedImage = null;

    // Agregar imagen
    addButton.addEventListener('click', () => {
        const url = imageUrlInput.value.trim();
        if (url) {
            const img = document.createElement('img');
            img.src = url;
            img.addEventListener('click', () => selectImage(img));
            gallery.appendChild(img);
            imageUrlInput.value = '';
        }
    });

    // Seleccionar imagen
    function selectImage(img) {
        if (selectedImage) {
            selectedImage.classList.remove('selected');
        }
        selectedImage = img;
        selectedImage.classList.add('selected');
    }

    // Eliminar imagen seleccionada
    deleteButton.addEventListener('click', () => {
        if (selectedImage) {
            gallery.removeChild(selectedImage);
            selectedImage = null;
        }
    });
});