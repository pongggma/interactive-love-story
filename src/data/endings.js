// endings.js — flavor metadata for the tag computed at the end of a playthrough.
// The final narration text is always the same (that's the point of the story),
// but *how* the player arrived there is remembered and named, so replaying to
// see the other endings has a purpose.

export const ENDINGS = {
  quiet: {
    title: 'ປ່ອຍໄປຢ່າງງຽບໆ',
    description: 'ເຈົ້າເລືອກບໍ່ເອີ້ນລາວກັບຄືນມາ. ບາງຄຳຕອບກໍ່ຢູ່ໃນຄວາມງຽບ.',
  },
  unspoken: {
    title: 'ຄຳທີ່ບໍ່ໄດ້ເວົ້າ',
    description: 'ເຈົ້າເອີ້ນຊື່ລາວ ແຕ່ຄຳເວົ້າບໍ່ອອກມາ. ບາງຄັ້ງຫົວໃຈກໍ່ຊ້າກວ່າປາກ.',
  },
  spoken: {
    title: 'ຄຳທີ່ໄດ້ເວົ້າອອກມາ',
    description: 'ເຈົ້າເລືອກທີ່ຈະເວົ້າ. ບໍ່ວ່າຄຳຕອບຈະເປັນແນວໃດ, ຢ່າງໜ້ອຍເຈົ້າກໍ່ບໍ່ຄ້າງຄາໃຈ.',
  },
  embrace: {
    title: 'ກອດອຳລາ',
    description: 'ບໍ່ມີຄຳເວົ້າໃດຈຳເປັນ. ພຽງແຕ່ກອດກັນໄວ້ ກ່ອນຈະປ່ອຍກັນໄປ.',
  },
}

export const DEFAULT_ENDING = 'quiet'
