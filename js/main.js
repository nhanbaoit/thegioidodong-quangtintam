/**
 * ĐỒ ĐỒNG QUANG TÍN TÂM
 * Interactive Core Application Logic
 * Adheres to WCAG 2.2 AA & Modern Web Guidelines
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     PRODUCT DATABASE & STATE
     ========================================================================== */
  const PRODUCTS = [
    {
      id: 'p1',
      sku: 'ĐTH-60TK',
      title: 'Bộ Đỉnh Đồng Ngũ Sự Khảm Tam Khí Cao Cấp 60cm',
      category: 'do-tho',
      categoryName: 'Đồ thờ cúng bằng đồng',
      price: 28500000,
      oldPrice: 32000000,
      rating: 5.0,
      reviewsCount: 48,
      dimensions: 'Cao 60cm (thích hợp ban thờ 1m75 - 1m97)',
      weight: 'Khoảng 28kg',
      warranty: '20 năm độ bền màu, bảo hành trọn đời cốt đồng',
      desc: 'Chế tác thủ công từ đồng đỏ thanh khiết, bề mặt khảm tam khí (Bạc lá, đồng đỏ, đồng vàng). Thần thái rồng chầu, lân vờn cầu sống động, chạm khắc hoa văn chữ Thọ, Phúc chuẩn phong thủy phòng thờ gia tiên.',
      badge: 'Bán Chạy',
      badgeClass: 'badge-hot',
      img: 'assets/dinh-dong-co.jpg',
      svg: `<img src="assets/dinh-dong-co.jpg" alt="Bộ Đỉnh Đồng Ngũ Sự Khảm Tam Khí" style="width:100%;height:100%;object-fit:cover;">`
    },
    {
      id: 'p2',
      sku: 'TPT-TC81',
      title: 'Tượng Phật Thích Ca Mâu Ni Ngồi Đài Sen Đồng Đỏ 81cm',
      category: 'tuong-dong',
      categoryName: 'Tượng đồng mỹ nghệ',
      price: 45000000,
      oldPrice: 50000000,
      rating: 5.0,
      reviewsCount: 35,
      dimensions: 'Cao 81cm, ngang 58cm',
      weight: 'Khoảng 45kg',
      warranty: 'Bảo hành trọn đời',
      desc: 'Tượng Phật đúc đồng đỏ nguyên chất, dát vàng 9999 đài sen và y áo trang nghiêm. Thần thái diện Phật từ bi, hỷ xả, đem lại bình an và cát tường cho gia đạo, đạo tràng tu học.',
      badge: 'Dát Vàng 9999',
      badgeClass: 'badge-gold',
      img: 'assets/tuong-phat-vang.jpg',
      svg: `<img src="assets/tuong-phat-vang.jpg" alt="Tượng Phật Thích Ca Mâu Ni" style="width:100%;height:100%;object-fit:cover;">`
    },
    {
      id: 'p3',
      sku: 'TRD-TB230',
      title: 'Tranh Đồng Thuận Buồm Xuôi Gió Khung Gỗ Hương 2m3x1m2',
      category: 'tranh-dong',
      categoryName: 'Tranh đồng mạ vàng',
      price: 18800000,
      oldPrice: 21500000,
      rating: 4.9,
      reviewsCount: 52,
      dimensions: 'Dài 230cm x Rộng 120cm',
      weight: 'Khoảng 32kg (kèm khung kính)',
      warranty: '15 năm độ sáng bóng',
      desc: 'Bức tranh đồng liền tấm dày 8 rem chạm thúc nổi thủ công sắc nét. Con thuyền vàng no gió vượt sóng lớn tượng trưng cho sự hanh thông, tài vận dồi dào, thăng quan tiến chức.',
      badge: 'Mẫu Mới',
      badgeClass: 'badge-new',
      img: 'assets/trong-dong-detail.jpg',
      svg: `<img src="assets/trong-dong-detail.jpg" alt="Tranh Đồng Thuận Buồm Xuôi Gió" style="width:100%;height:100%;object-fit:cover;">`
    },
    {
      id: 'p4',
      sku: 'TRD-DS50',
      title: 'Trống Đồng Đông Sơn Đúc Thủ Công Đường Kính 50cm',
      category: 'trong-dong',
      categoryName: 'Trống đồng Đông Sơn',
      price: 22000000,
      oldPrice: 25000000,
      rating: 5.0,
      reviewsCount: 29,
      dimensions: 'Đường kính mặt 50cm, chiều cao 42cm',
      weight: 'Khoảng 25kg',
      warranty: 'Bảo hành trọn đời',
      desc: 'Mô phỏng nguyên bản hoa văn Trống đồng Ngọc Lũ - Đông Sơn chuẩn tỉ lệ di sản quốc gia. Ngôi sao 14 cánh giữa tâm, đàn chim Lạc bay ngược chiều kim đồng hồ, thể hiện văn hóa nguồn cội oai hùng.',
      badge: 'Quốc Bảo',
      badgeClass: 'badge-hot',
      img: 'assets/trong-dong.jpg',
      svg: `<img src="assets/trong-dong.jpg" alt="Trống Đồng Đông Sơn" style="width:100%;height:100%;object-fit:cover;">`
    },
    {
      id: 'p5',
      sku: 'TBH-65D',
      title: 'Tượng Bác Hồ Bán Thân Đồng Đỏ Cao 65cm Chuẩn Thần Thái',
      category: 'tuong-dong',
      categoryName: 'Tượng danh nhân',
      price: 14500000,
      oldPrice: 16500000,
      rating: 5.0,
      reviewsCount: 41,
      dimensions: 'Cao 65cm, vai rộng 46cm',
      weight: 'Khoảng 22kg',
      warranty: 'Bảo hành 20 năm',
      desc: 'Tượng đồng đỏ đúc liền khối nguyên chất, khuôn mặt và đôi mắt sáng ngời toát lên thần thái nhân từ, bao dung của vị Cha già dân tộc. Đạt chuẩn quy cách đặt tại hội trường, cơ quan, phòng truyền thống.',
      badge: 'Tượng Danh Nhân',
      badgeClass: 'badge-gold',
      img: 'assets/tuong-tran-hung-dao.jpg',
      svg: `<img src="assets/tuong-tran-hung-dao.jpg" alt="Tượng Bác Hồ Bán Thân" style="width:100%;height:100%;object-fit:cover;">`
    },
    {
      id: 'p6',
      sku: 'QT-CMC24',
      title: 'Mô Hình Chùa Một Cột Bằng Đồng Mạ Vàng 24K Hộp Kính Cao Cấp',
      category: 'qua-tang',
      categoryName: 'Quà tặng lưu niệm',
      price: 4200000,
      oldPrice: 5000000,
      rating: 4.9,
      reviewsCount: 64,
      dimensions: 'Dài 26cm x Rộng 26cm x Cao 32cm (kèm đế gỗ và hộp kính)',
      weight: 'Khoảng 3.5kg',
      warranty: '10 năm không bay màu',
      desc: 'Tác phẩm thủ công đúc đồng mạ vàng 24K tinh tế, tái hiện đóa hoa sen nghìn năm Thăng Long - Hà Nội. Là món quà đối ngoại, tri ân đối tác khách hàng và việt kiều ý nghĩa sâu sắc.',
      badge: 'Quà Ngoại Giao',
      badgeClass: 'badge-new',
      img: 'assets/cuu-dinh-hue.jpg',
      svg: `<img src="assets/cuu-dinh-hue.jpg" alt="Mô Hình Chùa Một Cột Mạ Vàng" style="width:100%;height:100%;object-fit:cover;">`
    }
  ];

  // Helper currency formatter
  const formatVND = (num) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);

  /* ==========================================================================
     STICKY HEADER & BACK TO TOP
     ========================================================================== */
  const header = document.getElementById('mainHeader') || document.querySelector('.main-header');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const headerEl = header || document.getElementById('mainHeader') || document.querySelector('.main-header');
    if (headerEl && headerEl.classList) {
      if (scrollY > 50) {
        headerEl.classList.add('scrolled');
      } else {
        headerEl.classList.remove('scrolled');
      }
    }

    const btt = backToTopBtn || document.getElementById('backToTopBtn');
    if (btt && btt.classList) {
      if (scrollY > 350) {
        btt.classList.add('visible');
      } else {
        btt.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     HERO SLIDER
     ========================================================================== */
  const slides = document.querySelectorAll('.hero-slider .slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.getElementById('slidePrevBtn');
  const nextBtn = document.getElementById('slideNextBtn');
  const heroSlider = document.querySelector('.hero-slider');

  let currentSlide = 0;
  let slideInterval = null;
  const slideCount = slides.length;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    dots[currentSlide].setAttribute('aria-selected', 'false');

    currentSlide = (index + slideCount) % slideCount;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    dots[currentSlide].setAttribute('aria-selected', 'true');
  }

  function startSlideTimer() {
    stopSlideTimer();
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);
  }

  function stopSlideTimer() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
      startSlideTimer();
    });

    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
      startSlideTimer();
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startSlideTimer();
      });
    });

    // Pause on mouse hover & keyboard focus
    heroSlider.addEventListener('mouseenter', stopSlideTimer);
    heroSlider.addEventListener('mouseleave', startSlideTimer);
    heroSlider.addEventListener('focusin', stopSlideTimer);
    heroSlider.addEventListener('focusout', startSlideTimer);

    // Touch swipe support
    let touchStartX = 0;
    heroSlider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSlider.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        goToSlide(currentSlide + 1);
        startSlideTimer();
      } else if (touchEndX - touchStartX > 50) {
        goToSlide(currentSlide - 1);
        startSlideTimer();
      }
    }, { passive: true });

    startSlideTimer();
  }

  /* ==========================================================================
     CATEGORY PILL BUTTON DROPDOWN ("☰ Danh mục")
     ========================================================================== */
  const categoryBtn = document.getElementById('categoryMenuBtn');
  const categoryDropdown = document.getElementById('categoryDropdown');

  if (categoryBtn && categoryDropdown) {
    categoryBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = categoryDropdown.classList.contains('open');
      if (isOpen) {
        closeCategoryDropdown();
      } else {
        openCategoryDropdown();
      }
    });

    function openCategoryDropdown() {
      categoryDropdown.classList.add('open');
      categoryBtn.setAttribute('aria-expanded', 'true');
    }

    function closeCategoryDropdown() {
      categoryDropdown.classList.remove('open');
      categoryBtn.setAttribute('aria-expanded', 'false');
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!categoryDropdown.contains(e.target) && !categoryBtn.contains(e.target)) {
        closeCategoryDropdown();
      }
    });

    // Close on Esc key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && categoryDropdown.classList.contains('open')) {
        closeCategoryDropdown();
        categoryBtn.focus();
      }
    });
  }

  /* ==========================================================================
     MOBILE NAVIGATION DRAWER (ACCESSIBLE INERT & FOCUS)
     ========================================================================== */
  const mobileMenuOpenBtn = document.getElementById('mobileMenuOpenBtn');
  const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const mainContent = document.querySelector('main');

  function openMobileDrawer() {
    mobileDrawer.classList.add('open');
    mobileDrawerOverlay.classList.add('active');
    mobileDrawer.removeAttribute('inert');
    mobileMenuOpenBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    if (mainContent) {
      mainContent.setAttribute('inert', '');
    }

    // Set focus into drawer
    setTimeout(() => {
      mobileMenuCloseBtn.focus();
    }, 100);
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('open');
    mobileDrawerOverlay.classList.remove('active');
    mobileDrawer.setAttribute('inert', '');
    mobileMenuOpenBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    if (mainContent) {
      mainContent.removeAttribute('inert');
    }

    mobileMenuOpenBtn.focus();
  }

  if (mobileMenuOpenBtn && mobileDrawer) {
    mobileMenuOpenBtn.addEventListener('click', openMobileDrawer);
    mobileMenuCloseBtn.addEventListener('click', closeMobileDrawer);
    mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
      }
    });

    // Submenu accordions in drawer
    const toggleSubBtns = mobileDrawer.querySelectorAll('.drawer-toggle-sub');
    toggleSubBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const subList = btn.closest('.drawer-has-sub').querySelector('.drawer-sub-list');
        const isExpanded = subList.classList.toggle('open');
        btn.textContent = isExpanded ? '−' : '+';
      });
    });

    // Close drawer when link clicked
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
  }

  /* ==========================================================================
     PRODUCT FILTER TABS
     ========================================================================== */
  const productTabs = document.querySelectorAll('.product-tabs .tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  function filterProducts(category) {
    productCards.forEach(card => {
      const cardCat = card.dataset.category;
      if (category === 'all' || cardCat === category) {
        card.style.display = 'flex';
        card.style.animation = 'fadeIn 300ms ease';
      } else {
        card.style.display = 'none';
      }
    });
  }

  productTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      productTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.dataset.filter;
      filterProducts(filter);
    });
  });

  // Listen for category links in Header dropdown & Drawer
  document.querySelectorAll('[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      const filter = link.dataset.filter;
      const targetTab = document.querySelector(`.product-tabs .tab-btn[data-filter="${filter}"]`);
      if (targetTab) {
        targetTab.click();
      }
    });
  });

  /* ==========================================================================
     PROJECT TABS FILTER
     ========================================================================== */
  const projTabs = document.querySelectorAll('.project-tabs .proj-tab');
  const projectCards = document.querySelectorAll('.project-card');

  projTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      projTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.dataset.proj;
      projectCards.forEach(card => {
        const cardCat = card.dataset.projCat;
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     QUICK VIEW MODAL (<dialog>)
     ========================================================================== */
  const quickViewDialog = document.getElementById('quickViewDialog');
  const dialogCloseBtn = document.getElementById('dialogCloseBtn');
  const dialogImgContainer = document.getElementById('dialogImageContainer');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogSku = document.getElementById('dialogSku');
  const dialogPriceCurrent = document.getElementById('dialogPriceCurrent');
  const dialogPriceOld = document.getElementById('dialogPriceOld');
  const dialogDesc = document.getElementById('dialogDesc');
  const modalQtyInput = document.getElementById('modalQtyInput');
  const modalQtyMinus = document.getElementById('modalQtyMinus');
  const modalQtyPlus = document.getElementById('modalQtyPlus');
  const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');

  let activeProductForModal = null;

  function openQuickView(productId) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;

    activeProductForModal = p;
    dialogSku.textContent = `Mã: ${p.sku}`;
    dialogTitle.textContent = p.title;
    dialogPriceCurrent.textContent = formatVND(p.price);
    dialogPriceOld.textContent = formatVND(p.oldPrice);
    dialogDesc.textContent = p.desc;
    dialogImgContainer.innerHTML = p.svg;
    modalQtyInput.value = 1;

    quickViewDialog.showModal();
  }

  if (dialogCloseBtn && quickViewDialog) {
    dialogCloseBtn.addEventListener('click', () => {
      quickViewDialog.close();
    });

    // Close when clicking modal backdrop
    quickViewDialog.addEventListener('click', (e) => {
      if (e.target === quickViewDialog) {
        quickViewDialog.close();
      }
    });

    // Quantity modifiers inside modal
    modalQtyMinus.addEventListener('click', () => {
      const cur = parseInt(modalQtyInput.value, 10) || 1;
      if (cur > 1) modalQtyInput.value = cur - 1;
    });

    modalQtyPlus.addEventListener('click', () => {
      const cur = parseInt(modalQtyInput.value, 10) || 1;
      modalQtyInput.value = cur + 1;
    });

    modalAddToCartBtn.addEventListener('click', () => {
      if (activeProductForModal) {
        const qty = parseInt(modalQtyInput.value, 10) || 1;
        addToCart(activeProductForModal.id, qty);
        quickViewDialog.close();
        openCartDrawer();
      }
    });
  }

  // Bind Quick View buttons on product cards
  document.querySelectorAll('.btn-quick-view, .product-title-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.dataset.product;
      openQuickView(pId);
    });
  });

  /* ==========================================================================
     SHOPPING CART MANAGEMENT (LOCAL STORAGE & SLIDE DRAWER)
     ========================================================================== */
  const cartOpenBtn = document.getElementById('cartOpenBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartBadgeCount = document.getElementById('cartBadgeCount');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartEmptyMsg = document.getElementById('cartEmptyMsg');
  const cartDrawerFooter = document.getElementById('cartDrawerFooter');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartGrandTotal = document.getElementById('cartGrandTotal');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');

  // Initial cart state
  let cart = [
    { productId: 'p1', quantity: 1 },
    { productId: 'p6', quantity: 1 }
  ];

  try {
    const saved = localStorage.getItem('quangtintam_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (err) {
    console.warn('LocalStorage error:', err);
  }

  function saveCart() {
    try {
      localStorage.setItem('quangtintam_cart', JSON.stringify(cart));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }
    renderCart();
  }

  function addToCart(productId, quantity = 1) {
    const existing = cart.find(item => item.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }
    saveCart();

    const product = PRODUCTS.find(p => p.id === productId);
    showToast(`Đã thêm "${product ? product.title : 'sản phẩm'}" vào giỏ hàng!`);
  }

  function updateItemQty(productId, delta) {
    const item = cart.find(i => i.productId === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.productId !== productId);
    }
    saveCart();
  }

  function removeItem(productId) {
    cart = cart.filter(i => i.productId !== productId);
    saveCart();
  }

  function renderCart() {
    cartItemsList.innerHTML = '';
    let totalItems = 0;
    let totalMoney = 0;

    if (cart.length === 0) {
      cartEmptyMsg.style.display = 'block';
      cartDrawerFooter.style.display = 'none';
      cartBadgeCount.textContent = '0';
      return;
    }

    cartEmptyMsg.style.display = 'none';
    cartDrawerFooter.style.display = 'block';

    cart.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (!product) return;

      totalItems += item.quantity;
      totalMoney += product.price * item.quantity;

      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        <div class="cart-item-thumb">
          ${product.svg}
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-title">${product.title}</h4>
          <div class="cart-item-price">${formatVND(product.price)}</div>
          <div class="cart-item-controls">
            <div class="cart-item-qty">
              <button class="cart-qty-btn cart-qty-minus" data-id="${product.id}" aria-label="Giảm">-</button>
              <span>${item.quantity}</span>
              <button class="cart-qty-btn cart-qty-plus" data-id="${product.id}" aria-label="Tăng">+</button>
            </div>
            <button class="cart-item-remove" data-id="${product.id}">Xóa</button>
          </div>
        </div>
      `;
      cartItemsList.appendChild(li);
    });

    cartBadgeCount.textContent = totalItems.toString();
    cartSubtotal.textContent = formatVND(totalMoney);
    cartGrandTotal.textContent = formatVND(totalMoney);

    // Bind item buttons
    cartItemsList.querySelectorAll('.cart-qty-minus').forEach(b => {
      b.addEventListener('click', () => updateItemQty(b.dataset.id, -1));
    });

    cartItemsList.querySelectorAll('.cart-qty-plus').forEach(b => {
      b.addEventListener('click', () => updateItemQty(b.dataset.id, 1));
    });

    cartItemsList.querySelectorAll('.cart-item-remove').forEach(b => {
      b.addEventListener('click', () => removeItem(b.dataset.id));
    });
  }

  function openCartDrawer() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('active');
    cartDrawer.removeAttribute('inert');
    document.body.style.overflow = 'hidden';
    cartCloseBtn.focus();
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('active');
    cartDrawer.setAttribute('inert', '');
    document.body.style.overflow = '';
    cartOpenBtn.focus();
  }

  if (cartOpenBtn && cartDrawer) {
    cartOpenBtn.addEventListener('click', openCartDrawer);
    cartCloseBtn.addEventListener('click', closeCartDrawer);
    cartOverlay.addEventListener('click', closeCartDrawer);

    if (continueShoppingBtn) {
      continueShoppingBtn.addEventListener('click', closeCartDrawer);
    }

    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        if (confirm('Quý khách có chắc chắn muốn xóa toàn bộ sản phẩm khỏi giỏ hàng?')) {
          cart = [];
          saveCart();
        }
      });
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        closeCartDrawer();
        const contactSection = document.getElementById('lien-he');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          const noteArea = document.getElementById('customerNote');
          if (noteArea) {
            noteArea.value = `Quý khách quan tâm giỏ hàng gồm: ${cart.map(i => {
              const p = PRODUCTS.find(item => item.id === i.productId);
              return `${p ? p.title : ''} (SL: ${i.quantity})`;
            }).join(', ')}. Xin liên hệ báo giá và vận chuyển!`;
          }
        }
        showToast('Vui lòng hoàn tất thông tin liên hệ để được hỗ trợ báo giá và giao hàng!');
      });
    }

    // Direct add-to-cart clicks on product cards
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const pId = btn.dataset.product;
        addToCart(pId, 1);
        openCartDrawer();
      });
    });

    renderCart();
  }

  /* ==========================================================================
     LIVE SEARCH MODAL (<dialog>)
     ========================================================================== */
  const searchOpenBtn = document.getElementById('searchOpenBtn');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  const searchDialog = document.getElementById('searchDialog');
  const liveSearchInput = document.getElementById('liveSearchInput');
  const searchResultsBox = document.getElementById('searchResultsBox');

  if (searchOpenBtn && searchDialog) {
    searchOpenBtn.addEventListener('click', () => {
      searchDialog.showModal();
      liveSearchInput.value = '';
      liveSearchInput.focus();
    });

    searchCloseBtn.addEventListener('click', () => {
      searchDialog.close();
    });

    searchDialog.addEventListener('click', (e) => {
      if (e.target === searchDialog) {
        searchDialog.close();
      }
    });

    liveSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        searchResultsBox.innerHTML = '<p class="search-tip">Gợi ý: <em>Đỉnh đồng ngũ sự, Tượng Phật Thích Ca, Tranh Thuận Buồm Xuôi Gió, Trống đồng Đông Sơn</em></p>';
        return;
      }

      const matches = PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        searchResultsBox.innerHTML = `<p class="search-tip">Không tìm thấy sản phẩm phù hợp với từ khóa "<strong>${q}</strong>". Quý khách vui lòng thử từ khóa khác hoặc liên hệ hotline 0984.888.888.</p>`;
      } else {
        searchResultsBox.innerHTML = `
          <ul style="display:flex; flex-direction:column; gap:8px;">
            ${matches.map(m => `
              <li style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:#f9f7f3; border-radius:4px; gap:12px;">
                <div style="display:flex; align-items:center; gap:10px;">
                  ${m.img ? `<img src="${m.img}" alt="${m.title}" style="width:40px; height:40px; object-fit:cover; border-radius:4px; flex-shrink:0;">` : ''}
                  <div>
                    <strong style="font-size:13px; color:#111; display:block;">${m.title}</strong>
                    <div style="font-size:12px; color:#dc2626; font-weight:bold;">${formatVND(m.price)}</div>
                  </div>
                </div>
                <button class="btn-micro search-result-view" data-id="${m.id}" style="cursor:pointer; flex-shrink:0;">Xem</button>
              </li>
            `).join('')}
          </ul>
        `;

        searchResultsBox.querySelectorAll('.search-result-view').forEach(b => {
          b.addEventListener('click', () => {
            searchDialog.close();
            openQuickView(b.dataset.id);
          });
        });
      }
    });
  }

  /* ==========================================================================
     CONSULTATION / LEAD CAPTURE FORM WITH ACCESSIBLE VALIDATION
     ========================================================================== */
  const consultForm = document.getElementById('consultForm');
  const fullNameInput = document.getElementById('fullName');
  const phoneInput = document.getElementById('phoneNumber');
  const fullNameError = document.getElementById('fullNameError');
  const phoneNumberError = document.getElementById('phoneNumberError');
  const formStatus = document.getElementById('formStatus');

  if (consultForm) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      fullNameError.textContent = '';
      phoneNumberError.textContent = '';
      formStatus.className = 'form-status';
      formStatus.textContent = '';

      // Validate name
      if (!fullNameInput.value.trim()) {
        fullNameError.textContent = 'Vui lòng nhập họ và tên của quý khách.';
        fullNameInput.focus();
        hasError = true;
      }

      // Validate VN phone number format
      const phoneVal = phoneInput.value.trim().replace(/\s+/g, '');
      const phoneRegex = /^(0|84)(2|3|5|7|8|9)[0-9]{8}$/;
      if (!phoneVal) {
        phoneNumberError.textContent = 'Vui lòng nhập số điện thoại để nghệ nhân tiện liên hệ.';
        if (!hasError) phoneInput.focus();
        hasError = true;
      } else if (!phoneRegex.test(phoneVal)) {
        phoneNumberError.textContent = 'Số điện thoại không hợp lệ (ví dụ: 0984888888).';
        if (!hasError) phoneInput.focus();
        hasError = true;
      }

      if (hasError) return;

      // Mock submission state
      const submitBtn = consultForm.querySelector('.btn-submit-quote');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Đang gửi thông tin...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        consultForm.reset();

        formStatus.className = 'form-status success';
        formStatus.textContent = '✓ Cảm ơn quý khách! Cơ sở Đồ Đồng Quang Tín Tâm đã tiếp nhận yêu cầu và sẽ gọi điện tư vấn trong vòng 15 phút.';
        showToast('Gửi yêu cầu tư vấn thành công! Chúng tôi sẽ liên hệ lại ngay.');
      }, 1000);
    });
  }

  /* ==========================================================================
     VIDEO MODAL TRIGGER
     ========================================================================== */
  const aboutVideoBtn = document.getElementById('aboutVideoBtn');
  if (aboutVideoBtn) {
    aboutVideoBtn.addEventListener('click', () => {
      showToast('Đang kết nối phim tư liệu làng nghề đúc đồng Ý Yên Nam Định...');
    });
  }

  /* ==========================================================================
     TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 300ms ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
});
