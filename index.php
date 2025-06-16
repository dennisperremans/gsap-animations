<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Animations</title>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/styles.css" />
        <link rel="stylesheet" href="css/animations.css" />
    </head>
    <body>

        <!-- STAGGER ANIMATION -->
        <p class="animate-stagger title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
            Tempore, minus quos. Vel dolores ducimus, debitis iusto facere eum.<br />
            Asperiores laboriosam autem at dicta est reiciendis maiores tempora alias debitis eum!
        </p>

        <!-- CARDS FLY IN ANIMATION -->
        <div class="card-container">
            <div class="card animate-card" style="--color:#F94144">
                <div class="swatch"></div>
                <div class="label title">Card title</div>
            </div>
            <div class="card animate-card" style="--color:#F3722C">
                <div class="swatch"></div>
                <div class="label title">Card title</div>
            </div>
            <div class="card animate-card" style="--color:#F9C74F">
                <div class="swatch"></div>
                <div class="label title">Card title</div>
            </div>
            <div class="card animate-card" style="--color:#90BE6D">
                <div class="swatch"></div>
                <div class="label title">Card title</div>
            </div>
            <div class="card animate-card" style="--color:#577590">
                <div class="swatch"></div>
                <div class="label title">Card title</div>
            </div>
            <div class="card animate-card" style="--color:#277DA1">
                <div class="swatch"></div>
                <div class="label title">Card title</div>
            </div>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>
