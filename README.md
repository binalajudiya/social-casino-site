# Social Fun Reels - Social Casino Website

A complete static website for a social casino gaming platform. No backend, no database, no CMS - just pure HTML, CSS, and JavaScript.

## 🎰 Features

- **4 Playable Demo Games** that open in popups (via iframe):
  - 🎰 Rocco Gallo
  - ⚔️ Ronin's Honour
  - 🗿 Rotiki
  - 🎭 Royal Masquerade

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Purple/Pink Theme** - Modern gradient design matching your reference
- **Character Placeholders** - Ready for your purple character images
- **Interactive Elements**:
  - Animated FAQ accordions
  - Game popup modals
  - Smooth scrolling
  - Hover effects and animations

## 📄 Pages Included

1. **index.html** - Homepage with hero, games showcase, features, FAQ
2. **games.html** - Full games listing with descriptions
3. **about.html** - About the platform, mission, and values
4. **contact.html** - Contact form (fake submission, shows success message)
5. **privacy.html** - Complete privacy policy
6. **terms.html** - Terms of service

## 🎮 Compliance

- **18+ Badge** in footer
- **GameAware Logo** in footer
- **Disclaimers** on every page stating:
  - For entertainment only
  - No real money gambling
  - Virtual currency only
  - Must be 18+ to play

## 🚀 How to Use

### Option 1: Open Locally
1. Simply open `index.html` in any web browser
2. All files work offline - no server needed!

### Option 2: Deploy to Web Hosting
Upload the entire folder to any web host:
- **Netlify**: Drag and drop the folder
- **Vercel**: Deploy via GitHub or drag-and-drop
- **GitHub Pages**: Push to a repo and enable Pages
- **Any traditional hosting**: Upload via FTP

## 📁 File Structure

```
social-casino-site/
├── index.html          # Homepage
├── games.html          # Games page
├── about.html          # About page
├── contact.html        # Contact page
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── css/
│   └── style.css       # All styling
├── js/
│   └── main.js         # All JavaScript (games, interactions)
├── images/             # Add your character images here
└── games/              # Future: Add more game files if needed
```

## 🎨 Customization

### Colors
Edit `css/style.css` at the top to change the color scheme:
```css
:root {
    --primary-purple: #2d1b69;
    --dark-purple: #1a0f3e;
    --accent-pink: #ff6b9d;
    --accent-cyan: #00d4ff;
    --neon-yellow: #ffeb3b;
}
```

### Character Images
Replace the placeholder character circles with your purple character:
1. Add your images to the `images/` folder
2. Edit the `.character-circle` sections in the HTML
3. Replace `<span class="character-emoji">🎭</span>` with:
   ```html
   <img src="images/your-character.png" alt="Character">
   ```

### Games
Games are loaded via iframe from Play'n GO demo servers. The game URLs are defined in `js/main.js`:
- **Rocco Gallo** - Farm-themed slot with exciting bonuses
- **Ronin's Honour** - Samurai adventure slot
- **Rotiki** - Island treasures cluster-pays slot
- **Royal Masquerade** - Venetian ball mystery slot

To add more games, simply add new entries to the `gameUrls` object in `js/main.js` and create corresponding game cards in the HTML files.

### Text Content
All text can be edited directly in the HTML files. No CMS needed - just open and edit!

## 🔧 Technical Details

- **No Dependencies** - Pure vanilla JavaScript, no frameworks
- **No Backend** - Completely static, runs in browser
- **No Database** - Games are loaded via iframe from external demo servers
- **Mobile-First** - Responsive breakpoints at 768px
- **Modern CSS** - Uses CSS Grid, Flexbox, gradients, animations
- **Cross-Browser** - Works in all modern browsers
- **External Games** - Uses Play'n GO demo game servers

## ⚠️ Important Notes

### Legal Compliance
- This is a **social casino** template for entertainment only
- **No real money** can be won or lost
- All currency is virtual and has no cash value
- Includes age restriction (18+) notices
- Includes responsible gaming information
- Disclaimers on every page

### Contact Form
The contact form is **non-functional** (fake submission):
- Form data is not sent anywhere
- Shows a success message after 2 seconds
- Resets after 5 seconds
- To make it real, integrate with a service like Formspree, EmailJS, or your own backend

### Game State
Games are loaded from external demo servers (Play'n GO) via iframes. Each game session is independent and managed by the game provider. No local state is stored.

## 🎯 What's Next?

To make this a real product, you might want to add:
1. **User Accounts** - Backend with user registration
2. **Persistent Credits** - Save virtual currency in database
3. **Leaderboards** - Track top players
4. **More Games** - Expand the game library
5. **Social Features** - Friends, chat, sharing
6. **Daily Bonuses** - Reward returning users
7. **Achievements** - Unlock badges and rewards
8. **Better Graphics** - Professional character art and UI assets

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📞 Support

This is a static template. For customization help or questions, refer to the code comments in the files.

## 📜 License

Free to use and modify for your project. Just make sure to comply with all local gambling and gaming regulations, even for social/free-to-play casinos.

---

**Built with ❤️ for Social Fun Reels**

Enjoy your social casino website! 🎰✨
