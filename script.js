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
];

const gallery = document.querySelector(".gallery");
const filters = document.querySelectorAll(".filter");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
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
  "autodisco",
  "file-under-disco",
];

const mixedImages = [];
const groupedImages = projectOrder.map((project) => images.filter(([itemProject]) => itemProject === project));
let hasImages = true;

while (hasImages) {
  hasImages = false;
  groupedImages.forEach((group) => {
    const item = group.shift();
    if (item) {
      mixedImages.push(item);
      hasImages = true;
    }
  });
}

mixedImages.forEach(([project, projectLabel, title, src, shape], index) => {
  const button = document.createElement("button");
  const image = document.createElement("img");
  const label = document.createElement("span");
  const optimizedSrc = optimizedSource(src);

  button.className = `piece ${shape}`;
  button.type = "button";
  button.dataset.project = project;
  button.dataset.projectLabel = projectLabel;
  button.dataset.title = title;
  button.dataset.src = optimizedSrc;
  button.style.animationDelay = `${Math.min(index * 28, 620)}ms`;

  image.src = optimizedSrc;
  image.alt = `${title}, ${projectLabel}`;
  image.loading = "eager";
  image.decoding = "async";
  label.textContent = projectLabel;

  button.append(image, label);
  gallery.append(button);
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

  lightboxImage.src = piece.dataset.src;
  lightboxImage.alt = `${piece.dataset.title}, ${piece.dataset.projectLabel}`;
  lightboxProject.textContent = piece.dataset.projectLabel;
  lightboxTitle.textContent = piece.dataset.title;
  lightbox.showModal();
});

closeButton.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
