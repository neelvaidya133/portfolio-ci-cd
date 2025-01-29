# Personal Portfolio Website

This is my personal portfolio website built using Next.js. The project showcases my skills, experience, and projects in a visually appealing and interactive manner.

## 🚀 Features

- **Next.js** for SSR & SSG
- **Styled with Tailwind CSS**
- **Dark/Light mode support**
- **Optimized performance & SEO**
- **Contact form integration**
- **Dynamic project showcase**
- **CI/CD with GitHub Actions**


## 🌍 Live Project

Check out the live project here: [neelvaidya.com](https://neelvaidya.com)


## 📂 Project Structure

```
├── public       # Static assets
├── src
│   ├── components  # Reusable components
│   ├── pages       # Next.js pages
│   ├── styles      # Global styles
├── .github        # GitHub Actions workflows
└── README.md       # Project documentation
```

## ⚙️ CI/CD with GitHub Actions

The project is configured with GitHub Actions for automated deployment. The workflow includes:

- Running lint checks
- Running unit tests
- Building the application
- Deploying to Vercel

### Workflow File: `.github/workflows/deploy.yml`

```yaml
name: Deploy Portfolio

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Build project
        run: npm run build
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## 📦 Installation & Usage

### Clone the Repository

```sh
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### Install Dependencies

```sh
npm install
```

### Run Locally

```sh
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by **Neel Vaidya**
