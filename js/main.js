(function () {
  "use strict";
  var data = window.PORTFOLIO;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  function loopVideo(src, label) {
    var v = el("video", { class: "media", muted: "", loop: "", playsinline: "", preload: "none", "aria-label": label });
    v.muted = true;
    v.dataset.src = src;
    return v;
  }

  function caption(title, meta) {
    return el("span", { class: "cap" }, [el("b", { text: title }), el("span", { text: meta })]);
  }

  var playIcon = function () {
    var s = el("span", { class: "play", "aria-hidden": "true" });
    s.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#fff"/></svg>';
    return s;
  };

  // ---------- bento ----------
  var bento = document.getElementById("bento");
  data.work.forEach(function (p) {
    var opens = p.kind !== "rive";
    var tile = el(opens ? "button" : "div", { class: "tile " + p.span, "data-cat": p.cat });
    if (opens) { tile.type = "button"; tile.setAttribute("aria-label", "Open " + p.title); }
    if (p.bg) tile.style.background = p.bg;

    if (p.kind === "video") tile.appendChild(loopVideo(p.loop, p.title));
    if (p.kind === "image") {
      var img = el("img", { class: "media", src: p.img, alt: p.title, loading: "lazy" });
      if (p.pos) img.style.objectPosition = p.pos;
      tile.appendChild(img);
    }
    if (p.kind === "rive") {
      var c = el("canvas", { class: "media", "aria-label": p.title + " Rive animation", role: "img" });
      c.dataset.rive = p.rive;
      tile.appendChild(c);
    }
    tile.appendChild(el("span", { class: "scrim" }));
    tile.appendChild(el("span", { class: "tag" + (p.kind === "rive" ? " live" : ""), text: p.tag }));
    tile.appendChild(caption(p.title, p.meta));
    if (opens) {
      tile.appendChild(playIcon());
      tile.addEventListener("click", function () { openLightbox(p, false); });
    }
    bento.appendChild(tile);
  });

  // ---------- reels strip ----------
  var strip = document.getElementById("strip");
  data.reels.forEach(function (r) {
    var t = el("button", { class: "tile", type: "button", "aria-label": "Open " + r.title });
    t.appendChild(loopVideo(r.loop, r.title));
    t.appendChild(el("span", { class: "scrim" }));
    t.appendChild(caption(r.title, r.meta));
    t.appendChild(playIcon());
    t.addEventListener("click", function () { openLightbox(r, true); });
    strip.appendChild(t);
  });

  // ---------- play loops only while visible ----------
  var videos = document.querySelectorAll("video[data-src]");
  function start(v) {
    if (!v.src) { v.src = v.dataset.src; }
    if (reduceMotion) { v.currentTime = 0.5; return; }
    var pr = v.play(); if (pr && pr.catch) pr.catch(function () {});
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) start(e.target);
        else if (!e.target.paused) e.target.pause();
      });
    }, { rootMargin: "200px 0px" });
    videos.forEach(function (v) { io.observe(v); });
  } else {
    videos.forEach(start);
  }

  // ---------- filter chips ----------
  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var f = chip.dataset.filter;
      chips.forEach(function (c) { var on = c === chip; c.classList.toggle("is-on", on); c.setAttribute("aria-pressed", on); });
      bento.querySelectorAll(".tile").forEach(function (t) {
        t.classList.toggle("is-hidden", f !== "all" && t.dataset.cat !== f);
      });
    });
  });

  // ---------- hero reel sound ----------
  var reel = document.getElementById("reel");
  var soundBtn = document.getElementById("sound");
  if (reduceMotion) { reel.removeAttribute("autoplay"); reel.pause(); }
  soundBtn.addEventListener("click", function () {
    var on = reel.muted;
    reel.muted = !on;
    if (on) reel.currentTime = 0;
    var pr = reel.play(); if (pr && pr.catch) pr.catch(function () {});
    soundBtn.setAttribute("aria-pressed", on);
    soundBtn.querySelector("span").textContent = on ? "Mute" : "Watch with sound";
  });

  // ---------- lightbox ----------
  var dlg = document.getElementById("lightbox");
  var inner = dlg.querySelector(".lb-inner");
  var mediaBox = dlg.querySelector(".lb-media");
  function openLightbox(p, vertical) {
    mediaBox.innerHTML = "";
    var wide = !vertical && p.span !== "s12";
    inner.classList.toggle("is-wide", wide);
    if (p.full) {
      var v = el("video", { src: p.full, controls: "", autoplay: "", playsinline: "", preload: "auto" });
      mediaBox.appendChild(v);
    } else {
      mediaBox.appendChild(el("img", { src: p.img, alt: p.title }));
    }
    dlg.querySelector(".lb-tag").textContent = p.tag || "Reel";
    dlg.querySelector(".lb-title").textContent = p.title;
    dlg.querySelector(".lb-meta").textContent = p.meta || "";
    dlg.querySelector(".lb-role").textContent = p.role || "Edit";
    dlg.querySelector(".lb-format").textContent = p.format || "9:16";
    var old = dlg.querySelector(".lb-note"); if (old) old.remove();
    if (!p.full) {
      dlg.querySelector(".lb-info").appendChild(el("p", { class: "lb-note", text: "Full video available on request." }));
    }
    if (reel && !reel.paused) reel.pause();
    dlg.showModal();
  }
  function closeLightbox() {
    var v = mediaBox.querySelector("video"); if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
    if (dlg.open) dlg.close();
  }
  dlg.querySelector(".lb-close").addEventListener("click", closeLightbox);
  dlg.addEventListener("click", function (e) { if (e.target === dlg) closeLightbox(); });
  dlg.addEventListener("close", function () {
    var v = mediaBox.querySelector("video"); if (v) { v.pause(); }
    if (!reduceMotion && reel.paused) { var pr = reel.play(); if (pr && pr.catch) pr.catch(function () {}); }
  });

  // ---------- live Rive tiles ----------
  function startRive() {
    if (!window.rive) return;
    document.querySelectorAll("canvas[data-rive]").forEach(function (c) {
      var r = new window.rive.Rive({
        src: c.dataset.rive,
        canvas: c,
        autoplay: !reduceMotion,
        layout: new window.rive.Layout({ fit: window.rive.Fit.Contain, alignment: window.rive.Alignment.Center }),
        onLoad: function () { r.resizeDrawingSurfaceToCanvas(); }
      });
      window.addEventListener("resize", function () { r.resizeDrawingSurfaceToCanvas(); });
    });
  }
  if (window.rive) startRive(); else window.addEventListener("load", startRive);
})();
