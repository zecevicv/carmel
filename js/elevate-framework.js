/* #Tabs
  ======================================================= */
const tabs = document.querySelectorAll('.tabs');

if (tabs) {
  tabs.forEach((tab) => {
    const tabBtns = tab.querySelectorAll('.tab-btn');
    const tabPanels = tab.querySelectorAll('.tab-panel');

    tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const tabPanel = tab.querySelector(tabBtn.dataset.tab);

        tabBtns.forEach((btn) => {
          if (btn == tabBtn) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });

        tabPanels.forEach((panel) => {
          if (panel == tabPanel) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });

      });
    });
  });
}

/* #Accordion
================================================== */
const accordions = document.querySelectorAll('.accordion');

if (accordions) {
  accordions.forEach((accordion) => {
    const collapsibles = accordion.querySelectorAll('.collapsible');

    accordion.addEventListener('click', (e) => {
      if (e.target.closest('.collapse-toggler')) {
        e.preventDefault();

        const collapsible = e.target.closest('.collapsible');
        const collapse = collapsible.querySelector('.collapse');

        if (!accordion.classList.contains('no-close')) {
          collapsibles.forEach((coll) => {
            if (coll.classList.contains('show') && coll != collapsible) {
              collCollapse = coll.querySelector('.collapse');

              coll.classList.remove('show');
              gsap.to(collCollapse, {
                height: '0'
              });
            }
          });
        }

        collapsible.classList.toggle('show');

        if (collapsible.classList.contains('show')) {
          gsap.to(collapse, {
            height: 'auto',
            duration: .4,
            ease: 'power1.inOut'
          });
        } else {
          gsap.to(collapse, {
            height: '0'
          });
        }
      }
    });
  })
}

/* #Dropdown
    ======================================================= */
const dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns) {
  dropdowns.forEach((dropdown) => {
    if (window.innerWidth > 1024) {
      // Hover
      if (dropdown.classList.contains('hover')) {
        dropdown.addEventListener('mouseover', (e) => {
          dropdown.classList.add('show');
        });
        dropdown.addEventListener('mouseout', (e) => {
          dropdown.classList.remove('show');
        });
        // Click
      } else {
        dropdown.addEventListener('click', (e) => {
          if (e.target.closest('.dropdown-toggler')) {
            e.preventDefault();
            dropdown.classList.toggle('show');
          }
        });
      }
    } else {
      dropdown.addEventListener('click', (e) => {
        if (e.target.closest('.dropdown-toggler')) {
          e.preventDefault();
          dropdown.classList.toggle('show');
        }
      });
    }
  });
}