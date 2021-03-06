/* eslint-disable */
export function swiperAnimateCache(a) {
  let j;
  let i;
  let allBoxes;
  for (j = 0; j < a.slides.length; j++)
    for (allBoxes = a.slides[j].querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("swiper-animate-style-cache", " "),
      allBoxes[i].style.visibility = "hidden"
}

export function swiperAnimate(a) {
  clearSwiperAnimate(a);
  let i;
  let effect;
  let style;
  let duration;
  let delay;
  var b = a.slides[a.activeIndex].querySelectorAll(".ani");
  for (i = 0; i < b.length; i++) b[i].style.visibility = "visible",
    effect = b[i].attributes["swiper-animate-effect"] ? b[i].attributes["swiper-animate-effect"].value : "",
    b[i].className = b[i].className + "  " + effect + " " + "animated",
    style = b[i].attributes["style"].value,
    duration = b[i].attributes["swiper-animate-duration"] ? b[i].attributes["swiper-animate-duration"].value : "",
    duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";"),
    delay = b[i].attributes["swiper-animate-delay"] ? b[i].attributes["swiper-animate-delay"].value : "",
    delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";"),
    b[i].setAttribute("style", style)
}

export function clearSwiperAnimate(a) {
  let j;
  let i;
  let allBoxes;
  let effect;
  for (j = 0; j < a.slides.length; j++)
    for (allBoxes = a.slides[j].querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["swiper-animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value),
      allBoxes[i].style.visibility = "hidden",
      allBoxes[i].className = allBoxes[i].className.replace("animated", " "),
      allBoxes[i].attributes["swiper-animate-effect"] && (effect = allBoxes[i].attributes["swiper-animate-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, " "))
}

// 样式生成函数
global.aniCreator = (type="fadeIn", duration=0.5, delay=0.3) => ({
  "className": "ani",
  "swiper-animate-effect": type,
  "swiper-animate-duration": duration,
  "swiper-animate-delay": delay
})