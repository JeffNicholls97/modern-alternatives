import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';

// Make PhotoSwipe available globally
window.PhotoSwipe = PhotoSwipe;
window.PhotoSwipeLightbox = PhotoSwipeLightbox;

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery--no-dynamic-import',
        children: 'button',
        pswpModule: PhotoSwipe
      });
      lightbox.init();
});