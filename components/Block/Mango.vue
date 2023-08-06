<template>
  <div class="block" id="mango">
    <div class="slogan">
      <p class="slogan__text">
        FROM
        <img
          src="~assets/common/images/png/icon_button_arrow.png"
          alt="Button Arrow"
          width="198"
          height="58"
        />
        DREAM TO
        <img
          src="~assets/common/images/png/icon_pink_star.png"
          alt="Pink Star"
          width="58"
          height="58"
        />
        REALITY.
      </p>
      <div class="slogan__action">
        <p class="slogan__action__text">Turn your idea into a tangible mango</p>
        <button class="slogan__action__button">CONTACT US</button>
      </div>
    </div>
    <div class="fruit">
      <div class="fruit__bg"></div>
      <img
        class="fruit__image"
        src="~assets/common/images/png/mango.png"
        alt="Mango"
        width="529"
        height="594"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Mango",
};
</script>

<style lang="scss" scoped>
@import "~/assets/common/styles/_mixins";
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .slogan {
    width: 48.4rem;
    height: 38.3rem;
    &__text {
      display: inline-block;
      @include textConfig(8rem, 7.736rem, #1b1d1a, 900);
    }
    &__action {
      margin-top: 3.2rem;
      &__text {
        margin-bottom: 3.2rem;
        @include textConfig(2.4rem, 3.2rem, #5b616e, 400);
      }
      &__button {
        @include textConfig(1.6rem, 2.4rem, #ffffff, 900);
        border: none;
        border-radius: 2.8rem;
        padding: 1.6rem 4.1rem;
        background-image: linear-gradient(90deg, #ec5959, #fab41a);
      }
    }
  }
  .fruit {
    width: 69rem;
    height: 69rem;
    position: relative;
    &__bg {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #7ab1d0, $alpha: 0.2);
      border-radius: 50%;
    }
    &__image {
      position: absolute;
      top: -3.2rem;
      left: 10rem;
      z-index: 10;
      transform: rotate(6deg);
    }
  }
}
</style>
