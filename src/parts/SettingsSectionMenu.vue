<template>
  <div class="settings-section " v-if="showTitle === 'Settings'">
    <div class="settings-section-content">
      <h2 class="settings-section-header">Settings</h2>
      <div class="settings-section-group">
        <input type="text" placeholder="Name" class="kit-name" />
      </div>
      <div class="settings-section-group">
        <div
          class="selector-container"
          id="template-selector"
          show-credits="true"
        >
          <h3 class="selector-title">
            <div class="selector-title-buttons">
              <button
                class="icon-button has-tooltip"
                data-original-title="null"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="selector-title-details">
              <span class="selector-title-name">Template: </span
              ><span class="selector-title-preset-name">Kappa 22-23</span>
            </div>
          </h3>
        </div>
        <div class="input-container">
          <div class="input-container-name-container">
            <span>Shininess</span><input type="number" min="-100" max="100" />
          </div>
          <div>
            <input
              type="range"
              min="-100"
              max="100"
              list="steps-zero"
              class="custom-slider"
            />
          </div>
        </div>
        <div class="input-container">
          <div class="input-container-name-container">
            <span>Metalness</span><input type="number" min="0" max="100" />
          </div>
          <div>
            <input type="range" min="0" max="100" class="custom-slider" />
          </div>
        </div>
        <div class="input-container">
          <label tabindex="0" class="toggle-label"
            ><div class="toggle"><div class="toggle-thumb"></div></div>
            <span>Hide template details</span></label
          >
        </div>
      </div>
      <div class="settings-section-group">
        <div class="input-container">
          <label tabindex="0" class="toggle-label"
            ><div class="toggle">
              <div class="toggle-thumb active"></div>
            </div>
            <span>Normal map (3D) detail</span></label
          >
        </div>

        <div class="input-container">
          <label disabled="disabled" tabindex="0" class="toggle-label"
            ><div class="toggle"><div class="toggle-thumb"></div></div>
            <span>Layer-level 3D detail</span></label
          >
        </div>

        <div class="input-container">
          <label tabindex="0" class="toggle-label"
            ><div class="toggle">
              <div class="toggle-thumb active"></div>
            </div>
            <span>Layer-level shininess / metalness</span></label
          >
        </div>

        <div class="input-container">
          <div class="input-container-name-container">
            <span>Texture scale</span>
          </div>
          <div class="button-container">
            <select>
              <option value="0.25">512</option>
              <option value="0.5">1024</option>
              <option value="1">2048</option>
              <option disabled="disabled" value="2">4096</option>
            </select>
          </div>
        </div>

        <div class="fm-teamsearch-disclaimer">
          <span
            >The 4096 resolution is exclusive to
            <a href="/plus/" target="_blank">Plus Ultimate</a>
            members</span
          >
        </div>

        <div class="input-container">
          <label tabindex="0" class="toggle-label"
            ><div class="toggle"><div class="toggle-thumb"></div></div>
            <span>Hide shorts</span></label
          >
        </div>

        <div class="input-container">
          <div class="input-container-name-container">
            <span>Language</span>
          </div>
          <div class="button-container">
            <select>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="he">עִברִית</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="it">Italiano</option>
              <option value="jp">日本語</option>
              <option value="ko">한국어</option>
              <option value="hu">Magyar</option>
              <option value="nl">Nederlands</option>
              <option value="pt-pt">Português</option>
              <option value="pt">Português (Brasil)</option>
              <option value="ru">Русский</option>
              <option value="tr">Türkçe</option>
              <option value="vn">Tiếng Việt</option>
            </select>
          </div>
        </div>

        <div class="input-container">
          <label tabindex="0" class="toggle-label"
            ><div class="toggle">
              <div class="toggle-thumb active"></div>
            </div>
            <span>Undo / redo</span></label
          >
        </div>

        <div class="input-container">
          <div class="input-container-name-container">
            <span>Lighting</span>
          </div>
          <div class="button-container">
            <select>
              <option value="[object Object]">Default</option>
              <option value="[object Object]">Default 2</option>
              <option value="[object Object]">Default 3</option>
              <option value="[object Object]">Night</option>
              <option value="[object Object]">Day</option>
              <option value="[object Object]">Day (r)</option>
              <option value="[object Object]">Day (l)</option>
              <option value="[object Object]">Dark (r)</option>
              <option value="[object Object]">Dark (l)</option>
            </select>
          </div>
        </div>
      </div>
      <div class="settings-section-group">
        <div class="input-container">
          <div class="input-container-name-container">
            <span>3D Model</span>
          </div>
          <div class="button-container">
            <select>
              <option value="[object Object]">FIFA 21/22</option>
              <option value="[object Object]">FIFA 21/22 Tight</option>
              <option value="[object Object]">FIFA 21/22 Women</option>
            </select>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button class="button icon-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path></svg
          ><span>Start from scratch</span>
        </button>
        <div>
          <button class="button icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 512 512"
            >
              <defs></defs>
              <path
                fill="#FF4B00"
                d="M256 0l-30 50 30 41 117 48 57-27 6-36C390 30 326 0 256 0z"
              ></path>
              <path
                fill="#FF9F00"
                d="M436 76l-63 63 48 117 48 30 43-30c0-70-30-134-76-180z"
              ></path>
              <path
                fill="#6B0"
                d="M421 256l-48 117 3 63h60c46-46 76-110 76-180h-91z"
              ></path>
              <path
                fill="#00CC71"
                d="M373 373l-117 48-30 50 30 41c70 0 134-30 180-76l-63-63z"
              ></path>
              <path
                fill="#0095FF"
                d="M139 373l-59-1-4 64c46 46 110 76 180 76v-91l-117-48z"
              ></path>
              <path
                fill="#6B77E8"
                d="M91 256l-44-30-47 30c0 70 30 134 76 180l63-63-48-117z"
              ></path>
              <path
                fill="#B760EA"
                d="M114 84l-38-8C30 122 0 186 0 256h91l48-117-25-55z"
              ></path>
              <path
                fill="#FF193D"
                d="M256 91V0C186 0 122 30 76 76l63 63c30-29 72-48 117-48z"
              ></path>
              <path
                fill="#FF7816"
                d="M256 91l-30 45 30 45 53 22 60-29 4-35c-30-29-72-48-117-48z"
              ></path>
              <path
                fill="#FDBF00"
                d="M373 139l-64 64 22 53 42 30 48-30c0-45-19-87-48-117z"
              ></path>
              <path
                fill="#7D0"
                d="M331 256l-22 53 7 37 57 27c29-30 48-72 48-117h-90z"
              ></path>
              <path
                fill="#00DD7B"
                d="M309 309l-53 22-30 47 30 43c45 0 87-19 117-48l-64-64z"
              ></path>
              <path
                fill="#3AAAFF"
                d="M203 309l-64 4v60c30 29 72 48 117 48v-90l-53-22z"
              ></path>
              <path
                fill="#7984EB"
                d="M181 256l-42-30-48 30c0 45 19 87 48 117l64-64-22-53z"
              ></path>
              <path
                fill="#CB75F6"
                d="M200 140l-61-1c-29 30-48 72-48 117h90l22-53-3-63z"
              ></path>
              <path
                fill="#FF4949"
                d="M139 139l64 64 53-22V91c-45 0-87 19-117 48z"
              ></path>
              <path
                fill="#FF9F00"
                d="M309 203a75 75 0 00-53-22l-30 30 30 45 57-27-4-26z"
              ></path>
              <path
                fill="#FFD400"
                d="M331 256c0-21-8-39-22-53l-53 53 48 30 27-30z"
              ></path>
              <path
                fill="#89F900"
                d="M309 309c14-14 22-32 22-53h-75l27 57 26-4z"
              ></path>
              <path
                fill="#00EE84"
                d="M256 256l-30 42 30 33c21 0 39-8 53-22l-53-53z"
              ></path>
              <path
                fill="#73BCFF"
                d="M256 256l-45 15-8 38c14 14 32 22 53 22v-75z"
              ></path>
              <path
                fill="#979FEF"
                d="M181 256c0 21 8 39 22 53l53-53-44-15-31 15z"
              ></path>
              <path
                fill="#DA90F8"
                d="M203 203a75 75 0 00-22 53h75l-15-45-38-8z"
              ></path>
              <path
                fill="#FF6C6C"
                d="M256 181c-21 0-39 8-53 22l53 53v-75z"
              ></path></svg
            ><span>Recolor</span>
          </button>
        </div>
      </div>
      <div class="button-container">
        <button class="button icon-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444C17.2 18 18 17.2 18 16.222V3.778C18 2.8 17.2 2 16.222 2zM6 15.333A1.332 1.332 0 014.667 14c0-.738.595-1.333 1.333-1.333s1.333.595 1.333 1.333S6.738 15.333 6 15.333zm0-8A1.332 1.332 0 014.667 6c0-.738.595-1.333 1.333-1.333S7.333 5.262 7.333 6 6.738 7.333 6 7.333zm4 4A1.332 1.332 0 018.667 10c0-.738.595-1.333 1.333-1.333s1.333.595 1.333 1.333-.595 1.333-1.333 1.333zm4 4A1.331 1.331 0 0112.667 14c0-.738.595-1.333 1.333-1.333s1.333.595 1.333 1.333-.595 1.333-1.333 1.333zm0-8A1.332 1.332 0 0112.667 6c0-.738.595-1.333 1.333-1.333s1.333.595 1.333 1.333S14.738 7.333 14 7.333z"
            ></path></svg
          ><span>Randomize</span>
        </button>
      </div>
      <div class="button-container">
        <button class="button icon-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            ></path></svg
          ><span>Enter Preview Mode</span>
        </button>
      </div>
      <div class="button-container">
        <button class="button icon-button">
          <span>Enter Create Club Mode</span>
        </button>
      </div>
    </div>
  </div>
  <div
    class="settings-section settings-section-logos "
    v-else-if="showTitle === 'Logos'"
  >
    <div class="settings-section-content">
      <h2 class="settings-section-header">
        <span>Logos</span
        ><button
          disabled="disabled"
          class="button icon-button has-tooltip"
          data-original-title="null"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7.172 4.828L10 2m0 0l2.828 2.828M10 2v5.657M7.172 14.828L10 17.657m0 0l2.828-2.829M10 17.657V12M15.172 7.172L18 10m0 0l-2.828 2.828M18 10h-5.657M4.828 7.172L2 10m0 0l2.828 2.828M2 10h5.657"
            ></path></svg
          ><span>Custom pos.</span>
        </button>
      </h2>
      <div class="custom-logo-settings-container" style="display: none">
        <div class="custom-logo-setting">
          <label tabindex="0" class="toggle-label"
            ><div class="toggle"><div class="toggle-thumb"></div></div>
            <span>Shirt</span>
          </label>
          <div style="display: none">
            <h4>Brand</h4>
            <div class="input-container">
              <div class="input-container-name-container">
                <span>Position (x)</span
                ><input type="number" min="-100" max="100" />
              </div>
              <div>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  list="steps-zero"
                  class="custom-slider"
                />
              </div>
            </div>

            <div class="input-container">
              <div class="input-container-name-container">
                <span>Position (y)</span
                ><input type="number" min="-100" max="100" />
              </div>
              <div>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  list="steps-zero"
                  class="custom-slider"
                />
              </div>
            </div>

            <h4>Team</h4>
            <div class="input-container">
              <div class="input-container-name-container">
                <span>Position (x)</span
                ><input type="number" min="-100" max="100" />
              </div>
              <div>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  list="steps-zero"
                  class="custom-slider"
                />
              </div>
            </div>

            <div class="input-container">
              <div class="input-container-name-container">
                <span>Position (y)</span
                ><input type="number" min="-100" max="100" />
              </div>
              <div>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  list="steps-zero"
                  class="custom-slider"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="custom-logo-setting">
          <label tabindex="0" class="toggle-label"
            ><div class="toggle"><div class="toggle-thumb"></div></div>
            <span>Shorts</span></label
          >
          <div style="display: none">
            <h4>Brand</h4>

            <div>
              <label
                ><span>Display</span
                ><select>
                  <option value="0">off</option>
                  <option value="1">right</option>
                  <option value="2">left</option>
                </select></label
              >
            </div>
            <div class="input-container">
              <div class="input-container-name-container">
                <span>Position (x)</span
                ><input type="number" min="-50" max="120" />
              </div>
              <div>
                <input
                  type="range"
                  min="-50"
                  max="120"
                  list="steps-zero"
                  class="custom-slider"
                />
              </div>
            </div>

            <div class="input-container">
              <div class="input-container-name-container">
                <span>Position (y)</span
                ><input type="number" min="-100" max="20" />
              </div>
              <div>
                <input
                  type="range"
                  min="-100"
                  max="20"
                  list="steps-zero"
                  class="custom-slider"
                />
              </div>
            </div>

            <h4>Team</h4>

            <div>
              <label
                ><span>Display</span
                ><select>
                  <option value="0">off</option>
                  <option value="1">right</option>
                  <option value="2">left</option>
                </select></label
              >
            </div>
            <div class="input-container">
              <div class="input-container-name-container">
                <span>Position (x)</span
                ><input type="number" min="-50" max="120" />
              </div>
              <div>
                <input
                  type="range"
                  min="-50"
                  max="120"
                  list="steps-zero"
                  class="custom-slider"
                />
              </div>
            </div>

            <div class="input-container">
              <div class="input-container-name-container">
                <span>Position (y)</span
                ><input type="number" min="-100" max="20" />
              </div>
              <div>
                <input
                  type="range"
                  min="-100"
                  max="20"
                  list="steps-zero"
                  class="custom-slider"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="custom-logo-setting">
          <label tabindex="0" class="toggle-label"
            ><div class="toggle"><div class="toggle-thumb"></div></div>
            <span>Socks</span></label
          >
          <div style="display: none">
            <h4>Brand</h4>

            <div>
              <label
                ><span>Display</span
                ><select>
                  <option value="0">off</option>
                  <option value="1">front</option>
                  <option value="2">back</option>
                </select></label
              >
            </div>
            <div class="input-container">
              <div class="input-container-name-container">
                <span>Position (x)</span
                ><input type="number" min="-40" max="40" />
              </div>
              <div>
                <input
                  type="range"
                  min="-40"
                  max="40"
                  list="steps-zero"
                  class="custom-slider"
                />
              </div>
            </div>

            <div class="input-container">
              <div class="input-container-name-container">
                <span>Position (y)</span
                ><input type="number" min="-20" max="45" />
              </div>
              <div>
                <input
                  type="range"
                  min="-20"
                  max="45"
                  list="steps-zero"
                  class="custom-slider"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="logo-section ">
        <div class="selector-container">
          <h3 class="selector-title">
            <div class="selector-title-buttons">
              <label class="icon-button has-tooltip" data-original-title="null"
                ><input
                  type="file"
                  accept="image/png,image/jpeg"
                  style="display: none" /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path></svg></label
              ><button
                class="icon-button has-tooltip"
                data-original-title="null"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="selector-title-details selector-title-details-with-preview"
            >
              <span class="selector-title-name">Brand: </span>
              <div
                class="selector-preview has-tooltip"
                data-original-title="null"
              >
                <span>Kappa 2</span
                ><button class="icon-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </h3>
        </div>
        <div class="layer-container layer-container-logos">
          <div id="logos_brand_0" class="layer editable">
            <div class="settings-toggle-color-container">
              <button tabindex="0" class="toggle-basic ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div class="settings-color-container">
                <button
                  data-v-75f023d4=""
                  value="#ffffff"
                  data-value="#ffffff"
                  class="custom-color"
                  style="background-color: rgb(255, 255, 255)"
                ></button>
              </div>
            </div>
            <div class="layer-name">Shirt</div>
          </div>
          <div id="logos_brand_1" class="layer">
            <div class="settings-toggle-color-container">
              <button tabindex="0" class="toggle-basic">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div class="settings-color-container">
                <button
                  data-v-75f023d4=""
                  value="#ffffff"
                  data-value="#ffffff"
                  class="custom-color"
                  disabled="disabled"
                  style="background-color: rgb(255, 255, 255)"
                ></button>
              </div>
            </div>
            <div class="layer-name">Shorts</div>
          </div>
          <div id="logos_brand_2" class="layer">
            <div class="settings-toggle-color-container">
              <button tabindex="0" class="toggle-basic">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div class="settings-color-container">
                <button
                  data-v-75f023d4=""
                  value="#ffffff"
                  data-value="#ffffff"
                  class="custom-color"
                  disabled="disabled"
                  style="background-color: rgb(255, 255, 255)"
                ></button>
              </div>
            </div>
            <div class="layer-name">Socks</div>
          </div>
        </div>
      </div>
      <div class="logo-section">
        <div class="selector-container">
          <h3 class="selector-title">
            <div class="selector-title-buttons">
              <label class="icon-button has-tooltip" data-original-title="null"
                ><input
                  type="file"
                  accept="image/png,image/jpeg"
                  style="display: none" /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path></svg></label
              ><button
                class="icon-button has-tooltip"
                data-original-title="null"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="selector-title-details selector-title-details-with-preview"
            >
              <span class="selector-title-name">Team</span>
            </div>
          </h3>
        </div>
      </div>
      <div class="logo-section">
        <div class="selector-container">
          <h3 class="selector-title">
            <div class="selector-title-buttons">
              <label class="icon-button has-tooltip" data-original-title="null"
                ><input
                  type="file"
                  accept="image/png,image/jpeg"
                  style="display: none" /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path></svg></label
              ><button
                class="icon-button has-tooltip"
                data-original-title="null"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="selector-title-details selector-title-details-with-preview"
            >
              <span class="selector-title-name">Sponsor</span>
            </div>
          </h3>
        </div>
      </div>
      <div class="logo-section">
        <div class="selector-container">
          <h3 class="selector-title">
            <div class="selector-title-buttons">
              <label class="icon-button has-tooltip" data-original-title="null"
                ><input
                  type="file"
                  accept="image/png,image/jpeg"
                  style="display: none" /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path></svg></label
              ><button
                class="icon-button has-tooltip"
                data-original-title="null"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="selector-title-details selector-title-details-with-preview"
            >
              <span class="selector-title-name">Back sponsor</span>
            </div>
          </h3>
        </div>
      </div>
      <div class="logo-section">
        <div class="selector-container">
          <h3 class="selector-title">
            <div class="selector-title-buttons">
              <label class="icon-button has-tooltip" data-original-title="null"
                ><input
                  type="file"
                  accept="image/png,image/jpeg"
                  style="display: none" /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path></svg></label
              ><button
                class="icon-button has-tooltip"
                data-original-title="null"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="selector-title-details selector-title-details-with-preview"
            >
              <span class="selector-title-name">Sleeve (left)</span>
            </div>
          </h3>
        </div>
      </div>
      <div class="logo-section">
        <div class="selector-container">
          <h3 class="selector-title">
            <div class="selector-title-buttons">
              <label class="icon-button has-tooltip" data-original-title="null"
                ><input
                  type="file"
                  accept="image/png,image/jpeg"
                  style="display: none" /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path></svg></label
              ><button
                class="icon-button has-tooltip"
                data-original-title="null"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="selector-title-details selector-title-details-with-preview"
            >
              <span class="selector-title-name">Sleeve (right)</span>
            </div>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div class="settings-section " v-else-if="showTitle === 'Shirt'">
    <div class="settings-section-content">
      <h2 class="settings-section-header">Shirt</h2>
      <div class="settings-section-group settings-section-group-collar">
        <div class="image-select">
          <button>
            <div class="collar-selector collar-selector-settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 3L3 6l4 6 3-3M6 3h8M6 3l4 6m0 0v7m0-7l3 3 4-6-3-3m-4 6l4-6"
                ></path></svg
              ><b>Collar 7</b>
            </div>
          </button>
          <ul class="image-select-items" style="display: none">
            <li>
              <button class="selected">
                <img src="/static/previews/collars/0.jpg" loading="lazy" /><span
                  >Collar 0</span
                >
              </button>
            </li>
            <li>
              <button>
                <img src="/static/previews/collars/1.jpg" loading="lazy" /><span
                  >Collar 1</span
                >
              </button>
            </li>
            <li>
              <button>
                <img src="/static/previews/collars/2.jpg" loading="lazy" /><span
                  >Collar 2</span
                >
              </button>
            </li>
            <li>
              <button>
                <img src="/static/previews/collars/3.jpg" loading="lazy" /><span
                  >Collar 3</span
                >
              </button>
            </li>
            <li>
              <button>
                <img src="/static/previews/collars/4.jpg" loading="lazy" /><span
                  >Collar 4</span
                >
              </button>
            </li>
            <li>
              <button>
                <img src="/static/previews/collars/5.jpg" loading="lazy" /><span
                  >Collar 5</span
                >
              </button>
            </li>
            <li>
              <button>
                <img src="/static/previews/collars/6.jpg" loading="lazy" /><span
                  >Collar 6</span
                >
              </button>
            </li>
            <li>
              <button>
                <img src="/static/previews/collars/7.jpg" loading="lazy" /><span
                  >Collar 7</span
                >
              </button>
            </li>
            <li>
              <button>
                <img src="/static/previews/collars/8.jpg" loading="lazy" /><span
                  >Collar 8</span
                >
              </button>
            </li>
            <li>
              <button>
                <img src="/static/previews/collars/9.jpg" loading="lazy" /><span
                  >Collar 9</span
                >
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/10.jpg"
                  loading="lazy"
                /><span>Collar 10</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/11.jpg"
                  loading="lazy"
                /><span>Collar 11</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/12.jpg"
                  loading="lazy"
                /><span>Collar 12</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/13.jpg"
                  loading="lazy"
                /><span>Collar 13</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/14.jpg"
                  loading="lazy"
                /><span>Collar 14</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/15.jpg"
                  loading="lazy"
                /><span>Collar 15</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/16.jpg"
                  loading="lazy"
                /><span>Collar 16</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/17.jpg"
                  loading="lazy"
                /><span>Collar 17</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/18.jpg"
                  loading="lazy"
                /><span>Collar 18</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/19.jpg"
                  loading="lazy"
                /><span>Collar 19</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/20.jpg"
                  loading="lazy"
                /><span>Collar 20</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/21.jpg"
                  loading="lazy"
                /><span>Collar 21</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/22.jpg"
                  loading="lazy"
                /><span>Collar 22</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/23.jpg"
                  loading="lazy"
                /><span>Collar 23</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/24.jpg"
                  loading="lazy"
                /><span>Collar 24</span>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/static/previews/collars/25.jpg"
                  loading="lazy"
                /><span>Collar 25</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="layer-container">
        <div draggable="false" id="shirt_0" data-index="0" class="layer">
          <template></template>
          <div class="settings-toggle-color-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="settings-color-container">
              <button
                data-v-75f023d4=""
                value="#000000"
                data-value="#000000"
                class="custom-color"
                style="background-color: rgb(0, 0, 0)"
              ></button>
            </div>
          </div>
          <div class="layer-name">
            <div><span>Base</span></div>
          </div>
          <div class="settings-icon-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          draggable="false"
          id="shirt_1"
          data-index="1"
          class="layer editable"
        >
          <template></template>
          <div class="settings-toggle-color-container">
            <button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="settings-color-container">
              <button
                data-v-75f023d4=""
                value="#505050"
                data-value="#505050"
                class="custom-color"
                style="background-color: rgb(80, 80, 80)"
              ></button>
            </div>
          </div>
          <div class="layer-name">
            <div><span>Collar</span></div>
          </div>
          <div class="settings-icon-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          draggable="false"
          id="shirt_2"
          data-index="2"
          class="layer disabled"
        >
          <template></template>
          <div class="settings-toggle-color-container">
            <button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                ></path>
              </svg>
            </button>
            <div class="settings-color-container">
              <button
                data-v-75f023d4=""
                value="#505050"
                data-value="#505050"
                class="custom-color"
                disabled="disabled"
                style="background-color: rgb(80, 80, 80)"
              ></button>
            </div>
          </div>
          <div class="layer-name">
            <div><span>Sleeves</span></div>
          </div>
          <div class="settings-icon-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          draggable="false"
          id="shirt_3"
          data-index="3"
          class="layer editable allow-above"
        >
          <template></template>
          <div class="settings-toggle-color-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="settings-color-container">
              <button
                data-v-75f023d4=""
                value="#dc5094"
                data-value="#dc5094"
                class="custom-color"
                style="background-color: rgb(220, 80, 148)"
              ></button>
            </div>
          </div>
          <div class="layer-name">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 2H2v16h16V2zm-3 9.887C14.861 14.335 13.08 16 10.243 16 6.963 16 5 13.746 5 10.507 5 7.24 6.997 5 10.229 5c2.78 0 4.646 1.616 4.771 4.078h-2.788c-.16-1.061-.853-1.775-1.935-1.775-1.373 0-2.274 1.151-2.274 3.162 0 2.04.894 3.198 2.274 3.198 1.013 0 1.762-.638 1.935-1.776H15z"
                  clip-rule="evenodd"
                ></path></svg
              ><span>Armband</span>
            </div>
          </div>
          <div class="settings-icon-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          draggable="true"
          id="shirt_4"
          data-index="4"
          class="layer disabled allow-above"
        >
          <template></template>
          <div class="settings-toggle-color-container">
            <button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                ></path>
              </svg>
            </button>
            <div class="settings-color-container">
              <button
                data-v-75f023d4=""
                value="#ffffff"
                data-value="#ffffff"
                class="custom-color"
                disabled="disabled"
                style="background-color: rgb(255, 255, 255)"
              ></button>
            </div>
          </div>
          <div class="layer-name">
            <div><span>Side panels</span></div>
          </div>
          <div class="settings-icon-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          draggable="true"
          id="shirt_5"
          data-index="5"
          class="layer disabled allow-above"
        >
          <template></template>
          <div class="settings-toggle-color-container">
            <button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                ></path>
              </svg>
            </button>
            <div class="settings-color-container">
              <button
                data-v-75f023d4=""
                value="#a0a0a0"
                data-value="#a0a0a0"
                class="custom-color"
                disabled="disabled"
                style="background-color: rgb(160, 160, 160)"
              ></button>
            </div>
          </div>
          <div class="layer-name">
            <div><span>Hem</span></div>
          </div>
          <div class="settings-icon-container">
            <button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          draggable="true"
          id="shirt_6"
          data-index="6"
          class="layer editable allow-above"
        >
          <template></template>
          <div class="settings-toggle-color-container">
            <button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="settings-color-container">
              <button
                data-v-75f023d4=""
                value="#ffffff"
                data-value="#ffffff"
                class="custom-color"
                style="background-color: rgb(255, 255, 255)"
              ></button>
            </div>
          </div>
          <div class="layer-name">
            <div><span>Sleeve logos</span></div>
          </div>
          <div class="settings-icon-container">
            <button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          draggable="true"
          id="shirt_7"
          data-index="7"
          class="layer editable allow-above"
        >
          <template></template>
          <div class="settings-toggle-color-container">
            <button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="settings-color-container">
              <button
                data-v-75f023d4=""
                value="#a0a0a0"
                data-value="#a0a0a0"
                class="custom-color"
                style="background-color: rgb(160, 160, 160)"
              ></button>
            </div>
          </div>
          <div class="layer-name">
            <div><span>Sleeve cuffs</span></div>
          </div>
          <div class="settings-icon-container">
            <button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="add-layer-container">
        <h3 class="add-layer-header">
          <span>Add layer</span>
        </h3>
        <div class="add-layer-buttons">
          <div class="selector-container">
            <button class="button icon-button button-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                ></path></svg
              ><span>Base design</span>
            </button>
          </div>
          <div class="selector-container">
            <button class="button icon-button button-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                ></path></svg
              ><span>Graphic</span>
            </button>
          </div>

          <div class="selector-container">
            <button class="button icon-button button-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M6 4a2 2 0 11-4 0 2 2 0 014 0zM6 16a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 4a2 2 0 11-4 0 2 2 0 014 0zM18 16a2 2 0 11-4 0 2 2 0 014 0zM8 2h4v4H8V2zM2 8h4v4H2V8zM14 8h4v4h-4V8zM8 14h4v4H8v-4z"
                ></path></svg
              ><span>Pattern</span>
            </button>
          </div>
          <button class="button button-secondary icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M3 5a1 1 0 011-1h8a1 1 0 110 2H9v9a1 1 0 11-2 0V6H4a1 1 0 01-1-1z"
              ></path>
              <path
                d="M11 9a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zM13 10h2v5a1 1 0 11-2 0v-5z"
              ></path></svg
            ><span>Text</span></button
          ><button class="button button-secondary icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944z"
              ></path></svg
            ><span>Custom logo</span></button
          ><button class="button button-secondary icon-button">
            <span>Sleeve cuffs</span></button
          ><button class="button button-secondary icon-button">
            <span>Side panels</span></button
          ><button class="button button-secondary icon-button">
            <span>Shoulder panels</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="settings-section " v-else-if="showTitle === 'Shorts'">
    <div class="settings-section-content">
      <h2 class="settings-section-header">Shorts</h2>

      <div class="settings-section-group settings-section-group-collar">
        <div class="input-container">
          <div class="input-container-name-container">
            <span>Model</span>
          </div>
          <div class="button-container">
            <select>
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </div>
      <div class="layer-container">
        <div
          draggable="false"
          id="shorts_0"
          data-index="0"
          class="layer editable allow-above"
        >
          <template></template>
          <div class="settings-toggle-color-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="settings-color-container">
              <button
                data-v-75f023d4=""
                value="#000000"
                data-value="#000000"
                class="custom-color"
                style="background-color: rgb(0, 0, 0)"
              ></button>
            </div>
          </div>
          <div class="layer-name">
            <div><span>Base</span></div>
          </div>
          <div class="settings-icon-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="add-layer-container">
        <h3 class="add-layer-header"><span>Add layer</span></h3>
        <div class="add-layer-buttons">
          <div class="selector-container">
            <button class="button icon-button button-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                ></path></svg
              ><span>Base design</span>
            </button>
          </div>

          <div class="selector-container">
            <button class="button icon-button button-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                ></path></svg
              ><span>Graphic</span>
            </button>
          </div>

          <div class="selector-container">
            <button class="button icon-button button-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M6 4a2 2 0 11-4 0 2 2 0 014 0zM6 16a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 4a2 2 0 11-4 0 2 2 0 014 0zM18 16a2 2 0 11-4 0 2 2 0 014 0zM8 2h4v4H8V2zM2 8h4v4H2V8zM14 8h4v4h-4V8zM8 14h4v4H8v-4z"
                ></path></svg
              ><span>Pattern</span>
            </button>
          </div>
          <button class="button button-secondary icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M3 5a1 1 0 011-1h8a1 1 0 110 2H9v9a1 1 0 11-2 0V6H4a1 1 0 01-1-1z"
              ></path>
              <path
                d="M11 9a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zM13 10h2v5a1 1 0 11-2 0v-5z"
              ></path></svg
            ><span>Text</span></button
          ><button class="button button-secondary icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944z"
              ></path></svg
            ><span>Custom logo</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="settings-section " v-else-if="showTitle === 'Socks'">
    <div class="settings-section-content">
      <h2 class="settings-section-header">Socks</h2>

      <div class="layer-container">
        <div
          draggable="false"
          id="socks_0"
          data-index="0"
          class="layer editable allow-above"
        >
          <template></template>
          <div class="settings-toggle-color-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="settings-color-container">
              <button
                data-v-75f023d4=""
                value="#000000"
                data-value="#000000"
                class="custom-color"
                style="background-color: rgb(0, 0, 0)"
              ></button>
            </div>
          </div>
          <div class="layer-name">
            <div><span>Base</span></div>
          </div>
          <div class="settings-icon-container">
            <button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button disabled="disabled" class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="add-layer-container">
        <h3 class="add-layer-header"><span>Add layer</span></h3>
        <div class="add-layer-buttons">
          <div class="selector-container">
            <button class="button icon-button button-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                ></path></svg
              ><span>Base design</span>
            </button>
          </div>

          <div class="selector-container">
            <button class="button icon-button button-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                ></path></svg
              ><span>Graphic</span>
            </button>
          </div>
          <div class="selector-container">
            <button class="button icon-button button-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M6 4a2 2 0 11-4 0 2 2 0 014 0zM6 16a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 4a2 2 0 11-4 0 2 2 0 014 0zM18 16a2 2 0 11-4 0 2 2 0 014 0zM8 2h4v4H8V2zM2 8h4v4H2V8zM14 8h4v4h-4V8zM8 14h4v4H8v-4z"
                ></path></svg
              ><span>Pattern</span>
            </button>
          </div>
          <button class="button button-secondary icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M3 5a1 1 0 011-1h8a1 1 0 110 2H9v9a1 1 0 11-2 0V6H4a1 1 0 01-1-1z"
              ></path>
              <path
                d="M11 9a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zM13 10h2v5a1 1 0 11-2 0v-5z"
              ></path></svg
            ><span>Text</span></button
          ><button class="button button-secondary icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944z"
              ></path></svg
            ><span>Custom logo</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="settings-section " v-else-if="showTitle === 'Printing'">
    <div class="settings-section-content">
      <h2 class="settings-section-header">Tools</h2>
      <div class="settings-section-group">
        <h3>
          <a
            href="/faq/"
            target="_blank"
            class="image-link inline-flex align-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              ></path>
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              ></path></svg
            ><span>FAQ</span></a
          >
        </h3>
        <p>Frequently asked questions about the Kit Creator and memberhip</p>
      </div>

      <div class="settings-section-group">
        <h3>
          <a
            href="/tools/edit-teamkits/"
            target="_blank"
            class="image-link inline-flex align-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              ></path>
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              ></path></svg
            ><span>Teamkits Editor</span></a
          >
        </h3>
        <p>Edit 'teamkits' and 'competitionkits' files</p>
      </div>

      <div class="settings-section-group">
        <h3>
          <a
            href="https://www.pesmaster.com/kit-creator/tools/monochrome-logos/"
            target="_blank"
            class="image-link inline-flex align-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              ></path>
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              ></path></svg
            ><span>Monochrome Logos</span></a
          >
        </h3>
        <p>Easily create monochrome logos</p>
      </div>
      <div class="settings-section-group">
        <h3>
          <a
            href="https://blog.fifakitcreator.com/"
            target="_blank"
            class="image-link inline-flex align-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              ></path>
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              ></path></svg
            ><span>Blog</span></a
          >
        </h3>
        <p>Stay up to date with the latest news and updates</p>
      </div>
    </div>
    <div class="settings-section-content">
      <h2 class="settings-section-header">Partner sites</h2>
      <div class="settings-section-group">
        <h3>
          <a
            href="https://www.fifa-infinity.com/"
            target="_blank"
            rel="noopener"
            class="image-link inline-flex align-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              ></path>
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              ></path></svg
            ><span>FIFA Infinity</span></a
          >
        </h3>
        <h3>
          <a
            href="https://www.fifaeditortool.com/"
            target="_blank"
            rel="noopener"
            class="image-link inline-flex align-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              ></path>
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              ></path></svg
            ><span>FIFA Editor Tool</span></a
          >
        </h3>
        <h3>
          <a
            href="https://www.fifermods.com/"
            target="_blank"
            rel="noopener"
            class="image-link inline-flex align-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              ></path>
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              ></path></svg
            ><span>FIFER Mods</span></a
          >
        </h3>
      </div>
    </div>
  </div>
  <div class="settings-section " v-else-if="showTitle === 'Tools'">
    <div class="settings-section-content">
      <h2 class="settings-section-header">Printing</h2>
      <div class="input-container">
        <label tabindex="0" class="toggle-label"
          ><div class="toggle"><div class="toggle-thumb"></div></div>
          <span>Enabled</span></label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showTitle"],
};
</script>
