<template>
  <div id="color_picker_container" tabindex="0" v-show="isShow">
    <div class="color_picker_inner">
      <div class="color_picker_header">
        <span></span
        ><button class="icon icon-button has-tooltip">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.929 2.05522C14.7952 2.08141 14.529 2.18468 14.3363 2.27704C14.0141 2.43995 13.9399 2.49523 13.3835 3.04359L12.7799 3.63633L12.5508 3.53233C12.1173 3.33596 11.5173 3.36214 11.1137 3.59923C11.0431 3.63996 10.721 3.93233 10.4024 4.25088C9.62058 5.02179 9.62058 4.92143 10.4097 5.71707L11.0024 6.3098L6.64602 10.6611C4.25328 13.0531 2.27581 15.0451 2.25036 15.0859C2.22781 15.1266 2.15363 15.7411 2.09035 16.456C1.9609 17.8597 1.9609 17.8888 2.15363 17.9819C2.23145 18.0182 2.48745 18.0037 3.57182 17.9033L4.89837 17.7811L9.29113 13.3898L13.6882 8.99418L14.2439 9.55418C14.8024 10.1164 14.9399 10.2204 15.0948 10.1905C15.1435 10.1796 15.4439 9.90909 15.7734 9.57236C16.529 8.81309 16.577 8.72799 16.577 8.10545C16.577 7.71272 16.5697 7.66181 16.4694 7.44653L16.3624 7.2138L16.937 6.63198C17.2694 6.29452 17.5625 5.9578 17.6403 5.82834C17.8562 5.46738 17.979 5.0584 17.9977 4.6382C18.0164 4.21799 17.9303 3.79973 17.7472 3.42105C17.473 2.87341 17.0883 2.49232 16.5399 2.23268C16.0694 2.00722 15.4621 1.94031 14.929 2.05522V2.05522ZM12.3544 7.66108L13.2432 8.54981L8.92822 12.864L4.61328 17.1739L3.63146 17.267C3.09109 17.315 2.64599 17.352 2.64599 17.352C2.64236 17.3484 2.68309 16.904 2.73181 16.363L2.82418 15.3819L7.12457 11.0756C9.49113 8.70909 11.4359 6.77235 11.4468 6.77235C11.4577 6.77235 11.8657 7.17235 12.3544 7.66108V7.66108Z"
            ></path>
          </svg></button
        ><button class="icon icon-button has-tooltip">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <div class="sp-container sp-light sp-flat sp-palette-buttons-disabled">
          <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf">
              <div class="sp-cf sp-palette-row sp-palette-row-0">
                <span
                  title="#000000"
                  class="sp-thumb-el sp-thumb-active sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(0, 0, 0)"
                  ></span></span
                ><span title="#202020" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(32, 32, 32)"
                  ></span></span
                ><span title="#404040" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(64, 64, 64)"
                  ></span></span
                ><span title="#606060" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(96, 96, 96)"
                  ></span></span
                ><span title="#808080" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(128, 128, 128)"
                  ></span></span
                ><span title="#9F9F9F" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(159, 159, 159)"
                  ></span></span
                ><span title="#BFBFBF" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(191, 191, 191)"
                  ></span></span
                ><span title="#DFDFDF" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(223, 223, 223)"
                  ></span></span
                ><span title="#FFFFFF" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(255, 255, 255)"
                  ></span
                ></span>
              </div>
              <div class="sp-cf sp-palette-row sp-palette-row-1">
                <span title="#F18888" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(241, 136, 136)"
                  ></span></span
                ><span title="#F7B275" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(247, 178, 117)"
                  ></span></span
                ><span title="#FBD975" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(251, 217, 117)"
                  ></span></span
                ><span title="#E7F69B" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(231, 246, 155)"
                  ></span></span
                ><span title="#A6DEB4" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(166, 222, 180)"
                  ></span></span
                ><span title="#9ADDEB" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(154, 221, 235)"
                  ></span></span
                ><span title="#BBD7FF" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(187, 215, 255)"
                  ></span></span
                ><span title="#BC82E5" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(188, 130, 229)"
                  ></span></span
                ><span title="#F08BBD" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(240, 139, 189)"
                  ></span
                ></span>
              </div>
              <div class="sp-cf sp-palette-row sp-palette-row-2">
                <span title="#E35656" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(227, 86, 86)"
                  ></span></span
                ><span title="#F28F39" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(242, 143, 57)"
                  ></span></span
                ><span title="#F7CC49" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(247, 204, 73)"
                  ></span></span
                ><span title="#D4EC60" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(212, 236, 96)"
                  ></span></span
                ><span title="#6DD186" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(109, 209, 134)"
                  ></span></span
                ><span title="#5BC2D6" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(91, 194, 214)"
                  ></span></span
                ><span title="#73A3E6" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(115, 163, 230)"
                  ></span></span
                ><span title="#9A57CA" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(154, 87, 202)"
                  ></span></span
                ><span title="#DD65A1" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(221, 101, 161)"
                  ></span
                ></span>
              </div>
              <div class="sp-cf sp-palette-row sp-palette-row-3">
                <span title="#CA3333" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(202, 51, 51)"
                  ></span></span
                ><span title="#EF7B17" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(239, 123, 23)"
                  ></span></span
                ><span title="#F6C531" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(246, 197, 49)"
                  ></span></span
                ><span title="#C0DB38" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(192, 219, 56)"
                  ></span></span
                ><span title="#45C364" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(69, 195, 100)"
                  ></span></span
                ><span title="#30A2B9" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(48, 162, 185)"
                  ></span></span
                ><span title="#3D73BF" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(61, 115, 191)"
                  ></span></span
                ><span title="#7F3BAF" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(127, 59, 175)"
                  ></span></span
                ><span title="#C24483" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(194, 68, 131)"
                  ></span
                ></span>
              </div>
              <div class="sp-cf sp-palette-row sp-palette-row-4">
                <span title="#AC1B1B" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(172, 27, 27)"
                  ></span></span
                ><span title="#D46809" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(212, 104, 9)"
                  ></span></span
                ><span title="#EAB61B" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(234, 182, 27)"
                  ></span></span
                ><span title="#A6C122" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(166, 193, 34)"
                  ></span></span
                ><span title="#28AF4A" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(40, 175, 74)"
                  ></span></span
                ><span title="#1E879C" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(30, 135, 156)"
                  ></span></span
                ><span title="#1C5099" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(28, 80, 153)"
                  ></span></span
                ><span title="#662495" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(102, 36, 149)"
                  ></span></span
                ><span title="#A62867" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(166, 40, 103)"
                  ></span
                ></span>
              </div>
              <div class="sp-cf sp-palette-row sp-palette-row-5">
                <span title="#850A0A" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(133, 10, 10)"
                  ></span></span
                ><span title="#A54F04" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(165, 79, 4)"
                  ></span></span
                ><span title="#CD9D0E" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(205, 157, 14)"
                  ></span></span
                ><span title="#819713" class="sp-thumb-el sp-thumb-light"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(129, 151, 19)"
                  ></span></span
                ><span title="#169535" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(22, 149, 53)"
                  ></span></span
                ><span title="#136D7F" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(19, 109, 127)"
                  ></span></span
                ><span title="#103E7F" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(16, 62, 127)"
                  ></span></span
                ><span title="#4F147A" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(79, 20, 122)"
                  ></span></span
                ><span title="#85124B" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(133, 18, 75)"
                  ></span
                ></span>
              </div>
              <div class="sp-cf sp-palette-row sp-palette-row-6">
                <span title="#5E0000" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(94, 0, 0)"
                  ></span></span
                ><span title="#713500" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(113, 53, 0)"
                  ></span></span
                ><span title="#926F05" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(146, 111, 5)"
                  ></span></span
                ><span title="#5B6B0A" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(91, 107, 10)"
                  ></span></span
                ><span title="#096B22" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(9, 107, 34)"
                  ></span></span
                ><span title="#0B5362" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(11, 83, 98)"
                  ></span></span
                ><span title="#093066" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(9, 48, 102)"
                  ></span></span
                ><span title="#3D0E5F" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(61, 14, 95)"
                  ></span></span
                ><span title="#56022C" class="sp-thumb-el sp-thumb-dark"
                  ><span
                    class="sp-thumb-inner"
                    style="background-color: rgb(86, 2, 44)"
                  ></span
                ></span>
              </div>
              <div class="sp-cf sp-palette-row sp-palette-row-selection"></div>
            </div>
            <div class="sp-palette-teamcolors" style="display: none">
              <input type="text" class="sp-palette-teamcolors-filter" />
              <div class="sp-palette-teamcolors-container">
                <div data-hex="#3B5B9A" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Air Force Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(59, 91, 154)"
                  ></div>
                </div>
                <div data-hex="#8DACCB" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Argentina Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(141, 172, 203)"
                  ></div>
                </div>
                <div data-hex="#C52B82" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Bloom</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(197, 43, 130)"
                  ></div>
                </div>
                <div data-hex="#fbba0d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Adidas Bold Gold</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(251, 186, 13)"
                  ></div>
                </div>
                <div data-hex="#ed6c1f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Bright Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(237, 108, 31)"
                  ></div>
                </div>
                <div data-hex="#234787" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Bright Royal</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(35, 71, 135)"
                  ></div>
                </div>
                <div data-hex="#602732" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Cardinal</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(96, 39, 50)"
                  ></div>
                </div>
                <div data-hex="#b5dcf7" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Adidas Clear Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(181, 220, 247)"
                  ></div>
                </div>
                <div data-hex="#b7b3b6" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Adidas Clear Onix</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(183, 179, 182)"
                  ></div>
                </div>
                <div data-hex="#374585" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Cobalt</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(55, 69, 133)"
                  ></div>
                </div>
                <div data-hex="#ECA800" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Collegiate Gold</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(236, 168, 0)"
                  ></div>
                </div>
                <div data-hex="#2E3341" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Collegiate Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(46, 51, 65)"
                  ></div>
                </div>
                <div data-hex="#B74024" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Collegiate Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(183, 64, 36)"
                  ></div>
                </div>
                <div data-hex="#38305A" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Collegiate Purple</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(56, 48, 90)"
                  ></div>
                </div>
                <div data-hex="#9F2B35" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Collegiate Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(159, 43, 53)"
                  ></div>
                </div>
                <div data-hex="#2B3C74" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Collegiate Royal</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(43, 60, 116)"
                  ></div>
                </div>
                <div data-hex="#7092BC" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Columbia Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(112, 146, 188)"
                  ></div>
                </div>
                <div data-hex="#AD9C70" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Dark Football Gold</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(173, 156, 112)"
                  ></div>
                </div>
                <div data-hex="#005143" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Adidas Dark Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 81, 67)"
                  ></div>
                </div>
                <div data-hex="#F0FF50" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Electricity</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(240, 255, 80)"
                  ></div>
                </div>
                <div data-hex="#3C794E" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Fairway</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(60, 121, 78)"
                  ></div>
                </div>
                <div data-hex="#324C44" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Forest</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(50, 76, 68)"
                  ></div>
                </div>
                <div data-hex="#6c6c6c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Grey Four F17</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(108, 108, 108)"
                  ></div>
                </div>
                <div data-hex="#CF388B" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Intense Pink F11</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(207, 56, 139)"
                  ></div>
                </div>
                <div data-hex="#555F66" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Lead</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(85, 95, 102)"
                  ></div>
                </div>
                <div data-hex="#738188" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Adidas Light Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(115, 129, 136)"
                  ></div>
                </div>
                <div data-hex="#4A2D35" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Light Maroon</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(74, 45, 53)"
                  ></div>
                </div>
                <div data-hex="#A9ABB0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Adidas Light Onix</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(169, 171, 176)"
                  ></div>
                </div>
                <div data-hex="#DF7C27" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Light Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(223, 124, 39)"
                  ></div>
                </div>
                <div data-hex="#B1F166" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Macaw</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(177, 241, 102)"
                  ></div>
                </div>
                <div data-hex="#32364D" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas New Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(50, 54, 77)"
                  ></div>
                </div>
                <div data-hex="#D5592B" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Orange</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(213, 89, 43)"
                  ></div>
                </div>
                <div data-hex="#eca4a0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Pink</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(236, 164, 160)"
                  ></div>
                </div>
                <div data-hex="#BAAB81" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Adidas Sandstorm</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(186, 171, 129)"
                  ></div>
                </div>
                <div data-hex="#9299A2" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Silver</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(146, 153, 162)"
                  ></div>
                </div>
                <div data-hex="#2B7CB4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Solar Blue2 S14</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(43, 124, 180)"
                  ></div>
                </div>
                <div data-hex="#e73c31" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Solar Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(231, 60, 49)"
                  ></div>
                </div>
                <div data-hex="#ffe100" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Solar Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 225, 0)"
                  ></div>
                </div>
                <div data-hex="#E8D000" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Sun</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(232, 208, 0)"
                  ></div>
                </div>
                <div data-hex="#EABC06" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Sunshine</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(234, 188, 6)"
                  ></div>
                </div>
                <div data-hex="#3f3722" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Coffee</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(63, 55, 34)"
                  ></div>
                </div>
                <div data-hex="#681f2d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Collegiate Burgundy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(104, 31, 45)"
                  ></div>
                </div>
                <div data-hex="#f6a200" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Collegiate Gold</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(246, 162, 0)"
                  ></div>
                </div>
                <div data-hex="#36295f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Collegiate Purple</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(54, 41, 95)"
                  ></div>
                </div>
                <div data-hex="#b42432" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Collegiate Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(180, 36, 50)"
                  ></div>
                </div>
                <div data-hex="#33241b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Dark Brown</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(51, 36, 27)"
                  ></div>
                </div>
                <div data-hex="#144633" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Dark Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(20, 70, 51)"
                  ></div>
                </div>
                <div data-hex="#414345" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Dark Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(65, 67, 69)"
                  ></div>
                </div>
                <div data-hex="#007b51" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Adidas Team Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 123, 81)"
                  ></div>
                </div>
                <div data-hex="#67b2d4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(103, 178, 212)"
                  ></div>
                </div>
                <div data-hex="#b8babf" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Light Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(184, 186, 191)"
                  ></div>
                </div>
                <div data-hex="#4a232f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Maroon</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(74, 35, 47)"
                  ></div>
                </div>
                <div data-hex="#989797" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Mid Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(152, 151, 151)"
                  ></div>
                </div>
                <div data-hex="#243047" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Navy Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(36, 48, 71)"
                  ></div>
                </div>
                <div data-hex="#555c67" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Adidas Team Onix</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(85, 92, 103)"
                  ></div>
                </div>
                <div data-hex="#ec6342" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(236, 99, 66)"
                  ></div>
                </div>
                <div data-hex="#ab182d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Power Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(171, 24, 45)"
                  ></div>
                </div>
                <div data-hex="#2c9937" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Rave Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(44, 153, 55)"
                  ></div>
                </div>
                <div data-hex="#c72d6d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Real Magenta</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(199, 45, 109)"
                  ></div>
                </div>
                <div data-hex="#203c7d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Royal Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(32, 60, 125)"
                  ></div>
                </div>
                <div data-hex="#beaf82" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Adidas Team Sand</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(190, 175, 130)"
                  ></div>
                </div>
                <div data-hex="#7fbb3e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Semi Solar Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(127, 187, 62)"
                  ></div>
                </div>
                <div data-hex="#ed6d50" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Semi Solar Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(237, 109, 80)"
                  ></div>
                </div>
                <div data-hex="#c1d22b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Semi Solar Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(193, 210, 43)"
                  ></div>
                </div>
                <div data-hex="#e72586" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Shock Pink</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(231, 37, 134)"
                  ></div>
                </div>
                <div data-hex="#81bb27" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Solar Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(129, 187, 39)"
                  ></div>
                </div>
                <div data-hex="#eb5e47" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Solar Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(235, 94, 71)"
                  ></div>
                </div>
                <div data-hex="#efe530" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Solar Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(239, 229, 48)"
                  ></div>
                </div>
                <div data-hex="#7f1811" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Victory Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(127, 24, 17)"
                  ></div>
                </div>
                <div data-hex="#efd000" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Team Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(239, 208, 0)"
                  ></div>
                </div>
                <div data-hex="#40735E" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Twighlight Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(64, 115, 94)"
                  ></div>
                </div>
                <div data-hex="#891E2E" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas University Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(137, 30, 46)"
                  ></div>
                </div>
                <div data-hex="#AB002E" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Victory Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(171, 0, 46)"
                  ></div>
                </div>
                <div data-hex="#FF673A" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Adidas Warning</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 103, 58)"
                  ></div>
                </div>
                <div data-hex="#E78DB5" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Adidas Wonder Bloom F10</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(231, 141, 181)"
                  ></div>
                </div>
                <div data-hex="#002b7c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Alaves Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 43, 124)"
                  ></div>
                </div>
                <div data-hex="#eece9f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Alaves Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(238, 206, 159)"
                  ></div>
                </div>
                <div data-hex="#474344" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Alaves Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(71, 67, 68)"
                  ></div>
                </div>
                <div data-hex="#ff0028" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Alaves Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 0, 40)"
                  ></div>
                </div>
                <div data-hex="#ab1c1c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Almería Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(171, 28, 28)"
                  ></div>
                </div>
                <div data-hex="#a6795c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Angers Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(166, 121, 92)"
                  ></div>
                </div>
                <div data-hex="#4eb4a7" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Angers Turquoise</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(78, 180, 167)"
                  ></div>
                </div>
                <div data-hex="#344f62" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Argentina Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(52, 79, 98)"
                  ></div>
                </div>
                <div data-hex="#93c6ed" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Argentina Sky Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(147, 198, 237)"
                  ></div>
                </div>
                <div data-hex="#8e0307" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Arsenal Dark Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(142, 3, 7)"
                  ></div>
                </div>
                <div data-hex="#232e44" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Arsenal Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(35, 46, 68)"
                  ></div>
                </div>
                <div data-hex="#fecfbd" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Arsenal Orange</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(254, 207, 189)"
                  ></div>
                </div>
                <div data-hex="#cf151f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Arsenal Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(207, 21, 31)"
                  ></div>
                </div>
                <div data-hex="#f6cb05" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Arsenal Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(246, 203, 5)"
                  ></div>
                </div>
                <div data-hex="#c3c3c3" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Asto Villa Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(195, 195, 195)"
                  ></div>
                </div>
                <div data-hex="#9aafea" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Aston Villa Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(154, 175, 234)"
                  ></div>
                </div>
                <div data-hex="#76111e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Aston Villa Claret</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(118, 17, 30)"
                  ></div>
                </div>
                <div data-hex="#2f60b8" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Atalanta Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(47, 96, 184)"
                  ></div>
                </div>
                <div data-hex="#636363" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Atalanta Christmas Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(99, 99, 99)"
                  ></div>
                </div>
                <div data-hex="#577fb3" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Atalanta Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(87, 127, 179)"
                  ></div>
                </div>
                <div data-hex="#bdbdc0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Athletic Club Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(189, 189, 192)"
                  ></div>
                </div>
                <div data-hex="#cc2835" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Athletic Club Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(204, 40, 53)"
                  ></div>
                </div>
                <div data-hex="#def6a9" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Atletico Madrid Lime</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(222, 246, 169)"
                  ></div>
                </div>
                <div data-hex="#1b263b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Atletico Madrid Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(27, 38, 59)"
                  ></div>
                </div>
                <div data-hex="#c51a2c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Atletico Madrid Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(197, 26, 44)"
                  ></div>
                </div>
                <div data-hex="#2f5139" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Augsburg Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(47, 81, 57)"
                  ></div>
                </div>
                <div data-hex="#e12e3b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Augsburg Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(225, 46, 59)"
                  ></div>
                </div>
                <div data-hex="#263936" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Australia Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(38, 57, 54)"
                  ></div>
                </div>
                <div data-hex="#1f2639" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Australia Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(31, 38, 57)"
                  ></div>
                </div>
                <div data-hex="#017c88" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Australia Teal</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(1, 124, 136)"
                  ></div>
                </div>
                <div data-hex="#efab0a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Australia Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(239, 171, 10)"
                  ></div>
                </div>
                <div data-hex="#2261b2" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Barcelona Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(34, 97, 178)"
                  ></div>
                </div>
                <div data-hex="#d8b581" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Barcelona Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(216, 181, 129)"
                  ></div>
                </div>
                <div data-hex="#fdc6d4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Barcelona Pink</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(253, 198, 212)"
                  ></div>
                </div>
                <div data-hex="#d63c54" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Barcelona Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(214, 60, 84)"
                  ></div>
                </div>
                <div data-hex="#0dd3d5" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Barcelona Teal</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(13, 211, 213)"
                  ></div>
                </div>
                <div data-hex="#f8e07d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Barcelona Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(248, 224, 125)"
                  ></div>
                </div>
                <div data-hex="#dd0313" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Barnsley Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(221, 3, 19)"
                  ></div>
                </div>
                <div data-hex="#e5cc00" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Barnsley Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(229, 204, 0)"
                  ></div>
                </div>
                <div data-hex="#fd0101" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Bayern Bright Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(253, 1, 1)"
                  ></div>
                </div>
                <div data-hex="#aab0b6" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Bayern Dark Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(170, 176, 182)"
                  ></div>
                </div>
                <div data-hex="#2664b7" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Bayern Humanrace Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(38, 100, 183)"
                  ></div>
                </div>
                <div data-hex="#dbdae2" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Bayern Light Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(219, 218, 226)"
                  ></div>
                </div>
                <div data-hex="#d00a2c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Bayern Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(208, 10, 44)"
                  ></div>
                </div>
                <div data-hex="#ce0d27" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Belgium Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(206, 13, 39)"
                  ></div>
                </div>
                <div data-hex="#e1db70" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Belgium Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(225, 219, 112)"
                  ></div>
                </div>
                <div data-hex="#aa1c28" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Benevento Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(170, 28, 40)"
                  ></div>
                </div>
                <div data-hex="#e3a723" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Benevento Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(227, 167, 35)"
                  ></div>
                </div>
                <div data-hex="#d6c280" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Benfica Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(214, 194, 128)"
                  ></div>
                </div>
                <div data-hex="#de0017" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Benfica Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(222, 0, 23)"
                  ></div>
                </div>
                <div data-hex="#dbdbdb" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Benfica Silver</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(219, 219, 219)"
                  ></div>
                </div>
                <div data-hex="#b59460" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Betis Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(181, 148, 96)"
                  ></div>
                </div>
                <div data-hex="#429874" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Betis Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(66, 152, 116)"
                  ></div>
                </div>
                <div data-hex="#6b419e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Betis Purple</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(107, 65, 158)"
                  ></div>
                </div>
                <div data-hex="#02469c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Bielefeld Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 70, 156)"
                  ></div>
                </div>
                <div data-hex="#f98603" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Bielefeld Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(249, 134, 3)"
                  ></div>
                </div>
                <div data-hex="#00468e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Birmingham Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 70, 142)"
                  ></div>
                </div>
                <div data-hex="#007133" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Birmingham Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 113, 51)"
                  ></div>
                </div>
                <div data-hex="#d50004" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Birmingham Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(213, 0, 4)"
                  ></div>
                </div>
                <div data-hex="#000000" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Black</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 0, 0)"
                  ></div>
                </div>
                <div data-hex="#253789" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Blackburn Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(37, 55, 137)"
                  ></div>
                </div>
                <div data-hex="#d81d2e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Blackburn Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(216, 29, 46)"
                  ></div>
                </div>
                <div data-hex="#162779" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Boca Juniors Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(22, 39, 121)"
                  ></div>
                </div>
                <div data-hex="#efc70f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Boca Juniors Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(239, 199, 15)"
                  ></div>
                </div>
                <div data-hex="#1f2438" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Bologna Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(31, 36, 56)"
                  ></div>
                </div>
                <div data-hex="#b62021" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Bologna Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(182, 32, 33)"
                  ></div>
                </div>
                <div data-hex="#1e224b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Bordeaux Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(30, 34, 75)"
                  ></div>
                </div>
                <div data-hex="#b5b5bd" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Bournemouth Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(181, 181, 189)"
                  ></div>
                </div>
                <div data-hex="#e93b3c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Bournemouth Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(233, 59, 60)"
                  ></div>
                </div>
                <div data-hex="#56cfd8" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Bournemouth Turqouse</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(86, 207, 216)"
                  ></div>
                </div>
                <div data-hex="#0984d4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Brazil Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(9, 132, 212)"
                  ></div>
                </div>
                <div data-hex="#0d6732" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Brazil Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(13, 103, 50)"
                  ></div>
                </div>
                <div data-hex="#173e75" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Brazil Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(23, 62, 117)"
                  ></div>
                </div>
                <div data-hex="#d9bd04" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Brazil Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(217, 189, 4)"
                  ></div>
                </div>
                <div data-hex="#029873" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Bremen Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 152, 115)"
                  ></div>
                </div>
                <div data-hex="#484852" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Brentford Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(72, 72, 82)"
                  ></div>
                </div>
                <div data-hex="#c51520" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Brentford Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(197, 21, 32)"
                  ></div>
                </div>
                <div data-hex="#1a2340" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Brest Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(26, 35, 64)"
                  ></div>
                </div>
                <div data-hex="#cf1814" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Brest Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(207, 24, 20)"
                  ></div>
                </div>
                <div data-hex="#0240a0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Brighton Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 64, 160)"
                  ></div>
                </div>
                <div data-hex="#f0c302" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Brighton Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(240, 195, 2)"
                  ></div>
                </div>
                <div data-hex="#340b75" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Bristol City Purple</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(52, 11, 117)"
                  ></div>
                </div>
                <div data-hex="#bd0402" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Bristol City Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(189, 4, 2)"
                  ></div>
                </div>
                <div data-hex="#afd6db" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Burnley Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(175, 214, 219)"
                  ></div>
                </div>
                <div data-hex="#570b20" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Burnley Claret</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(87, 11, 32)"
                  ></div>
                </div>
                <div data-hex="#464243" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Burnley Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(70, 66, 67)"
                  ></div>
                </div>
                <div data-hex="#ebec6d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Burnley Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(235, 236, 109)"
                  ></div>
                </div>
                <div data-hex="#344d9f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Cadiz Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(52, 77, 159)"
                  ></div>
                </div>
                <div data-hex="#101727" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Cadiz Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(16, 23, 39)"
                  ></div>
                </div>
                <div data-hex="#d3b830" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Cadiz Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(211, 184, 48)"
                  ></div>
                </div>
                <div data-hex="#1d2d47" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Cagliari Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(29, 45, 71)"
                  ></div>
                </div>
                <div data-hex="#ffbf3d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Cagliari Orange</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 191, 61)"
                  ></div>
                </div>
                <div data-hex="#d3222c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Cagliari Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(211, 34, 44)"
                  ></div>
                </div>
                <div data-hex="#edcd08" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Cagliari Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(237, 205, 8)"
                  ></div>
                </div>
                <div data-hex="#1436b4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Cardiff City Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(20, 54, 180)"
                  ></div>
                </div>
                <div data-hex="#accebe" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Cardiff City Lime</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(172, 206, 190)"
                  ></div>
                </div>
                <div data-hex="#f07150" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Cardiff City Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(240, 113, 80)"
                  ></div>
                </div>
                <div data-hex="#acc9d1" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Celta Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(172, 201, 209)"
                  ></div>
                </div>
                <div data-hex="#272e3f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Celta Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(39, 46, 63)"
                  ></div>
                </div>
                <div data-hex="#123e89" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Chelsea Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(18, 62, 137)"
                  ></div>
                </div>
                <div data-hex="#bcdaec" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Chelsea Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(188, 218, 236)"
                  ></div>
                </div>
                <div data-hex="#212135" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Chelsea Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(33, 33, 53)"
                  ></div>
                </div>
                <div data-hex="#f8555e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Chelsea Pink</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(248, 85, 94)"
                  ></div>
                </div>
                <div data-hex="#1643a4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Chile Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(22, 67, 164)"
                  ></div>
                </div>
                <div data-hex="#cb1b32" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Chile Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(203, 27, 50)"
                  ></div>
                </div>
                <div data-hex="#3a3847" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Colombia Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(58, 56, 71)"
                  ></div>
                </div>
                <div data-hex="#9d0211" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Colombia Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(157, 2, 17)"
                  ></div>
                </div>
                <div data-hex="#e3d13f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Colombia Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(227, 209, 63)"
                  ></div>
                </div>
                <div data-hex="#191830" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Compostela Dark Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(25, 24, 48)"
                  ></div>
                </div>
                <div data-hex="#83b7d9" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Compostela Sky Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(131, 183, 217)"
                  ></div>
                </div>
                <div data-hex="#a0c8ec" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Conventry City Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(160, 200, 236)"
                  ></div>
                </div>
                <div data-hex="#b1111d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Conventry City Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(177, 17, 29)"
                  ></div>
                </div>
                <div data-hex="#b1111d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Conventry City Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(177, 17, 29)"
                  ></div>
                </div>
                <div data-hex="#1f9177" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Cote d'Ivoire Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(31, 145, 119)"
                  ></div>
                </div>
                <div data-hex="#f4aa2f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Cote d'Ivoire Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(244, 170, 47)"
                  ></div>
                </div>
                <div data-hex="#2b3d7e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Croatia Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(43, 61, 126)"
                  ></div>
                </div>
                <div data-hex="#515056" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Croatia Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(81, 80, 86)"
                  ></div>
                </div>
                <div data-hex="#c12130" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Croatia Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(193, 33, 48)"
                  ></div>
                </div>
                <div data-hex="#1377c5" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Crotone Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(19, 119, 197)"
                  ></div>
                </div>
                <div data-hex="#497250" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Crotone Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(73, 114, 80)"
                  ></div>
                </div>
                <div data-hex="#bdbdbb" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Crotone Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(189, 189, 187)"
                  ></div>
                </div>
                <div data-hex="#31304f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Crotone Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(49, 48, 79)"
                  ></div>
                </div>
                <div data-hex="#d60a21" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Crotone Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(214, 10, 33)"
                  ></div>
                </div>
                <div data-hex="#0231a1" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Crystal Palace Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 49, 161)"
                  ></div>
                </div>
                <div data-hex="#cf0017" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Crystal Palace Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(207, 0, 23)"
                  ></div>
                </div>
                <div data-hex="#cfc188" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Czechia Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(207, 193, 136)"
                  ></div>
                </div>
                <div data-hex="#e0ea7a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Czechia Lime</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(224, 234, 122)"
                  ></div>
                </div>
                <div data-hex="#2853b3" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Deportivo Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(40, 83, 179)"
                  ></div>
                </div>
                <div data-hex="#1a385e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Derby County Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(26, 56, 94)"
                  ></div>
                </div>
                <div data-hex="#202237" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Derby County Dark Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(32, 34, 55)"
                  ></div>
                </div>
                <div data-hex="#fc4283" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Derby County Pink</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(252, 66, 131)"
                  ></div>
                </div>
                <div data-hex="#ac1413" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Dijon Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(172, 20, 19)"
                  ></div>
                </div>
                <div data-hex="#cdcfce" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Dortmund Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(205, 207, 206)"
                  ></div>
                </div>
                <div data-hex="#ceeb1f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Dortmund Neon Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(206, 235, 31)"
                  ></div>
                </div>
                <div data-hex="#b435a0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Dortmund Purple</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(180, 53, 160)"
                  ></div>
                </div>
                <div data-hex="#f1d501" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Dortmund Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(241, 213, 1)"
                  ></div>
                </div>
                <div data-hex="#242626" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >EA Sports FC Boot Black</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(36, 38, 38)"
                  ></div>
                </div>
                <div data-hex="#fcfcfc" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >EA Sports FC Chalk White</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(252, 252, 252)"
                  ></div>
                </div>
                <div data-hex="#1c4d38" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >EA Sports FC Forest Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(28, 77, 56)"
                  ></div>
                </div>
                <div data-hex="#14f67b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >EA Sports FC Pitch Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(20, 246, 123)"
                  ></div>
                </div>
                <div data-hex="#f3f3ed" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >EA Sports FC Terace Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(243, 243, 237)"
                  ></div>
                </div>
                <div data-hex="#8b8b85" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >EA Sports FC Turnstile Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(139, 139, 133)"
                  ></div>
                </div>
                <div data-hex="#2424b3" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">eFootball Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(36, 36, 179)"
                  ></div>
                </div>
                <div data-hex="#eded11" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >eFootball Yellow
                  </span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(237, 237, 17)"
                  ></div>
                </div>
                <div data-hex="#ec2b3f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Egypt Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(236, 43, 63)"
                  ></div>
                </div>
                <div data-hex="#203880" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Eibar Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(32, 56, 128)"
                  ></div>
                </div>
                <div data-hex="#b21329" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Eibar Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(178, 19, 41)"
                  ></div>
                </div>
                <div data-hex="#052b6c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Elche Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(5, 43, 108)"
                  ></div>
                </div>
                <div data-hex="#07755d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Elche Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(7, 117, 93)"
                  ></div>
                </div>
                <div data-hex="#c21540" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Elche Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(194, 21, 64)"
                  ></div>
                </div>
                <div data-hex="#224c8f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">England Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(34, 76, 143)"
                  ></div>
                </div>
                <div data-hex="#cc091a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">England Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(204, 9, 26)"
                  ></div>
                </div>
                <div data-hex="#0a3279" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Everton Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(10, 50, 121)"
                  ></div>
                </div>
                <div data-hex="#79bc9d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Everton Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(121, 188, 157)"
                  ></div>
                </div>
                <div data-hex="#4e504d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Everton Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(78, 80, 77)"
                  ></div>
                </div>
                <div data-hex="#f8ac2e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Everton Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(248, 172, 46)"
                  ></div>
                </div>
                <div data-hex="#522372" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Fiorentina Purple</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(82, 35, 114)"
                  ></div>
                </div>
                <div data-hex="#ca2e45" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Fiorentina Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(202, 46, 69)"
                  ></div>
                </div>
                <div data-hex="#ff881f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Footy Headlines Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 136, 31)"
                  ></div>
                </div>
                <div data-hex="#384892" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">France Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(56, 72, 146)"
                  ></div>
                </div>
                <div data-hex="#303049" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">France Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(48, 48, 73)"
                  ></div>
                </div>
                <div data-hex="#efc880" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Frankfurt Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(239, 200, 128)"
                  ></div>
                </div>
                <div data-hex="#d62932" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Frankfurt Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(214, 41, 50)"
                  ></div>
                </div>
                <div data-hex="#3a3b3d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Freiburg Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(58, 59, 61)"
                  ></div>
                </div>
                <div data-hex="#867887" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Freiburg Purple</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(134, 120, 135)"
                  ></div>
                </div>
                <div data-hex="#c7102a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Freiburg Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(199, 16, 42)"
                  ></div>
                </div>
                <div data-hex="#e1d81b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Freiburg Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(225, 216, 27)"
                  ></div>
                </div>
                <div data-hex="#fe544d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Fulham Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(254, 84, 77)"
                  ></div>
                </div>
                <div data-hex="#22243d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Genoa Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(34, 36, 61)"
                  ></div>
                </div>
                <div data-hex="#fa0818" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Genoa Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(250, 8, 24)"
                  ></div>
                </div>
                <div data-hex="#02409b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Getafe Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 64, 155)"
                  ></div>
                </div>
                <div data-hex="#e61b39" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Getafe Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(230, 27, 57)"
                  ></div>
                </div>
                <div data-hex="#30916c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Ghana Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(48, 145, 108)"
                  ></div>
                </div>
                <div data-hex="#ac1f28" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Ghana Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(172, 31, 40)"
                  ></div>
                </div>
                <div data-hex="#e0ce4f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Ghana Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(224, 206, 79)"
                  ></div>
                </div>
                <div data-hex="#b435a0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Gladbach Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(180, 53, 160)"
                  ></div>
                </div>
                <div data-hex="#7ecdb8" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Gladbach Teal</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(126, 205, 184)"
                  ></div>
                </div>
                <div data-hex="#445ba9" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Granada Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(68, 91, 169)"
                  ></div>
                </div>
                <div data-hex="#a90c29" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Granada Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(169, 12, 41)"
                  ></div>
                </div>
                <div data-hex="#50ebe5" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Granada Turquoise</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(80, 235, 229)"
                  ></div>
                </div>
                <div data-hex="#e6ff05" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Granada Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(230, 255, 5)"
                  ></div>
                </div>
                <div data-hex="#097bd1" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Greece Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(9, 123, 209)"
                  ></div>
                </div>
                <div data-hex="#1e3d81" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Greece Dark Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(30, 61, 129)"
                  ></div>
                </div>
                <div data-hex="#283583" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Hellas Verona Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(40, 53, 131)"
                  ></div>
                </div>
                <div data-hex="#caceda" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Hellas Verona Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(202, 206, 218)"
                  ></div>
                </div>
                <div data-hex="#17203d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Hellas Verona Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(23, 32, 61)"
                  ></div>
                </div>
                <div data-hex="#e8d936" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Hellas Verona Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(232, 217, 54)"
                  ></div>
                </div>
                <div data-hex="#1093d4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Helsingborgs Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(16, 147, 212)"
                  ></div>
                </div>
                <div data-hex="#e02416" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Helsingborgs Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(224, 36, 22)"
                  ></div>
                </div>
                <div data-hex="#014ebb" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Hertha Berlin Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(1, 78, 187)"
                  ></div>
                </div>
                <div data-hex="#363a4a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Hertha Berlin Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(54, 58, 74)"
                  ></div>
                </div>
                <div data-hex="#e6012c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Hertha Berlin Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(230, 1, 44)"
                  ></div>
                </div>
                <div data-hex="#01419d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Hoffenheim Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(1, 65, 157)"
                  ></div>
                </div>
                <div data-hex="#bf975f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Hoffenheim Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(191, 151, 95)"
                  ></div>
                </div>
                <div data-hex="#182438" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Hoffenheim Navy 1</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(24, 36, 56)"
                  ></div>
                </div>
                <div data-hex="#262b3e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Hoffenheim Navy 2</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(38, 43, 62)"
                  ></div>
                </div>
                <div data-hex="#d21fa5" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Hoffenheim Pink</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(210, 31, 165)"
                  ></div>
                </div>
                <div data-hex="#16bee2" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Hoffenheim Teal</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(22, 190, 226)"
                  ></div>
                </div>
                <div data-hex="#8b0d19" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Huddersfield Dark Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(139, 13, 25)"
                  ></div>
                </div>
                <div data-hex="#3081d0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Huddersfield Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(48, 129, 208)"
                  ></div>
                </div>
                <div data-hex="#42324d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Huddersfield Purple</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(66, 50, 77)"
                  ></div>
                </div>
                <div data-hex="#f5db53" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Huddersfield Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(245, 219, 83)"
                  ></div>
                </div>
                <div data-hex="#00306a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Huesca Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 48, 106)"
                  ></div>
                </div>
                <div data-hex="#034d3c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Huesca Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(3, 77, 60)"
                  ></div>
                </div>
                <div data-hex="#70012b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Huesca Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(112, 1, 43)"
                  ></div>
                </div>
                <div data-hex="#17309c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Inter 2021 Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(23, 48, 156)"
                  ></div>
                </div>
                <div data-hex="#ffdc3c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Inter 2021 Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 220, 60)"
                  ></div>
                </div>
                <div data-hex="#2270d7" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Inter Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(34, 112, 215)"
                  ></div>
                </div>
                <div data-hex="#77767b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Inter Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(119, 118, 123)"
                  ></div>
                </div>
                <div data-hex="#f2e467" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Inter Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(242, 228, 103)"
                  ></div>
                </div>
                <div data-hex="#f2d890" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Ireland Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(242, 216, 144)"
                  ></div>
                </div>
                <div data-hex="#2b815f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Ireland Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(43, 129, 95)"
                  ></div>
                </div>
                <div data-hex="#023d73" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Italy Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 61, 115)"
                  ></div>
                </div>
                <div data-hex="#dfc9a1" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Italy Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(223, 201, 161)"
                  ></div>
                </div>
                <div data-hex="#045d54" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Italy Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(4, 93, 84)"
                  ></div>
                </div>
                <div data-hex="#207abc" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Japan Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(32, 122, 188)"
                  ></div>
                </div>
                <div data-hex="#e9333f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Japan Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(233, 51, 63)"
                  ></div>
                </div>
                <div data-hex="#bf9556" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Juventus Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(191, 149, 86)"
                  ></div>
                </div>
                <div data-hex="#26344f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Juventus Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(38, 52, 79)"
                  ></div>
                </div>
                <div data-hex="#f88e27" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Juventus Orange</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(248, 142, 39)"
                  ></div>
                </div>
                <div data-hex="#0e9462" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Köln Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(14, 148, 98)"
                  ></div>
                </div>
                <div data-hex="#d12831" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Köln Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(209, 40, 49)"
                  ></div>
                </div>
                <div data-hex="#f7e03a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Köln Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(247, 224, 58)"
                  ></div>
                </div>
                <div data-hex="#72e272" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lazio Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(114, 226, 114)"
                  ></div>
                </div>
                <div data-hex="#242842" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lazio Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(36, 40, 66)"
                  ></div>
                </div>
                <div data-hex="#6da9d8" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lazio Sky Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(109, 169, 216)"
                  ></div>
                </div>
                <div data-hex="#10449f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leeds Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(16, 68, 159)"
                  ></div>
                </div>
                <div data-hex="#511b2b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leeds Claret</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(81, 27, 43)"
                  ></div>
                </div>
                <div data-hex="#e2d3a7" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leeds Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(226, 211, 167)"
                  ></div>
                </div>
                <div data-hex="#0b6060" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leeds Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(11, 96, 96)"
                  ></div>
                </div>
                <div data-hex="#f8d929" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leeds Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(248, 217, 41)"
                  ></div>
                </div>
                <div data-hex="#054aaa" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leicester Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(5, 74, 170)"
                  ></div>
                </div>
                <div data-hex="#531625" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Leicester Claret</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(83, 22, 37)"
                  ></div>
                </div>
                <div data-hex="#c5b68e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leicester Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(197, 182, 142)"
                  ></div>
                </div>
                <div data-hex="#232573" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leipzig Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(35, 37, 115)"
                  ></div>
                </div>
                <div data-hex="#eb5f14" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leipzig Orange</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(235, 95, 20)"
                  ></div>
                </div>
                <div data-hex="#d52538" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leipzig Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(213, 37, 56)"
                  ></div>
                </div>
                <div data-hex="#e7c71c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leipzig Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(231, 199, 28)"
                  ></div>
                </div>
                <div data-hex="#01462a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lens Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(1, 70, 42)"
                  ></div>
                </div>
                <div data-hex="#ed0025" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lens Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(237, 0, 37)"
                  ></div>
                </div>
                <div data-hex="#ead32f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lens Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(234, 211, 47)"
                  ></div>
                </div>
                <div data-hex="#034a8c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Levante Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(3, 74, 140)"
                  ></div>
                </div>
                <div data-hex="#b82c39" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Levante Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(184, 44, 57)"
                  ></div>
                </div>
                <div data-hex="#9ae4e3" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Levante Turquoise</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(154, 228, 227)"
                  ></div>
                </div>
                <div data-hex="#cdcfce" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leverkusen Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(205, 207, 206)"
                  ></div>
                </div>
                <div data-hex="#d80022" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Leverkusen Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(216, 0, 34)"
                  ></div>
                </div>
                <div data-hex="#fed501" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Leverkusen Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(254, 213, 1)"
                  ></div>
                </div>
                <div data-hex="#052f5c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lille Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(5, 47, 92)"
                  ></div>
                </div>
                <div data-hex="#d62530" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lille Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(214, 37, 48)"
                  ></div>
                </div>
                <div data-hex="#fb2a28" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Liverpool Bright Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(251, 42, 40)"
                  ></div>
                </div>
                <div data-hex="#30a8ab" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Liverpool Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(48, 168, 171)"
                  ></div>
                </div>
                <div data-hex="#b7121d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Liverpool Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(183, 18, 29)"
                  ></div>
                </div>
                <div data-hex="#41d1d9" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Liverpool Teal</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(65, 209, 217)"
                  ></div>
                </div>
                <div data-hex="#fd5a41" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lorient Orange</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(253, 90, 65)"
                  ></div>
                </div>
                <div data-hex="#262c3c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Luton Town Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(38, 44, 60)"
                  ></div>
                </div>
                <div data-hex="#f95b2b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Luton Town Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(249, 91, 43)"
                  ></div>
                </div>
                <div data-hex="#162f77" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lyon Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(22, 47, 119)"
                  ></div>
                </div>
                <div data-hex="#99171e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Lyon Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(153, 23, 30)"
                  ></div>
                </div>
                <div data-hex="#d3b181" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Mainz Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(211, 177, 129)"
                  ></div>
                </div>
                <div data-hex="#da3b40" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Mainz Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(218, 59, 64)"
                  ></div>
                </div>
                <div data-hex="#013990" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Málaga Royal Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(1, 57, 144)"
                  ></div>
                </div>
                <div data-hex="#86a5c4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Málaga Sky Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(134, 165, 196)"
                  ></div>
                </div>
                <div data-hex="#dcd5ce" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Manchester City Beige</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(220, 213, 206)"
                  ></div>
                </div>
                <div data-hex="#4ea7f0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Manchester City Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(78, 167, 240)"
                  ></div>
                </div>
                <div data-hex="#23344a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Manchester City Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(35, 52, 74)"
                  ></div>
                </div>
                <div data-hex="#b17a67" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Manchester City Rose Gold</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(177, 122, 103)"
                  ></div>
                </div>
                <div data-hex="#3f3e3c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Manchester United Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(63, 62, 60)"
                  ></div>
                </div>
                <div data-hex="#ce152d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Manchester United Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(206, 21, 45)"
                  ></div>
                </div>
                <div data-hex="#53aeed" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Marseille Blue 1</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(83, 174, 237)"
                  ></div>
                </div>
                <div data-hex="#3b7fc1" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Marseille Blue 2</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(59, 127, 193)"
                  ></div>
                </div>
                <div data-hex="#ad832f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Marseille Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(173, 131, 47)"
                  ></div>
                </div>
                <div data-hex="#effc54" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Marseille Lime</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(239, 252, 84)"
                  ></div>
                </div>
                <div data-hex="#292f49" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Marseille Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(41, 47, 73)"
                  ></div>
                </div>
                <div data-hex="#71b1de" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Marseille Sky Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(113, 177, 222)"
                  ></div>
                </div>
                <div data-hex="#67191a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Metz Claret</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(103, 25, 26)"
                  ></div>
                </div>
                <div data-hex="#184947" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Mexico Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(24, 73, 71)"
                  ></div>
                </div>
                <div data-hex="#791e2a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Mexico Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(121, 30, 42)"
                  ></div>
                </div>
                <div data-hex="#0b184f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Middlesbrough Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(11, 24, 79)"
                  ></div>
                </div>
                <div data-hex="#a71f29" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Middlesbrough Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(167, 31, 41)"
                  ></div>
                </div>
                <div data-hex="#d3222d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Milan Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(211, 34, 45)"
                  ></div>
                </div>
                <div data-hex="#14759f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Milan Teal</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(20, 117, 159)"
                  ></div>
                </div>
                <div data-hex="#141c41" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Millwall Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(20, 28, 65)"
                  ></div>
                </div>
                <div data-hex="#12834f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Millwall Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(18, 131, 79)"
                  ></div>
                </div>
                <div data-hex="#e12826" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Millwall Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(225, 40, 38)"
                  ></div>
                </div>
                <div data-hex="#e62b2f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Monaco Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(230, 43, 47)"
                  ></div>
                </div>
                <div data-hex="#191f37" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Montpellier Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(25, 31, 55)"
                  ></div>
                </div>
                <div data-hex="#fe5e02" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Montpellier Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(254, 94, 2)"
                  ></div>
                </div>
                <div data-hex="#ac122c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Morocco Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(172, 18, 44)"
                  ></div>
                </div>
                <div data-hex="#039757" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nantes Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(3, 151, 87)"
                  ></div>
                </div>
                <div data-hex="#fee543" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nantes Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(254, 229, 67)"
                  ></div>
                </div>
                <div data-hex="#308ded" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Napoli Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(48, 141, 237)"
                  ></div>
                </div>
                <div data-hex="#023330" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Napoli Dark Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 51, 48)"
                  ></div>
                </div>
                <div data-hex="#c6d8e6" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Napoli Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(198, 216, 230)"
                  ></div>
                </div>
                <div data-hex="#131438" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Napoli Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(19, 20, 56)"
                  ></div>
                </div>
                <div data-hex="#df6d2d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Netherlands Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(223, 109, 45)"
                  ></div>
                </div>
                <div data-hex="#d4e093" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Newcastle Lime</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(212, 224, 147)"
                  ></div>
                </div>
                <div data-hex="#202736" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Newcastle Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(32, 39, 54)"
                  ></div>
                </div>
                <div data-hex="#462f83" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Newcastle Purple</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(70, 47, 131)"
                  ></div>
                </div>
                <div data-hex="#bbbacb" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Newcastle Silver</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(187, 186, 203)"
                  ></div>
                </div>
                <div data-hex="#213639" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nigeria Dark Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(33, 54, 57)"
                  ></div>
                </div>
                <div data-hex="#058b50" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nigeria Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(5, 139, 80)"
                  ></div>
                </div>
                <div data-hex="#abe8a1" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nigeria Light Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(171, 232, 161)"
                  ></div>
                </div>
                <div data-hex="#97d35b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Action Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(151, 211, 91)"
                  ></div>
                </div>
                <div data-hex="#00699e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Aero Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 105, 158)"
                  ></div>
                </div>
                <div data-hex="#373936" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Anthracite</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(55, 57, 54)"
                  ></div>
                </div>
                <div data-hex="#367e50" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Apple Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(54, 126, 80)"
                  ></div>
                </div>
                <div data-hex="#d5c7ba" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Birch</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(213, 199, 186)"
                  ></div>
                </div>
                <div data-hex="#006c82" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Blustery</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 108, 130)"
                  ></div>
                </div>
                <div data-hex="#fc8200" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Bright Ceramic</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(252, 130, 0)"
                  ></div>
                </div>
                <div data-hex="#ff0a46" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Bright Crimson</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 10, 70)"
                  ></div>
                </div>
                <div data-hex="#aa9a8d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Chino</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(170, 154, 141)"
                  ></div>
                </div>
                <div data-hex="#273042" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike College Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(39, 48, 66)"
                  ></div>
                </div>
                <div data-hex="#6d7478" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Cool Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(109, 116, 120)"
                  ></div>
                </div>
                <div data-hex="#532a37" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Deep Maroon</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(83, 42, 55)"
                  ></div>
                </div>
                <div data-hex="#ab5437" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Desert Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(171, 84, 55)"
                  ></div>
                </div>
                <div data-hex="#463633" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Dk Cinder</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(70, 54, 51)"
                  ></div>
                </div>
                <div data-hex="#786e6e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Dk Grey Heather</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(120, 110, 110)"
                  ></div>
                </div>
                <div data-hex="#777776" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Dk Steel Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(119, 119, 118)"
                  ></div>
                </div>
                <div data-hex="#5f616b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Flint Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(95, 97, 107)"
                  ></div>
                </div>
                <div data-hex="#394d91" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Game Royal</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(57, 77, 145)"
                  ></div>
                </div>
                <div data-hex="#2a4f39" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Gorge Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(42, 79, 57)"
                  ></div>
                </div>
                <div data-hex="#851025" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Gym Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(133, 16, 37)"
                  ></div>
                </div>
                <div data-hex="#b9a074" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Jersey Gold</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(185, 160, 116)"
                  ></div>
                </div>
                <div data-hex="#6ac16c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Lt Green Spark</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(106, 193, 108)"
                  ></div>
                </div>
                <div data-hex="#33546b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Marina</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(51, 84, 107)"
                  ></div>
                </div>
                <div data-hex="#5e5b47" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Medium Olive</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(94, 91, 71)"
                  ></div>
                </div>
                <div data-hex="#30364c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Midnight navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(48, 54, 76)"
                  ></div>
                </div>
                <div data-hex="#f5e4ce" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Natural</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(245, 228, 206)"
                  ></div>
                </div>
                <div data-hex="#423968" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike New Orchid</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(66, 57, 104)"
                  ></div>
                </div>
                <div data-hex="#395146" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Noble Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(57, 81, 70)"
                  ></div>
                </div>
                <div data-hex="#2c2d39" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Obsidian</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(44, 45, 57)"
                  ></div>
                </div>
                <div data-hex="#276fc0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Photo Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(39, 111, 192)"
                  ></div>
                </div>
                <div data-hex="#39694b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Pine Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(57, 105, 75)"
                  ></div>
                </div>
                <div data-hex="#d766a4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Pinkfire</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(215, 102, 164)"
                  ></div>
                </div>
                <div data-hex="#3c3e42" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Team Anthracite</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(60, 62, 66)"
                  ></div>
                </div>
                <div data-hex="#a1a8ad" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Team Blue Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(161, 168, 173)"
                  ></div>
                </div>
                <div data-hex="#41342f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Team Brown</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(65, 52, 47)"
                  ></div>
                </div>
                <div data-hex="#85132a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Team Crimson</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(133, 19, 42)"
                  ></div>
                </div>
                <div data-hex="#cdb894" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Team Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(205, 184, 148)"
                  ></div>
                </div>
                <div data-hex="#6696c7" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Team Lt Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(102, 150, 199)"
                  ></div>
                </div>
                <div data-hex="#6b2c3b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Team Maroon</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(107, 44, 59)"
                  ></div>
                </div>
                <div data-hex="#d9402a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Team Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(217, 64, 42)"
                  ></div>
                </div>
                <div data-hex="#9f9f9c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Team Pewter</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(159, 159, 156)"
                  ></div>
                </div>
                <div data-hex="#433776" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Team Purple</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(67, 55, 118)"
                  ></div>
                </div>
                <div data-hex="#69072a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Team Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(105, 7, 42)"
                  ></div>
                </div>
                <div data-hex="#1d5291" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Team Royal Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(29, 82, 145)"
                  ></div>
                </div>
                <div data-hex="#0082ac" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Tidal Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 130, 172)"
                  ></div>
                </div>
                <div data-hex="#f9d944" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Nike Tour Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(249, 217, 68)"
                  ></div>
                </div>
                <div data-hex="#ffa104" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike University Gold</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 161, 4)"
                  ></div>
                </div>
                <div data-hex="#b5202f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike University Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(181, 32, 47)"
                  ></div>
                </div>
                <div data-hex="#7692c7" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Valor Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(118, 146, 199)"
                  ></div>
                </div>
                <div data-hex="#b94171" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Vivid Pink</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(185, 65, 113)"
                  ></div>
                </div>
                <div data-hex="#b8ff4d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Volt</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(184, 255, 77)"
                  ></div>
                </div>
                <div data-hex="#a2a4a9" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nike Wolf Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(162, 164, 169)"
                  ></div>
                </div>
                <div data-hex="#ffeb46" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Nike Yellow Strike</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 235, 70)"
                  ></div>
                </div>
                <div data-hex="#138561" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Northern Ireland Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(19, 133, 97)"
                  ></div>
                </div>
                <div data-hex="#193450" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Northern Ireland Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(25, 52, 80)"
                  ></div>
                </div>
                <div data-hex="#abc8bd" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Northern Ireland Teal</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(171, 200, 189)"
                  ></div>
                </div>
                <div data-hex="#132752" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Norway Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(19, 39, 82)"
                  ></div>
                </div>
                <div data-hex="#dc041d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Norway Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(220, 4, 29)"
                  ></div>
                </div>
                <div data-hex="#0483ae" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Norwich City Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(4, 131, 174)"
                  ></div>
                </div>
                <div data-hex="#0a6544" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Norwich City Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(10, 101, 68)"
                  ></div>
                </div>
                <div data-hex="#" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Norwich City Purple</span
                  >
                  <div class="sp-palette-teamcolor-preview"></div>
                </div>
                <div data-hex="#f3db00" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Norwich City Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(243, 219, 0)"
                  ></div>
                </div>
                <div data-hex="#025dc8" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nottingham Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 93, 200)"
                  ></div>
                </div>
                <div data-hex="#595959" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nottingham Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(89, 89, 89)"
                  ></div>
                </div>
                <div data-hex="#e1232d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Nottingham Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(225, 35, 45)"
                  ></div>
                </div>
                <div data-hex="#e62d2a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Olympique Nimes Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(230, 45, 42)"
                  ></div>
                </div>
                <div data-hex="#0b111f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Osasuna Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(11, 17, 31)"
                  ></div>
                </div>
                <div data-hex="#850f1f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Osasuna Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(133, 15, 31)"
                  ></div>
                </div>
                <div data-hex="#30364c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Paris FC Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(48, 54, 76)"
                  ></div>
                </div>
                <div data-hex="#276fc0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Paris FC Royal Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(39, 111, 192)"
                  ></div>
                </div>
                <div data-hex="#1a419c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Parma Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(26, 65, 156)"
                  ></div>
                </div>
                <div data-hex="#081d3c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Parma Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(8, 29, 60)"
                  ></div>
                </div>
                <div data-hex="#fad502" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Parma Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(250, 213, 2)"
                  ></div>
                </div>
                <div data-hex="#01269a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Porto Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(1, 38, 154)"
                  ></div>
                </div>
                <div data-hex="#163261" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Porto Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(22, 50, 97)"
                  ></div>
                </div>
                <div data-hex="#ececea" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Porto Silver</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(236, 236, 234)"
                  ></div>
                </div>
                <div data-hex="#e9c602" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Porto Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(233, 198, 2)"
                  ></div>
                </div>
                <div data-hex="#9a8158" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Portugal Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(154, 129, 88)"
                  ></div>
                </div>
                <div data-hex="#b30c2e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Portugal Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(179, 12, 46)"
                  ></div>
                </div>
                <div data-hex="#dae5e6" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Portugal Teal</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(218, 229, 230)"
                  ></div>
                </div>
                <div data-hex="#1b285f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Premier League 23-24 Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(27, 40, 95)"
                  ></div>
                </div>
                <div data-hex="#e22729" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Premier League 23-24 Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(226, 39, 41)"
                  ></div>
                </div>
                <div data-hex="#cbc83d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Premier League 23-24 Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(203, 200, 61)"
                  ></div>
                </div>
                <div data-hex="#0069b8" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Preston Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 105, 184)"
                  ></div>
                </div>
                <div data-hex="#065e2e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Preston Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(6, 94, 46)"
                  ></div>
                </div>
                <div data-hex="#141726" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Preston Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(20, 23, 38)"
                  ></div>
                </div>
                <div data-hex="#02277b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">PSG Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 39, 123)"
                  ></div>
                </div>
                <div data-hex="#fc503a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">PSG Bright Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(252, 80, 58)"
                  ></div>
                </div>
                <div data-hex="#3e111e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">PSG Claret</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(62, 17, 30)"
                  ></div>
                </div>
                <div data-hex="#c7ab6d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">PSG Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(199, 171, 109)"
                  ></div>
                </div>
                <div data-hex="#242e47" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">PSG Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(36, 46, 71)"
                  ></div>
                </div>
                <div data-hex="#f21a32" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">PSG Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(242, 26, 50)"
                  ></div>
                </div>
                <div data-hex="#02c6a8" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Puma Aqua Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 198, 168)"
                  ></div>
                </div>
                <div data-hex="#39393a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Puma Asphalt</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(57, 57, 58)"
                  ></div>
                </div>
                <div data-hex="#ff2675" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Puma Beetroot Purple</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 38, 117)"
                  ></div>
                </div>
                <div data-hex="#4d6e9e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Puma Blue Yonder</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(77, 110, 158)"
                  ></div>
                </div>
                <div data-hex="#d10828" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Puma Chili Pepper</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(209, 8, 40)"
                  ></div>
                </div>
                <div data-hex="#ecd601" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Puma Cyber Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(236, 214, 1)"
                  ></div>
                </div>
                <div data-hex="#2363b7" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Puma Electric Blue Lemonade</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(35, 99, 183)"
                  ></div>
                </div>
                <div data-hex="#b9b9bb" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Puma Gray Violet</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(185, 185, 187)"
                  ></div>
                </div>
                <div data-hex="#63cbad" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Puma Green Glimmer</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(99, 203, 173)"
                  ></div>
                </div>
                <div data-hex="##243e71" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Puma Limoges</span>
                  <div class="sp-palette-teamcolor-preview"></div>
                </div>
                <div data-hex="#1c1820" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Puma New Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(28, 24, 32)"
                  ></div>
                </div>
                <div data-hex="#2b2d41" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Puma Peacoat</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(43, 45, 65)"
                  ></div>
                </div>
                <div data-hex="#007d69" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Puma Pepper Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 125, 105)"
                  ></div>
                </div>
                <div data-hex="#fe9ec3" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Puma Pink Glimmer</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(254, 158, 195)"
                  ></div>
                </div>
                <div data-hex="#06644c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Puma Power Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(6, 100, 76)"
                  ></div>
                </div>
                <div data-hex="#e10b24" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Puma Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(225, 11, 36)"
                  ></div>
                </div>
                <div data-hex="#ffc50f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Puma Spectra Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 197, 15)"
                  ></div>
                </div>
                <div data-hex="#767475" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Puma Steel Gray</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(118, 116, 117)"
                  ></div>
                </div>
                <div data-hex="#60a3cd" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Puma Team Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(96, 163, 205)"
                  ></div>
                </div>
                <div data-hex="#204284" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Puma Team Power Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(32, 66, 132)"
                  ></div>
                </div>
                <div data-hex="#ab3847" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Qatar Dark Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(171, 56, 71)"
                  ></div>
                </div>
                <div data-hex="#d22a40" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Qatar Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(210, 42, 64)"
                  ></div>
                </div>
                <div data-hex="#0058a4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">QPR Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 88, 164)"
                  ></div>
                </div>
                <div data-hex="#fd212d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">QPR Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(253, 33, 45)"
                  ></div>
                </div>
                <div data-hex="#053695" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Reading Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(5, 54, 149)"
                  ></div>
                </div>
                <div data-hex="#93010c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Reading Dark Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(147, 1, 12)"
                  ></div>
                </div>
                <div data-hex="#fd001d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Reading Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(253, 0, 29)"
                  ></div>
                </div>
                <div data-hex="#baa071" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Real Madrid Gold</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(186, 160, 113)"
                  ></div>
                </div>
                <div data-hex="#26283f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Real Madrid Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(38, 40, 63)"
                  ></div>
                </div>
                <div data-hex="#fa5b79" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Real Madrid Pink</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(250, 91, 121)"
                  ></div>
                </div>
                <div data-hex="#5ec9b0" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Real Madrid Teal</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(94, 201, 176)"
                  ></div>
                </div>
                <div data-hex="#8f000e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >River Plate Dark Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(143, 0, 14)"
                  ></div>
                </div>
                <div data-hex="#ea181f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">River Plate Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(234, 24, 31)"
                  ></div>
                </div>
                <div data-hex="#ddd7c7" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Roma Beige</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(221, 215, 199)"
                  ></div>
                </div>
                <div data-hex="#5a2725" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Roma Claret</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(90, 39, 37)"
                  ></div>
                </div>
                <div data-hex="#851a23" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Roma Dark Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(133, 26, 35)"
                  ></div>
                </div>
                <div data-hex="#fa5f2f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Roma Orange 1</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(250, 95, 47)"
                  ></div>
                </div>
                <div data-hex="#fe9634" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Roma Orange 2</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(254, 150, 52)"
                  ></div>
                </div>
                <div data-hex="#d9252e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Roma Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(217, 37, 46)"
                  ></div>
                </div>
                <div data-hex="#f6b940" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Roma Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(246, 185, 64)"
                  ></div>
                </div>
                <div data-hex="#494748" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Rotherham Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(73, 71, 72)"
                  ></div>
                </div>
                <div data-hex="#d30009" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Rotherham Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(211, 0, 9)"
                  ></div>
                </div>
                <div data-hex="#01b665" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Saint-Etienne Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(1, 182, 101)"
                  ></div>
                </div>
                <div data-hex="#6c0518" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Salzburg Dark Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(108, 5, 24)"
                  ></div>
                </div>
                <div data-hex="#a69e9c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Salzburg Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(166, 158, 156)"
                  ></div>
                </div>
                <div data-hex="#212741" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Salzburg Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(33, 39, 65)"
                  ></div>
                </div>
                <div data-hex="#ca0b1b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Salzburg Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(202, 11, 27)"
                  ></div>
                </div>
                <div data-hex="#e3b138" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Salzburg Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(227, 177, 56)"
                  ></div>
                </div>
                <div data-hex="#273dac" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sampdoria Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(39, 61, 172)"
                  ></div>
                </div>
                <div data-hex="#ee312e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sampdoria Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(238, 49, 46)"
                  ></div>
                </div>
                <div data-hex="#b2a278" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sassuolo Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(178, 162, 120)"
                  ></div>
                </div>
                <div data-hex="#427d45" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sassuolo Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(66, 125, 69)"
                  ></div>
                </div>
                <div data-hex="#045d51" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Saudi Arabia Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(4, 93, 81)"
                  ></div>
                </div>
                <div data-hex="#03438b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Schalke Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(3, 67, 139)"
                  ></div>
                </div>
                <div data-hex="#6d9b90" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Schalke Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(109, 155, 144)"
                  ></div>
                </div>
                <div data-hex="#20436d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Scotland Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(32, 67, 109)"
                  ></div>
                </div>
                <div data-hex="#ce0120" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Scotland Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(206, 1, 32)"
                  ></div>
                </div>
                <div data-hex="#0f9376" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Senegal Green 1</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(15, 147, 118)"
                  ></div>
                </div>
                <div data-hex="#465e4e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Senegal Green 2</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(70, 94, 78)"
                  ></div>
                </div>
                <div data-hex="#2d3b59" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sevilla Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(45, 59, 89)"
                  ></div>
                </div>
                <div data-hex="#c91516" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sevilla Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(201, 21, 22)"
                  ></div>
                </div>
                <div data-hex="#d1bf97" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sheffield Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(209, 191, 151)"
                  ></div>
                </div>
                <div data-hex="#014244" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sheffield Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(1, 66, 68)"
                  ></div>
                </div>
                <div data-hex="#e6c0be" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sheffield Pink</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(230, 192, 190)"
                  ></div>
                </div>
                <div data-hex="#d22d33" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sheffield Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(210, 45, 51)"
                  ></div>
                </div>
                <div data-hex="#5856bb" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Sheffield Wednesday Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(88, 86, 187)"
                  ></div>
                </div>
                <div data-hex="#a4a094" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Sheffield Wednesday Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(164, 160, 148)"
                  ></div>
                </div>
                <div data-hex="#024878" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Slovenia Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 72, 120)"
                  ></div>
                </div>
                <div data-hex="#017c84" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Slovenia Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(1, 124, 132)"
                  ></div>
                </div>
                <div data-hex="#c9dcf4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Slovenia Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(201, 220, 244)"
                  ></div>
                </div>
                <div data-hex="#0066c8" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sociedad Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(0, 102, 200)"
                  ></div>
                </div>
                <div data-hex="#c9dee3" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Sociedad Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(201, 222, 227)"
                  ></div>
                </div>
                <div data-hex="#ff6a5f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sociedad Orange</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 106, 95)"
                  ></div>
                </div>
                <div data-hex="#bb9d5f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >South Korea Gold</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(187, 157, 95)"
                  ></div>
                </div>
                <div data-hex="#f6b9cb" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >South Korea Pink</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(246, 185, 203)"
                  ></div>
                </div>
                <div data-hex="#e13939" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">South Korea Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(225, 57, 57)"
                  ></div>
                </div>
                <div data-hex="#192940" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Southampton Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(25, 41, 64)"
                  ></div>
                </div>
                <div data-hex="#b60a1e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Southampton Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(182, 10, 30)"
                  ></div>
                </div>
                <div data-hex="#f3cb14" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Southampton Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(243, 203, 20)"
                  ></div>
                </div>
                <div data-hex="#d21533" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Spain Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(210, 21, 51)"
                  ></div>
                </div>
                <div data-hex="#f8c537" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Spain Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(248, 197, 55)"
                  ></div>
                </div>
                <div data-hex="#1b1714" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Spezia Brown</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(27, 23, 20)"
                  ></div>
                </div>
                <div data-hex="#6890b4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Spezia Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(104, 144, 180)"
                  ></div>
                </div>
                <div data-hex="#e3f388" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Spezia Lime</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(227, 243, 136)"
                  ></div>
                </div>
                <div data-hex="#038041" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sporting Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(3, 128, 65)"
                  ></div>
                </div>
                <div data-hex="#0515a9" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Stade Reims Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(5, 21, 169)"
                  ></div>
                </div>
                <div data-hex="#fe3c00" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Stade Reims Orange</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(254, 60, 0)"
                  ></div>
                </div>
                <div data-hex="#f60003" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Stade Reims Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(246, 0, 3)"
                  ></div>
                </div>
                <div data-hex="#d3222a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Stade Rennais Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(211, 34, 42)"
                  ></div>
                </div>
                <div data-hex="#262d4a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Stoke City Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(38, 45, 74)"
                  ></div>
                </div>
                <div data-hex="#e62d19" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Stoke City Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(230, 45, 25)"
                  ></div>
                </div>
                <div data-hex="#fff007" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Stoke City Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 240, 7)"
                  ></div>
                </div>
                <div data-hex="#054c9a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Strasbourg Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(5, 76, 154)"
                  ></div>
                </div>
                <div data-hex="#2c4333" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Stuttgart Dark Green</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(44, 67, 51)"
                  ></div>
                </div>
                <div data-hex="#4f6947" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Stuttgart Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(79, 105, 71)"
                  ></div>
                </div>
                <div data-hex="#ccd2c8" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Stuttgart Grey</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(204, 210, 200)"
                  ></div>
                </div>
                <div data-hex="#e5262b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Stuttgart Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(229, 38, 43)"
                  ></div>
                </div>
                <div data-hex="#dbf4fb" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Swansey Light Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(219, 244, 251)"
                  ></div>
                </div>
                <div data-hex="#454d64" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Swansey Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(69, 77, 100)"
                  ></div>
                </div>
                <div data-hex="#cb0a5d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Swansey Pink</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(203, 10, 93)"
                  ></div>
                </div>
                <div data-hex="#262e45" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sweden Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(38, 46, 69)"
                  ></div>
                </div>
                <div data-hex="#c3c12e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Sweden Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(195, 193, 46)"
                  ></div>
                </div>
                <div data-hex="#7a1d2b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Switzerland Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(122, 29, 43)"
                  ></div>
                </div>
                <div data-hex="#84012f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Torino Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(132, 1, 47)"
                  ></div>
                </div>
                <div data-hex="#99dfdd" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Torino Turquoise</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(153, 223, 221)"
                  ></div>
                </div>
                <div data-hex="#204241" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Tottenham Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(32, 66, 65)"
                  ></div>
                </div>
                <div data-hex="#c0d8b4" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Tottenham Lime</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(192, 216, 180)"
                  ></div>
                </div>
                <div data-hex="#222b48" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Tottenham Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(34, 43, 72)"
                  ></div>
                </div>
                <div data-hex="#fea5a2" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Tottenham Pink</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(254, 165, 162)"
                  ></div>
                </div>
                <div data-hex="#dcd569" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Tottenham Yellow 1</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(220, 213, 105)"
                  ></div>
                </div>
                <div data-hex="#f8df5e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Tottenham Yellow 2</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(248, 223, 94)"
                  ></div>
                </div>
                <div data-hex="#f2bc24" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Tottenham Yellow 3</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(242, 188, 36)"
                  ></div>
                </div>
                <div data-hex="#b00327" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Turkey Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(176, 3, 39)"
                  ></div>
                </div>
                <div data-hex="#163da6" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Udinese Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(22, 61, 166)"
                  ></div>
                </div>
                <div data-hex="#7e8376" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Udinese Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(126, 131, 118)"
                  ></div>
                </div>
                <div data-hex="#192851" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Udinese Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(25, 40, 81)"
                  ></div>
                </div>
                <div data-hex="#e2bd25" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Udinese Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(226, 189, 37)"
                  ></div>
                </div>
                <div data-hex="#2268ac" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Ukraine Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(34, 104, 172)"
                  ></div>
                </div>
                <div data-hex="#f2c414" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Ukraine Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(242, 196, 20)"
                  ></div>
                </div>
                <div data-hex="#5e616f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Union Berlin Grey</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(94, 97, 111)"
                  ></div>
                </div>
                <div data-hex="#2b3864" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Union Berlin Navy</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(43, 56, 100)"
                  ></div>
                </div>
                <div data-hex="#e6232b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Union Berlin Red</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(230, 35, 43)"
                  ></div>
                </div>
                <div data-hex="#feda4b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name has-tooltip"
                    >Union Berlin Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(254, 218, 75)"
                  ></div>
                </div>
                <div data-hex="#2e3561" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">USA Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(46, 53, 97)"
                  ></div>
                </div>
                <div data-hex="#e42a38" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">USA Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(228, 42, 56)"
                  ></div>
                </div>
                <div data-hex="#342551" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Valencia Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(52, 37, 81)"
                  ></div>
                </div>
                <div data-hex="#eb7a1a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Valencia Orange</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(235, 122, 26)"
                  ></div>
                </div>
                <div data-hex="#fb468d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Valladolid Pink</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(251, 70, 141)"
                  ></div>
                </div>
                <div data-hex="#352f6c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Valladolid Purple</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(53, 47, 108)"
                  ></div>
                </div>
                <div data-hex="#213041" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Villarreal Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(33, 48, 65)"
                  ></div>
                </div>
                <div data-hex="#dcc62f" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Villarreal Yellow</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(220, 198, 47)"
                  ></div>
                </div>
                <div data-hex="#f0d041" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Watford Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(240, 208, 65)"
                  ></div>
                </div>
                <div data-hex="#026e3a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">WBA Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(2, 110, 58)"
                  ></div>
                </div>
                <div data-hex="#102658" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">WBA Navy</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(16, 38, 88)"
                  ></div>
                </div>
                <div data-hex="#d90111" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">WBA Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(217, 1, 17)"
                  ></div>
                </div>
                <div data-hex="#edd501" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">WBA Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(237, 213, 1)"
                  ></div>
                </div>
                <div data-hex="#a7c7ee" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">West Ham Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(167, 199, 238)"
                  ></div>
                </div>
                <div data-hex="#751c30" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">West Ham Claret</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(117, 28, 48)"
                  ></div>
                </div>
                <div data-hex="#caba8a" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">West Ham Gold</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(202, 186, 138)"
                  ></div>
                </div>
                <div data-hex="#ffffff" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">White</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(255, 255, 255)"
                  ></div>
                </div>
                <div data-hex="#01bae6" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Wolfsburg Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(1, 186, 230)"
                  ></div>
                </div>
                <div data-hex="#a6e978" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Wolfsburg Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(166, 233, 120)"
                  ></div>
                </div>
                <div data-hex="#ed960d" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Wolves Amber</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(237, 150, 13)"
                  ></div>
                </div>
                <div data-hex="#2faacb" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Wolves Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(47, 170, 203)"
                  ></div>
                </div>
                <div data-hex="#6e0e19" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Wolves Dark Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(110, 14, 25)"
                  ></div>
                </div>
                <div data-hex="#1e483b" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Wolves Green</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(30, 72, 59)"
                  ></div>
                </div>
                <div data-hex="#398cb8" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Wycombe Blue</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(57, 140, 184)"
                  ></div>
                </div>
                <div data-hex="#112445" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name"
                    >Wycombe Dark Blue</span
                  >
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(17, 36, 69)"
                  ></div>
                </div>
                <div data-hex="#cd232c" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Wycombe Red</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(205, 35, 44)"
                  ></div>
                </div>
                <div data-hex="#e6d11e" class="sp-palette-teamcolor">
                  <span class="sp-palette-teamcolor-name">Wycombe Yellow</span>
                  <div
                    class="sp-palette-teamcolor-preview"
                    style="background-color: rgb(230, 209, 30)"
                  ></div>
                </div>
              </div>
            </div>
            <div class="sp-palette-button-container sp-cf">
              <button
                type="button"
                class="button icon-button sp-button-palette-toggle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
                  ></path></svg
                ><span>Default palette</span>
              </button>
            </div>
          </div>
          <div class="sp-picker-container">
            <div class="sp-top sp-cf">
              <div class="sp-fill"></div>
              <div class="sp-top-inner">
                <div class="sp-color" style="background-color: rgb(255, 0, 0)">
                  <div class="sp-sat">
                    <div class="sp-val"><div class="sp-dragger"></div></div>
                  </div>
                </div>
                <div
                  title="Clear Color Selection"
                  class="sp-clear sp-clear-display"
                  style="display: none"
                ></div>
                <div class="sp-hue">
                  <div class="sp-slider" style="top: -3px"></div>
                </div>
              </div>
              <div class="sp-alpha">
                <div class="sp-alpha-inner">
                  <div class="sp-alpha-handle" style="left: 197px"></div>
                </div>
              </div>
            </div>
            <div class="sp-input-initial-container">
              <div class="sp-initial sp-thumb sp-cf">
                <div class="sp-cf sp-palette-row-initial">
                  <span
                    title="#000000"
                    class="sp-thumb-el sp-thumb-active sp-thumb-dark"
                    ><span
                      class="sp-thumb-inner"
                      style="background-color: rgb(0, 0, 0)"
                    ></span></span
                  ><span
                    title="#000000"
                    class="sp-thumb-el sp-thumb-active sp-thumb-dark"
                    ><span
                      class="sp-thumb-inner"
                      style="background-color: rgb(0, 0, 0)"
                    ></span
                  ></span>
                </div>
              </div>
              <div class="sp-input-container sp-cf">
                <input type="text" spellcheck="false" class="sp-input" />
              </div>
            </div>
            <div class="sp-button-container sp-cf">
              <button
                type="button"
                class="sp-cancel button secondary"
                @click="close"
              >
                Cancel
              </button>
              <button
                type="button"
                class="sp-apply-all button secondary"
                @click="close"
              >
                Apply all
              </button>
              <button type="button" class="sp-choose button" @click="close">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isShow"],
  methods: {
    /**
     * color picker を閉じる
     * @returns {void}
     */
    close() {
      this.show = false;
    },
  },
  computed: {
    show: {
      // 親コンポーネントから値を更新する
      get: function () {
        return this.isShow;
      },
      // 親コンポーネントから値を更新する通知する
      set: function (isShow) {
        this.$emit("show", isShow);
      },
    },
  },
};
</script>
