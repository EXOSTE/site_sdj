// Preloader Logic
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
    // Trigger Hero Animations after preloader
    setTimeout(() => {
      animateHeroText();
    }, 800);
  }, 1500); // Wait a bit for the "gift" effect
});

function animateHeroText() {
  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle) {
    // Wrap letters in spans
    const text = heroTitle.textContent;
    heroTitle.innerHTML = "";
    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.className = "char-animation";
      span.style.transitionDelay = `${index * 50}ms`;
      heroTitle.appendChild(span);
      // Force reflow
      void span.offsetWidth;
      span.classList.add("visible");
    });
  }

  // Trigger other elements
  document.querySelectorAll(".hero p, .hero-btns").forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 1000 + (index * 200));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let s = document.getElementById("particles-canvas");
  if (s) {
    let o = s.getContext("2d"),
      i = [],
      a = { x: null, y: null, radius: 150 };
    function e() {
      ((s.width = s.parentElement.offsetWidth),
        (s.height = s.parentElement.offsetHeight));
    }
    (e(),
      window.addEventListener("resize", e),
      s.parentElement.addEventListener("mousemove", (e) => {
        var t = s.getBoundingClientRect();
        ((a.x = e.clientX - t.left), (a.y = e.clientY - t.top));
      }),
      s.parentElement.addEventListener("mouseleave", () => {
        ((a.x = null), (a.y = null));
      }));
    class p {
      constructor() {
        ((this.x = Math.random() * s.width),
          (this.y = Math.random() * s.height),
          (this.size = 3 * Math.random() + 1),
          (this.baseX = this.x),
          (this.baseY = this.y),
          (this.density = 30 * Math.random() + 1),
          (this.speedX = 0.5 * (Math.random() - 0.5)),
          (this.speedY = 0.5 * (Math.random() - 0.5)),
          (this.color = this.getRandomColor()));
      }
      getRandomColor() {
        var e = [
          "rgba(255, 255, 255, 0.8)",
          "rgba(242, 212, 17, 0.6)",
          "rgba(14, 165, 233, 0.6)",
          "rgba(255, 255, 255, 0.5)",
        ];
        return e[Math.floor(Math.random() * e.length)];
      }
      draw() {
        ((o.fillStyle = this.color),
          o.beginPath(),
          o.arc(this.x, this.y, this.size, 0, 2 * Math.PI),
          o.closePath(),
          o.fill());
      }
      update() {
        var e, t, n, r;
        (null != a.x &&
          null != a.y &&
          ((t = a.x - this.x),
            (r = (e = a.y - this.y) / (e = Math.sqrt(t * t + e * e))),
            (n = (t / e) * (t = ((t = a.radius) - e) / t) * this.density),
            (r = r * t * this.density),
            e < a.radius) &&
          ((this.x -= n), (this.y -= r)),
          (this.x += this.speedX),
          (this.y += this.speedY),
          (this.x > s.width || this.x < 0) && (this.speedX = -this.speedX),
          (this.y > s.height || this.y < 0) && (this.speedY = -this.speedY));
      }
    }
    function t() {
      i = [];
      var t = Math.min((s.width * s.height) / 12e3, 100);
      for (let e = 0; e < t; e++) i.push(new p());
    }
    (t(),
      !(function e() {
        o.clearRect(0, 0, s.width, s.height);
        for (let e = 0; e < i.length; e++) (i[e].update(), i[e].draw());
        for (let t = 0; t < i.length; t++)
          for (let e = t + 1; e < i.length; e++) {
            var n = i[t].x - i[e].x,
              r = i[t].y - i[e].y;
            (n = Math.sqrt(n * n + r * r)) < 120 &&
              ((o.strokeStyle = `rgba(255, 255, 255, ${0.15 - n / 800})`),
                (o.lineWidth = 1),
                o.beginPath(),
                o.moveTo(i[t].x, i[t].y),
                o.lineTo(i[e].x, i[e].y),
                o.stroke());
          }
        requestAnimationFrame(e);
      })(),
      window.addEventListener("resize", () => {
        (e(), t());
      }));
  }
  let n = document.createElement("div"),
    r =
      ((n.className = "scroll-progress"),
        document.body.prepend(n),
        document.getElementById("navbar")),
    o = document.querySelector(".top-bar");
  function i() {
    60 < window.scrollY
      ? (r.classList.add("scrolled"),
        o && (o.style.transform = "translateY(-100%)"))
      : (r.classList.remove("scrolled"),
        o && (o.style.transform = "translateY(0)"));
    var e =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    n.style.width = e + "%";
  }
  (window.addEventListener("scroll", i), i());
  let a = new IntersectionObserver(
    (e, t) => {
      e.forEach((e) => {
        e.isIntersecting &&
          (e.target.classList.add("visible"),
            (e.target.style.animationPlayState = "running"),
            t.unobserve(e.target));
      });
    },
    { root: null, rootMargin: "0px 0px -50px 0px", threshold: 0.15 },
  );
  document
    .querySelectorAll(".fade-in-up, [data-aos]")
    .forEach((e) => a.observe(e));
  var l = document.querySelectorAll(".stat-number");
  let d = new IntersectionObserver(
    (e) => {
      e.forEach((e) => {
        if (e.isIntersecting) {
          var r = parseInt(e.target.textContent);
          if (!isNaN(r)) {
            var o = e.target;
            var i = r;
            r = 1500;
            let t = 0,
              n = i / (r / 16);
            !(function e() {
              (t += n) < i
                ? ((o.textContent = Math.floor(t)), requestAnimationFrame(e))
                : (o.textContent = i);
            })();
          }
          d.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 },
  ),
    c =
      (l.forEach((e) => d.observe(e)),
        document.querySelectorAll('a[href^="#"]').forEach((e) => {
          e.addEventListener("click", function (e) {
            var t = this.getAttribute("href");
            "#" !== t &&
              (e.preventDefault(), (e = document.querySelector(t))) &&
              ((t = r ? r.offsetHeight + 20 : 100),
                (e = e.getBoundingClientRect().top + window.scrollY - t),
                window.scrollTo({ top: e, behavior: "smooth" }));
          });
        }),
        document.querySelector(".hero-graphic")),
    h =
      (c &&
        window.addEventListener("scroll", () => {
          var e = window.scrollY;
          e < 800 &&
            (c.style.transform = `translateY(${0.15 * e}px) rotate(${0.02 * e}deg)`);
        }),
        document.querySelector(".hero-gradient"));
  (h &&
    (h.addEventListener("mousemove", (e) => {
      var t = h.getBoundingClientRect(),
        n = 20 * ((e.clientX - t.left) / t.width - 0.5),
        e = 20 * ((e.clientY - t.top) / t.height - 0.5);
      c && (c.style.transform = `translate(${n}px, ${e}px)`);
    }),
      h.addEventListener("mouseleave", () => {
        c && (c.style.transform = "translate(0, 0)");
      })),
    document.querySelectorAll(".card, .project-logo-card").forEach((r) => {
      (r.addEventListener("mousemove", (e) => {
        var t = r.getBoundingClientRect(),
          n = e.clientX - t.left;
        r.style.transform = `perspective(1000px) rotateX(${(e.clientY - t.top - t.height / 2) / 20}deg) rotateY(${(t.width / 2 - n) / 20}deg) translateY(-5px)`;
      }),
        r.addEventListener("mouseleave", () => {
          r.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
        }));
    }));
  document.querySelectorAll(".btn-accent, .btn-primary").forEach((r) => {
    (r.addEventListener("mousemove", (e) => {
      var t = r.getBoundingClientRect(),
        n = e.clientX - t.left - t.width / 2;
      r.style.transform = `translate(${0.2 * n}px, ${0.2 * (e.clientY - t.top - t.height / 2)}px)`;
    }),
      r.addEventListener("mouseleave", () => {
        r.style.transform = "translate(0, 0)";
      }));
  });
  l = document.querySelector(".hero-text h1");
  if (l && l.querySelector(".text-accent-italic")) {
    let t = l.querySelector(".text-accent-italic"),
      n = t.textContent,
      r = ((t.textContent = ""), 0);
    setTimeout(() => {
      let e = setInterval(() => {
        r < n.length ? ((t.textContent += n.charAt(r)), r++) : clearInterval(e);
      }, 100);
    }, 800);
  }
  let m = () => {
    let t = document.querySelector(".nav-links");
    if (t && !document.querySelector(".mobile-menu-btn")) {
      let e = document.createElement("button");
      ((e.className = "mobile-menu-btn"),
        (e.innerHTML = '<i class="fa-solid fa-bars"></i>'),
        e.setAttribute("aria-label", "Menu"),
        r.querySelector(".container").appendChild(e),
        e.addEventListener("click", () => {
          (t.classList.toggle("mobile-open"),
            (e.innerHTML = t.classList.contains("mobile-open")
              ? '<i class="fa-solid fa-times"></i>'
              : '<i class="fa-solid fa-bars"></i>'));
        }));
    }
  };
  (window.innerWidth <= 768 && m(),
    window.addEventListener("resize", () => {
      window.innerWidth <= 768 && m();
    }));
  l = document.querySelectorAll("img[data-src]");
  let u = new IntersectionObserver((e) => {
    e.forEach((e) => {
      e.isIntersecting &&
        (((e = e.target).src = e.dataset.src),
          e.removeAttribute("data-src"),
          e.classList.add("loaded"),
          u.unobserve(e));
    });
  });
  (l.forEach((e) => u.observe(e)),
    console.log("🎨 SDJ Premium Theme Loaded Successfully!"));
});
let mobileStyles = document.createElement("style");
((mobileStyles.textContent = `
    .mobile-menu-btn {
        display: none;
        background: var(--primary);
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.2rem;
        transition: all 0.3s ease;
    }
    
    .mobile-menu-btn:hover {
        background: var(--accent);
        color: var(--primary);
    }
    
    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block;
        }
        
        .nav-links {
            position: fixed;
            top: 120px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: var(--shadow-lg);
            transform: translateY(-150%);
            transition: transform 0.4s ease;
            z-index: 999;
        }
        
        .nav-links.mobile-open {
            display: flex !important;
            transform: translateY(0);
        }
        
        .nav-item {
            width: 100%;
        }
        
        .nav-link {
            display: block;
            padding: 15px;
            text-align: center;
            border-bottom: 1px solid #eee;
        }
        
        .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            padding-left: 20px;
        }
        
        .top-bar {
            transition: transform 0.3s ease;
        }
    }
`),
  document.head.appendChild(mobileStyles));
