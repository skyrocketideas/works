const images = [
  ["amicasa", "Amicasa", "Nurturing Confidence", "assets/amicasa/amicasa-nurturing-confidence.jpeg", "square"],
  ["amicasa", "Amicasa", "Positive Reinforcements", "assets/amicasa/amicasa-positive-reinforcements.jpeg", "square"],
  ["amicasa", "Amicasa", "Providing Tools", "assets/amicasa/amicasa-providing-tools-cropped.jpg", "tall"],
  ["amicasa", "Amicasa", "Globules Labels", "assets/amicasa/globules-labels.webp", "wide"],
  ["autodisco", "Autodisco", "Love Sensation", "assets/autodisco/autodisco-love-sensation-fb-cover.webp", "wide"],
  ["autodisco", "Autodisco", "With Residents", "assets/autodisco/autodisco-with-residents-poster.webp", "tall"],
  ["file-under-disco", "File Under Disco", "Jkriv", "assets/file_under_disco/file-under-disco-jkriv.webp", "square"],
  ["file-under-disco", "File Under Disco", "Labels", "assets/file_under_disco/file-under-disco-labels-b.jpg", "wide"],
  ["posters", "Posters", "Alligator", "assets/posters/gfx_poster_alligator.webp", "tall"],
  ["posters", "Posters", "Carnage", "assets/posters/gfx_poster_carnage.webp", "tall"],
  ["posters", "Posters", "Characters", "assets/posters/gfx_poster_characters.webp", "tall"],
  ["posters", "Posters", "Heat", "assets/posters/gfx_poster_heat.webp", "tall"],
  ["posters", "Posters", "Knight", "assets/posters/gfx_poster_knight.webp", "tall"],
  ["posters", "Posters", "Plants Arizona", "assets/posters/gfx_poster_plants_arizona.webp", "tall"],
  ["posters", "Posters", "Silhouette", "assets/posters/gfx_poster_silhouette.webp", "tall"],
  ["posters", "Posters", "Spacer Woman", "assets/posters/gfx_poster_spacer_woman.webp", "tall"],
  ["posters", "Posters", "Technology", "assets/posters/gfx_poster_technology.webp", "tall"],
  ["posters", "Posters", "The Hand", "assets/posters/gfx_poster_the_hand.webp", "tall"],
  ["roar-groove", "Roar Groove", "Find Your Rhythm Tee", "assets/roar_groove/find-your-rhythm-tee.webp", "tall"],
  ["roar-groove", "Roar Groove", "Vinyl Inner Sleeves", "assets/roar_groove/find-your-rhythm-vinyl-inner-sleeves.webp", "square"],
  ["roar-groove", "Roar Groove", "Vinyl Product Outer", "assets/roar_groove/find-your-rhythm-vinyl-product-outer.webp", "square"],
  ["roar-groove", "Roar Groove", "Incredible Shellsuit Diagonal", "assets/roar_groove/incredible_shellsuit_sleeve_with_vinyl_diagonal.jpg", "square"],
  ["roar-groove", "Roar Groove", "Incredible Shellsuit Overlap", "assets/roar_groove/incredible_shellsuit_sleeve_with_vinyl_overlap.jpg", "square"],
  ["roar-groove", "Roar Groove", "Otherlover Vinyl Close", "assets/roar_groove/otherlover-vinyl-close.webp", "hero"],
  ["roar-groove", "Roar Groove", "Live In Berlin Cassette", "assets/roar_groove/the_revenge_live_in_berlin_cassette.jpg", "square"],
  ["roar-groove", "Roar Groove", "Unfinished Business Logo Ideas", "assets/roar_groove/unfinished-business-logo-ideas.jpg", "wide"],
  ["rocket-factory", "Rocket Factory", "OG Kush Card A", "assets/rocket_factory/rf_gelato_case_print_piecerf_gelato_og_kush_card_a_postcard.jpg", "tall"],
  ["rocket-factory", "Rocket Factory", "OG Kush Card B", "assets/rocket_factory/rf_gelato_case_print_piecerf_gelato_og_kush_card_b_postcard.jpg", "tall"],
  ["rocket-factory", "Rocket Factory", "Print Piece Mockup", "assets/rocket_factory/rf_gelato_og_kush_print_piece_mockup_a.jpg", "hero"],
  ["rocket-factory", "Rocket Factory", "T-Shirt Back", "assets/rocket_factory/rf_gelato_og_kush_t_shirt_back_flat.webp", "square"],
  ["rocket-factory", "Rocket Factory", "T-Shirt Front", "assets/rocket_factory/rf_gelato_og_kush_t_shirt_front.webp", "square"],
  ["sub-club", "Sub Club", "Brick Wall Posters", "assets/sub_club/brick_wall_posters_many.webp", "hero"],
  ["sub-club", "Sub Club", "Discount Cards", "assets/sub_club/discount_cards.webp", "wide"],
  ["sub-club", "Sub Club", "Polaroids", "assets/sub_club/polaroids.webp", "wide"],
  ["sub-club", "Sub Club", "Poster Wall", "assets/sub_club/poster_wall_sub_club.webp", "wide"],
  ["sub-club", "Sub Club", "Flyers Isometric", "assets/sub_club/sub-club-flyers-isometric.webp", "tall"],
  ["sub-club", "Sub Club", "Torn Poster", "assets/sub_club/torn_poster.webp", "hero"],
  ["top-buzz", "Top Buzz", "Logos", "assets/top_buzz/top-buzz-logos.jpg", "wide"],
  ["top-buzz", "Top Buzz", "Posters", "assets/top_buzz/top-buzz-posters.jpg", "wide"],
  ["top-buzz", "Top Buzz", "Stickers White", "assets/top_buzz/top-buzz-stickers-white-cropped.webp", "wide"],
  ["top-buzz", "Top Buzz", "1920 Campaign", "assets/top_buzz/top_buzz_1920x1080.jpg", "wide"],
  ["top-buzz", "Top Buzz", "Pin Badge", "assets/top_buzz/top_buzz_pin_badge_1080x1080.jpg", "square"],
  ["top-buzz", "Top Buzz", "Real Silver Stickers", "assets/top_buzz/top_buzz_real_silver_stickers_1920x1080.jpg", "wide"],
  ["top-buzz", "Top Buzz", "Crumpled Sticker", "assets/top_buzz/top_buzz_sticker_crumpled_1080x1080.jpg", "square"],
  ["top-buzz", "Top Buzz", "T-Shirt", "assets/top_buzz/top_buzz_tshirt_1080x1080.jpg", "square"],
  ["vinyl", "Vinyl", "Vinyl 01", "assets/vinyl/0004770789_10.jpg", "square"],
  ["vinyl", "Vinyl", "Vinyl 02", "assets/vinyl/0004922357_10.jpg", "wide"],
  ["vinyl", "Vinyl", "Vinyl 03", "assets/vinyl/0015460384_10.jpg", "square"],
  ["vinyl", "Vinyl", "Vinyl 04", "assets/vinyl/0039786084_10.jpg", "square"],
  ["vinyl", "Vinyl", "Vinyl 05", "assets/vinyl/0043456088_10.jpg", "square"],
  ["vinyl", "Vinyl", "Vinyl 06", "assets/vinyl/0044921120_10.jpg", "square"],
  ["amicasa", "Amicasa", "Amicasa Loop", "assets/videos/1080x1080_amicasa_loop_smaller.mp4", "square", "video"],
  ["roar-groove", "Roar Groove", "Roar Groove Loop", "assets/videos/1080x1080_roar_groove_loop_smaller.mp4", "square", "video"],
  ["sub-club", "Sub Club", "Sub Club Loop", "assets/videos/1080x1080_sub_club_loop_smaller.mp4", "square", "video"],
  ["top-buzz", "Top Buzz", "Top Buzz Loop", "assets/videos/1080x1080_top_buzz_loop_smaller.mp4", "square", "video"],
  ["fan", "FAN", "FAN Hero", "assets/videos/1920x1080_FAN_hero_smaller.mp4", "wide", "video"],
  ["amicasa", "Amicasa", "Amicasa Film", "assets/videos/1920x1080_amicasa_smaller.mp4", "wide", "video"],
  ["sub-club", "Sub Club", "Sub Club Film", "assets/videos/1920x1080_sub_club_smaller.mp4", "wide", "video"],
  ["f1", "F1", "3D Phone", "assets/videos/f1_3d_phone.mp4", "tall", "video"],
  ["robertsons", "Robertsons", "Robertsons Film", "assets/videos/1920x1080_robertsons_smaller.mp4", "wide", "video"],
  ["start-left-security", "Start Left Security", "Start Left Security Film", "assets/videos/1920x1080_start_left_security_smaller.mp4", "wide", "video"],
  ["mane-cuts", "Mane Cuts", "Mane Cuts Singles", "assets/videos/4k_16x9_mane_cuts_singles_3_smaller_smaller.mp4", "wide", "video"],
  ["mane-cuts", "Mane Cuts", "Mane Cuts Story", "assets/videos/9x16_mane_cuts_singles_6_smaller.mp4", "tall", "video"],
  ["roar-groove", "Roar Groove", "RGRV024 Story", "assets/videos/9x16_rgrv024_ig_story_smaller.mp4", "tall", "video", "assets/video-posters/9x16_rgrv024_ig_story_smaller.jpg"],
  ["home-page", "Home Page", "Home Page Hero", "assets/videos/1920x1080_home_page_hero_11_smaller.mp4", "wide", "video"],
];

