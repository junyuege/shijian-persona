/* ============================================================
 * 器物图腾（备用方案数据）——已被人物画像取代，从 index.html 移出。
 * 如需切回器物图腾：
 *   1. 把本文件内容（去掉本注释）粘回 index.html 的 PERSONAS 之后
 *   2. 把 renderPortrait 改回注入 ART_SHELL + PERSONA_ART[name] + ART_SEAL
 * ============================================================ */
  /* ==========================================================
     原型图腾：每个原型一件专属器物，内联 SVG，零外部依赖。
     画布统一 viewBox 0 0 200 200，绘图区约 34~170，朱印固定在右下角。
     线条分三层：墨色主轮廓（.7 透明度）／暗金结构线（.4~.65）／淡墨填充（.04~.09）
     ========================================================== */

  // 共用外壳：纸面晕染
  var ART_SHELL =
    '<defs><radialGradient id="pf-wash" cx="50%" cy="42%" r="66%">' +
      '<stop offset="0%" stop-color="#8B7355" stop-opacity="0.15"/>' +
      '<stop offset="58%" stop-color="#8B7355" stop-opacity="0.045"/>' +
      '<stop offset="100%" stop-color="#8B7355" stop-opacity="0"/>' +
    '</radialGradient></defs>' +
    '<rect x="0" y="0" width="200" height="200" fill="url(#pf-wash)"/>';

  // 共用外壳：右下角朱印
  var ART_SEAL =
    '<rect x="158" y="158" width="30" height="30" rx="3" fill="none" ' +
      'stroke="#8B2E2E" stroke-opacity="0.45" stroke-width="1.3"/>' +
    '<text x="173" y="179" text-anchor="middle" font-size="14" fill="#8B2E2E" ' +
      'fill-opacity="0.6" font-family="KaiTi,STKaiti,serif">鉴</text>';

  var PERSONA_ART = {

    // 司马懿 · 一盘未下完的棋
    '司马懿': [
      '<rect x="42" y="42" width="112" height="112" rx="2" fill="none" stroke="#8B7355" stroke-opacity=".38" stroke-width=".7"/>',
      '<rect x="46" y="46" width="104" height="104" fill="rgba(26,26,46,.035)" stroke="#1A1A2E" stroke-opacity=".68" stroke-width="1.8"/>',
      '<path d="M66.8 46V150M87.6 46V150M108.4 46V150M129.2 46V150M46 66.8H150M46 87.6H150M46 108.4H150M46 129.2H150" fill="none" stroke="#8B7355" stroke-opacity=".5" stroke-width=".8"/>',
      '<circle cx="87.6" cy="87.6" r="1.8" fill="#1A1A2E" fill-opacity=".5"/>',
      '<circle cx="66.8" cy="66.8" r="8.4" fill="#1A1A2E" fill-opacity=".8"/>',
      '<circle cx="87.6" cy="108.4" r="8.4" fill="#1A1A2E" fill-opacity=".8"/>',
      '<circle cx="129.2" cy="129.2" r="8.4" fill="#1A1A2E" fill-opacity=".8"/>',
      '<circle cx="108.4" cy="66.8" r="8.4" fill="#FBF9F6" stroke="#1A1A2E" stroke-opacity=".55" stroke-width="1.3"/>',
      '<circle cx="66.8" cy="129.2" r="8.4" fill="#FBF9F6" stroke="#1A1A2E" stroke-opacity=".55" stroke-width="1.3"/>',
      '<circle cx="129.2" cy="87.6" r="8.4" fill="#FBF9F6" stroke="#1A1A2E" stroke-opacity=".55" stroke-width="1.3"/>'
    ].join(''),

    // 薛宝钗 · 菱花金钗（略作倾斜，避免对称呆板；钗股为双股，收于钗脚）
    '薛宝钗': [
      '<g transform="translate(100,78) rotate(-14)">',
        '<g fill="rgba(26,26,46,.055)" stroke="#1A1A2E" stroke-opacity=".7" stroke-width="1.4">',
          '<ellipse cx="0" cy="-23" rx="10" ry="23"/>',
          '<ellipse cx="0" cy="-23" rx="10" ry="23" transform="rotate(60)"/>',
          '<ellipse cx="0" cy="-23" rx="10" ry="23" transform="rotate(120)"/>',
          '<ellipse cx="0" cy="-23" rx="10" ry="23" transform="rotate(180)"/>',
          '<ellipse cx="0" cy="-23" rx="10" ry="23" transform="rotate(240)"/>',
          '<ellipse cx="0" cy="-23" rx="10" ry="23" transform="rotate(300)"/>',
        '</g>',
        '<path d="M0 -14V-40M12.1 -7L34.6 -20M12.1 7L34.6 20M0 14V40M-12.1 7L-34.6 20M-12.1 -7L-34.6 -20" fill="none" stroke="#8B7355" stroke-opacity=".45" stroke-width=".8"/>',
        '<circle cx="0" cy="0" r="9" fill="rgba(139,115,85,.18)" stroke="#8B7355" stroke-opacity=".7" stroke-width="1.1"/>',
        '<circle cx="0" cy="0" r="3" fill="#8B7355" fill-opacity=".6"/>',
      '</g>',
      '<path d="M99 116C97 130 95.5 144 95 158" fill="none" stroke="#1A1A2E" stroke-opacity=".7" stroke-width="2.2" stroke-linecap="round"/>',
      '<path d="M102 118C104 132 105 144 105.5 158" fill="none" stroke="#1A1A2E" stroke-opacity=".7" stroke-width="2.2" stroke-linecap="round"/>',
      '<circle cx="46" cy="44" r="2.2" fill="#8B7355" fill-opacity=".4"/>',
      '<circle cx="156" cy="54" r="1.8" fill="#8B7355" fill-opacity=".35"/>',
      '<circle cx="42" cy="122" r="1.8" fill="#8B7355" fill-opacity=".32"/>'
    ].join(''),

    // 诸葛亮 · 羽扇
    '诸葛亮': [
      '<path d="M100 142L46 114C58 52 142 52 154 114Z" fill="rgba(26,26,46,.04)" stroke="#1A1A2E" stroke-opacity=".7" stroke-width="1.6" stroke-linejoin="round"/>',
      '<path d="M62 120C72 76 128 76 138 120" fill="none" stroke="#8B7355" stroke-opacity=".45" stroke-width=".7"/>',
      '<path d="M100 142L49.3 105.5M100 142L56.5 91.8M100 142L68.8 76.6M100 142L88.6 68.7M100 142V67.5M100 142L111.4 68.7M100 142L131.2 76.6M100 142L143.5 91.8M100 142L150.7 105.5" fill="none" stroke="#8B7355" stroke-opacity=".55" stroke-width=".7"/>',
      '<path d="M100 142V158M100 162V176" fill="none" stroke="#1A1A2E" stroke-opacity=".7" stroke-width="2.6" stroke-linecap="round"/>',
      '<path d="M96 158H104M96 162H104" fill="none" stroke="#8B7355" stroke-opacity=".6" stroke-width=".9"/>'
    ].join(''),

    // 鲁智深 · 酒葫芦
    '鲁智深': [
      '<path d="M96.5 58V52C96.5 49 103.5 49 103.5 52V58Z" fill="rgba(26,26,46,.06)" stroke="#1A1A2E" stroke-opacity=".68" stroke-width="1.3"/>',
      '<path d="M96.5 53H103.5" fill="none" stroke="#8B7355" stroke-opacity=".5" stroke-width=".8"/>',
      '<path d="M100 58C113 58 123 67 123 79C123 91 109 95 109 105C109 115 137 119 137 140C137 158 120 172 100 172C80 172 63 158 63 140C63 119 91 115 91 105C91 95 77 91 77 79C77 67 87 58 100 58Z" fill="rgba(26,26,46,.05)" stroke="#1A1A2E" stroke-opacity=".72" stroke-width="1.6" stroke-linejoin="round"/>',
      '<path d="M86 98C93 107 107 107 114 98" fill="none" stroke="#8B7355" stroke-opacity=".68" stroke-width="1.3"/>',
      '<circle cx="100" cy="102" r="3.5" fill="none" stroke="#8B7355" stroke-opacity=".6" stroke-width="1"/>',
      '<path d="M100 106V120M100 120L96.5 130M100 120L103.5 130" fill="none" stroke="#8B7355" stroke-opacity=".62" stroke-width=".9"/>'
    ].join(''),

    // 庄周 · 蝶
    '庄周': [
      '<path d="M100 86C86 52 46 44 38 70C30 96 64 108 100 96Z" fill="rgba(26,26,46,.055)" stroke="#1A1A2E" stroke-opacity=".7" stroke-width="1.5" stroke-linejoin="round"/>',
      '<path d="M100 86C114 52 154 44 162 70C170 96 136 108 100 96Z" fill="rgba(26,26,46,.055)" stroke="#1A1A2E" stroke-opacity=".7" stroke-width="1.5" stroke-linejoin="round"/>',
      '<path d="M100 100C86 112 58 118 60 140C62 158 88 142 100 118Z" fill="rgba(26,26,46,.035)" stroke="#1A1A2E" stroke-opacity=".65" stroke-width="1.4" stroke-linejoin="round"/>',
      '<path d="M100 100C114 112 142 118 140 140C138 158 112 142 100 118Z" fill="rgba(26,26,46,.035)" stroke="#1A1A2E" stroke-opacity=".65" stroke-width="1.4" stroke-linejoin="round"/>',
      '<path d="M100 92C82 76 62 66 44 70M100 92C84 88 66 96 46 100" fill="none" stroke="#8B7355" stroke-opacity=".45" stroke-width=".7"/>',
      '<path d="M100 92C118 76 138 66 156 70M100 92C116 88 134 96 154 100" fill="none" stroke="#8B7355" stroke-opacity=".45" stroke-width=".7"/>',
      '<path d="M100 108C86 120 74 132 66 146M100 108C114 120 126 132 134 146" fill="none" stroke="#8B7355" stroke-opacity=".4" stroke-width=".7"/>',
      '<circle cx="66" cy="78" r="3.6" fill="#1A1A2E" fill-opacity=".12"/>',
      '<circle cx="134" cy="78" r="3.6" fill="#1A1A2E" fill-opacity=".12"/>',
      '<ellipse cx="100" cy="108" rx="5.5" ry="44" fill="#1A1A2E" fill-opacity=".55"/>',
      '<circle cx="100" cy="62" r="5.5" fill="#1A1A2E" fill-opacity=".7"/>',
      '<path d="M100 58C94 46 86 40 76 37M100 58C106 46 114 40 124 37" fill="none" stroke="#1A1A2E" stroke-opacity=".6" stroke-width="1.1" stroke-linecap="round"/>',
      '<circle cx="76" cy="37" r="2.6" fill="#1A1A2E" fill-opacity=".6"/>',
      '<circle cx="124" cy="37" r="2.6" fill="#1A1A2E" fill-opacity=".6"/>'
    ].join(''),

    // 林黛玉 · 瘦竹与落花（叶子方向刻意拉开，避免排成羽毛状）
    '林黛玉': [
      '<path d="M74 174C70 130 72 76 78 30" fill="none" stroke="#1A1A2E" stroke-opacity=".66" stroke-width="3.6" stroke-linecap="round"/>',
      '<path d="M128 174C132 136 130 92 126 56" fill="none" stroke="#1A1A2E" stroke-opacity=".58" stroke-width="2.6" stroke-linecap="round"/>',
      '<path d="M69 58H80M68.5 96H79.5M69 134H80M124 76H133M124 112H133M124.5 148H133.5" fill="none" stroke="#8B7355" stroke-opacity=".65" stroke-width="1.1"/>',
      '<path d="M77 34Q60 22 42 24Q62 34 77 34Z" fill="rgba(26,26,46,.17)" stroke="#1A1A2E" stroke-opacity=".56" stroke-width="1.1" stroke-linejoin="round"/>',
      '<path d="M77 66Q50 42 18 48Q54 64 77 66Z" fill="rgba(26,26,46,.18)" stroke="#1A1A2E" stroke-opacity=".6" stroke-width="1.1" stroke-linejoin="round"/>',
      '<path d="M74 104Q46 94 18 102Q48 112 74 104Z" fill="rgba(26,26,46,.18)" stroke="#1A1A2E" stroke-opacity=".6" stroke-width="1.1" stroke-linejoin="round"/>',
      '<path d="M78 88Q106 106 108 140Q94 112 78 88Z" fill="rgba(26,26,46,.15)" stroke="#1A1A2E" stroke-opacity=".52" stroke-width="1.1" stroke-linejoin="round"/>',
      '<path d="M127 78Q152 58 166 64Q148 82 127 78Z" fill="rgba(26,26,46,.18)" stroke="#1A1A2E" stroke-opacity=".6" stroke-width="1.1" stroke-linejoin="round"/>',
      '<path d="M127 100Q144 92 158 96Q142 104 127 100Z" fill="rgba(26,26,46,.15)" stroke="#1A1A2E" stroke-opacity=".52" stroke-width="1.1" stroke-linejoin="round"/>',
      '<path d="M129 116Q150 138 150 168Q136 144 129 116Z" fill="rgba(26,26,46,.17)" stroke="#1A1A2E" stroke-opacity=".56" stroke-width="1.1" stroke-linejoin="round"/>',
      '<path d="M48 148C44 143 44 137 48 134C52 137 52 143 48 148Z" fill="#8B2E2E" fill-opacity=".55"/>',
      '<path d="M70 166C66 161 66 155 70 152C74 155 74 161 70 166Z" fill="#8B2E2E" fill-opacity=".45"/>',
      '<path d="M166 140C162 135 162 129 166 126C170 129 170 135 166 140Z" fill="#8B2E2E" fill-opacity=".5"/>',
      '<path d="M106 160C102 155 102 149 106 146C110 149 110 155 106 160Z" fill="#8B2E2E" fill-opacity=".42"/>',
      '<path d="M32 124C28 119 28 113 32 110C36 113 36 119 32 124Z" fill="#8B2E2E" fill-opacity=".4"/>',
      '<circle cx="88" cy="156" r="2.4" fill="#8B2E2E" fill-opacity=".38"/>',
      '<circle cx="140" cy="160" r="2" fill="#8B2E2E" fill-opacity=".32"/>'
    ].join('')
  };

