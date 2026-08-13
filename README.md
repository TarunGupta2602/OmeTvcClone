# Parvah

Free random video chat platform — an Omegle / OmeTV alternative built with Next.js, WebRTC, and Socket.io.

## Features

- 1-on-1 random video chat with WebRTC peer-to-peer connections (STUN + ICE)
- Text chat during video sessions
- Age gate (18+), report/block & skip
- SEO-optimized pages: About, FAQ, Safety, Blog, Privacy, Terms, Contact
- RSS feed at `/blog/rss.xml`
- No database, no contact form, no TURN relay — minimal infrastructure

## Getting Started

```bash
cd ometv
npm install
cp .env.example .env.local   # optional — only CORS/port if needed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Only needed for production Socket.io CORS:

```env
ALLOWED_ORIGINS=https://parvah.online
PORT=3000
```

WebRTC uses built-in public STUN servers (Google, Cloudflare). No TURN credentials required.

## Production

```bash
npm run build
npm start
```

Requires the custom `server.js` for Socket.io signaling.

For free always-on hosting (Oracle Cloud Always Free + Cloudflare), see [DEPLOY-ORACLE.md](./DEPLOY-ORACLE.md).

## Stack

- Next.js 16, React 19, Tailwind CSS 4
- Socket.io for matchmaking & signaling
- WebRTC (STUN/ICE) for P2P video/audio
