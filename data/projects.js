/* ---------------------------------------------------------------------------
   MODEL — single source of truth for all project data.
   Consumed by:
     - index.html  (grid de trabalhos + projeto em destaque)
     - projeto.html (página individual de cada projeto)
   To add/edit a project, change it here only.
--------------------------------------------------------------------------- */
window.STUDIO = {
  // ordem em que os projetos aparecem no grid e em "outros projetos"
  order: ['masseira', 'evandro', 'amago', 'kain', 'moutinho'],

  // projeto em destaque na home (usa um gif próprio como capa)
  featured: {
    slug: 'amago',
    media: 'assets/work/amago-gallery/amago-matchcut.gif'
  },

  projects: {
    masseira: {
      name: 'Masseira',
      cat: 'Identidade Visual',
      tile: 'assets/work/masseira-gallery/masseira-matchcut.gif', // capa no grid
      tileWide: true,                                             // ocupa a linha toda
      hero: 'assets/work/masseira-gallery/photo-bread.jpg',       // capa da página
      lead: 'Identidade visual completa para uma padaria artesanal — símbolo, tipografia, embalagens e um mundo visual que carrega o cheiro de pão fresco.',
      body: '<p>Do logótipo às embalagens, cada peça foi desenhada para traduzir o cuidado do trabalho manual e a calidez de uma marca feita para o dia a dia.</p>',
      cliente: 'Masseira',
      entregaveis: ['Identidade visual', 'Tipografia', 'Embalagens', 'Direção de arte'],
      funcao: 'Design e direção criativa',
      images: [
        'assets/work/masseira-gallery/masseira-dough-stamp.webp',
        'assets/work/masseira-gallery/masseira-bag.webp',
        'assets/work/masseira-gallery/masseira-cup.webp',
        'assets/work/masseira-gallery/photo-dough.jpg',
        'assets/work/masseira-gallery/photo-cacao.jpg',
        'assets/work/masseira-gallery/mockup-fabric.jpg',
        'assets/work/masseira-gallery/mockup-packaging.jpg',
        'assets/work/masseira-gallery/pattern-black.jpg',
        'assets/work/masseira-gallery/logo-orange.jpg'
      ]
    },
    evandro: {
      name: 'Evandro Okàn',
      cat: 'Com Alma no Verbo',
      tile: 'assets/work/evandro-gallery/gallery-4.jpg',
      tileWide: false,
      hero: 'assets/work/evandro-gallery/gallery-4.jpg',
      video: 'https://www-ccv.adobe.io/v1/player/ccv/5Aq5QYP3n__/embed?api_key=behance1&bgcolor=%23191919',
      lead: 'Direção criativa e identidade para o projeto “Com Alma no Verbo”, de Evandro Okàn.',
      body: '<p>Um trabalho que une palavra e imagem, construindo uma linguagem visual com alma e intenção.</p>',
      cliente: 'Evandro Okàn',
      entregaveis: ['Direção criativa', 'Identidade', 'Audiovisual'],
      funcao: 'Direção criativa e design',
      behance: 'https://www.behance.net/gallery/245210287/Evandro-Okan-Com-Alma-no-Verbo',
      images: [
        'assets/work/evandro-gallery/gallery-2.jpg',
        'assets/work/evandro-gallery/gallery-1.jpg',
        'assets/work/evandro-gallery/gallery-3.jpg',
        'assets/work/evandro-gallery/gallery-5.jpg',
        'assets/work/evandro-gallery/gallery-6.jpg'
      ]
    },
    amago: {
      name: 'Âmago Clothing',
      cat: 'Identidade Visual',
      tile: 'assets/work/amago-gallery/amago-field.png',
      tileWide: true,
      hero: 'assets/work/amago-gallery/amago-field.png',
      lead: 'Âmago Clothing — elevando o estilo e redefinindo a elegância feminina.',
      body: '<p>Sistema de marca, editorial e presença digital pensados para uma moda que fala de sofisticação com personalidade.</p>',
      cliente: 'Âmago Clothing',
      entregaveis: ['Identidade visual', 'Branding', 'Landing page'],
      funcao: 'Design e direção criativa',
      images: [
        'assets/work/amago-gallery/cover-lifestyle.png',
        'assets/work/amago-gallery/amago-mockup-laptop.jpg',
        'assets/work/amago-gallery/amago-mockup-card.jpg',
        'assets/work/amago-gallery/amago-clothing.png',
        'assets/work/amago-gallery/amago-mockup-tablet.jpg',
        'assets/work/amago-gallery/amago-box.jpg',
        'assets/work/amago-gallery/amago-envelope.png',
        'assets/work/amago-gallery/magazine.png',
        'assets/work/amago-gallery/logo-white.png'
      ]
    },
    kain: {
      name: 'Kain',
      cat: 'Tracklist Inverso Vol. 2',
      tile: 'assets/work/kain-gallery/img-1.jpg',
      tileWide: false,
      hero: 'assets/work/kain-gallery/img-1.jpg',
      lead: 'Direção de arte e identidade para “Tracklist Inverso Vol. 2”, de Kain.',
      body: '<p>Uma capa e um universo visual construídos para acompanhar o som — gráfico, direto e com atitude.</p>',
      cliente: 'Kain',
      entregaveis: ['Direção de arte', 'Capa', 'Tracklist'],
      funcao: 'Design',
      behance: 'https://www.behance.net/gallery/253997117/KAIN-TRACKLIST-INVERSO-VOL2',
      images: [
        'assets/work/kain-gallery/img-2.jpg',
        'assets/work/kain-gallery/img-3.jpg'
      ]
    },
    moutinho: {
      name: 'Moutinho Cardoso',
      cat: 'Identidade Visual',
      tile: 'assets/work/moutinho-gallery/moutinho-matchcut.gif',
      tileWide: true,
      hero: 'assets/work/moutinho-gallery/img-1.png',
      lead: 'Identidade visual para Moutinho Cardoso.',
      body: '<p>Um sistema de marca desenhado para transmitir consistência e presença em cada aplicação.</p>',
      cliente: 'Moutinho Cardoso',
      entregaveis: ['Identidade visual'],
      funcao: 'Design',
      behance: 'https://www.behance.net/gallery/143462293/Moutinho-Cardoso-Identidade-Visual',
      images: [
        'assets/work/moutinho-gallery/img-3.png',
        'assets/work/moutinho-gallery/img-4.png'
      ]
    }
  }
};
