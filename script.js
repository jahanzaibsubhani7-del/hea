// =========================================================
// HEA Link — Pure JavaScript Client-Side Logic
// Supports 100% Static HTML / CSS / JS (No Server Required)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const tabLink = document.getElementById('tabLink');
    const tabQR = document.getElementById('tabQR');
    const shortenerForm = document.getElementById('shortenerForm');
    const urlInput = document.getElementById('urlInput');
    const customInput = document.getElementById('customInput');
    const shortenBtn = document.getElementById('shortenBtn');
    const shortUrlDisplay = document.getElementById('shortUrlDisplay');
    const copyBtn = document.getElementById('copyBtn');
    const viewQrBtn = document.getElementById('viewQrBtn');
    const qrPreviewContainer = document.getElementById('qrPreviewContainer');
    const qrImage = document.getElementById('qrImage');
    const downloadQrBtn = document.getElementById('downloadQrBtn');
    const toast = document.getElementById('toast');

    // Default Seed Links if localStorage is empty
    const DEFAULT_LINKS = [
        {
            id: 1,
            code: 'summer-sale',
            long_url: 'https://google.com',
            clicks: 42,
            mobile_clicks: 28,
            desktop_clicks: 14,
            created_at: new Date(Date.now() - 86400000 * 3).toISOString()
        },
        {
            id: 2,
            code: 'launch-offer',
            long_url: 'https://youtube.com',
            clicks: 128,
            mobile_clicks: 86,
            desktop_clicks: 42,
            created_at: new Date(Date.now() - 86400000 * 2).toISOString()
        },
        {
            id: 3,
            code: 'vip-pass',
            long_url: 'https://github.com',
            clicks: 19,
            mobile_clicks: 11,
            desktop_clicks: 8,
            created_at: new Date(Date.now() - 86400000 * 1).toISOString()
        }
    ];

    function getStoredLinks() {
        try {
            const raw = localStorage.getItem('hea_links');
            if (!raw) {
                localStorage.setItem('hea_links', JSON.stringify(DEFAULT_LINKS));
                return DEFAULT_LINKS;
            }
            return JSON.parse(raw);
        } catch(e) {
            return DEFAULT_LINKS;
        }
    }

    function saveStoredLinks(links) {
        localStorage.setItem('hea_links', JSON.stringify(links));
    }

    // Toast Notification Helper
    function showToast(message, isError = false) {
        if (!toast) return;
        toast.textContent = message;
        toast.style.borderColor = isError ? 'rgba(239, 68, 68, 0.6)' : 'rgba(59, 130, 246, 0.4)';
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3200);
    }

    // Tab Switching (Short Link vs QR Code)
    if (tabLink && tabQR) {
        tabLink.addEventListener('click', () => {
            tabLink.classList.add('tab-active');
            tabQR.classList.remove('tab-active');
            if (qrPreviewContainer) qrPreviewContainer.style.display = 'none';
        });

        tabQR.addEventListener('click', () => {
            tabQR.classList.add('tab-active');
            tabLink.classList.remove('tab-active');
            showQrCode();
        });
    }

    // Slug Generator
    function makeSlug() {
        const words = ['summer', 'deals', 'launch', 'offer', 'pro', 'event', 'vip', 'link', 'fast', 'quick'];
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const randomNum = Math.floor(100 + Math.random() * 900);
        return `${randomWord}-${randomNum}`;
    }

    // QR Code Live Updater
    function updateQrCode(linkUrl) {
        if (!qrImage || !downloadQrBtn) return;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(linkUrl)}&color=2563eb&bgcolor=ffffff&margin=6`;
        qrImage.src = qrUrl;
        downloadQrBtn.href = qrUrl;
    }

    function showQrCode() {
        if (!qrPreviewContainer) return;
        if (qrPreviewContainer.style.display === 'none' || qrPreviewContainer.style.display === '') {
            qrPreviewContainer.style.display = 'block';
            updateQrCode(getCurrentRedirectUrl());
        } else {
            qrPreviewContainer.style.display = 'none';
        }
    }

    if (viewQrBtn) {
        viewQrBtn.addEventListener('click', showQrCode);
    }

    let currentShortCode = 'summer-sale';

    function getCurrentRedirectUrl() {
        const base = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '');
        return `${base}/r.html?c=${encodeURIComponent(currentShortCode)}`;
    }

    // URL Shortener Form Submit
    if (shortenerForm) {
        shortenerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const rawUrl = urlInput.value.trim();
            const customVal = customInput ? customInput.value.trim() : '';

            if (!rawUrl) {
                showToast('⚠️ Please enter a destination URL.', true);
                urlInput.focus();
                return;
            }

            shortenBtn.disabled = true;
            const originalText = shortenBtn.textContent;
            shortenBtn.textContent = 'Creating...';

            setTimeout(() => {
                let links = getStoredLinks();
                let code = customVal;

                if (code) {
                    if (!/^[A-Za-z0-9_-]{3,32}$/.test(code)) {
                        showToast('⚠️ Custom back-half must be 3-32 characters.', true);
                        shortenBtn.disabled = false;
                        shortenBtn.textContent = originalText;
                        return;
                    }
                    if (links.some(l => l.code.toLowerCase() === code.toLowerCase())) {
                        showToast(`⚠️ Back-half '/${code}' is already taken!`, true);
                        shortenBtn.disabled = false;
                        shortenBtn.textContent = originalText;
                        return;
                    }
                } else {
                    do {
                        code = makeSlug();
                    } while (links.some(l => l.code === code));
                }

                currentShortCode = code;

                const newLink = {
                    id: Date.now(),
                    code: code,
                    long_url: rawUrl,
                    clicks: 0,
                    mobile_clicks: 0,
                    desktop_clicks: 0,
                    created_at: new Date().toISOString()
                };

                links.unshift(newLink);
                saveStoredLinks(links);

                // Update UI Display
                shortUrlDisplay.textContent = `healink.pk/${code}`;
                updateQrCode(getCurrentRedirectUrl());

                shortenBtn.disabled = false;
                shortenBtn.textContent = originalText;
                showToast(`✨ Link shortened: /${code}`);

                if (tabQR && tabQR.classList.contains('tab-active')) {
                    showQrCode();
                }
            }, 300);
        });
    }

    // Copy to Clipboard
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const redirectUrl = getCurrentRedirectUrl();
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(redirectUrl);
                } else {
                    const temp = document.createElement('input');
                    temp.value = redirectUrl;
                    document.body.appendChild(temp);
                    temp.select();
                    document.execCommand('copy');
                    document.body.removeChild(temp);
                }
                copyBtn.textContent = 'Copied!';
                showToast(`📋 Copied short link: ${redirectUrl}`);
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2200);
            } catch(err) {
                prompt('Copy your short link:', redirectUrl);
            }
        });
    }

    // Set initial QR code
    updateQrCode(getCurrentRedirectUrl());
});
