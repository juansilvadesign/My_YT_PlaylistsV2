# My_YT_Playlists - All Your Playlists in One Place 🎶

Welcome to **My_YT_Playlists**, a personal web project where all of my curated YouTube Music playlists are beautifully organized in a single, elegant, and responsive page. Whether you're into K-Pop, FIFA soundtracks, orchestral masterpieces, or nostalgic NFS hits, this site lets you explore it all in one click.

You can access the [project's live website here](https://juanpablodesigner.github.io/My_YT_PlaylistsV2/).

![Project's Cover](https://i.imgur.com/Kj7ZZCq.png)

> My_YT_Playlists showcases thumbnail covers, titles, and durations for each playlist — all grouped by theme.

---
![YouTube Music](https://img.shields.io/badge/YouTube_Music-FF0000?style=for-the-badge&logo=youtube-music&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Perplexity](https://img.shields.io/badge/perplexity-000000?style=for-the-badge&logo=perplexity&logoColor=088F8F) ![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white) ![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)

### Key sections include:

- 🎵 **Top Picks** – My favorite genre mixes.
- 🌍 **Refined Playlists** – Rare and niche selections.
- 🔁 **Recaps** – Yearly and seasonal summaries.
- 🎮 **FIFA / NFS Soundtracks** – For the gaming nostalgia.
- 🌐 **Rest of the World** – Language- and culture-based playlists.

### This project is built with:

* Vite
* TypeScript
* React
* shadcn-ui
* Tailwind CSS


## 🧩 Contributing by Adding Playlists

Want to fork this project or contribute your own playlists? Here's how:

1. Clone the repo

```bash
git clone https://github.com/yourusername/featured-music
```

2. Open the `FeaturedMusic.tsx` file.
3. Add a new object to the `musicSections[]` array with this format:

```ts
{
  imageUrl: 'https://link-to-section-thumbnail',
  subtitle: 'My Label',
  title: 'New Section Title',
  items: [
    {
      title: 'Playlist Title',
      subtitle: 'X tracks • X hours',
      imageUrl: 'https://link-to-yt-music-playlist-thumbnail',
      link: 'https://music.youtube.com/playlist?...'
    },
    // Add more playlists here
  ]
}
```

4. Save and run the app:

```bash
npm install
npm run dev
```

## 🙌 Special Thanks

Made with 💜 by Juan Pablo — for everyone who ever asked: "what’s that playlist you were playing again?"

## 📄 MIT License

This project is open-source and free to use for personal customization.

---

> “Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.” — Plato

