(() => {
  const sharedStyle = document.createElement('style');
  sharedStyle.textContent = `
    .site{position:relative!important}.nav{position:absolute!important;top:0!important;left:0!important;right:0!important;z-index:1000!important;height:64px!important;background:transparent!important;border:0!important;padding:8px clamp(24px,8vw,140px)!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;backdrop-filter:none!important}
    .nav>.nav-logo{height:44px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;padding:0 14px!important;border:1px solid rgba(255,255,255,.14)!important;border-radius:999px!important;background:rgba(17,17,17,.42)!important;box-shadow:0 14px 26px -22px rgba(0,0,0,.9)!important;backdrop-filter:blur(14px) saturate(108%)!important;color:#fff!important;flex:0 0 auto!important}
    .nav>.nav-logo .evods-logo{width:124px!important;height:18px!important;display:block!important}
    .nav>.nav-logo img{width:124px!important;height:auto!important;display:block!important;filter:brightness(0) invert(1)!important}
    .nav-links{height:44px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:0!important;padding:0 6px!important;border:1px solid rgba(255,255,255,.14)!important;border-radius:999px!important;background:rgba(17,17,17,.42)!important;box-shadow:0 14px 26px -22px rgba(0,0,0,.9)!important;backdrop-filter:blur(14px) saturate(108%)!important;min-width:0!important}
    .nav-item{height:100%!important;display:flex!important;align-items:center!important;position:relative!important}
    .nav-item>a{height:100%!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;margin:0 2px!important;padding:0 14px!important;border:1px solid transparent!important;border-radius:999px!important;background:transparent!important;color:rgba(255,255,255,.72)!important;font:500 13px/1 Arial,sans-serif!important;white-space:nowrap!important;transition:color .16s ease,background .16s ease,border-color .16s ease!important;text-decoration:none!important}
    .nav-item>a:hover{color:#fff!important;background:rgba(255,255,255,.08)!important;border-color:rgba(255,255,255,.08)!important}
    .nav-item.has-dropdown>a::after{content:""!important;display:inline-block!important;border:4px solid transparent!important;border-top-color:rgba(255,255,255,.52)!important;margin:4px 0 0 7px!important}
    .dropdown{position:absolute!important;opacity:0!important;pointer-events:none!important;transition:opacity .15s ease,transform .15s ease!important;top:calc(100% + 10px)!important;left:0!important;background:rgba(18,18,18,.94)!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:14px!important;padding:8px!important;min-width:260px!important;box-shadow:0 22px 60px rgba(0,0,0,.35)!important;backdrop-filter:blur(16px) saturate(115%)!important;transform:translateY(-8px)!important;z-index:1100!important}
    .nav-item.has-dropdown:hover .dropdown{opacity:1!important;pointer-events:all!important;transform:translateY(0)!important}
    .nav-item.has-dropdown::before{content:""!important;position:absolute!important;left:0!important;right:0!important;top:100%!important;height:14px!important;display:block!important}
    .dropdown-item{display:block!important;padding:11px 13px!important;border-radius:10px!important;color:rgba(255,255,255,.76)!important;text-decoration:none!important;background:transparent!important}
    .dropdown-item:hover{background:rgba(255,255,255,.08)!important;color:#fff!important}.evfmc-ev{color:#9B9B9B!important}
    .di-label{font-weight:650!important;color:inherit!important}.di-sub{font-size:11px!important;color:rgba(255,255,255,.46)!important;margin-top:3px!important}.dropdown-divider{background:rgba(255,255,255,.08)!important;margin:6px 4px!important}.dropdown-group-label{padding:9px 13px 5px!important;color:#4BA114!important;font-size:10px!important;font-weight:700!important;letter-spacing:.14em!important;text-transform:uppercase!important}
    .site-footer{background:#111!important;color:#fff!important;padding:44px clamp(24px,4vw,64px) 28px!important;margin:0!important;font-family:Arial,sans-serif!important}
    .site-footer-grid{display:grid!important;grid-template-columns:1.8fr 1fr 1fr 1fr!important;gap:32px!important;margin:0 0 32px!important}
    .site-footer-brand-logo{display:block!important;width:132px!important;height:auto!important;filter:brightness(0) invert(1)!important;margin:0 0 14px!important}
    .site-footer-brand p{max-width:250px!important;margin:0!important;color:rgba(255,255,255,.52)!important;font-size:14px!important;line-height:1.65!important}
    .site-footer-col h5{margin:0 0 13px!important;color:rgba(255,255,255,.45)!important;font-size:11px!important;font-weight:600!important;letter-spacing:.14em!important;text-transform:uppercase!important}
    .site-footer-col a{display:block!important;margin:0 0 9px!important;color:rgba(255,255,255,.68)!important;font-size:14px!important;line-height:1.4!important;text-decoration:none!important}
    .site-footer-col a:hover{color:#fff!important}
    .site-footer-bottom{border-top:1px solid rgba(255,255,255,.12)!important;padding-top:20px!important;color:rgba(255,255,255,.4)!important;font-size:12px!important}
    /* Shared hero standard — matches the Airport Shuttle Service page. */
    main > .hero{min-height:700px!important;padding:clamp(50px,7vw,104px) clamp(24px,8vw,140px)!important;display:flex!important;align-items:center!important;position:relative!important;color:#fff!important}
    main > .hero h1,main > .hero h1 *,main > .hero h1.home-headline{font-family:Arial,sans-serif!important;font-size:clamp(3rem,5.45vw,5.4rem)!important;letter-spacing:-.06em!important;line-height:.98!important;font-weight:700!important;margin:0 0 26px!important;text-transform:none!important}
    main > .hero .eyebrow,main > .hero .hero-kicker,main > .hero .hero-tag{font-family:Arial,sans-serif!important;color:#4BA114!important;font-size:11px!important;font-weight:500!important;letter-spacing:.18em!important;line-height:1.2!important;text-transform:uppercase!important;margin:0 0 20px!important}
    main > .hero p,main > .hero .hero-sub{font-family:Arial,sans-serif!important;font-size:clamp(1.1rem,2.25vw,1.85rem)!important;font-weight:400!important;line-height:1.45!important;color:rgba(255,255,255,.78)!important;margin:0!important;max-width:820px!important}
    main > .hero .hero-content,main > .hero .hero-copy{max-width:860px!important;position:relative!important;z-index:1!important}
    main > .hero .button,main > .hero .cta{display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:58px!important;margin-top:40px!important;padding:0 27px!important;border-radius:999px!important;font:700 13px/1 Arial,sans-serif!important;letter-spacing:.1em!important;text-transform:uppercase!important}
    main > .hero h1 em{font-style:normal!important;color:#4BA114!important}
    /* The blog uses a light editorial hero instead of the shared photo-hero treatment. */
    body:has(.articles) main > .hero{min-height:auto!important;background:#fff!important;color:#101313!important}
    body:has(.articles) main > .hero:after{display:none!important}
    body:has(.articles) main > .hero h1{color:#101313!important;font-weight:500!important}
    body:has(.articles) main > .hero h1 em{color:#4BA114!important}
    body:has(.articles) main > .hero p{color:#263029!important}
    main > .hero .properties-line{white-space:normal!important}
    @media(min-width:851px){main > .hero .hero-copy:has(.properties-line){max-width:1100px!important}main > .hero .properties-line{white-space:nowrap!important}}
    @media(max-width:850px){main > .hero{min-height:680px!important}}
    @media(max-width:510px){main > .hero h1,main > .hero h1 *,main > .hero h1.home-headline{font-size:3rem!important;line-height:1!important}main > .hero p,main > .hero .hero-sub{font-size:1.08rem!important;line-height:1.5!important}main > .hero .button,main > .hero .cta{margin-top:30px!important;min-height:54px!important}}
    @media(max-width:900px){.site-footer-grid{grid-template-columns:1fr 1fr!important;gap:30px 22px!important}.site-footer-brand{grid-column:1/-1!important}}
    /* Keep the brand anchored in the upper-left corner, independent of hero copy. */
    @media(min-width:901px){
      .nav>.nav-logo{position:absolute!important;left:16px!important;transform:none!important;padding:0 10px!important}
      .nav>.nav-logo img,.nav>.nav-logo .evods-logo{width:124px!important}
    }
    /* Mobile navigation: a compact, tap-friendly menu rather than a clipped scrolling bar. */
    .nav-mobile-toggle{display:none!important}
    @media(max-width:900px){
      html,body{max-width:100%!important;overflow-x:hidden!important}.site{overflow:visible!important}
      .nav{position:absolute!important;top:0!important;left:0!important;right:0!important;height:64px!important;min-height:64px!important;flex-direction:row!important;align-items:center!important;justify-content:space-between!important;padding:8px 24px!important;gap:10px!important;overflow:visible!important}
      .nav>.nav-logo{position:static!important;transform:none!important;height:40px!important;padding:0 11px!important}.nav>.nav-logo img{width:94px!important}.nav>.nav-logo .evods-logo{width:94px!important;height:auto!important}
      .nav-mobile-toggle{display:inline-flex!important;width:42px!important;height:42px!important;align-items:center!important;justify-content:center!important;border:1px solid rgba(255,255,255,.22)!important;border-radius:999px!important;background:rgba(17,17,17,.68)!important;color:#fff!important;font-size:21px!important;line-height:1!important;cursor:pointer!important;backdrop-filter:blur(12px)!important}
      .nav-mobile-toggle span{display:block!important;transform:translateY(-1px)!important}.nav-mobile-toggle[aria-expanded="true"] span{font-size:0!important}.nav-mobile-toggle[aria-expanded="true"] span::before{content:"×"!important;font-size:25px!important}
      .nav-links{display:none!important;position:absolute!important;top:calc(100% + 8px)!important;left:12px!important;right:12px!important;transform:none!important;width:auto!important;height:auto!important;min-height:0!important;max-height:calc(100svh - 82px)!important;overflow-y:auto!important;padding:8px!important;border-radius:18px!important;background:rgba(18,18,18,.98)!important;border:1px solid rgba(255,255,255,.16)!important;box-shadow:0 22px 60px rgba(0,0,0,.45)!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-start!important;gap:2px!important}
      .nav.nav-open .nav-links{display:flex!important}.nav-item{display:block!important;width:100%!important;height:auto!important}.nav-item>a{display:flex!important;width:100%!important;height:46px!important;justify-content:space-between!important;margin:0!important;padding:0 14px!important;font-size:14px!important}.nav-item.has-dropdown>a::after{margin-left:auto!important}
      .dropdown{display:none!important;position:static!important;opacity:1!important;pointer-events:auto!important;transform:none!important;min-width:0!important;width:100%!important;margin:2px 0 6px!important;padding:5px!important;border-radius:12px!important;background:rgba(255,255,255,.055)!important;box-shadow:none!important}.nav-item.has-dropdown::before{display:none!important}.nav-item.is-open .dropdown{display:block!important}
      main > .hero{min-height:min(640px,100svh)!important;padding:102px 24px 46px!important;align-items:flex-end!important}.hero-copy,.hero-content{max-width:100%!important}main > .hero h1,main > .hero h1 *,main > .hero h1.home-headline{font-size:clamp(2.35rem,10.2vw,3.25rem)!important;line-height:1!important;margin-bottom:18px!important}main > .hero p,main > .hero .hero-sub{font-size:1rem!important;line-height:1.5!important;max-width:34rem!important}main > .hero .button,main > .hero .cta{min-height:54px!important;margin-top:28px!important;padding:0 20px!important;font-size:11px!important}
      .site-footer{padding:36px 24px 24px!important}.site-footer-grid{grid-template-columns:1fr!important;gap:26px!important}.site-footer-brand{grid-column:auto!important}.site-footer-col a{font-size:15px!important;margin-bottom:10px!important}
      img,svg,video,canvas{max-width:100%!important}
    }
  `;
  document.head.appendChild(sharedStyle);
  let navRoot = document.querySelector('.nav');
  if (!navRoot) {
    navRoot = document.createElement('nav');
    navRoot.className = 'nav';
    navRoot.innerHTML = '<a class="nav-logo" href="index.html" aria-label="EVODS home"><img src="/assets/logo.svg" alt="EVODS"></a>';
    const siteRoot = document.querySelector('.site') || document.body;
    siteRoot.insertBefore(navRoot, siteRoot.firstChild);
  }
  const logo = navRoot.querySelector('.nav-logo') || navRoot.querySelector('a');
  if (logo) {
    logo.classList.add('nav-logo');
    logo.href = 'index.html';
  }
  let nav = navRoot.querySelector('.nav-links') || navRoot.querySelector('.links');
  if (!nav) {
    nav = document.createElement('div');
    navRoot.appendChild(nav);
  }
  nav.className = 'nav-links';
  nav.innerHTML = `
    <div class="nav-item has-dropdown"><a><span class="evfmc-ev">EV</span>FMC</a><div class="dropdown">
      <div class="dropdown-group-label">Pulse</div>
      <a class="dropdown-item" href="efmc.html"><div class="di-label"><span class="evfmc-ev">EV</span>FMC Dashboard</div><div class="di-sub">Electric fleet management center</div></a>
      <div class="dropdown-divider"></div>
      <div class="dropdown-group-label">CaaS</div>
      <a class="dropdown-item" href="ev_fleet_solutions.html"><div class="di-label">Charging as a Service</div><div class="di-sub">Turn-key fleet charging, zero CapEx</div></a>
      <div class="dropdown-divider"></div>
      <div class="dropdown-group-label">FaaS</div>
      <a class="dropdown-item" href="faas.html"><div class="di-label">Fleet as a Service</div><div class="di-sub">Vehicles, charging, maintenance, and operations</div></a>
      </div></div>
    <div class="nav-item has-dropdown"><a>EVODS Energy</a><div class="dropdown">
      <a class="dropdown-item" href="evods_charging_network.html#supercharger-network"><div class="di-label">EVODS Supercharger Network</div><div class="di-sub">Find charging locations and expansion sites</div></a><div class="dropdown-divider"></div>
      <a class="dropdown-item" href="evods_properties.html"><div class="di-label">EVODS for Properties</div><div class="di-sub">Bring high-speed charging to your site</div></a></div></div>
    <div class="nav-item has-dropdown"><a>About</a><div class="dropdown">
      <a class="dropdown-item" href="about_evods.html"><div class="di-label">About EVODS</div><div class="di-sub">Our EV energy and fleet mission</div></a><div class="dropdown-divider"></div>
      <a class="dropdown-item" href="blog.html"><div class="di-label">Insights by EVODS</div><div class="di-sub">Knowledge Centre</div></a></div></div>
    <div class="nav-item has-dropdown"><a>Connect</a><div class="dropdown"><a class="dropdown-item" href="valet_contact.html"><div class="di-label">Contact us</div><div class="di-sub">Reach our team directly</div></a></div></div>`;

  const mobileToggle = document.createElement('button');
  mobileToggle.type = 'button';
  mobileToggle.className = 'nav-mobile-toggle';
  mobileToggle.setAttribute('aria-label', 'Open navigation menu');
  mobileToggle.setAttribute('aria-expanded', 'false');
  mobileToggle.innerHTML = '<span>☰</span>';
  navRoot.appendChild(mobileToggle);

  const closeMobileMenu = () => {
    navRoot.classList.remove('nav-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Open navigation menu');
    nav.querySelectorAll('.nav-item.is-open').forEach((item) => item.classList.remove('is-open'));
  };
  mobileToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = navRoot.classList.toggle('nav-open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    mobileToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });
  nav.addEventListener('click', (event) => {
    if (!window.matchMedia('(max-width: 900px)').matches) return;
    const trigger = event.target.closest('.nav-item.has-dropdown > a');
    if (!trigger) return;
    event.preventDefault();
    const item = trigger.closest('.nav-item');
    nav.querySelectorAll('.nav-item.is-open').forEach((openItem) => {
      if (openItem !== item) openItem.classList.remove('is-open');
    });
    item.classList.toggle('is-open');
  });
  document.addEventListener('click', (event) => {
    if (window.matchMedia('(max-width: 900px)').matches && !navRoot.contains(event.target)) closeMobileMenu();
  });
  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 900px)').matches) closeMobileMenu();
  });

  const footerMarkup = `
    <div class="site-footer-grid">
      <div class="site-footer-brand">
        <a href="index.html" aria-label="EVODS home"><img class="site-footer-brand-logo" src="/assets/logo.svg" alt="EVODS"></a>
        <p>Building EV energy infrastructure, and the tech to drive charge and fleet management forward.</p>
      </div>
      <div class="site-footer-col">
        <h5>Energy</h5>
        <a href="evods_charging_network.html#supercharger-network">Supercharger Network</a>
        <a href="evods_properties.html">EVODS for Properties</a>
      </div>
      <div class="site-footer-col">
        <h5>Fleet solutions</h5>
        <a href="ev_fleet_solutions.html">CaaS</a>
        <a href="caas_franchise.html">CaaS Franchise Opportunity</a>
        <a href="faas.html">FaaS</a>
        <a href="airport_shuttle_service.html">Airport Shuttle Service</a>
        <a href="dsp_fleet_solutions.html">DSP Fleet Solutions</a>
        <a href="first_responder_security_fleets.html">First Responder &amp; Security Fleets</a>
        <a href="ev_rentals.html">EV Rentals</a>
      </div>
      <div class="site-footer-col">
        <h5>EVODS</h5>
        <a href="evods_valet.html">EVODS Valet</a>
        <a href="efmc.html"><span class="evfmc-ev">EV</span>FMC</a>
        <a href="about_evods.html">About EVODS</a>
        <a href="blog.html">Insights by EVODS</a>
        <a href="valet_contact.html">Contact us</a>
      </div>
    </div>
    <div class="site-footer-bottom">© 2026 EVODS. All rights reserved.</div>`;
  const footers = document.querySelectorAll('footer, .footer');
  if (footers.length) {
    footers.forEach((footer) => {
      footer.className = 'site-footer';
      footer.innerHTML = footerMarkup;
    });
  } else {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = footerMarkup;
    document.body.appendChild(footer);
  }

  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const replacements = [];
  let textNode;
  while ((textNode = textWalker.nextNode())) {
    if (textNode.nodeValue.includes('eFMC')) replacements.push(textNode);
  }
  replacements.forEach((node) => {
    const fragment = document.createDocumentFragment();
    node.nodeValue.split('eFMC').forEach((part, index) => {
      if (part) fragment.appendChild(document.createTextNode(part));
      if (index < node.nodeValue.split('eFMC').length - 1) {
        const prefix = document.createElement('span');
        prefix.className = 'evfmc-ev';
        prefix.textContent = 'EV';
        fragment.append(prefix, document.createTextNode('FMC'));
      }
    });
    node.replaceWith(fragment);
  });
})();
