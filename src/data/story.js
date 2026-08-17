// story.js
// Branching romantic story
// Every scene has its own background image.

const n = (text) => ({
  speaker: null,
  text,
})

const s = (speaker, text) => ({
  speaker,
  text,
})

const bg = (id) => `/images/backgrounds/${id}.jpg`

// ============================================================
// ACTS
// ============================================================

export const ACTS = {
  1: {
    title: 'ຄົນຈາກອະດີດ',
    label: 'ພາກ I',
  },

  2: {
    title: 'ສິ່ງທີ່ຄ້າງຄາ',
    label: 'ພາກ II',
  },

  3: {
    title: 'ພົບກັນ',
    label: 'ພາກ III',
  },

  4: {
    title: 'ຄຳຖາມທີ່ຮູ້ຄຳຕອບຢູ່ແລ້ວ',
    label: 'ພາກ IV',
  },

  5: {
    title: 'ຄືນສຸດທ້າຍ',
    label: 'ພາກ V',
  },
}

export const START_SCENE = 'scene01'

// ============================================================
// STORY
// ============================================================

export const story = {

  // ==========================================================
  // ACT I
  // ==========================================================

  scene01: {
    id: 'scene01',
    act: 1,
    mood: 'rain',
    music: 'mainTheme',
    sfx: ['rain', 'message'],
    background: bg('scene01'),

    dialogue: [
      n('ຝົນຕົກເບົາໆ.'),
      n('ເຈົ້ານັ່ງຢູ່ຄົນດຽວ.'),
      n('📱 23:47'),
      n('ໂທລະສັບສັ່ນ.'),

      s('ເຂົາ', 'ສະບາຍດີ...'),
      s('ເຂົາ', 'ຂ້ອຍບໍ່ຮູ້ຄວນທັກຫາເຈົ້າບໍ.'),
      s('ເຂົາ', 'ແຕ່ມື້ນີ້ຂ້ອຍຄິດຮອດເຈົ້າ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຂ້ອຍກໍຄິດຮອດ.',
        next: 'scene02A',
      },
      {
        id: 'B',
        text: 'ເປັນຫຍັງຈຶ່ງທັກມາ?',
        next: 'scene02B',
      },
      {
        id: 'C',
        text: 'ສະບາຍດີ. ດົນແລ້ວເນາະ.',
        next: 'scene02C',
      },
      {
        id: 'D',
        text: 'ອ່ານແລ້ວບໍ່ຕອບ',
        next: 'scene02D',
      },
    ],
  },

  // ----------------------------------------------------------
  // SCENE 02A
  // ----------------------------------------------------------

  scene02A: {
    id: 'scene02A',
    act: 1,
    mood: 'rain',
    music: 'mainTheme',
    sfx: ['phoneRing'],
    background: bg('scene02A'),

    dialogue: [
      n('ສອງນາທີຜ່ານໄປ.'),
      n('📞 ເຂົາໂທຫາ.'),
    ],

    choices: [
      {
        id: 'A1',
        text: 'ຮັບສາຍ',
        next: 'scene03A1',
      },
      {
        id: 'A2',
        text: 'ບໍ່ຮັບ ແຕ່ພິມ "ຄຸຍໃນແຊັດດີກວ່າ"',
        next: 'scene03A2',
      },
      {
        id: 'A3',
        text: 'ປ່ອຍໃຫ້ສາຍດັບ',
        next: 'scene03A3',
      },
    ],
  },

  // ----------------------------------------------------------
  // SCENE 02B
  // ----------------------------------------------------------

  scene02B: {
    id: 'scene02B',
    act: 1,
    mood: 'rain',
    music: 'mainTheme',
    background: bg('scene02B'),

    dialogue: [
      s('ເຂົາ', 'ຂ້ອຍພົບຮູບເກົ່າ.'),
      s('ເຂົາ', 'ແລ້ວກໍຄິດວ່າ...'),
      s('ເຂົາ', 'ຕອນນີ້ເຈົ້າເປັນແນວໃດແລ້ວ.'),
    ],

    choices: [
      {
        id: 'B1',
        text: 'ຂ້ອຍສະບາຍດີ.',
        next: 'scene03B1',
      },
      {
        id: 'B2',
        text: 'ແລ້ວເຈົ້າລະ?',
        next: 'scene03B2',
      },
      {
        id: 'B3',
        text: 'ເຈົ້າຄິດຮອດຂ້ອຍ ຫຼືຄິດຮອດອະດີດ?',
        next: 'scene03B3',
      },
    ],
  },

  // ----------------------------------------------------------
  // SCENE 02C
  // ----------------------------------------------------------

  scene02C: {
    id: 'scene02C',
    act: 1,
    mood: 'rain',
    music: 'mainTheme',
    background: bg('scene02C'),

    dialogue: [
      s('ເຂົາ', 'ແມ່ນ... ດົນຫຼາຍ.'),
      s('ເຂົາ', 'ເຈົ້າມີຄົນໃໝ່ແລ້ວບໍ?'),
    ],

    choices: [
      {
        id: 'C1',
        text: 'ມີ.',
        next: 'scene03C1',
      },
      {
        id: 'C2',
        text: 'ເປັນຫຍັງຢາກຮູ້?',
        next: 'scene03C2',
      },
      {
        id: 'C3',
        text: 'ຢ່າຖາມເລື່ອງນັ້ນ.',
        next: 'scene03C3',
      },
    ],
  },

  // ----------------------------------------------------------
  // SCENE 02D
  // ----------------------------------------------------------

  scene02D: {
    id: 'scene02D',
    act: 1,
    mood: 'rain',
    music: 'mainTheme',
    sfx: ['message'],
    background: bg('scene02D'),

    dialogue: [
      n('3 ມື້ຜ່ານໄປ.'),
      n('ບໍ່ມີຂໍ້ຄວາມ.'),
      n('ວັນທີ 4:'),

      s('ເຂົາ', 'ຂໍໂທດ.'),
      s('ເຂົາ', 'ຂ້ອຍຄົງບໍ່ຄວນລົບກວນຊີວິດເຈົ້າ.'),
    ],

    choices: [
      {
        id: 'D1',
        text: 'ບໍ່ໄດ້ລົບກວນ.',
        next: 'scene03D1',
      },
      {
        id: 'D2',
        text: 'ຂ້ອຍພຽງແຕ່ບໍ່ຮູ້ຈະຕອບຫຍັງ.',
        next: 'scene03D2',
      },
      {
        id: 'D3',
        text: 'ບໍ່ຕອບອີກ.',
        next: 'scene03D3',
      },
    ],
  },

  // ==========================================================
  // ACT II
  // ==========================================================

  scene03A1: {
    id: 'scene03A1',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    sfx: ['phoneRing'],
    background: bg('scene03A1'),

    dialogue: [
      n('ເຈົ້າຮັບສາຍ.'),
      n('ງຽບ.'),
      s('ເຂົາ', 'ສະບາຍດີ...'),
      n('ສຽງທີ່ເຈົ້າບໍ່ໄດ້ຍິນມາດົນ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຂ້ອຍຄິດຮອດສຽງນີ້.',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ເຮົາບໍ່ຄວນໂທຫາກັນ.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ເຈົ້າໂທມາເພາະຫຍັງ?',
        next: 'scene04C',
      },
    ],
  },

  scene03A2: {
    id: 'scene03A2',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    sfx: ['message'],
    background: bg('scene03A2'),

    dialogue: [
      s('ເຂົາ', 'ເຈົ້າຍັງພິມຊ້າຄືເກົ່າ 😅'),
      n('ເຈົ້າຫົວເລາະ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ເຈົ້າກໍຍັງຈື່ໄດ້.',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ຄົນເຮົາປ່ຽນໄປແລ້ວ.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ເຮົາຢ່າເວົ້າອະດີດດີກວ່າ.',
        next: 'scene04C',
      },
    ],
  },

  scene03A3: {
    id: 'scene03A3',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    sfx: ['phoneRing'],
    background: bg('scene03A3'),

    dialogue: [
      n('ເຈົ້າບໍ່ຮັບ.'),
      n('ແຕ່ຫົວໃຈກັບຢາກໃຫ້ລາວໂທອີກ.'),
      n('ລາວບໍ່ໂທ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ສົ່ງ "ໂທຫາອີກໄດ້ບໍ?"',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ປ່ອຍໄວ້.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ລົບແຊັດ.',
        next: 'scene04C',
      },
    ],
  },

  scene03B1: {
    id: 'scene03B1',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    background: bg('scene03B1'),

    dialogue: [
      s('ເຂົາ', 'ດີແລ້ວ.'),
      n('ແຕ່ນ້ຳສຽງລາວຄ້າຍຄົນທີ່ຢາກຖາມອີກຫຼາຍຢ່າງ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ແລ້ວເຈົ້າສະບາຍດີບໍ?',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ເຮົາຢ່າຄຸຍເລື່ອງອະດີດ.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ເຈົ້າຍັງຈື່ຂ້ອຍແນວໃດ?',
        next: 'scene04C',
      },
    ],
  },

  scene03B2: {
    id: 'scene03B2',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    background: bg('scene03B2'),

    dialogue: [
      s('ເຂົາ', 'ຂ້ອຍກໍດີ.'),
      s('ເຂົາ', 'ແຕ່ບາງມື້...'),
      s('ເຂົາ', 'ຂ້ອຍກໍຍັງຄິດເຖິງເຈົ້າ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຂ້ອຍກໍຄືກັນ.',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ຢ່າເວົ້າແບບນັ້ນ.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ຄິດເຖິງໃນຖານະຫຍັງ?',
        next: 'scene04C',
      },
    ],
  },

  scene03B3: {
    id: 'scene03B3',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    background: bg('scene03B3'),

    dialogue: [
      n('ລາວງຽບໄປດົນ.'),
      s('ເຂົາ', 'ຂ້ອຍຄົງຄິດຮອດທັງສອງ.'),
      s('ເຂົາ', 'ຄົນເກົ່າ... ແລະຕົວເຮົາຕອນທີ່ຢູ່ນຳກັນ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຂ້ອຍເຂົ້າໃຈ.',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ເຮົາຄວນປ່ອຍອະດີດ.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ຂ້ອຍກໍຄິດຄືກັນ.',
        next: 'scene04C',
      },
    ],
  },

  scene03C1: {
    id: 'scene03C1',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    background: bg('scene03C1'),

    dialogue: [
      s('ເຂົາ', 'ດີແລ້ວ.'),
      s('ເຂົາ', 'ລາວຮັກເຈົ້າດີບໍ?'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ດີ.',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ບໍ່ຮູ້.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ເຈົ້າຖາມເພາະຫຍັງ?',
        next: 'scene04C',
      },
    ],
  },

  scene03C2: {
    id: 'scene03C2',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    background: bg('scene03C2'),

    dialogue: [
      s('ເຂົາ', 'ບໍ່ຮູ້.'),
      s('ເຂົາ', 'ບາງທີ... ຂ້ອຍຢາກຮູ້ວ່າຍັງມີບ່ອນວ່າງໃຫ້ຂ້ອຍບໍ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ອາດຈະມີ.',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ບໍ່ມີແລ້ວ.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ເຈົ້າບໍ່ຄວນຖາມ.',
        next: 'scene04C',
      },
    ],
  },

  scene03C3: {
    id: 'scene03C3',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    background: bg('scene03C3'),

    dialogue: [
      n('ລາວງຽບ.'),
      s('ເຂົາ', 'ໂອເຄ.'),
      n('ກ່ອນຈະວາງໂທລະສັບ:'),
      s('ເຂົາ', 'ແຕ່ຂ້ອຍດີໃຈທີ່ໄດ້ຄຸຍກັບເຈົ້າ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຂ້ອຍກໍດີໃຈ.',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ໄວ້ຄ່ອຍຄຸຍ.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ຢ່າຫາຍໄປອີກ.',
        next: 'scene04C',
      },
    ],
  },

  scene03D1: {
    id: 'scene03D1',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    background: bg('scene03D1'),

    dialogue: [
      s('ເຈົ້າ', 'ບໍ່ໄດ້ລົບກວນ.'),
      s('ເຂົາ', 'ງັ້ນ... ພົບກັນໄດ້ບໍ?'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ໄດ້.',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ຂໍຄິດກ່ອນ.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ເຈົ້າຢາກພົບເພາະຫຍັງ?',
        next: 'scene04C',
      },
    ],
  },

  scene03D2: {
    id: 'scene03D2',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    background: bg('scene03D2'),

    dialogue: [
      s('ເຂົາ', 'ຂ້ອຍກໍບໍ່ຮູ້.'),
      s('ເຂົາ', 'ບາງທີຂ້ອຍກໍຢ້ານວ່າເຈົ້າຈະລືມຂ້ອຍ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຂ້ອຍບໍ່ເຄີຍລືມ.',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ຂ້ອຍພະຍາຍາມລືມ.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ເຈົ້າຢ້ານຫຍັງ?',
        next: 'scene04C',
      },
    ],
  },

  scene03D3: {
    id: 'scene03D3',
    act: 2,
    mood: 'nostalgic',
    music: 'nostalgic',
    background: bg('scene03D3'),

    dialogue: [
      n('ເວລາຜ່ານໄປ.'),
      n('ມື້ໜຶ່ງເຈົ້າເຫັນລາວໂດຍບັງເອີນ.'),
      n('ລາວກໍເຫັນເຈົ້າ.'),
      n('ທັງສອງຄົນຢຸດ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ເດີນເຂົ້າໄປຫາ.',
        next: 'scene04A',
      },
      {
        id: 'B',
        text: 'ຍິ້ມຈາກໄກໆ.',
        next: 'scene04B',
      },
      {
        id: 'C',
        text: 'ເດີນຜ່ານໄປ.',
        next: 'scene04C',
      },
    ],
  },

  // ==========================================================
  // ACT III
  // ==========================================================

  scene04A: {
    id: 'scene04A',
    act: 3,
    mood: 'cafe',
    music: 'tension',
    background: bg('scene04A'),

    dialogue: [
      n('ຈາກທາງເລືອກກ່ອນໜ້າ ສຸດທ້າຍພວກເຈົ້າກໍນັດພົບກັນ.'),
      n('ລາວນັ່ງຢູ່ກ່ອນ.'),
      n('ເຈົ້ານັ່ງລົງ.'),
      n('ງຽບ.'),
      s('ເຂົາ', 'ເຈົ້າຍັງຄືເກົ່າ...'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ເຈົ້າກໍຄືກັນ.',
        next: 'scene05A',
      },
      {
        id: 'B',
        text: 'ບໍ່. ເຮົາປ່ຽນໄປແລ້ວ.',
        next: 'scene05B',
      },
      {
        id: 'C',
        text: 'ຂ້ອຍບໍ່ຮູ້.',
        next: 'scene05C',
      },
    ],
  },

  scene04B: {
    id: 'scene04B',
    act: 3,
    mood: 'tension',
    music: 'tension',
    background: bg('scene04B'),

    dialogue: [
      n('ລາວມອງເຈົ້າຈາກໄກ.'),
      n('ລາວຍິ້ມ.'),
      n('ແຕ່ບໍ່ເຂົ້າມາ.'),
      n('ຄືກັບລາວເຂົ້າໃຈວ່າ...'),
      n('ບາງໄລຍະຫ່າງບໍ່ຄວນຂ້າມ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ເຈົ້າເດີນໄປຫາລາວ.',
        next: 'scene05A',
      },
      {
        id: 'B',
        text: 'ເຈົ້າຫັນຫຼັງ.',
        next: 'scene05B',
      },
      {
        id: 'C',
        text: 'ເຈົ້າຍືນລໍຖ້າ.',
        next: 'scene05C',
      },
    ],
  },

  scene04C: {
    id: 'scene04C',
    act: 3,
    mood: 'nostalgic',
    music: 'tension',
    background: bg('scene04C'),

    dialogue: [
      s('ເຂົາ', 'ເຮົາຈະພົບກັນບໍ?'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ພົບ.',
        next: 'scene05A',
      },
      {
        id: 'B',
        text: 'ບໍ່ດີກວ່າ.',
        next: 'scene05B',
      },
      {
        id: 'C',
        text: 'ຂ້ອຍຍັງຢ້ານ.',
        next: 'scene05C',
      },
    ],
  },

  scene05A: {
    id: 'scene05A',
    act: 3,
    mood: 'cafe',
    music: 'nostalgic',
    background: bg('scene05A'),

    dialogue: [
      n('ລາວເລົ່າເລື່ອງເກົ່າ.'),
      n('ສິ່ງນ້ອຍໆທີ່ເຈົ້າລືມໄປແລ້ວ ລາວຍັງຈື່ໄດ້.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ເຈົ້າຈື່ລາຍລະອຽດພວກນີ້ໄດ້ແນວໃດ?',
        next: 'scene06A',
      },
      {
        id: 'B',
        text: 'ຢຸດເລົ່າໄດ້ບໍ?',
        next: 'scene06B',
      },
      {
        id: 'C',
        text: 'ຂ້ອຍຈື່ໄດ້ຢູ່.',
        next: 'scene06C',
      },
    ],
  },

  scene05B: {
    id: 'scene05B',
    act: 3,
    mood: 'cafe',
    music: 'nostalgic',
    background: bg('scene05B'),

    dialogue: [
      s('ເຈົ້າ', 'ພວກເຮົາປ່ຽນໄປແລ້ວ.'),
      n('ລາວພະຍັກໜ້າ.'),
      s('ເຂົາ', 'ແມ່ນ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ແຕ່ບາງຢ່າງຍັງຄືເກົ່າ.',
        next: 'scene06A',
      },
      {
        id: 'B',
        text: 'ບາງທີເຮົາຄວນປ່ອຍ.',
        next: 'scene06B',
      },
      {
        id: 'C',
        text: 'ເຈົ້າຄິດວ່າເຮົາປ່ຽນໄປແນວໃດ?',
        next: 'scene06C',
      },
    ],
  },

  scene05C: {
    id: 'scene05C',
    act: 3,
    mood: 'cafe',
    music: 'nostalgic',
    background: bg('scene05C'),

    dialogue: [
      s('ເຂົາ', 'ເຈົ້າຢ້ານຫຍັງ?'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຢ້ານວ່າຂ້ອຍຍັງຮັກເຈົ້າ.',
        next: 'scene06A',
      },
      {
        id: 'B',
        text: 'ຢ້ານວ່າມັນຈະບໍ່ເໝືອນເກົ່າ.',
        next: 'scene06B',
      },
      {
        id: 'C',
        text: 'ຢ້ານວ່າພົບກັນແລ້ວ ຈະຈາກກັນອີກ.',
        next: 'scene06C',
      },
    ],
  },

  // ==========================================================
  // ACT IV
  // ==========================================================

  scene06A: {
    id: 'scene06A',
    act: 4,
    mood: 'emotional',
    music: 'hope',
    background: bg('scene06A'),

    dialogue: [
      s('ເຂົາ', 'ເຈົ້າຍັງຮັກຂ້ອຍບໍ?'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຮັກ.',
        next: 'scene07A',
      },
      {
        id: 'B',
        text: 'ບໍ່ຮູ້.',
        next: 'scene07B',
      },
      {
        id: 'C',
        text: 'ຂ້ອຍເຄີຍຮັກ.',
        next: 'scene07C',
      },
    ],
  },

  scene06B: {
    id: 'scene06B',
    act: 4,
    mood: 'emotional',
    music: 'hope',
    background: bg('scene06B'),

    dialogue: [
      s('ເຂົາ', 'ຖ້າປ່ອຍແລ້ວ... ເຈົ້າຈະເສຍໃຈບໍ?'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ເສຍໃຈ.',
        next: 'scene07A',
      },
      {
        id: 'B',
        text: 'ບໍ່.',
        next: 'scene07B',
      },
      {
        id: 'C',
        text: 'ອາດຈະ.',
        next: 'scene07C',
      },
    ],
  },

  scene06C: {
    id: 'scene06C',
    act: 4,
    mood: 'emotional',
    music: 'hope',
    background: bg('scene06C'),

    dialogue: [
      s(
        'ເຂົາ',
        'ຖ້າຕອນນັ້ນເຮົາບໍ່ແຍກກັນ... ເຈົ້າຄິດວ່າເຮົາຈະຍັງຮັກກັນຢູ່ບໍ?'
      ),
    ],

    choices: [
      {
        id: 'A',
        text: 'ແມ່ນ.',
        next: 'scene07A',
      },
      {
        id: 'B',
        text: 'ບໍ່ຮູ້.',
        next: 'scene07B',
      },
      {
        id: 'C',
        text: 'ບາງທີພວກເຮົາອາດບໍ່ມາຮອດມື້ນີ້.',
        next: 'scene07C',
      },
    ],
  },

  scene07A: {
    id: 'scene07A',
    act: 4,
    mood: 'emotional',
    music: 'hope',
    background: bg('scene07A'),

    dialogue: [
      n('ຄວາມງຽບ.'),
      s(
        'ເຂົາ',
        'ງັ້ນ... ຖ້າຂ້ອຍຂໍໃຫ້ເຮົາກັບມາ... ເຈົ້າຈະກັບບໍ?'
      ),
    ],

    choices: [
      {
        id: 'A',
        text: 'ກັບ.',
        next: 'scene08A',
      },
      {
        id: 'B',
        text: 'ຢາກກັບ ແຕ່ກັບບໍ່ໄດ້.',
        next: 'scene08B',
      },
      {
        id: 'C',
        text: 'ຂໍເວລາ.',
        next: 'scene08C',
      },
    ],
  },

  scene07B: {
    id: 'scene07B',
    act: 4,
    mood: 'emotional',
    music: 'hope',
    background: bg('scene07B'),

    dialogue: [
      n('ລາວຍິ້ມເບົາໆ.'),
      s(
        'ເຂົາ',
        'ຄຳວ່າບໍ່ຮູ້... ບາງທີມັນກໍຊື່ສັດທີ່ສຸດ.'
      ),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຂໍຢູ່ກັບເຈົ້າອີກມື້ໜຶ່ງ.',
        next: 'scene08A',
      },
      {
        id: 'B',
        text: 'ເຮົາຢຸດຕອນນີ້ດີກວ່າ.',
        next: 'scene08B',
      },
      {
        id: 'C',
        text: 'ຂ້ອຍຢາກຮູ້ຄຳຕອບ.',
        next: 'scene08C',
      },
    ],
  },

  scene07C: {
    id: 'scene07C',
    act: 4,
    mood: 'emotional',
    music: 'hope',
    background: bg('scene07C'),

    dialogue: [
      n('ລາວເບິ່ງລົງໄປທີ່ໂຕະ.'),
      s(
        'ເຂົາ',
        'ບາງທີ... ເຮົາບໍ່ໄດ້ແຍກກັນເພາະບໍ່ຮັກ.'
      ),
      n('ລາວເງີຍໜ້າ.'),
      s(
        'ເຂົາ',
        'ພວກເຮົາແຍກກັນເພາະຕອນນັ້ນເຮົາຍັງບໍ່ຮູ້ວິທີຮັກກັນ.'
      ),
    ],

    choices: [
      {
        id: 'A',
        text: 'ງັ້ນຕອນນີ້ເຮົາຮູ້ແລ້ວ.',
        next: 'scene08A',
      },
      {
        id: 'B',
        text: 'ແຕ່ເວລາຜ່ານໄປແລ້ວ.',
        next: 'scene08B',
      },
      {
        id: 'C',
        text: 'ບາງທີເຮົາຄວນຮູ້ຈັກກັນໃໝ່.',
        next: 'scene08C',
      },
    ],
  },

  // ==========================================================
  // ACT V
  // ==========================================================

  scene08A: {
    id: 'scene08A',
    act: 5,
    mood: 'sunset',
    music: 'hope',
    background: bg('scene08A'),

    dialogue: [
      n('ພວກເຈົ້າຍ່າງນຳກັນ.'),
      n('ຫົວເລາະ.'),
      n('ເວົ້າເຖິງອະດີດ.'),
      n('ຈົນເຂົາຖາມ:'),
      s(
        'ເຂົາ',
        'ຖ້າເຮົາລອງອີກຄັ້ງ... ມັນຈະຕ່າງຈາກເກົ່າບໍ?'
      ),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຕ່າງ.',
        next: 'scene09',
      },
      {
        id: 'B',
        text: 'ຂ້ອຍບໍ່ຮູ້.',
        next: 'scene09',
      },
      {
        id: 'C',
        text: 'ບາງຢ່າງອາດຕ່າງ... ແຕ່ບາງຢ່າງອາດຄືເກົ່າ.',
        next: 'scene09',
      },
    ],
  },

  scene08B: {
    id: 'scene08B',
    act: 5,
    mood: 'sunset',
    music: 'hope',
    background: bg('scene08B'),

    dialogue: [
      n('ຄືນນີ້ງຽບ.'),
      n('ທັງສອງຮູ້ວ່າບາງຄຳຕອບບໍ່ຈຳເປັນຕ້ອງເວົ້າ.'),
      s('ເຂົາ', 'ຂອບໃຈທີ່ມາ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຂອບໃຈທີ່ທັກມາ.',
        next: 'scene09',
      },
      {
        id: 'B',
        text: 'ຂ້ອຍຈະຄິດຮອດ.',
        next: 'scene09',
      },
      {
        id: 'C',
        text: 'ກອດລາວ.',
        next: 'scene09',
      },
    ],
  },

  scene08C: {
    id: 'scene08C',
    act: 5,
    mood: 'sunset',
    music: 'hope',
    background: bg('scene08C'),

    dialogue: [
      n('ພວກເຈົ້າຕົກລົງວ່າຈະໃຊ້ເວລານຳກັນອີກໜຶ່ງຄືນ.'),
      n('ບໍ່ເອີ້ນມັນວ່າການກັບຄືນ.'),
      n('ພຽງແຕ່...'),
      n('ອີກໜຶ່ງຄືນ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຄຸຍເຖິງອະດີດ.',
        next: 'scene09',
      },
      {
        id: 'B',
        text: 'ຄຸຍເຖິງອະນາຄົດ.',
        next: 'scene09',
      },
      {
        id: 'C',
        text: 'ບໍ່ຄຸຍຫຍັງ. ຍ່າງນຳກັນ.',
        next: 'scene09',
      },
    ],
  },

  // ----------------------------------------------------------
  // SCENE 09
  // ----------------------------------------------------------

  scene09: {
    id: 'scene09',
    act: 5,
    mood: 'sunset',
    music: 'hope',
    background: bg('scene09'),

    dialogue: [
      n('ຄືນກຳລັງຈະໝົດ.'),
      n('ລາວຈະຕ້ອງໄປ.'),
      n('ລາວຫັນມາຫາເຈົ້າ.'),

      s(
        'ເຂົາ',
        'ຖ້າມື້ນີ້ເຮົາຕ້ອງບອກລາກັນ...'
      ),

      s(
        'ເຂົາ',
        'ມີຫຍັງໜຶ່ງຢ່າງທີ່ເຈົ້າຢາກບອກຂ້ອຍບໍ?'
      ),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຂ້ອຍຍັງຮັກເຈົ້າ.',
        next: 'scene10',
      },
      {
        id: 'B',
        text: 'ຂອບໃຈທີ່ຄັ້ງໜຶ່ງເຄີຍຢູ່ໃນຊີວິດຂ້ອຍ.',
        next: 'scene10',
      },
      {
        id: 'C',
        text: 'ຂ້ອຍຄິດວ່າ ຖ້າເຮົາພົບກັນໄວກວ່ານີ້ ບາງຢ່າງອາດຕ່າງອອກໄປ.',
        next: 'scene10',
      },
      {
        id: 'D',
        text: 'ບໍ່ມີ.',
        next: 'scene10',
      },
      {
        id: 'E',
        text: 'ບອກທຸກຢ່າງທີ່ຢູ່ໃນໃຈ.',
        next: 'scene10',
      },
    ],
  },

  // ----------------------------------------------------------
  // SCENE 10
  // ----------------------------------------------------------

  scene10: {
    id: 'scene10',
    act: 5,
    mood: 'sunset',
    music: 'hope',
    background: bg('scene10'),

    dialogue: [
      n('ລາວຫັນຫຼັງ.'),
      n('ກ້າວທີ 1.'),
      n('ກ້າວທີ 2.'),
      n('ກ້າວທີ 3.'),
      n('ເຈົ້າຮູ້ວ່າ: ຖ້າເອີ້ນ ລາວຈະຫັນກັບມາ.'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ເອີ້ນ',
        next: 'scene11',
      },
      {
        id: 'B',
        text: 'ບໍ່ເອີ້ນ',
        next: 'final',
        endingTag: 'quiet',
      },
      {
        id: 'C',
        text: 'ເອີ້ນຊື່ ແຕ່ບໍ່ເວົ້າ',
        next: 'scene10c',
      },
    ],
  },

  scene10c: {
    id: 'scene10c',
    act: 5,
    mood: 'sunset',
    music: 'hope',
    background: bg('scene10c'),

    dialogue: [
      s('ເຂົາ', 'ຫຍັງ?'),
      n('ເຈົ້າບໍ່ຮູ້ຈະເວົ້າຫຍັງ.'),
    ],

    choices: [
      {
        id: 'cont',
        text: 'ໄປຕໍ່...',
        next: 'final',
        continue: true,
        endingTag: 'unspoken',
      },
    ],
  },

  // ----------------------------------------------------------
  // SCENE 11
  // ----------------------------------------------------------

  scene11: {
    id: 'scene11',
    act: 5,
    mood: 'sunset',
    music: 'hope',
    background: bg('scene11'),

    dialogue: [
      s('ເຈົ້າ', 'ເດີ່ນ...'),
      n('ລາວຫັນກັບ.'),
      n('ຖ້າເອີ້ນລາວ ມີ 4 ທາງ:'),
    ],

    choices: [
      {
        id: 'A',
        text: 'ຢູ່ຕໍ່ໄດ້ບໍ?',
        next: 'scene11resolve',
      },
      {
        id: 'B',
        text: 'ຂໍກອດໄດ້ບໍ?',
        next: 'scene12',
      },
      {
        id: 'C',
        text: 'ຂ້ອຍຮັກເຈົ້າ.',
        next: 'scene11resolve',
      },
      {
        id: 'D',
        text: 'ຂ້ອຍພຽງແຕ່ຢາກເຫັນໜ້າເຈົ້າອີກຄັ້ງ.',
        next: 'scene11resolve',
      },
    ],
  },

  // ----------------------------------------------------------
  // SCENE 11 RESOLVE
  // ----------------------------------------------------------

  scene11resolve: {
    id: 'scene11resolve',
    act: 5,
    mood: 'sunset',
    music: 'hope',
    background: bg('scene11resolve'),

    dialogue: [
      n('ບໍ່ວ່າເລືອກໃດ...'),
      n('ລາວຈະຢືນຢູ່ຕໍ່ໜ້າເຈົ້າ.'),
      n('ບໍ່ຫນີ. ບໍ່ຮ້ອງໄຫ້.'),
      n('ພຽງແຕ່ມອງເຈົ້າ.'),

      s('ເຂົາ', 'ຂ້ອຍກໍຢາກຢູ່.'),

      n('ຢຸດ.'),

      s(
        'ເຂົາ',
        'ແຕ່ບາງຄັ້ງການຢາກຢູ່... ບໍ່ໄດ້ໝາຍຄວາມວ່າເຮົາຄວນຢູ່.'
      ),
    ],

    choices: [
      {
        id: 'cont',
        text: 'ໄປຕໍ່...',
        next: 'final',
        continue: true,
        endingTag: 'spoken',
      },
    ],
  },

  // ----------------------------------------------------------
  // SCENE 12
  // ----------------------------------------------------------

  scene12: {
    id: 'scene12',
    act: 5,
    mood: 'sunset',
    music: 'ending',
    background: bg('scene12'),

    dialogue: [
      n('ຖ້າເຈົ້າເລືອກກອດ...'),
      n('ລາວກອດກັບ.'),
      n('ບໍ່ມີຄຳເວົ້າ.'),
      n('ພຽງແຕ່ຢືນຢູ່ຢ່າງນັ້ນ.'),
      n('ແລ້ວລາວກະຊິບ.'),

      s(
        'ເຂົາ',
        'ຄັ້ງໜຶ່ງ... ຂ້ອຍເຄີຍຄິດວ່າຖ້າເສຍເຈົ້າໄປ ມັນຈະໝາຍຄວາມວ່າຄວາມຮັກຂອງເຮົາບໍ່ສຳເລັດ.'
      ),

      n('ລາວຖອນອອກ.'),

      s(
        'ເຂົາ',
        'ຕອນນີ້ຂ້ອຍຮູ້ແລ້ວວ່າບໍ່ແມ່ນ.'
      ),
    ],

    choices: [
      {
        id: 'cont',
        text: 'ໄປຕໍ່...',
        next: 'final',
        continue: true,
        endingTag: 'embrace',
      },
    ],
  },

  // ==========================================================
  // FINAL
  // ==========================================================

  final: {
    id: 'final',
    act: 5,
    mood: 'dawn',
    music: 'ending',
    background: bg('final'),
    isEnding: true,

    dialogue: [
      n('ລາວເດີນຈາກໄປ.'),
      n('ເຈົ້າຍືນຢູ່.'),
      n('ມອງລາວຈົນຫາຍໄປຈາກສາຍຕາ.'),

      n('ຄືນນັ້ນ ເຈົ້າຮ້ອງໄຫ້.'),

      n(
        'ແຕ່ບໍ່ແມ່ນນ້ຳຕາຂອງຄົນທີ່ເສຍຄົນຮັກ.'
      ),

      n(
        'ມັນແມ່ນນ້ຳຕາຂອງຄົນທີ່ ໄດ້ຮູ້ວ່າສິ່ງທີ່ຄ້າງຄາໃນໃຈມາຫຼາຍປີ... ມັນມີຄຳຕອບແລ້ວ.'
      ),

      n('ເຈົ້າເຄີຍຮັກລາວ.'),
      n('ລາວເຄີຍຮັກເຈົ້າ.'),

      n('ແລະບາງທີ...'),

      n('ພວກເຈົ້າອາດຍັງຮັກກັນຢູ່.'),

      n(
        'ແຕ່ຊີວິດຂອງພວກເຈົ້າເດີນໄປໄກເກີນກວ່າຈະກັບໄປຈຸດເກົ່າ.'
      ),

      n('ແລະນັ້ນຄືສິ່ງທີ່ເຈັບທີ່ສຸດ:'),

      n('ບໍ່ແມ່ນວ່າເຮົາບໍ່ຮັກກັນ.'),

      n(
        'ແຕ່ເຮົາຮັກກັນ... ແລ້ວກໍຍັງຕ້ອງປ່ອຍກັນ.'
      ),

      n('ເຈົ້າເປີດໂທລະສັບ.'),
      n('ເບິ່ງແຊັດຂອງລາວ.'),
      n('ບໍ່ພິມຫຍັງ.'),
      n('ເຈົ້າພຽງແຕ່ຍິ້ມ.'),
      n('ແລ້ວຄິດຢູ່ໃນໃຈ:'),

      s(
        'ເຈົ້າ',
        'ຂອບໃຈ... ທີ່ຄັ້ງໜຶ່ງ ເຮົາເຄີຍພົບກັນ.'
      ),
    ],

    choices: [],
  },
}

export default story