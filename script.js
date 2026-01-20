<script>
  // Initialize Lucide icons
  lucide.createIcons();

  // ===== 1. ORGANIZACIÓN POR CATEGORÍAS =====
  const categorias = [
    {
      id: 'limpieza',
      name: 'Limpieza del Hogar',
      icon: 'spray-can',
      color: '#0055A4',
      products: [
        {id: 1, name: "FABULOSO 24X500ML", price: "$95.530", description: "Limpieza y aroma para todo el hogar", image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&h=200&fit=crop", tag: "Popular"},
        {id: 2, name: "FABULOSO 12 X 1000 ML", price: "$108.028", description: "Limpieza profunda", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: ""},
        {id: 3, name: "BLANKOX X 24 X 500 ML", price: "$29.900", description: "Blanqueador de ropa eficaz", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: "Oferta"},
        {id: 4, name: "BLANKOX X 8 X 2000ML", price: "$47.351", description: "Blanqueador económico", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: ""},
        {id: 5, name: "SUAVITEL 56 X 180 ML", price: "$77.000", description: "Suavizante de ropa", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: ""},
        {id: 6, name: "DETER DERSA 48X250", price: "$104.200", description: "Detergente en polvo", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: ""},
        {id: 7, name: "ARIEL 3 X 4 QUILOS", price: "$130.695", description: "Detergente en polvo", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: ""},
        {id: 8, name: "VARSOL ECONOMICO 24 X 150", price: "$36.000", description: "Limpiador multiusos", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: ""},
        {id: 9, name: "DECINFECTANTE AJAX X24X500", price: "$91.100", description: "Desinfectante de superficies", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: ""},
        {id: 10, name: "DETERGENTE VICTORY 48 X 250 G", price: "$75.000", description: "Detergente en polvo", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: "Oferta"}
      ]
    },
    {
      id: 'aseo',
      name: 'Aseo Personal',
      icon: 'user',
      color: '#FFC72C',
      products: [
        {id: 11, name: "JABON UNICO ENCUERO 25 X 200G", price: "$25.457", description: "Jabón de barra", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=200&fit=crop", tag: "Popular"},
        {id: 12, name: "JABON FAMA 24 X 250 G", price: "$60.000", description: "Jabón de tocador", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=200&fit=crop", tag: ""},
        {id: 13, name: "JABON PURO 30 X 280 G", price: "$54.040", description: "Jabón antibacterial", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=200&fit=crop", tag: ""},
        {id: 14, name: "AXION 48 X 235G", price: "$132.525", description: "Jabón líquido para manos", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=200&fit=crop", tag: ""},
        {id: 15, name: "SHAMPOO PANTENE 12 X 25", price: "Consultar", description: "Shampoo para el cabello", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=200&fit=crop", tag: ""},
        {id: 16, name: "NOSOTRAS RAPIGEL 10 X 30", price: "$128.238", description: "Toallas higiénicas", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=200&fit=crop", tag: ""},
        {id: 17, name: "TOALLAS ELLAS 48 X 10", price: "$80.000", description: "Toallas femeninas", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=200&fit=crop", tag: "Oferta"}
      ]
    },
    {
      id: 'alimentos',
      name: 'Alimentos y Bebidas',
      icon: 'coffee',
      color: '#DC2626',
      products: [
        {id: 18, name: "ACEITE RICOCINA X12X900 ML", price: "$90.668", description: "Aceite de cocina", image: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=400&h=200&fit=crop", tag: "Oferta"},
        {id: 19, name: "COLCAFE CLASICO 30X 48 X1.5", price: "$330.000", description: "Café instantáneo", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=200&fit=crop", tag: "Popular"},
        {id: 20, name: "ATUN SARVEL X 48 X 175 G", price: "$142.150", description: "Atún en lata", image: "https://images.unsplash.com/photo-1555158337-2a3ee1ebd0c1?w=400&h=200&fit=crop", tag: ""},
        {id: 21, name: "SARDINA BOCADO D MAR X 50X155", price: "$126.021", description: "Sardinas en lata", image: "https://images.unsplash.com/photo-1555158337-2a3ee1ebd0c1?w=400&h=200&fit=crop", tag: ""},
        {id: 22, name: "GALLETAS DUCALES 24 X 2 TACOS", price: "$135.488", description: "Galletas saladas", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=200&fit=crop", tag: "Popular"},
        {id: 23, name: "SALTIN NOEL TRADICIONAL 24 X 9", price: "$138.230", description: "Galletas saladas", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=200&fit=crop", tag: ""},
        {id: 24, name: "LECHE CONDENSADA LA LECHERA", price: "Consultar", description: "Leche condensada", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=200&fit=crop", tag: ""}
      ]
    },
    {
      id: 'descartables',
      name: 'Descartables y Papelería',
      icon: 'package',
      color: '#059669',
      products: [
        {id: 25, name: "PAPEL FAMILIA MEGAROLLO X 48", price: "$90.000", description: "Papel higiénico", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400&h=200&fit=crop", tag: "Oferta"},
        {id: 26, name: "VASOS 3.3 X 60 X 50 UNID", price: "$109.980", description: "Vasos desechables", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop", tag: ""},
        {id: 27, name: "PLATOS DARNEL # 12X 24 X20", price: "$29.036", description: "Platos desechables #12", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop", tag: ""},
        {id: 28, name: "BOLSA DE 25 QUILOS X 6x 10", price: "$456.000", description: "Bolsas grandes", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop", tag: ""},
        {id: 29, name: "SERVILLETAS FAMILIA 32 X 150", price: "$60.598", description: "Servilletas", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop", tag: ""},
        {id: 30, name: "PITILLOS BAMBU 150 X 50", price: "$58.000", description: "Pitillos ecológicos", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop", tag: "Popular"}
      ]
    },
    {
      id: 'especias',
      name: 'Especias y Condimentos',
      icon: 'utensils',
      color: '#7C3AED',
      products: [
        {id: 31, name: "SALSA DE TOMATE FRUCO X 24 X250G", price: "$159.308", description: "Salsa de tomate", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: ""},
        {id: 32, name: "MAYONESA BARY 12 X 1000G", price: "$150.000", description: "Mayonesa", image: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=400&h=200&fit=crop", tag: ""},
        {id: 33, name: "MOSTAZA SANJORGE 24 X 100G", price: "$41.385", description: "Mostaza", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: ""},
        {id: 34, name: "SALSA NEGRA LA FE 24X500 ML", price: "$22.000", description: "Salsa negra", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: "Oferta"},
        {id: 35, name: "SALSA CHINA 24 X 300", price: "$185.000", description: "Salsa china", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop", tag: ""}
      ]
    },
    {
      id: 'bebes',
      name: 'Productos para Bebés',
      icon: 'baby',
      color: '#0891B2',
      products: [
        {id: 36, name: "HUGGIES ET 1 X 50 X 6", price: "$177.000", description: "Pañales etapa 1", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=200&fit=crop", tag: "Popular"},
        {id: 37, name: "HUGGIES ET 2 X 50 X 4", price: "$128.000", description: "Pañales etapa 2", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=200&fit=crop", tag: ""},
        {id: 38, name: "HUGGIES ETP 3 X 50 X 6", price: "$230.000", description: "Pañales etapa 3", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=200&fit=crop", tag: ""},
        {id: 39, name: "BABY DREAMS ETP 1 X 30 X 8", price: "$148.000", description: "Pañales económicos", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=200&fit=crop", tag: "Oferta"},
        {id: 40, name: "NESTOGENO 8 X 135G", price: "$65.592", description: "Leche para bebés", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=200&fit=crop", tag: ""}
      ]
    },
    {
      id: 'granos',
      name: 'Granos y Cereales',
      icon: 'wheat',
      color: '#CA8A04',
      products: [
        {id: 41, name: "ARROZ", price: "Consultar", description: "Diferentes presentaciones", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=200&fit=crop", tag: ""},
        {id: 42, name: "FRIJOL", price: "Consultar", description: "Diferentes variedades", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=200&fit=crop", tag: ""},
        {id: 43, name: "LENTEJA", price: "Consultar", description: "Lenteja seca", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=200&fit=crop", tag: ""},
        {id: 44, name: "MAIZENA 40 X 380 G", price: "$422.258", description: "Harina de maíz", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=200&fit=crop", tag: ""}
      ]
    },
    {
      id: 'lacteos',
      name: 'Lácteos y Huevos',
      icon: 'egg',
      color: '#F59E0B',
      products: [
        {id: 45, name: "HUEVO BLANCO 12 X30", price: "$140.000", description: "Huevos frescos", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=200&fit=crop", tag: "Fresco"},
        {id: 46, name: "HUEVO ROJO 12 X30", price: "$137.000", description: "Huevos frescos rojos", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=200&fit=crop", tag: ""},
        {id: 47, name: "CREMA DE LECHE 18 X 186G", price: "$109.028", description: "Crema de leche", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=200&fit=crop", tag: ""},
        {id: 48, name: "LECHE PARMALAC X 12 X 900", price: "$297.000", description: "Leche en polvo", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=200&fit=crop", tag: ""}
      ]
    }
  ];

  // ===== 2. MOSTRAR CATEGORÍAS =====
  function mostrarCategorias() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    categorias.forEach(categoria => {
      const categoryCard = document.createElement('div');
      categoryCard.className = 'category-card';
      categoryCard.dataset.categoryId = categoria.id;
      
      categoryCard.innerHTML = `
        <div class="category-icon" style="background-color: ${categoria.color}20;">
          <i data-lucide="${categoria.icon}"></i>
        </div>
        <h3 class="category-name">${categoria.name}</h3>
        <span class="category-count">${categoria.products.length} productos</span>
      `;
      
      container.appendChild(categoryCard);
      
      // Evento click para mostrar productos de la categoría
      categoryCard.addEventListener('click', () => {
        mostrarProductosCategoria(categoria);
      });
    });
    
    lucide.createIcons();
    
    // Mostrar categorías, ocultar productos
    document.getElementById('categoriesContainer').style.display = 'grid';
    document.getElementById('productsByCategory').style.display = 'none';
  }

  // ===== 3. MOSTRAR PRODUCTOS POR CATEGORÍA =====
  function mostrarProductosCategoria(categoria) {
    const title = document.getElementById('categoryTitle');
    const grid = document.getElementById('productsGrid');
    
    if (!title || !grid) return;
    
    // Actualizar título
    title.textContent = categoria.name;
    
    // Mostrar productos
    grid.innerHTML = '';
    
    categoria.products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <div class="product-img">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
        </div>
        <div class="product-content">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <div class="product-footer">
            <span class="product-price">${product.price}</span>
            <button class="btn btn-primary btn-sm add-to-cart-btn" 
                    data-product="${product.name}" 
                    data-description="${product.description}"
                    data-price="${product.price}">
              <i data-lucide="shopping-cart" style="width: 16px; height: 16px;"></i>
              Agregar
            </button>
          </div>
        </div>
      `;
      
      grid.appendChild(productCard);
    });
    
    lucide.createIcons();
    
    // Configurar eventos del carrito
    setupCartEvents();
    
    // Mostrar productos, ocultar categorías
    document.getElementById('categoriesContainer').style.display = 'none';
    document.getElementById('productsByCategory').style.display = 'block';
  }

  // ===== 4. CARRITO DE COMPRAS =====
let cart = [];
let manualMode = false;

// Inicializar elementos del DOM
function initializeDOMElements() {
  // Estos elementos se inicializan aquí para asegurar que existan
  window.cartSummary = document.getElementById('cartSummary');
  window.cartItems = document.getElementById('cartItems');
  window.customerOrder = document.getElementById('customerOrder');
  window.manualOrder = document.getElementById('manualOrder');
  window.manualOrderContainer = document.getElementById('manualOrderContainer');
  window.clearCartBtn = document.getElementById('clearCart');
  window.toggleManualModeBtn = document.getElementById('toggleManualMode');
  window.whatsappSubmitBtn = document.getElementById('whatsappSubmit');
  
  // Asegurarse de que los elementos existan
  if (!window.customerOrder) {
    console.error('Elemento customerOrder no encontrado');
  }
  if (!window.whatsappSubmitBtn) {
    console.error('Botón whatsappSubmit no encontrado');
  }
}

function setupCartEvents() {
  // Agregar al carrito
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
      const product = {
        name: this.getAttribute('data-product'),
        description: this.getAttribute('data-description')
      };
      
      cart.push(product);
      updateCart();
      
      // Si estamos en modo manual, desactivarlo
      if (manualMode) {
        toggleManualMode();
      }
      
      // Feedback visual
      const originalText = this.innerHTML;
      this.innerHTML = '<i data-lucide="check" style="width: 16px; height: 16px;"></i> ¡Agregado!';
      this.style.backgroundColor = '#16a34a';
      this.disabled = true;
      
      setTimeout(() => {
        this.innerHTML = originalText;
        this.style.backgroundColor = '';
        this.disabled = false;
        lucide.createIcons();
      }, 1000);
    });
  });
}

function updateCart() {
  // Verificar que los elementos existan
  if (!window.cartItems || !window.customerOrder || !window.manualOrder) return;
  
  window.cartItems.innerHTML = '';
  
  if (cart.length === 0) {
    if (window.cartSummary) window.cartSummary.style.display = 'none';
    if (!manualMode) {
      window.customerOrder.value = '';
      window.customerOrder.placeholder = 'Aquí aparecerán automáticamente los productos que agregues desde el catálogo...';
    }
    return;
  }
  
  if (window.cartSummary) window.cartSummary.style.display = 'block';
  
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.style.padding = '0.5rem 0';
    li.style.borderBottom = '1px solid #e5e7eb';
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    
    li.innerHTML = `
      <div style="flex: 1;">
        <strong style="font-size: 0.875rem;">${item.name}</strong>
        ${item.description ? `<div style="font-size: 0.75rem; color: #6b7280;">${item.description}</div>` : ''}
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <button type="button" class="remove-from-cart" data-index="${index}" 
                style="background: none; border: none; color: #dc2626; cursor: pointer; padding: 0.25rem;">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
    `;
    window.cartItems.appendChild(li);
  });
  
  let orderText = '';
  cart.forEach(item => {
    orderText += `• ${item.name}\n`;
  });
  
  // Actualizar ambos campos según el modo
  if (!manualMode) {
    window.customerOrder.value = orderText.trim();
    if (window.manualOrder) window.manualOrder.value = '';
  } else {
    if (window.manualOrder) window.manualOrder.value = orderText.trim();
    window.customerOrder.value = '';
  }
  
  lucide.createIcons();
}

// Alternar entre modo automático y manual
function toggleManualMode() {
  manualMode = !manualMode;
  
  if (!window.customerOrder || !window.manualOrderContainer || !window.toggleManualModeBtn) return;
  
  if (manualMode) {
    // Cambiar a modo manual
    window.customerOrder.style.display = 'none';
    window.manualOrderContainer.style.display = 'block';
    window.toggleManualModeBtn.innerHTML = '<i data-lucide="shopping-cart" style="width: 12px; height: 12px;"></i> Usar catálogo';
    window.toggleManualModeBtn.style.backgroundColor = 'var(--primary)';
    window.toggleManualModeBtn.style.color = 'white';
    
    // Copiar productos del carrito al campo manual
    if (cart.length > 0 && window.manualOrder) {
      let orderText = '';
      cart.forEach(item => {
        orderText += `• ${item.name}\n`;
      });
      window.manualOrder.value = orderText.trim();
    }
  } else {
    // Cambiar a modo automático
    window.customerOrder.style.display = 'block';
    window.manualOrderContainer.style.display = 'none';
    window.toggleManualModeBtn.innerHTML = '<i data-lucide="edit" style="width: 12px; height: 12px;"></i> Escribir manual';
    window.toggleManualModeBtn.style.backgroundColor = '';
    window.toggleManualModeBtn.style.color = '';
    
    // Copiar texto manual al carrito (si hay)
    if (window.manualOrder && window.manualOrder.value.trim()) {
      window.customerOrder.value = window.manualOrder.value;
    }
  }
  
  lucide.createIcons();
}

// Eventos del carrito
document.addEventListener('click', function(e) {
  // Eliminar producto del carrito
  if (e.target.closest('.remove-from-cart')) {
    const index = e.target.closest('.remove-from-cart').getAttribute('data-index');
    cart.splice(index, 1);
    updateCart();
  }
  
  // Vaciar carrito
  if (e.target.id === 'clearCart' || e.target.closest('#clearCart')) {
    if (cart.length > 0 && confirm('¿Seguro que quieres vaciar todos los productos agregados?')) {
      cart = [];
      updateCart();
    }
  }
});

// ===== 5. WHATSAPP PEDIDO =====
function setupWhatsAppSubmit() {
  const whatsappSubmitBtn = document.getElementById('whatsappSubmit');
  
  if (!whatsappSubmitBtn) {
    console.error('Botón whatsappSubmit no encontrado. Reintentando en 500ms...');
    setTimeout(setupWhatsAppSubmit, 500);
    return;
  }
  
  whatsappSubmitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('customerName')?.value.trim();
    const phone = document.getElementById('customerPhone')?.value.trim();
    const address = document.getElementById('customerAddress')?.value.trim();
    const notes = document.getElementById('customerNotes')?.value.trim();
    
    if (!name || !phone || !address) {
      alert('Por favor completa tus datos de contacto (nombre, teléfono y dirección)');
      return;
    }
    
    // Obtener los productos según el modo actual
    let orderText = '';
    if (manualMode && window.manualOrder && window.manualOrder.value.trim()) {
      orderText = window.manualOrder.value.trim();
    } else if (cart.length > 0) {
      cart.forEach(item => {
        orderText += `• ${item.name}\n`;
      });
      orderText = orderText.trim();
    } else {
      orderText = window.customerOrder?.value.trim() || '';
    }
    
    if (!orderText) {
      alert('Por favor agrega al menos un producto o escribe tu pedido');
      return;
    }
    
    // Construir mensaje de WhatsApp bien formateado
    let whatsappMessage = `*NUEVO PEDIDO - MERCADITO MR*\n\n`;
    
    // Datos del cliente
    whatsappMessage += `*👤 CLIENTE:*\n`;
    whatsappMessage += `Nombre: ${name}\n`;
    whatsappMessage += `Teléfono: ${phone}\n`;
    whatsappMessage += `Dirección: ${address}\n\n`;
    
    // Pedido
    whatsappMessage += `*🛒 PEDIDO:*\n`;
    whatsappMessage += `${orderText}\n\n`;
    
    // Notas adicionales
    if (notes) {
      whatsappMessage += `*📝 NOTAS ADICIONALES:*\n`;
      whatsappMessage += `${notes}\n\n`;
    }
    
    // Resumen
    whatsappMessage += `*📊 RESUMEN DEL PEDIDO:*\n`;
    const productCount = manualMode ? 'Varios' : cart.length;
    whatsappMessage += `• Productos solicitados: ${productCount}\n`;
    whatsappMessage += `• Fecha y hora: ${new Date().toLocaleString('es-CO', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })}\n`;
    whatsappMessage += `• Total: A consultar (precios al por mayor)\n`;
    whatsappMessage += `• Nota: Te contactaremos para confirmar precios y disponibilidad\n\n`;
    
    whatsappMessage += `_¡Gracias por tu pedido en Mercadito MR! 🛒_`;
    
    const whatsappNumber = '573126370370';
    
    // Codificar el mensaje correctamente
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Mostrar mensaje de éxito
    const deliveryForm = document.getElementById('deliveryForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (deliveryForm) deliveryForm.style.display = 'none';
    if (formSuccess) {
      formSuccess.classList.add('show');
      formSuccess.innerHTML = `
        <div class="form-success-icon">
          <i data-lucide="check-circle" style="width: 2rem; height: 2rem; color: #16a34a;"></i>
        </div>
        <h4 class="form-success-title">¡Pedido listo!</h4>
        <p class="form-success-text">Redirigiendo a WhatsApp...</p>
        <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-top: 1rem;">
          Si no se abre automáticamente, haz clic 
          <a href="${whatsappURL}" target="_blank" style="color: var(--primary); font-weight: 600;">aquí</a>
        </p>
      `;
    }
    
    // Recrear íconos en el mensaje de éxito
    lucide.createIcons();
    
    // Abrir WhatsApp después de 1 segundo
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      
      // Restablecer formulario después de 5 segundos
      setTimeout(() => {
        resetForm();
      }, 5000);
    }, 1000);
  });
}

// Función para restablecer el formulario
function resetForm() {
  const formSuccess = document.getElementById('formSuccess');
  const deliveryForm = document.getElementById('deliveryForm');
  
  if (formSuccess) formSuccess.classList.remove('show');
  if (deliveryForm) deliveryForm.style.display = 'grid';
  
  // Restablecer formulario
  const deliveryFormElement = document.getElementById('deliveryForm');
  if (deliveryFormElement) deliveryFormElement.reset();
  
  // Limpiar carrito y restablecer estado
  cart = [];
  manualMode = false;
  
  if (window.customerOrder) {
    window.customerOrder.style.display = 'block';
    window.customerOrder.value = '';
    window.customerOrder.placeholder = 'Aquí aparecerán automáticamente los productos que agregues desde el catálogo...';
  }
  
  if (window.manualOrderContainer) window.manualOrderContainer.style.display = 'none';
  if (window.manualOrder) window.manualOrder.value = '';
  
  if (window.toggleManualModeBtn) {
    window.toggleManualModeBtn.innerHTML = '<i data-lucide="edit" style="width: 12px; height: 12px;"></i> Escribir manual';
    window.toggleManualModeBtn.style.backgroundColor = '';
    window.toggleManualModeBtn.style.color = '';
  }
  
  updateCart();
}

  // ===== 6. INICIAR TODO =====
  document.addEventListener('DOMContentLoaded', function() {
    // Mostrar categorías
    mostrarCategorias();
    
    // Botón para volver a categorías
    document.getElementById('backToCategories').addEventListener('click', function() {
      mostrarCategorias();
    });

// Configurar envío por WhatsApp
  setupWhatsAppSubmit();
    
    // Inicializar carrito vacío
    updateCart();
  });

</script>