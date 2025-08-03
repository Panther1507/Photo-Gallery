// Your media data - Mixed file extensions for photos
const mediaData = [
    // Photos (photo1 to photo237 with mixed extensions)
    ...Array.from({ length: 237 }, (_, i) => {
        const photoNum = i + 1;
        return {
            id: photoNum,
            type: 'photo',
            src: `photo${photoNum}.jpg`, // Try JPG first - REMOVED photos/ folder
            srcAlt: `photo${photoNum}.png`, // Then PNG - REMOVED photos/ folder
            srcAlt2: `photo${photoNum}.jpeg`, // Then JPEG - REMOVED photos/ folder
            srcAlt3: `photo${photoNum}.HEIC`, // Then HEIC (won't work in browser but we'll try) - REMOVED photos/ folder
            thumbnail: `photo${photoNum}.jpg` // REMOVED photos/ folder
        };
    }),
    
    // Videos (video1.mp4 to video21.mp4)
    ...Array.from({ length: 21 }, (_, i) => ({
        id: 238 + i,
        type: 'video',
        src: `video${i + 1}.mp4`, // REMOVED videos/ folder
        thumbnail: `video${i + 1}.mp4` // REMOVED videos/ folder
    }))
];

class MediaGallery {
    constructor() {
        this.currentFilter = 'all';
        this.currentLightboxIndex = 0;
        this.filteredMedia = [...mediaData];
        
        this.init();
    }
    
    init() {
        this.renderGallery();
        this.bindEvents();
        this.preloadImages();
    }
    
