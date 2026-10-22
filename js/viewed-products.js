/**
 * ĐỒ ĐỒNG QUANG TÍN TÂM
 * Quản lý lịch sử "Sản phẩm đã xem" (LocalStorage Controller)
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'quangtintam_viewed_products';
  const MAX_ITEMS = 20;

  // Lấy danh sách sản phẩm đã xem
  function getViewedProducts() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Lỗi đọc localStorage:', e);
      return [];
    }
  }

  // Lưu sản phẩm vào lịch sử
  function addViewedProduct(product) {
    if (!product || !product.id) return;
    try {
      let list = getViewedProducts();
      // Loại bỏ trùng lặp nếu đã có
      list = list.filter(item => item.id !== product.id);
      // Đưa sản phẩm vừa xem lên đầu danh sách
      list.unshift({
        id: product.id,
        sku: product.sku || '',
        title: product.title || '',
        category: product.category || '',
        categoryName: product.categoryName || '',
        price: product.price || 0,
        oldPrice: product.oldPrice || 0,
        url: product.url || '#',
        badge: product.badge || '',
        badgeClass: product.badgeClass || 'badge-gold',
        svg: product.svg || '',
        viewedAt: new Date().toISOString()
      });
      // Giới hạn số lượng tối đa
      if (list.length > MAX_ITEMS) {
        list = list.slice(0, MAX_ITEMS);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      updateViewedBadge();
    } catch (e) {
      console.warn('Lỗi ghi localStorage:', e);
    }
  }

  // Xóa 1 sản phẩm khỏi lịch sử
  function removeViewedProduct(productId) {
    try {
      let list = getViewedProducts();
      list = list.filter(item => item.id !== productId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      updateViewedBadge();
      renderViewedPage();
    } catch (e) {
      console.warn('Lỗi xóa sản phẩm khỏi localStorage:', e);
    }
  }

  // Xóa toàn bộ lịch sử
  function clearAllViewedProducts() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      updateViewedBadge();
      renderViewedPage();
    } catch (e) {
      console.warn('Lỗi xóa toàn bộ localStorage:', e);
    }
  }

  // Cập nhật số đếm badge trên menu Header
  function updateViewedBadge() {
    const list = getViewedProducts();
    const count = list.length;
    const badges = document.querySelectorAll('.viewed-count-badge, #viewedNavBadge');
    badges.forEach(badge => {
      badge.textContent = count > 0 ? count : '';
      if (count > 0) {
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
    });
  }

  // Định dạng tiền tệ VND
  function formatMoney(num) {
    if (!num) return 'Liên hệ';
    return new Intl.NumberFormat('vi-VN').format(num) + ' đ';
  }

  // Render danh sách tại trang /san-pham-da-xem
  function renderViewedPage() {
    const container = document.getElementById('viewedProductsContainer');
    const emptyNotice = document.getElementById('viewedEmptyState');
    const actionsBar = document.getElementById('viewedActionsBar');
    const totalCountEl = document.getElementById('viewedTotalCount');

    if (!container) return; // Không phải trang sản phẩm đã xem

    const list = getViewedProducts();

    if (totalCountEl) {
      totalCountEl.textContent = list.length;
    }

    if (list.length === 0) {
      if (container) container.innerHTML = '';
      if (emptyNotice) emptyNotice.style.display = 'block';
      if (actionsBar) actionsBar.style.display = 'none';
      return;
    }

    if (emptyNotice) emptyNotice.style.display = 'none';
    if (actionsBar) actionsBar.style.display = 'flex';

    container.innerHTML = list.map(item => `
      <article class="product-card" data-id="${item.id}">
        <div class="product-card__thumb">
          <button class="btn-remove-viewed" data-remove-id="${item.id}" title="Xóa khỏi danh sách đã xem" aria-label="Xóa khỏi danh sách">✕</button>
          <div class="product-card__media">
            ${item.mediaHtml || item.svg || '<div class="fallback-thumb">❖</div>'}
          </div>
          ${item.badge ? `<span class="product-badge ${item.badgeClass}">${item.badge}</span>` : ''}
        </div>
        <div class="product-card__body">
          <span class="product-card__cat">${item.categoryName || 'Mỹ nghệ cao cấp'}</span>
          <h3 class="product-card__title">
            <a href="${item.url || '#'}">${item.title}</a>
          </h3>
          <div class="product-card__price-wrap">
            <span class="price-current">${formatMoney(item.price)}</span>
            ${item.oldPrice ? `<span class="price-old">${formatMoney(item.oldPrice)}</span>` : ''}
          </div>
          <div class="product-card__footer">
            <a href="${item.url || '#'}" class="btn-detail-small">Xem chi tiết</a>
            <button class="btn-order-call" onclick="window.location.href='tel:0984888888'">Tư vấn</button>
          </div>
        </div>
      </article>
    `).join('');

    // Bắt sự kiện xóa từng item
    container.querySelectorAll('.btn-remove-viewed').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute('data-remove-id');
        removeViewedProduct(id);
      });
    });
  }

  // Khởi chạy khi tài liệu tải xong
  document.addEventListener('DOMContentLoaded', () => {
    updateViewedBadge();
    renderViewedPage();

    // Nút xóa tất cả
    const clearBtn = document.getElementById('clearAllViewedBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử sản phẩm đã xem?')) {
          clearAllViewedProducts();
        }
      });
    }

    // Lắng nghe sự kiện click sản phẩm trên các trang để lưu lịch sử
    document.body.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card, [data-track-product]');
      if (card) {
        const id = card.getAttribute('data-id');
        const titleEl = card.querySelector('.product-card__title a, .product-card__title');
        const priceEl = card.querySelector('.price-current');
        const catEl = card.querySelector('.product-card__cat');
        const badgeEl = card.querySelector('.product-badge');
        const mediaEl = card.querySelector('.product-card__media img, .product-card__thumb img, .product-card__media svg, .product-card__thumb svg');

        if (id && titleEl) {
          const productData = {
            id: id,
            title: titleEl.textContent.trim(),
            categoryName: catEl ? catEl.textContent.trim() : '',
            price: priceEl ? parseInt(priceEl.textContent.replace(/\D/g, ''), 10) : 0,
            badge: badgeEl ? badgeEl.textContent.trim() : '',
            mediaHtml: mediaEl ? mediaEl.outerHTML : '',
            url: titleEl.getAttribute('href') || window.location.href
          };
          addViewedProduct(productData);
        }
      }
    });
  });

  // Xuất API toàn cục
  window.QuangTinTamViewed = {
    get: getViewedProducts,
    add: addViewedProduct,
    remove: removeViewedProduct,
    clear: clearAllViewedProducts,
    render: renderViewedPage
  };
})();
