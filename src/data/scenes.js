// scenes.js

export const MOODS = {
  rain: {
    label: 'ຄືນຝົນຕົກ',
    gradient:
      'linear-gradient(180deg, #0a0d16 0%, #0d1420 45%, #0b0b0f 100%)',
    glow: '#3a4a68',
    particles: 'rain',
  },

  nostalgic: {
    label: 'ຄວາມຊົງຈຳ',
    gradient:
      'linear-gradient(180deg, #150f10 0%, #1c1414 50%, #0b0b0f 100%)',
    glow: '#8a5a4f',
    particles: 'dust',
  },

  tension: {
    label: 'ໄລຍະຫ່າງ',
    gradient:
      'linear-gradient(180deg, #0e0b16 0%, #150f22 50%, #0b0b0f 100%)',
    glow: '#5a4a8a',
    particles: 'none',
  },

  cafe: {
    label: 'ຮ້ານກາເຟ',
    gradient:
      'linear-gradient(180deg, #17110c 0%, #201811 50%, #0b0b0f 100%)',
    glow: '#a3763f',
    particles: 'dust',
  },

  emotional: {
    label: 'ຄວາມຮູ້ສຶກ',
    gradient:
      'linear-gradient(180deg, #170c14 0%, #1e1019 50%, #0b0b0f 100%)',
    glow: '#8a4f6b',
    particles: 'none',
  },

  sunset: {
    label: 'ຍາມແລງ',
    gradient:
      'linear-gradient(180deg, #1c0f0c 0%, #241408 45%, #0b0b0f 100%)',
    glow: '#d8955a',
    particles: 'none',
  },

  dawn: {
    label: 'ຮຸ່ງເຊົ້າ',
    gradient:
      'linear-gradient(180deg, #10131c 0%, #1a1a22 45%, #0b0b0f 100%)',
    glow: '#d8a7a7',
    particles: 'none',
  },
}


// ========================================
// 🎵 BACKGROUND MUSIC
// ========================================

export const TRACKS = {
  mainTheme: {
    src: '/music/main-theme.mp3',
    volume: 0.35,
  },

  nostalgic: {
    src: '/music/nostalgic.mp3',
    volume: 0.30,
  },

  tension: {
    src: '/music/tension.mp3',
    volume: 0.30,
  },

  hope: {
    src: '/music/hope.mp3',
    volume: 0.35,
  },

  ending: {
    src: '/music/ending.mp3',
    volume: 0.30,
  },
}


// ========================================
// 🔊 SOUND EFFECTS
// ========================================

export const SFX = {
  message: '/sounds/message.mp3',
  phoneRing: '/sounds/phone-ring.mp3',
  click: '/sounds/click.mp3',
  rain: '/sounds/rain.mp3',
}


// ========================================
// 🖼️ BACKGROUND IMAGES
// ========================================

export const bg = (name) => `/images/${name}.jpg`