// =========================================================
// HEA Link — Pure JavaScript Client-Side Logic
// Supports 100% Static HTML / CSS / JS (No Server Required)
// =========================================================

// Global Solutions Tab Switcher for Nav
window.switchNavSolTab = function(tabId, btn) {
    const parent = btn.closest('.mega-menu');
    if (!parent) return;
    parent.querySelectorAll('.sol-tab-btn').forEach(b => b.classList.remove('active'));
    parent.querySelectorAll('.sol-tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = parent.querySelector('#' + tabId);
    if (target) target.classList.add('active');
};

// Global Enterprise Quote Modal
window.openQuoteModal = function() {
    let modal = document.getElementById('quoteModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quoteModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="g c" style="max-width: 480px; width: 100%; padding: 32px; border-radius: 24px; position: relative;">
                <button type="button" onclick="document.getElementById('quoteModal').classList.remove('open')" style="position: absolute; top: 18px; right: 20px; background: none; border: none; color: #fff; font-size: 20px; cursor: pointer;">✕</button>
                <h3 style="font-size: 20px; margin-bottom: 6px;">Request Enterprise Quote</h3>
                <p class="m" style="font-size: 13px; margin-bottom: 20px;">Custom high-volume pricing, dedicated IP nodes, and 99.99% SLA.</p>
                <div style="margin-bottom: 14px;">
                    <label style="display:block; font-size:12px; margin-bottom:4px;" class="m">Work Email</label>
                    <input type="email" id="quoteEmail" class="i" placeholder="you@company.com" />
                </div>
                <div style="margin-bottom: 16px;">
                    <label style="display:block; font-size:12px; margin-bottom:4px;" class="m">Estimated Monthly Link Volume</label>
                    <select class="i" style="background: #0f172a; color: #fff;">
                        <option>100k - 500k links/month</option>
                        <option>500k - 2 Million links/month</option>
                        <option>2M - 10 Million+ links/month</option>
                    </select>
                </div>
                <button type="button" onclick="submitQuote()" class="b" style="width: 100%; padding: 12px; font-size: 14px;">
                    Submit Quote Request ↗
                </button>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('open');
        });
    }
    modal.classList.add('open');
};

window.submitQuote = function() {
    const modal = document.getElementById('quoteModal');
    if (modal) modal.classList.remove('open');
    alert('Thank you! An Enterprise Solutions Specialist will reach out to you within 2 business hours.');
};

