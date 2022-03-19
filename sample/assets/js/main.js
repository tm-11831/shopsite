$(() => {
  const checkScrollSlideUp = (scrollBottom) => {
    const scrollSlideUp = $('._scrollSlideUp')

    scrollSlideUp.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideUp')
      } else {
        $(element).removeClass('_isActiveSlideUp')
      }
    })
  }

  const checkScrollSlideDown = (scrollBottom) => {
    const scrollSlideDown = $('._scrollSlideDown')

    scrollSlideDown.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideDown')
      } else {
        $(element).removeClass('_isActiveSlideDown')
      }
    })
  }

  const checkScrollFadeIn = (scrollBottom) => {
    const scrollFadeIn = $('._scrollFadeIn')

    scrollFadeIn.each((index, element) => {
      const isActive =
        $(element).offset().top < scrollBottom /* true or false */

      if (isActive) {
        $(element).addClass('_isActiveFadeIn')
      } else {
        $(element).removeClass('_isActiveFadeIn')
      }
    })
  }

  $(window).scroll(() => {
    const scrollTop = $(this).scrollTop() /* どれだけスクロールしたか？ */
    const windowHeight = $(this).height() /* 画面の高さ */
    const scrollBottom = scrollTop + windowHeight

    checkScrollSlideUp(scrollBottom)
    checkScrollSlideDown(scrollBottom)
    checkScrollFadeIn(scrollBottom)
  })
})
