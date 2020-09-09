let log = console.log;

function createJPNLoadngSVG() {
  // function: create a jpn loading svg
  let content = `<?xml version="1.0" encoding="utf-8"?>
  <!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 116 412" style="enable-background:new 0 0 116 412;" xml:space="preserve">
  <g>
      <g>
          <path style="fill:#141414;" d="M46.9,106.5c0-3.5-1-8.9-2-13.4c-1-5-2.5-13.9-4-23.3c-8.4,1.5-15.9,3-19.8,4c-3.5,1-7.9,2-11.9,3
              L5.8,56.5c4.5-0.5,8.9-1,12.4-1.5s10.9-2,19.8-3.5c-2-10.9-3.5-20.8-4.5-25.8c-1-5.5-2-9.4-2.5-12.4l18.3-4c0,3.5,1,8.9,1.5,12.9
              c1,5,2.5,14.9,4,25.8l15.9-3c-1.5-9.4-3-17.8-3.5-21.3c-1-4-1.5-7.4-2.5-11.4l19.3-4c0,4,0.5,7.9,1,11.4s1.5,11.9,3,21.8l9.4-2
              c3.5-1,6.4-1.5,9.4-2.5l3,19.8c-2.5,0.5-6.4,0.5-9.4,1.5c-2,0-5.5,1-9.9,2c1.5,8.9,3,16.8,3.5,20.3c0.5,4,2,8.9,3,12.4l-18.3,3.5
              c0-3-1-8.4-1.5-11.9l-3.5-20.8l-15.9,3c1.5,9.4,3,18.3,4,23.3c1,4.5,2,9.4,3,12.9L46.9,106.5z"/>
      </g>
      <g>
          <path style="fill:#141414;" d="M66.7,134.8l-6.4-18.3c7.4-2.5,26.3-9.9,33.2-13.9l6.4,17.8C92,124.8,74.6,132.3,66.7,134.8z
               M96.9,207.1c-3.5-1.5-7.4-2.5-10.4-3.5c-11.4-3-31.2-9.9-43.6-19.3c-16.4-12.4-27.7-29.2-34.7-45.6l15.9-15.9
              c4.5,15.4,14.4,34.2,29.7,46.1c11.9,9.4,33.7,15.9,49.1,17.3L96.9,207.1z M75.6,166l-6.4-17.8c7.9-2.5,24.3-8.9,31.7-12.4
              l5.9,17.8C101.4,156.6,83.6,163.5,75.6,166z"/>
      </g>
      <g>
          <path style="fill:#141414;" d="M105.4,238.3c-3,0-5-0.5-9.4-0.5H56.3c-3,0-7.9,0.5-10.9,0.5v-20.8c2.5,0,7.4,0.5,10.9,0.5h39.1
              c2,0,6.4,0,9.4-0.5L105.4,238.3z M106.4,291.8c-3.5,0-7.4-0.5-12.4-0.5H68.7c-23.3,0-35.2-5.5-44.1-14.4
              c-7.9-7.9-13.9-19.8-16.8-28.2l15.4-14.9c2.5,11.9,6.9,21.8,14.4,28.7c8.4,7.9,16.4,9.4,32.7,9.4h24.3c5,0,8.9-0.5,12.4-1
              L106.4,291.8z"/>
      </g>
      <g>
          <path style="fill:#141414;" d="M35,392.4c0,4.5,0.5,8.4,1,11.9H15.2c0.5-3.5,0.5-8.9,0.5-11.9v-76.8c0-4-0.5-8.4-0.5-12.4H36
              c-0.5,4-1,8.4-1,12.4v25.8h23.8c4.5,0,9.9,0,15.9-1v21.3c-5.5-0.5-11.4-1-15.9-1H35V392.4z M81.6,324c0-5-0.5-14.4-0.5-14.4h18.8
              c-0.5,4-1,9.4-1,12.9V383c0,4,0.5,7.4,1.5,10.4l-7.9,11.4c-2-1.5-3.5-2.5-5.5-3.5c-9.4-4-24.8-14.4-32.7-22.8l9.9-15.4
              c5.9,6.9,11.9,11.4,16.8,14.4L81.6,324z"/>
      </g>
  </g>
  </svg>
  `;

  let cart_loading = document.getElementById("jpn-loading");
  cart_loading.innerHTML = content;
}

function handleAnimationCartLoading() {
  // function: handle animation of cart loading
  let jpn_loading = document.getElementById("jpn-loading");
  let jpn_wrapper = document.getElementById("jpn-wrapper");
  let cart_loading = document.getElementById("cart-loading");
  // jpn load in
  jpn_loading.classList.add("jpn-animation");
  // jpn load  out
  setTimeout(() => {
    jpn_wrapper.classList.add("jpn-wrapper-animation");
  }, 900);
  // then cart  loader out
  setTimeout(() => {
    cart_loading.classList.add("cart-loading-out");
  }, 1200);
}

function handleSelectColor() {
  // function: handle select color
  const select_color = document.getElementsByClassName("select-color")[0];
  const color_i_wrapper = document.getElementsByClassName("color-i-wrapper")[0];

  select_color.addEventListener("click", (e) => {
    color_i_wrapper.classList.toggle("d-flex");
  });
}

function handleSelectSize() {
  // function: handle select size
  const select_size = document.getElementsByClassName("select-size")[0];
  const size_i_wrapper = document.getElementsByClassName("size-i-wrapper")[0];

  select_size.addEventListener("click", (e) => {
    size_i_wrapper.classList.toggle("d-flex");
  });
}

function cartLoading() {
  // create a JPN loading SVG
  createJPNLoadngSVG();

  // handle animation of it
  handleAnimationCartLoading();

  // handle select color
  handleSelectColor();

  // handle select size
  handleSelectSize();
}

cartLoading();