function renderGlobalNav() {
    const navPlaceholder = document.getElementById('siteNav');
    if (!navPlaceholder) return;

    navPlaceholder.innerHTML = `
        <div class="w" style="padding-top:20px; position:relative; z-index:9999;">
            <div class="g f" style="width:100%; align-items:center; justify-content:space-between; padding:10px 24px; border-radius:99px; box-sizing:border-box;">
                <!-- Brand Logo -->
                <a href="index.html" class="f" style="align-items:center; gap:10px; text-decoration:none;">
                    <span style="width:34px; height:34px; border-radius:50%; background:linear-gradient(135deg,#38bdf8,#2563eb); box-shadow:0 0 20px rgba(56,189,248,.6); display:inline-block"></span>
                    <span style="font-size:20px"><b style="font-style:italic">HEA</b> <span class="k">Link</span></span>
                </a>

                <!-- Desktop Mega Menu Items -->
                <div class="nav-links-desktop" style="display:flex; align-items:center; gap:6px;">
                    <!-- Platform Dropdown -->
                    <div class="nav-item">
                        <div class="nav-trigger">
                            <span>Platform</span>
                            <span class="nav-arrow">▾</span>
                        </div>
                        <div class="mega-menu" style="min-width: 820px; display: grid; grid-template-columns: 1.1fr 1.1fr 1fr; gap: 20px;">
                            <div>
                                <span class="menu-header-label">PRODUCTS</span>
                                <a href="index.html" class="menu-link-card">
                                    <div class="menu-icon-box">🔗</div>
                                    <div>
                                        <span class="menu-link-title">URL SHORTENER</span>
                                        <span class="menu-link-desc">Customize, share and track links</span>
                                    </div>
                                </a>
                                <a href="qr-code.html" class="menu-link-card">
                                    <div class="menu-icon-box">📱</div>
                                    <div>
                                        <span class="menu-link-title">QR CODE GENERATOR</span>
                                        <span class="menu-link-desc">Dynamic solutions for business needs</span>
                                    </div>
                                </a>
                                <a href="bio-pages.html" class="menu-link-card">
                                    <div class="menu-icon-box">📄</div>
                                    <div>
                                        <span class="menu-link-title">PAGES</span>
                                        <span class="menu-link-desc">Curate and track social media links</span>
                                    </div>
                                </a>
                                <a href="analytics.html" class="menu-link-card">
                                    <div class="menu-icon-box">📊</div>
                                    <div>
                                        <span class="menu-link-title">ANALYTICS</span>
                                        <span class="menu-link-desc">Track performance of short links &amp; QR</span>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <span class="menu-header-label">FEATURES</span>
                                <a href="bio-pages.html" class="menu-link-card">
                                    <div class="menu-icon-box" style="background:rgba(234,88,12,0.1); color:#f97316;">📋</div>
                                    <div>
                                        <span class="menu-link-title">LINK-IN-BIO</span>
                                        <span class="menu-link-desc">Curate links for social media profiles</span>
                                    </div>
                                </a>
                                <a href="solutions.html?tab=industry" class="menu-link-card">
                                    <div class="menu-icon-box" style="background:rgba(234,88,12,0.1); color:#f97316;">🏷️</div>
                                    <div>
                                        <span class="menu-link-title">BRANDED LINKS</span>
                                        <span class="menu-link-desc">Customize links with your brand URL</span>
                                    </div>
                                </a>
                                <a href="solutions.html?tab=cases" class="menu-link-card">
                                    <div class="menu-icon-box" style="background:rgba(234,88,12,0.1); color:#f97316;">💬</div>
                                    <div>
                                        <span class="menu-link-title">MOBILE LINKS</span>
                                        <span class="menu-link-desc">Short links for SMS messages</span>
                                    </div>
                                </a>
                                <a href="analytics.html#utm" class="menu-link-card">
                                    <div class="menu-icon-box" style="background:rgba(234,88,12,0.1); color:#f97316;">🎯</div>
                                    <div>
                                        <span class="menu-link-title">UTM CAMPAIGNS</span>
                                        <span class="menu-link-desc">Track links with UTM parameters</span>
                                    </div>
                                </a>
                                <a href="qr-code.html" class="menu-link-card">
                                    <div class="menu-icon-box" style="background:rgba(234,88,12,0.1); color:#f97316;">📇</div>
                                    <div>
                                        <span class="menu-link-title">DIGITAL BUSINESS CARDS</span>
                                        <span class="menu-link-desc">Grow network with virtual cards</span>
                                    </div>
                                </a>
                                <a href="qr-code.html" class="menu-link-card">
                                    <div class="menu-icon-box" style="background:rgba(234,88,12,0.1); color:#f97316;">📦</div>
                                    <div>
                                        <span class="menu-link-title">2D BARCODES</span>
                                        <span class="menu-link-desc">Packaging QR codes with GTIN</span>
                                    </div>
                                </a>
                            </div>

                            <div style="background:rgba(255,255,255,0.03); border-radius:14px; padding:16px;">
                                <span class="menu-header-label">INTEGRATIONS</span>
                                <div class="f" style="gap:10px; margin-bottom:14px;">
                                    <div class="integration-card">
                                        <span style="font-size:20px;">🛍️</span>
                                        <span>Shopify</span>
                                    </div>
                                    <div class="integration-card">
                                        <span style="font-size:20px;">🎨</span>
                                        <span>Canva</span>
                                    </div>
                                    <div class="integration-card">
                                        <span style="font-size:20px;">🧡</span>
                                        <span>HubSpot</span>
                                    </div>
                                </div>
                                <a href="solutions.html?tab=cases" style="font-size:12px; color:#ea580c; font-weight:600; text-decoration:none; display:block; margin-bottom:20px;">
                                    See more integrations →
                                </a>

                                <span class="menu-header-label">DISCOVER MORE</span>
                                <a href="ai.html#developers" style="display:block; font-size:12px; font-weight:600; color:#cbd5e1; margin-bottom:8px; text-decoration:none;">
                                    API &amp; DOCUMENTATION
                                </a>
                                <a href="solutions.html" style="display:block; font-size:12px; font-weight:600; color:#cbd5e1; text-decoration:none;">
                                    TRUST CENTER
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- AI Dropdown -->
                    <div class="nav-item">
                        <div class="nav-trigger">
                            <span>AI</span>
                            <span class="nav-arrow">▾</span>
                        </div>
                        <div class="mega-menu" style="min-width: 760px; display: grid; grid-template-columns: 1.2fr 0.9fr 1.1fr; gap: 20px;">
                            <div>
                                <span class="menu-header-label">AI FEATURES</span>
                                <a href="ai.html#assist" class="menu-link-card">
                                    <div class="menu-icon-box">✨</div>
                                    <div>
                                        <span class="menu-link-title">BITLY / HEA ASSIST</span>
                                        <span class="menu-link-desc">AI-powered link and QR code creation</span>
                                    </div>
                                </a>
                                <a href="ai.html#mcp" class="menu-link-card">
                                    <div class="menu-icon-box" style="background:rgba(56,189,248,0.15); color:#38bdf8;">⚡</div>
                                    <div>
                                        <span class="menu-link-title">BITLY / HEA MCP</span>
                                        <span class="menu-link-desc">Connect AI agents with Model Context Protocol</span>
                                    </div>
                                </a>
                                <a href="ai.html#llm" class="menu-link-card">
                                    <div class="menu-icon-box" style="background:rgba(124,58,237,0.15); color:#a78bfa;">🧠</div>
                                    <div>
                                        <span class="menu-link-title">LLM INTEGRATIONS</span>
                                        <span class="menu-link-desc">Bring link management to your AI assistant</span>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <span class="menu-header-label">AI RESOURCES</span>
                                <a href="solutions.html" style="display:block; font-size:12px; font-weight:600; color:#cbd5e1; margin-bottom:12px; text-decoration:none;">HELP CENTER</a>
                                <a href="ai.html#developers" style="display:block; font-size:12px; font-weight:600; color:#cbd5e1; margin-bottom:12px; text-decoration:none;">DEVELOPERS</a>
                                <a href="solutions.html" style="display:block; font-size:12px; font-weight:600; color:#cbd5e1; margin-bottom:12px; text-decoration:none;">TRUST CENTER</a>
                                <a href="solutions.html?tab=cases" style="display:block; font-size:12px; font-weight:600; color:#cbd5e1; text-decoration:none;">INTEGRATIONS MARKETPLACE</a>
                            </div>

                            <div style="background:rgba(255,255,255,0.03); border-radius:14px; padding:16px;">
                                <span class="menu-header-label">FEATURED</span>
                                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300" alt="Report" style="width:100%; height:90px; object-fit:cover; border-radius:10px; margin-bottom:10px;" />
                                <span class="t" style="font-size:10px; color:#f97316; border-color:rgba(234,88,12,0.4); margin-bottom:6px;">RESEARCH REPORT</span>
                                <a href="ai.html" style="display:block; font-size:12px; font-weight:600; color:#fff; line-height:1.4; margin-top:6px; text-decoration:none;">
                                    The Click Expectation Report: What Makes Links Worth Clicking
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Solutions Dropdown -->
                    <div class="nav-item">
                        <div class="nav-trigger">
                            <span>Solutions</span>
                            <span class="nav-arrow">▾</span>
                        </div>
                        <div class="mega-menu" style="min-width: 820px; display: grid; grid-template-columns: 180px 1.3fr 1fr; gap: 20px;">
                            <div class="solutions-tabs-col">
                                <button type="button" class="sol-tab-btn active" onmouseover="switchNavSolTab('nav-ind', this)">
                                    <span>BY INDUSTRY</span>
                                    <span>›</span>
                                </button>
                                <button type="button" class="sol-tab-btn" onmouseover="switchNavSolTab('nav-team', this)">
                                    <span>BY TEAM</span>
                                    <span>›</span>
                                </button>
                                <button type="button" class="sol-tab-btn" onmouseover="switchNavSolTab('nav-biz', this)">
                                    <span>BY BUSINESS</span>
                                    <span>›</span>
                                </button>
                            </div>

                            <div>
                                <div id="nav-ind" class="sol-tab-pane active">
                                    <span class="menu-header-label">INDUSTRIES</span>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                        <a href="solutions.html?tab=industry" class="menu-link-card"><span style="font-size:15px;">🛍️</span> <span class="menu-link-title" style="font-size:12px;">RETAIL</span></a>
                                        <a href="solutions.html?tab=industry" class="menu-link-card"><span style="font-size:15px;">📦</span> <span class="menu-link-title" style="font-size:12px;">CONSUMER GOODS</span></a>
                                        <a href="solutions.html?tab=industry" class="menu-link-card"><span style="font-size:15px;">🏨</span> <span class="menu-link-title" style="font-size:12px;">HOSPITALITY</span></a>
                                        <a href="solutions.html?tab=industry" class="menu-link-card"><span style="font-size:15px;">🎬</span> <span class="menu-link-title" style="font-size:12px;">MEDIA</span></a>
                                        <a href="solutions.html?tab=industry" class="menu-link-card"><span style="font-size:15px;">💻</span> <span class="menu-link-title" style="font-size:12px;">SOFTWARE</span></a>
                                        <a href="solutions.html?tab=industry" class="menu-link-card"><span style="font-size:15px;">🏥</span> <span class="menu-link-title" style="font-size:12px;">HEALTHCARE</span></a>
                                        <a href="solutions.html?tab=industry" class="menu-link-card"><span style="font-size:15px;">🛡️</span> <span class="menu-link-title" style="font-size:12px;">INSURANCE</span></a>
                                        <a href="solutions.html?tab=industry" class="menu-link-card"><span style="font-size:15px;">💳</span> <span class="menu-link-title" style="font-size:12px;">FINANCIAL</span></a>
                                    </div>
                                </div>

                                <div id="nav-team" class="sol-tab-pane">
                                    <span class="menu-header-label">BY TEAM</span>
                                    <div style="display:flex; flex-direction:column; gap:6px;">
                                        <a href="solutions.html?tab=team" class="menu-link-card"><span style="font-size:18px;">&lt;/&gt;</span> <div><span class="menu-link-title">DEVELOPERS</span><span class="menu-link-desc">APIs &amp; MCP tooling</span></div></a>
                                        <a href="solutions.html?tab=team" class="menu-link-card"><span style="font-size:18px;">📣</span> <div><span class="menu-link-title">MARKETING</span><span class="menu-link-desc">Campaign attribution</span></div></a>
                                        <a href="solutions.html?tab=team" class="menu-link-card"><span style="font-size:18px;">🎧</span> <div><span class="menu-link-title">CUSTOMER SERVICE</span><span class="menu-link-desc">Quick ticket resolution</span></div></a>
                                    </div>
                                </div>

                                <div id="nav-biz" class="sol-tab-pane">
                                    <span class="menu-header-label">BY BUSINESS</span>
                                    <div style="display:flex; flex-direction:column; gap:6px;">
                                        <a href="solutions.html?tab=business" class="menu-link-card"><span style="font-size:18px;">🏪</span> <div><span class="menu-link-title">SMALL BUSINESS</span><span class="menu-link-desc">QR &amp; bio pages</span></div></a>
                                        <a href="solutions.html?tab=business" class="menu-link-card"><span style="font-size:18px;">🏢</span> <div><span class="menu-link-title">MIDMARKET</span><span class="menu-link-desc">Custom subdomains</span></div></a>
                                        <a href="solutions.html?tab=business" class="menu-link-card"><span style="font-size:18px;">🏛️</span> <div><span class="menu-link-title">ENTERPRISE</span><span class="menu-link-desc">SSO &amp; 99.99% SLA</span></div></a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span class="menu-header-label">USE CASES</span>
                                <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:18px;">
                                    <a href="solutions.html?tab=cases" style="font-size:11px; color:#cbd5e1; text-decoration:none;">ORDER CONFIRMATION</a>
                                    <a href="solutions.html?tab=cases" style="font-size:11px; color:#cbd5e1; text-decoration:none;">SURVEYS AND FEEDBACK</a>
                                    <a href="solutions.html?tab=cases" style="font-size:11px; color:#cbd5e1; text-decoration:none;">PRODUCT PACKAGING</a>
                                    <a href="solutions.html?tab=cases" style="font-size:11px; color:#cbd5e1; text-decoration:none;">PRINT ADVERTISING</a>
                                </div>

                                <span class="menu-header-label">WHY HEA LINK?</span>
                                <div style="display:flex; flex-direction:column; gap:6px;">
                                    <a href="solutions.html" style="font-size:11px; color:#cbd5e1; text-decoration:none;">INTEGRATE WITH HEA</a>
                                    <a href="pricing.html" style="font-size:11px; color:#cbd5e1; text-decoration:none;">COMPARE BITLY</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pricing Direct Link -->
                    <a href="pricing.html" class="nav-trigger" style="text-decoration:none;">Pricing</a>

                    <!-- Resources Dropdown -->
                    <div class="nav-item">
                        <div class="nav-trigger">
                            <span>Resources</span>
                            <span class="nav-arrow">▾</span>
                        </div>
                        <div class="mega-menu" style="min-width: 320px;">
                            <span class="menu-header-label">LEARN &amp; GROW</span>
                            <a href="ai.html#developers" class="menu-link-card"><div><span class="menu-link-title">Developer Hub &amp; API</span><span class="menu-link-desc">SDKs &amp; MCP servers</span></div></a>
                            <a href="solutions.html" class="menu-link-card"><div><span class="menu-link-title">Case Studies</span><span class="menu-link-desc">How brands scale clicks</span></div></a>
                            <a href="pricing.html" class="menu-link-card"><div><span class="menu-link-title">Plan Comparison</span><span class="menu-link-desc">Find your feature tier</span></div></a>
                        </div>
                    </div>
                </div>

                <!-- Right Action Buttons -->
                <div class="f" style="gap:10px; align-items:center;">
                    <a href="login.html" style="font-size:14px; color:#eaf0ff; font-weight:500; text-decoration:none;">Log in</a>
                    <button type="button" onclick="openQuoteModal()" class="n" style="padding:8px 14px; font-size:13px;">Get a Quote</button>
                    <a href="pricing.html" class="b" style="padding:8px 16px; font-size:13px; text-decoration:none;">Sign up Free</a>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Render Mega Menu Navigation on any page containing #siteNav
    renderGlobalNav();

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

    // Tab Switching (Short Link vs QR Code vs Bulk)
    const tabBulk = document.getElementById('tabBulk');
    const singleWrap = document.getElementById('singleShortenerWrap');
    const bulkWrap = document.getElementById('bulkShortenerWrap');

    if (tabLink && tabQR) {
        tabLink.addEventListener('click', () => {
            tabLink.classList.add('tab-active');
            tabQR.classList.remove('tab-active');
            if (tabBulk) tabBulk.classList.remove('tab-active');
            if (singleWrap) singleWrap.style.display = 'block';
            if (bulkWrap) bulkWrap.style.display = 'none';
            if (qrPreviewContainer) qrPreviewContainer.style.display = 'none';
        });

        tabQR.addEventListener('click', () => {
            tabQR.classList.add('tab-active');
            tabLink.classList.remove('tab-active');
            if (tabBulk) tabBulk.classList.remove('tab-active');
            if (singleWrap) singleWrap.style.display = 'block';
            if (bulkWrap) bulkWrap.style.display = 'none';
            showQrCode();
        });

        if (tabBulk) {
            tabBulk.addEventListener('click', () => {
                tabBulk.classList.add('tab-active');
                tabLink.classList.remove('tab-active');
                tabQR.classList.remove('tab-active');
                if (singleWrap) singleWrap.style.display = 'none';
                if (bulkWrap) bulkWrap.style.display = 'block';
                if (qrPreviewContainer) qrPreviewContainer.style.display = 'none';
            });
        }
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

    let currentShortUrl = '';
    let currentShortCode = 'summer-sale';

    function getCurrentRedirectUrl() {
        if (currentShortUrl) return currentShortUrl;
        const base = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '');
        return `${base}/r.html?c=${encodeURIComponent(currentShortCode)}`;
    }

    // URL Shortener Form Submit
    if (shortenerForm) {
        shortenerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            let rawUrl = urlInput.value.trim();
            const customVal = customInput ? customInput.value.trim() : '';

            if (!rawUrl) {
                showToast('⚠️ Please enter a destination URL.', true);
                urlInput.focus();
                return;
            }

            // Normalization: Ensure http:// or https:// so it never fails
            if (!/^https?:\/\//i.test(rawUrl)) {
                rawUrl = 'https://' + rawUrl;
            }

            shortenBtn.disabled = true;
            const originalText = shortenBtn.textContent;
            shortenBtn.textContent = 'Shortening...';

            let links = getStoredLinks();
            let code = customVal;

            if (code) {
                if (!/^[A-Za-z0-9_-]{3,32}$/.test(code)) {
                    showToast('⚠️ Custom back-half must be 3-32 characters.', true);
                    shortenBtn.disabled = false;
                    shortenBtn.textContent = originalText;
                    return;
                }
                if (links.some(l => l.code && l.code.toLowerCase() === code.toLowerCase())) {
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

            // Generate genuinely short link via free CORS shortener API (da.gd)
            let shortUrl = '';
            try {
                const apiEndpoint = customVal
                    ? `https://da.gd/shorten?url=${encodeURIComponent(rawUrl)}&shorturl=${encodeURIComponent(customVal)}`
                    : `https://da.gd/shorten?url=${encodeURIComponent(rawUrl)}`;

                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 3500);
                const resp = await fetch(apiEndpoint, { signal: controller.signal });
                clearTimeout(timeoutId);

                if (resp.ok) {
                    const text = (await resp.text()).trim();
                    if (text.startsWith('http://') || text.startsWith('https://')) {
                        shortUrl = text;
                    }
                }
            } catch (err) {
                console.log('Shortener API fallback used:', err);
            }

            // Universal fallback: encodes URL parameter so it works across ANY browser / device
            if (!shortUrl) {
                const base = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '');
                shortUrl = `${base}/r.html?u=${encodeURIComponent(rawUrl)}&c=${encodeURIComponent(code)}`;
            }

            currentShortUrl = shortUrl;

            // Advanced options extraction
            const tagsVal = document.getElementById('tagsInput') ? document.getElementById('tagsInput').value.trim() : '';
            const passwordVal = document.getElementById('passwordInput') ? document.getElementById('passwordInput').value.trim() : '';
            const expiryVal = document.getElementById('expiryInput') ? document.getElementById('expiryInput').value.trim() : '';
            const mobileUrlVal = document.getElementById('mobileUrlInput') ? document.getElementById('mobileUrlInput').value.trim() : '';
            const previewVal = document.getElementById('previewCheck') ? document.getElementById('previewCheck').checked : false;

            const newLink = {
                id: Date.now(),
                code: code,
                short_url: shortUrl,
                long_url: rawUrl,
                tags: tagsVal ? tagsVal.split(',').map(t => t.trim()).filter(Boolean) : [],
                password: passwordVal,
                expiry: expiryVal,
                mobile_url: mobileUrlVal,
                preview: previewVal,
                clicks: 0,
                mobile_clicks: 0,
                desktop_clicks: 0,
                created_at: new Date().toISOString()
            };

            links.unshift(newLink);
            saveStoredLinks(links);

            // Update UI Display
            if (shortUrlDisplay) {
                shortUrlDisplay.textContent = shortUrl;
                if (shortUrlDisplay.tagName.toLowerCase() === 'a') {
                    shortUrlDisplay.href = shortUrl;
                }
            }
            updateQrCode(shortUrl);

            shortenBtn.disabled = false;
            shortenBtn.textContent = originalText;
            showToast(`✨ Link shortened: ${shortUrl}`);

            if (tabQR && tabQR.classList.contains('tab-active')) {
                showQrCode();
            }
        });
    }

    // Bulk Shortener Logic
    const btnRunBulk = document.getElementById('btnRunBulk');
    const bulkUrlsInput = document.getElementById('bulkUrlsInput');
    const bulkResultsArea = document.getElementById('bulkResultsArea');
    const bulkResultsTbody = document.getElementById('bulkResultsTbody');
    const btnExportBulkCsv = document.getElementById('btnExportBulkCsv');
    let bulkGeneratedLinks = [];

    if (btnRunBulk) {
        btnRunBulk.addEventListener('click', () => {
            const lines = bulkUrlsInput.value.split('\n').map(l => l.trim()).filter(Boolean);
            if (lines.length === 0) {
                showToast('⚠️ Please enter at least one URL.', true);
                return;
            }

            btnRunBulk.disabled = true;
            btnRunBulk.textContent = 'Batch Shortening...';
            bulkResultsTbody.innerHTML = '';
            bulkGeneratedLinks = [];
            let links = getStoredLinks();

            for (let line of lines) {
                let target = line;
                if (!/^https?:\/\//i.test(target)) target = 'https://' + target;

                let code = makeSlug();
                while (links.some(l => l.code === code)) {
                    code = makeSlug();
                }

                const base = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '');
                const short = `${base}/r.html?c=${encodeURIComponent(code)}&u=${encodeURIComponent(target)}`;

                const item = {
                    id: Date.now() + Math.random(),
                    code: code,
                    short_url: short,
                    long_url: target,
                    clicks: 0,
                    created_at: new Date().toISOString()
                };

                links.unshift(item);
                bulkGeneratedLinks.push(item);

                const tr = document.createElement('tr');
                tr.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
                tr.innerHTML = `
                    <td style="padding:8px;max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${target}</td>
                    <td style="padding:8px;"><a href="${short}" target="_blank" style="color:#60a5fa;font-weight:600;">/${code}</a></td>
                    <td style="padding:8px;text-align:right;"><button class="n" style="padding:4px 8px;font-size:11px;" onclick="navigator.clipboard.writeText('${short}');showToast('📋 Copied!')">Copy</button></td>
                `;
                bulkResultsTbody.appendChild(tr);
            }

            saveStoredLinks(links);
            bulkResultsArea.style.display = 'block';
            if (btnExportBulkCsv) btnExportBulkCsv.style.display = 'inline-flex';
            btnRunBulk.disabled = false;
            btnRunBulk.textContent = '⚡ Shorten All';
            showToast(`✨ ${bulkGeneratedLinks.length} links batch shortened!`);
        });
    }

    if (btnExportBulkCsv) {
        btnExportBulkCsv.addEventListener('click', () => {
            if (bulkGeneratedLinks.length === 0) return;
            let csvContent = 'data:text/csv;charset=utf-8,Original URL,Short Code,Short URL,Created Date\n';
            bulkGeneratedLinks.forEach(l => {
                csvContent += `"${l.long_url}","${l.code}","${l.short_url}","${l.created_at}"\n`;
            });
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', `hea_bulk_links_${Date.now()}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Copy to Clipboard
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const redirectUrl = currentShortUrl || getCurrentRedirectUrl();
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
                showToast(`📋 Copied: ${redirectUrl}`);
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
