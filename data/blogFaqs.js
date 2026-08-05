/** Search-targeted FAQs per blog post — used for on-page FAQ sections + FAQPage JSON-LD */
export const blogFaqsMap = {
  'how-to-stay-safe-on-video-chat-platforms': [
    {
      q: 'Is random video chat safe?',
      a: 'Random video chat can be safe when you protect personal information, use platform safety tools like Parvah\'s report and block features, and skip uncomfortable conversations immediately. Never share your address, phone number, or financial details with strangers.',
    },
    {
      q: 'What should I never share on video chat with strangers?',
      a: 'Never share your full name, home address, phone number, email, social media handles, passwords, bank details, school or workplace, or photos of ID documents. Scammers often ask for these gradually during casual conversation.',
    },
    {
      q: 'Does Parvah store my video calls?',
      a: 'No. Parvah uses WebRTC peer-to-peer technology, so video and audio streams travel directly between browsers and are not recorded or stored on Parvah servers.',
    },
    {
      q: 'How do I report someone on Parvah?',
      a: 'Click the Report User button during an active chat. The user is blocked and skipped instantly. For serious safety concerns, email safety@parvah.online with details.',
    },
  ],

  'omegle-alternatives-why-parvah-is-better': [
    {
      q: 'What is the best Omegle alternative in 2026?',
      a: 'Parvah is a strong Omegle alternative offering free random video chat with no registration, WebRTC peer-to-peer privacy, an 18+ age gate, and built-in report and block tools — all in your browser.',
    },
    {
      q: 'Is Parvah free like Omegle was?',
      a: 'Yes. Parvah is completely free with no signup, subscription, or hidden paywalls. Click Start Match after confirming you are 18+ to begin chatting.',
    },
    {
      q: 'Do I need to create an account on Parvah?',
      a: 'No. Parvah requires no account, email, or username. This reduces your data footprint compared to platforms that force registration.',
    },
    {
      q: 'Why did Omegle shut down?',
      a: 'Omegle closed in November 2023 after years of moderation and legal challenges. Platforms like Parvah continue the random video chat experience with modern WebRTC technology and safety features.',
    },
  ],

  'tips-for-making-meaningful-connections-online': [
    {
      q: 'How do you talk to strangers on video chat?',
      a: 'Start with a friendly greeting and an open-ended question about their country, hobbies, or music. Keep the tone respectful, listen actively, and use Parvah\'s Next button if the conversation is not a good fit.',
    },
    {
      q: 'How can I have better conversations on random video chat?',
      a: 'Prepare a few conversation starters, maintain eye contact with the camera, show genuine curiosity, and avoid controversial topics early. Meaningful connections often come from shared interests discovered through patient dialogue.',
    },
    {
      q: 'Is it possible to make friends on random video chat?',
      a: 'Yes. Many users find language partners, gaming buddies, or long-distance friends through random chat. Stay cautious about sharing contact details and prioritize platforms like Parvah that let you skip or block instantly.',
    },
  ],

  'understanding-webrtc-technology': [
    {
      q: 'What is WebRTC and how does video chat work?',
      a: 'WebRTC (Web Real-Time Communication) is a browser technology that enables direct peer-to-peer audio and video between users. Parvah\'s signaling server only helps browsers find each other; media streams travel directly between devices.',
    },
    {
      q: 'Is WebRTC video chat encrypted?',
      a: 'Yes. WebRTC encrypts media using DTLS-SRTP. Combined with HTTPS for signaling, your video and audio streams are protected in transit between browsers.',
    },
    {
      q: 'What is the difference between STUN and TURN in WebRTC?',
      a: 'STUN servers help browsers discover their public IP address for NAT traversal. TURN relays traffic when direct peer-to-peer connection fails. Parvah uses public STUN servers; most home Wi-Fi and mobile connections connect directly via ICE.',
    },
    {
      q: 'Does Parvah use peer-to-peer video?',
      a: 'Yes. Parvah routes video and audio peer-to-peer using WebRTC whenever possible. Your stream is not archived on Parvah servers.',
    },
  ],

  'video-chat-etiquette-guide': [
    {
      q: 'What is proper video chat etiquette with strangers?',
      a: 'Be polite, dress appropriately, ensure good lighting, avoid interrupting, and respect when someone wants to skip. Do not show explicit content or harass others — Parvah enforces community guidelines and provides report tools.',
    },
    {
      q: 'Should I keep my camera on during random video chat?',
      a: 'You control your camera on Parvah. Many users start with audio or a brief introduction before enabling video. Never pressure others to show more than they are comfortable with.',
    },
    {
      q: 'What topics should I avoid on random video chat?',
      a: 'Avoid politics, religion, explicit content, and personal financial requests early in conversations. If a topic makes either person uncomfortable, politely change subject or click Next.',
    },
  ],

  'ometv-vs-omegle-vs-parvah-comparison': [
    {
      q: 'Is OmeTV better than Omegle?',
      a: 'OmeTV offers app-based random video chat while Omegle was browser-only before it shut down. Parvah provides a browser-based experience with WebRTC P2P, no registration, and modern safety tools — similar spontaneity without an app install.',
    },
    {
      q: 'What is the difference between OmeTV and Parvah?',
      a: 'OmeTV typically requires an app and account features. Parvah runs entirely in your browser, needs no signup, uses WebRTC peer-to-peer video, and includes an 18+ age gate plus report and block controls.',
    },
    {
      q: 'Which random video chat site is safest?',
      a: 'Look for platforms with age verification, report tools, clear community guidelines, and peer-to-peer video that is not stored on servers. Parvah checks these boxes without requiring personal registration.',
    },
  ],

  'fix-webcam-not-working-video-chat': [
    {
      q: 'Why is my webcam not working on video chat?',
      a: 'Common causes include denied browser permissions, another app using the camera (Zoom, Teams), outdated browser, or disabled camera in system settings. Allow camera access for parvah.online and reload the page.',
    },
    {
      q: 'How do I allow camera access for Parvah in Chrome?',
      a: 'Click the lock icon in the address bar → Site settings → Camera → Allow. Then refresh Parvah and click Start Match. On mobile, check Settings → Apps → Browser → Permissions → Camera.',
    },
    {
      q: 'My camera works elsewhere but not on Parvah — what should I do?',
      a: 'Close other apps using the webcam, try an incognito window, update your browser, and verify no extension is blocking camera access. Safari users should enable camera for the site under Settings → Websites → Camera.',
    },
  ],

  'how-to-report-inappropriate-users': [
    {
      q: 'How do I report someone on Parvah?',
      a: 'During an active chat, click the Report User button, select a reason, and confirm. The user is blocked and skipped immediately. Parvah does not store report details on servers — email safety@parvah.online for serious violations.',
    },
    {
      q: 'What happens when you report someone on video chat?',
      a: 'On Parvah, reporting blocks the user and skips to a new match instantly. Nothing is saved to a database. For ongoing or serious issues, contact safety@parvah.online directly.',
    },
    {
      q: 'Can I block someone from matching with me again?',
      a: 'Yes. Parvah\'s report and block flow prevents re-matching with the same user during your session through the block-peer signaling system.',
    },
  ],

  'random-video-chat-for-language-practice': [
    {
      q: 'Can I use random video chat to learn a language?',
      a: 'Yes. Parvah connects you with native speakers worldwide for free conversation practice. Mention you are learning their language, be patient, and use simple sentences. Skip politely if someone is not interested in language exchange.',
    },
    {
      q: 'What is the best free way to practice speaking with natives?',
      a: 'Random video chat platforms like Parvah offer free, unscripted conversation with strangers globally. Combine sessions with vocabulary apps and set a goal such as five minutes of target-language-only chat per match.',
    },
    {
      q: 'Is language practice on random video chat safe?',
      a: 'Stay safe by not sharing personal contact details, using Parvah\'s skip and report tools, and keeping conversations focused on language learning in public-facing topics rather than private information.',
    },
  ],

  'webrtc-connection-failed-troubleshooting': [
    {
      q: 'Why does WebRTC connection failed happen on video chat?',
      a: 'Connection failures usually stem from firewall or NAT restrictions, blocked UDP ports, VPN interference, outdated browsers, or unstable networks. Parvah uses STUN and ICE to establish direct P2P links — most home Wi-Fi and mobile data connections work without relay servers.',
    },
    {
      q: 'How do I fix connection failed on Parvah?',
      a: 'Try reloading the page, switching from Wi-Fi to mobile data or vice versa, disabling VPN, updating your browser, and allowing camera/microphone permissions. Close bandwidth-heavy apps and retry Start Match.',
    },
    {
      q: 'Does Parvah work on mobile data?',
      a: 'Yes. Parvah works on modern mobile browsers over LTE and 5G. If connection fails, toggle airplane mode briefly, ensure camera permissions are granted, and try Chrome or Safari on your device.',
    },
    {
      q: 'Do I need a TURN server for Parvah?',
      a: 'Most Parvah users connect successfully with STUN and direct peer-to-peer WebRTC on home Wi-Fi and mobile data. TURN relay is only needed on unusually restrictive corporate or symmetric NAT networks.',
    },
  ],

  'privacy-guide-random-video-chat': [
    {
      q: 'Is random video chat private?',
      a: 'On Parvah, video uses WebRTC peer-to-peer connections and is not stored on servers. However, the person you chat with could screen-record. Never share sensitive personal information and treat every session as potentially observable.',
    },
    {
      q: 'What data does Parvah collect?',
      a: 'Parvah collects minimal connection metadata for matchmaking (session IDs, timestamps), technical data like IP and browser type, and transient text chat in memory during active matches. No registration data is required.',
    },
    {
      q: 'Can strangers record me on video chat?',
      a: 'Yes — anyone could use screen recording software regardless of platform. Parvah does not record your stream, but you should behave as if recording is possible and avoid showing identifying information.',
    },
    {
      q: 'Is anonymous video chat really anonymous?',
      a: 'Parvah requires no account, but your IP address and browser fingerprint are visible to the platform for security and matchmaking. True anonymity requires not revealing personal details on camera or in text chat.',
    },
  ],

  'best-omegle-alternatives-2026': [
    {
      q: 'What replaced Omegle in 2026?',
      a: 'Several platforms fill the Omegle gap including Parvah, OmeTV, Chatroulette, and others. Parvah stands out with browser-based WebRTC P2P video, no registration, and built-in 18+ verification and safety tools.',
    },
    {
      q: 'Are there free Omegle alternatives without registration?',
      a: 'Yes. Parvah offers free random video chat with no signup. Open parvah.online, confirm you are 18+, allow camera access, and click Start Match.',
    },
    {
      q: 'Which Omegle alternative is best for privacy?',
      a: 'Choose platforms using WebRTC peer-to-peer video that do not require accounts. Parvah transmits video directly between browsers without server-side recording and minimizes collected personal data.',
    },
    {
      q: 'Is Omegle coming back?',
      a: 'Omegle shut down permanently in 2023. Users seeking similar random video chat experiences use alternatives like Parvah that offer modern safety features and WebRTC technology.',
    },
  ],
};

export function getBlogFaqs(slug) {
  return blogFaqsMap[slug] || [];
}