const gallery = document.querySelector(".gallery");
const filters = document.querySelectorAll(".filter");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxVideo = lightbox.querySelector("video");
const lightboxProject = lightbox.querySelector("span");
const lightboxTitle = lightbox.querySelector("strong");
const closeButton = lightbox.querySelector(".close");

const optimizedSource = (src) => src.replace(/^assets\//, "assets-optimized/").replace(/\.[^.]+$/, ".jpg");
const projectOrder = [
  "sub-club",
  "posters",
  "roar-groove",
  "top-buzz",
  "amicasa",
  "rocket-factory",
  "vinyl",
  "fan",
  "robertsons",
  "f1",
  "mane-cuts",
  "home-page",
  "start-left-security",
  "autodisco",
  "file-under-disco",
];

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    if (entry.isIntersecting) {
      if (!video.src) {
        video.src = video.dataset.src;
      }
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { rootMargin: "500px 0px" });

const shuffle = (items) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
};

const mixedItems = () => {
  const groups = shuffle(projectOrder).map((project) => (
    shuffle(images.filter(([itemProject]) => itemProject === project))
  ));
  const items = [];
  let hasItems = true;

  while (hasItems) {
    hasItems = false;
    groups.forEach((group) => {
      const item = group.shift();
      if (item) {
        items.push(item);
        hasItems = true;
      }
    });
  }

  return items;
};

