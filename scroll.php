<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GSAP Scroll Animation</title>
  <link rel="stylesheet" href="css/scroll.css" />
</head>
<body>
  <div class="hero">
    <h1 class="animated-scroll-text">Scroll Trigger Title</h1>
    <p class="animated-scroll-text">This paragraph will explode as you scroll down.</p>
  </div>

  <div class="content">
    <div class="section section-1">Next Section</div>
    <div class="section section-2">Another Section</div>
  </div>

  <script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
  <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
  <script src="js/scroll.js"></script>
</body>
</html>
