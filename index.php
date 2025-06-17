<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Animations</title>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/general.css" />
    </head>
    <body>
        <div class="overview">
            <a href="/_text-stagger/" class="overview__item" data-color="#EF476F">
                Text stagger
            </a>

            <a href="/_scroll-text-explosion/" class="overview__item" data-color="#FFD166">
                Scroll text explosion
            </a>

            <a href="/_cards-fan-out/" class="overview__item" data-color="#06D6A0">
                Cards fan-out
            </a>
        </div>

        <script>
            document.querySelectorAll('.overview__item').forEach(el => {
                const color = el.getAttribute('data-color');
                if (color) {
                el.style.setProperty('--bg', color);
                }
            });
        </script>

    </body>
</html>
