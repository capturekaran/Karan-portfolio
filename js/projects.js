// All portfolio content lives here. Edit titles, order or text, then refresh.
//
// kind:  "video" (loop plays in the tile, `full` opens in the lightbox)
//        "image" (still in the tile; `full` optional)
//        "rive"  (live Rive animation from media/rive)
// span:  bento size: "s22" big, "s21" wide, "s12" tall, "s11" small
// cat:   which filter chip shows it: motion | product | story | explainer

window.PORTFOLIO = {
  email: "capture.karan@gmail.com",

  work: [
    { id: "travel", kind: "video", span: "s22", cat: "motion",
      title: "Travel on Points", tag: "Motion design · 3D",
      meta: "SaveSage launch film: globe, flight-search UI, kinetic type",
      role: "Motion design, edit", format: "16:9 · 0:38",
      loop: "media/loops/travel.mp4", full: "media/full/travel.mp4" },

    { id: "dyson", kind: "video", span: "s12", cat: "story",
      title: "5,126 failures", tag: "Storytelling reel",
      meta: "The James Dyson story: archival look, serif captions",
      role: "Edit, visuals, captions", format: "9:16 · 0:35",
      loop: "media/loops/dyson.mp4", full: "media/full/dyson.mp4" },

    { id: "sova", kind: "video", span: "s12", cat: "explainer",
      title: "Sova Health", tag: "Health explainer",
      meta: "3D anatomy, framed split layouts",
      role: "Edit, motion graphics", format: "9:16 · 0:39",
      loop: "media/loops/sova.mp4", full: "media/full/sova.mp4" },

    { id: "indigolaunch", kind: "video", span: "s21", cat: "motion",
      title: "Pay. Earn. Take Off.", tag: "Brand launch · 4K",
      meta: "IndiGo BluChip × SaveSage gradient type film",
      role: "Motion design", format: "16:9 · 0:26",
      loop: "media/loops/indigolaunch.mp4", full: "media/full/indigolaunch.mp4" },

    { id: "rings", kind: "rive", span: "s11", cat: "motion", bg: "#111113",
      title: "Spend Rings", tag: "Live Rive",
      meta: "Product UI loop · 55 KB", rive: "media/rive/spend-rings.riv" },

    { id: "shelf", kind: "rive", span: "s11", cat: "motion", bg: "#EBEDEE",
      title: "Card Shelf", tag: "Live Rive",
      meta: "Product animation · 5 s loop", rive: "media/rive/card-shelf.riv" },

    { id: "aireel", kind: "video", span: "s12", cat: "story",
      title: "Delhi's air", tag: "AI-generated reel",
      meta: "AI imagery, newspaper and TV composites",
      role: "AI visuals, edit", format: "9:16 · 0:32",
      loop: "media/loops/aireel.mp4", full: "media/full/aireel.mp4" },

    { id: "scansave", kind: "video", span: "s21", cat: "product",
      title: "Scan & Save", tag: "Product video",
      meta: "QR-to-checkout UI animation",
      role: "Motion design, UI animation", format: "16:9 · 0:29",
      loop: "media/loops/scansave.mp4", full: "media/full/scansave.mp4" },

    { id: "cars24", kind: "video", span: "s12", cat: "explainer",
      title: "Flex-fuel, explained", tag: "News-style reel",
      meta: "Presenter, headlines and B-roll",
      role: "Edit, graphics", format: "9:16 · 1:46",
      loop: "media/loops/cars24.mp4", full: "media/full/cars24.mp4" },

    { id: "launch", kind: "video", span: "s21", cat: "product",
      title: "All in one, simpler", tag: "App launch",
      meta: "Dark, premium phone UI reveal",
      role: "Motion design", format: "16:9 · 0:24",
      loop: "media/loops/launch.mp4", full: "media/full/launch.mp4" },

    { id: "savvy", kind: "video", span: "s21", cat: "product",
      title: "Introducing Savvy", tag: "AI product teaser",
      meta: "Iridescent orb, chat UI, coming-soon reveal",
      role: "Motion design", format: "16:9 · 0:23",
      loop: "media/loops/savvy.mp4", full: "media/full/savvy.mp4" },

    { id: "lostcard", kind: "image", span: "s21", cat: "explainer",
      title: "Lost your credit card?", tag: "YouTube explainer · 2:27",
      meta: "Red Alert graphics, captions, 40-SFX sound design",
      role: "Edit, motion graphics, sound design", format: "16:9 · 2:27",
      img: "media/img/lostcard.jpg", pos: "30% center" },

    { id: "indigopromo", kind: "image", span: "s21", cat: "product",
      title: "2X BluChip offer", tag: "Promo · 0:56",
      meta: "Talking head with real app screens",
      role: "Edit, app-UI graphics, captions", format: "16:9 · 0:56",
      img: "media/img/indigo_1.jpg", pos: "center 35%", full: "media/full/indigopromo.mp4" }
  ],

  reels: [
    { id: "wildlife", title: "Lion-tailed macaque", meta: "Wildlife docu-reel", loop: "media/loops/wildlife.mp4", full: "media/full/wildlife.mp4" },
    { id: "ccrec", title: "Which card should you get?", meta: "Card graphics + captions", loop: "media/loops/ccrec.mp4", full: "media/full/ccrec.mp4" },
    { id: "instaui", title: "Instagram UI ad", meta: "Recreated app UI animation", loop: "media/loops/instaui.mp4", full: "media/full/instaui.mp4" },
    { id: "codingninja", title: "Coding Ninjas", meta: "Creator ad, screen + 3D props", loop: "media/loops/codingninja.mp4", full: "media/full/codingninja.mp4" },
    { id: "kiwi", title: "Kiwi card", meta: "Talking head + product cards", loop: "media/loops/kiwi.mp4", full: "media/full/kiwi.mp4" },
    { id: "appfeature", title: "Travel feature", meta: "App demo + 3D map", loop: "media/loops/appfeature.mp4", full: "media/full/appfeature.mp4" },
    { id: "podcast", title: "Podcast cutdown", meta: "Bold type + profile UI", loop: "media/loops/podcast.mp4", full: "media/full/podcast.mp4" },
    { id: "th2", title: "London chai secret", meta: "Hook-first talking head", loop: "media/loops/th2.mp4", full: "media/full/th2.mp4" },
    { id: "travel1", title: "Kedarnath trip", meta: "Travel reel, Hinglish captions", loop: "media/loops/travel1.mp4", full: "media/full/travel1.mp4" },
    { id: "realestate", title: "Real-estate pitch", meta: "4K vertical + aerial plot map", loop: "media/loops/realestate.mp4", full: "media/full/realestate.mp4" },
    { id: "skit", title: "Founder pitch skit", meta: "Shark-tank style skit, captions", loop: "media/loops/skit.mp4", full: "media/full/skit.mp4" }
  ]
};
