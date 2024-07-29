const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }
      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
      }
      const navLink = document.querySelectorAll('.nav_link')
      
      function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click', linkAction))
      /*Scroll sections active link */

      const sections = document.querySelectorAll('section[id]')
      
      function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 50;
          sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
          }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
     
        })
      }
      window.addEventListener('scroll', scrollActive)
      /* change background header */
      function scrollHeader(){
        const nav = document.getElementById('header')
        if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
      }
      window.addEventListener('scroll, scrollHeader')

      /* show scroll */
      function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
      }
      window.addEventListener('scroll', scrollUp)

      var change = document.getElementById("change");
      
      change.oneclick = function(){
        document.body.classList.toogle(dark-theme);
      }

      