    renderGallery() {
        const grid = document.getElementById('galleryGrid');
        grid.innerHTML = '';
        
        // Check if there's no media data
        if (this.filteredMedia.length === 0) {
            grid.innerHTML = `
                <div style="
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 60px 20px;
                    color: var(--text-secondary);
                    font-size: 1.2rem;
                ">
                    <div style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;">📸</div>
                    <h3 style="margin-bottom: 15px; color: var(--text-primary);">No media found</h3>
                    <p>Add your photos and videos to the <strong>mediaData</strong> array in script.js</p>
                    <p style="margin-top: 10px; font-size: 0.9rem; opacity: 0.8;">
                        Check the comments in the code for the correct format!
                    </p>
                </div>
            `;
            return;
        }
        
        // Add loading animation
        grid.innerHTML = '<div class="loading"></div>';
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            grid.innerHTML = '';
            
            this.filteredMedia.forEach((item, index) => {
                const mediaElement = this.createMediaElement(item, index);
                grid.appendChild(mediaElement);
            });
            
            // Animate items in
            this.animateItemsIn();
        }, 500);
    }
    
    createMediaElement(item, index) {
        const mediaItem = document.createElement('div');
        mediaItem.className = 'media-item';
        mediaItem.setAttribute('data-type', item.type);
        mediaItem.setAttribute('data-index', index);
        
        const isVideo = item.type === 'video';
        const mediaTag = isVideo ? 'video' : 'img';
        const playButton = isVideo ? '<div class="play-button"><i class="fas fa-play"></i></div>' : '';
        
        // For photos, try multiple extensions: JPG -> PNG -> JPEG -> HEIC
        const errorHandler = item.srcAlt ? 
            `this.onerror = function() { 
                console.log('Failed JPG: ${item.src}, trying PNG');
                this.onerror = function() { 
                    console.log('Failed PNG, trying JPEG');
                    this.onerror = function() {
                        console.log('Failed JPEG, trying HEIC (likely won\\'t work)');
                        this.onerror = function() {
                            console.log('All formats failed for: photo${item.id}');
                            this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjE0Ij5IRUFDIE5vdCBTdXBwb3J0ZWQ8L3RleHQ+Cjwvc3ZnPg=='; 
                            this.alt='HEIC format not supported by browsers'; 
                        };
                        this.src='${item.srcAlt3}'; // Try HEIC
                    };
                    this.src='${item.srcAlt2}'; // Try JPEG
                }; 
                this.src='${item.srcAlt}'; // Try PNG
            };` :
            `this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjE0Ij5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPg=='; this.alt='Image not found';`;
        
        mediaItem.innerHTML = `
            <div class="media-content">
                <${mediaTag} 
                    src="${item.thumbnail || item.src}" 
                    alt="Gallery media" 
                    ${isVideo ? 'muted loop' : ''}
                    onerror="${errorHandler}"
                >
                </${mediaTag}>
                ${playButton}
                <div class="media-type-indicator">
                    <i class="fas fa-${isVideo ? 'video' : 'camera'}"></i>
                    ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </div>
            </div>
        `;
        
        // Add click event to open lightbox
        mediaItem.addEventListener('click', () => this.openLightbox(index));
        
        // Auto-play video on hover
        if (isVideo) {
            const video = mediaItem.querySelector('video');
            mediaItem.addEventListener('mouseenter', () => {
                video.play().catch(e => console.log('Video play failed:', e));
            });
            mediaItem.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
        
        return mediaItem;
    }
    
    animateItemsIn() {
        const items = document.querySelectorAll('.media-item');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    filterMedia(filter) {
        this.currentFilter = filter;
        
        if (filter === 'all') {
            this.filteredMedia = [...mediaData];
        } else {
            this.filteredMedia = mediaData.filter(item => item.type === filter);
        }
        
        this.renderGallery();
    }
    
    openLightbox(index) {
        this.currentLightboxIndex = index;
        const lightbox = document.getElementById('lightbox');
        const item = this.filteredMedia[index];
        
        this.renderLightboxContent(item);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add keyboard navigation
        document.addEventListener('keydown', this.handleKeyboardNav.bind(this));
    }
    
    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Remove keyboard navigation
        document.removeEventListener('keydown', this.handleKeyboardNav.bind(this));
        
        // Pause any playing video
        const video = document.querySelector('#lightboxMediaContainer video');
        if (video) {
            video.pause();
        }
    }
    
    renderLightboxContent(item) {
        const container = document.getElementById('lightboxMediaContainer');
        
        const isVideo = item.type === 'video';
        const mediaTag = isVideo ? 'video' : 'img';
        const videoAttrs = isVideo ? 'controls autoplay muted' : '';
        
        // For photos, try .jpg first, then .png if it fails
        const errorHandler = item.srcAlt ? 
            `this.onerror = function() { 
                this.onerror = function() { 
                    this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMjIyIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjI0Ij5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPg=='; 
                    this.alt='Image not found'; 
                }; 
                this.src='${item.srcAlt}'; 
            };` :
            `this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMjIyIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjI0Ij5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPg=='; this.alt='Image not found';`;
        
        container.innerHTML = `
            <${mediaTag} 
                class="lightbox-media" 
                src="${item.src}" 
                alt="Gallery media"
                ${videoAttrs}
                onerror="${errorHandler}"
            ></${mediaTag}>
        `;
        
        // Update navigation visibility
        this.updateNavigationVisibility();
    }
    
    updateNavigationVisibility() {
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');
        
        prevBtn.style.display = this.currentLightboxIndex > 0 ? 'flex' : 'none';
        nextBtn.style.display = this.currentLightboxIndex < this.filteredMedia.length - 1 ? 'flex' : 'none';
    }
    
    navigateLightbox(direction) {
        const newIndex = this.currentLightboxIndex + direction;
        
        if (newIndex >= 0 && newIndex < this.filteredMedia.length) {
            this.currentLightboxIndex = newIndex;
            const item = this.filteredMedia[this.currentLightboxIndex];
            this.renderLightboxContent(item);
        }
    }
    
    handleKeyboardNav(e) {
        switch(e.key) {
            case 'Escape':
                this.closeLightbox();
                break;
            case 'ArrowLeft':
                this.navigateLightbox(-1);
                break;
            case 'ArrowRight':
                this.navigateLightbox(1);
                break;
        }
    }
    
    preloadImages() {
        // Preload first few images for smooth navigation
        const preloadCount = Math.min(20, mediaData.length); // Only preload first 20 to avoid overwhelming the browser
        
        for (let i = 0; i < preloadCount; i++) {
            const item = mediaData[i];
            if (item.type === 'photo') {
                const img = new Image();
                img.src = item.src;
                if (item.thumbnail && item.thumbnail !== item.src) {
                    const thumb = new Image();
                    thumb.src = item.thumbnail;
                }
            }
        }
    }
    
    bindEvents() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update active state
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter media
                const filter = btn.getAttribute('data-filter');
                this.filterMedia(filter);
            });
        });
        
        // Lightbox controls
        document.getElementById('lightboxClose').addEventListener('click', () => this.closeLightbox());
        document.getElementById('lightboxPrev').addEventListener('click', () => this.navigateLightbox(-1));
        document.getElementById('lightboxNext').addEventListener('click', () => this.navigateLightbox(1));
        
        // Close lightbox when clicking outside content
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') {
                this.closeLightbox();
            }
        });
        
        // Smooth scroll for any anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MediaGallery();
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optional: Add infinite scroll functionality
function addInfiniteScroll() {
    let isLoading = false;
    
    window.addEventListener('scroll', debounce(() => {
        if (isLoading) return;
        
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
        if (scrollTop + clientHeight >= scrollHeight - 1000) {
            // Load more content here
            // This is where you'd typically fetch more data from an API
            console.log('Loading more content...');
        }
    }, 100));
}

// Function to dynamically add media (useful for adding content via JavaScript)
function addMedia(newMediaItem) {
    // Validate the media item has required properties
    if (!newMediaItem.id || !newMediaItem.type || !newMediaItem.src) {
        console.error('Media item must have id, type, and src properties');
        return false;
    }
    
    mediaData.push(newMediaItem);
    
    // Re-render gallery if it exists
    const gallery = window.mediaGallery;
    if (gallery) {
        gallery.filteredMedia = [...mediaData];
        gallery.renderGallery();
    }
    
    return true;
}

// Function to remove media by ID
function removeMedia(mediaId) {
    const index = mediaData.findIndex(item => item.id === mediaId);
    if (index > -1) {
        mediaData.splice(index, 1);
        
        // Re-render gallery if it exists
        const gallery = window.mediaGallery;
        if (gallery) {
            gallery.filteredMedia = [...mediaData];
            gallery.renderGallery();
        }
        
        return true;
    }
    return false;
}

// Make gallery instance globally accessible for helper functions
window.addEventListener('DOMContentLoaded', () => {
    window.mediaGallery = new MediaGallery();
});
