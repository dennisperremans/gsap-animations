# Animations Demo

This project demonstrates how to use staggered text animations and card fly-in effects using [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/).

## ✨ Features

- **Staggered Text Animation**: Animate words individually with a slide-in effect.
- **Card Arc Fly-In**: Cards animate into view along an arc, with hover effects and dynamic z-index.
- **Configurable Card Animation**: Use `data-` attributes on the card container to customize animation parameters.

- More animations will be added.

---

## 📁 Project Structure

```
project-root/
│
├── index.html          # Main HTML file
├── general.css         # General global styles (e.g., body, headings)
├── styles.css          # Animation-specific styles
├── scripts.js          # JavaScript animation logic using GSAP
└── README.md           # Documentation (this file)
```

---

## 🚀 Usage

### 1. Clone or Download

Download this repo or copy the files into your own project.

### 2. Include Files

In your HTML file (`<head>` and before `</body>`), link the CSS and JS:

```html
<!-- HEAD -->
<link rel="stylesheet" href="general.css">
<link rel="stylesheet" href="styles.css">
```

The `general.css` is used for your own, non-specific animation, styles.

```html
<!-- BODY (before closing tag) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="scripts.js"></script>
```

### 3. Add Animatable Elements

#### ✅ Staggered Text Animation

```html
<p class="animate-stagger title">
  Your animated text goes here<br />
  It will animate word-by-word on load.
</p>
```

#### ✅ Card Arc Fly-In

```html
<div class="card-container"
     data-radius="300"
     data-arc-spread="70"
     data-center-y="150">
  <div class="animate-card" style="--color:#F94144">
    <div class="swatch"></div>
    <div class="label title">Card title</div>
  </div>
  <!-- Add more cards as needed -->
</div>
```

---

## ⚙️ Data Attributes for Card Container Configuration

You can customize the arc fly-in animation by adding these optional `data-` attributes to the `.card-container`:

| Attribute        | Description                         | Default Value |
|------------------|-------------------------------------|---------------|
| `data-radius`    | Radius of the arc for card spread   | 300           |
| `data-arc-spread`| Total degrees covered by the arc    | 70            |
| `data-center-y`  | Vertical center offset for cards    | 150           |

If any attribute is missing or invalid, the default value will be used.

---

## 🛠️ Customization

- **Card Colors**: Customize with the `--color` inline style.
- **Arc Spread & Radius**: Adjust via the `data-` attributes on the `.card-container` or by editing `scripts.js`.
- **Stagger Speed**: Modify `stagger`, `delay`, and `duration` in the GSAP configs inside `scripts.js`.

---

## 📦 Dependencies

- [GSAP 3](https://cdnjs.com/libraries/gsap): For animations.

You can also install GSAP via npm if using a bundler:

```bash
npm install gsap
```

---

## 🧠 License

Use freely in personal or commercial projects.