const renderGallery = () => {
  document.querySelectorAll(".piece video").forEach((video) => videoObserver.unobserve(video));
  gallery.replaceChildren();

  mixedItems().forEach(([project, projectLabel, title, src, shape, type = "image", poster = ""], index) => {
    const button = document.createElement("button");
    const media = type === "video" ? document.createElement("video") : document.createElement("img");
    const label = document.createElement("span");
    const optimizedSrc = type === "video" ? src : optimizedSource(src);

    button.className = `piece ${shape}`;
    button.type = "button";
    button.dataset.project = project;
    button.dataset.projectLabel = projectLabel;
    button.dataset.title = title;
    button.dataset.src = optimizedSrc;
    button.dataset.type = type;
    button.dataset.poster = poster;
    button.style.animationDelay = `${Math.min(index * 18, 360)}ms`;

    if (type === "video") {
      media.dataset.src = optimizedSrc;
      if (poster) {
        media.poster = poster;
      }
      media.muted = true;
      media.loop = true;
      media.autoplay = true;
      media.playsInline = true;
      media.preload = "none";
      media.setAttribute("aria-label", `${title}, ${projectLabel}`);
    } else {
      media.src = optimizedSrc;
      media.alt = `${title}, ${projectLabel}`;
      media.loading = "eager";
      media.decoding = "async";
    }

    label.textContent = projectLabel;

    button.append(media, label);
    gallery.append(button);

    if (type === "video") {
      videoObserver.observe(media);
    }
  });
};

renderGallery();

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    renderGallery();
  }
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const activeFilter = filter.dataset.filter;
    filters.forEach((item) => item.classList.toggle("is-active", item === filter));

    document.querySelectorAll(".piece").forEach((piece, index) => {
      const isVisible = activeFilter === "all" || piece.dataset.project === activeFilter;
      piece.classList.toggle("is-hidden", !isVisible);
      if (isVisible) {
        piece.style.animation = "none";
        piece.offsetHeight;
        piece.style.animation = `rise 420ms ease ${Math.min(index * 18, 240)}ms forwards`;
      }
    });
  });
});

gallery.addEventListener("click", (event) => {
  const piece = event.target.closest(".piece");
  if (!piece) return;

  const isVideo = piece.dataset.type === "video";

  lightbox.classList.toggle("is-video", isVideo);
  lightboxImage.src = isVideo ? "" : piece.dataset.src;
  lightboxImage.alt = isVideo ? "" : `${piece.dataset.title}, ${piece.dataset.projectLabel}`;
  lightboxVideo.src = isVideo ? piece.dataset.src : "";
  lightboxVideo.poster = isVideo ? piece.dataset.poster : "";
  lightboxVideo.muted = true;
  lightboxProject.textContent = piece.dataset.projectLabel;
  lightboxTitle.textContent = piece.dataset.title;
  lightbox.showModal();

  if (isVideo) {
    lightboxVideo.play().catch(() => {});
  }
});

const closeLightbox = () => {
  lightbox.close();
  lightboxVideo.pause();
  lightboxVideo.removeAttribute("src");
  lightboxVideo.load();
  lightbox.classList.remove("is-video");
};

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});
