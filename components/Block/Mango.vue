<template>
  <div class="block">
    <div class="slogan">
      <div class="slogan__text">
        <p class="text__1">
          FROM
          <img
            class="icon__arrow"
            src="~assets/common/images/png/icon_button_arrow.png"
            alt="Button Arrow"
          />
        </p>
        <p class="text__2">DREAM TO</p>
        <p class="text__3">
          <img
            class="icon__star"
            src="~assets/common/images/png/icon_pink_star.png"
            alt="Pink Star"
          />
          REALITY.
        </p>
      </div>

      <div class="slogan__action">
        <p class="slogan__action__text">Turn your idea into a tangible mango</p>
        <button class="slogan__action__button d__none--tablet">
          CONTACT US
        </button>
      </div>
    </div>
    <div class="fruit">
      <div class="fruit__bg"></div>
      <img
        class="fruit__image"
        src="~assets/common/images/png/golden_mango.png"
        alt="Mango"
      />
    </div>
    <button class="slogan__action__button d__none--desktop w-full mt-6">
      CONTACT US
    </button>
  </div>
</template>

<script>
export default {
  name: "Mango",
};
</script>

<style lang="scss" scoped>
@import "~/assets/common/styles/_variables";
@import "~/assets/common/styles/_mixins";
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include query($tablet) {
    flex-direction: column;
  }
  .slogan {
    width: 48.4rem;
    height: 38.3rem;
    @include query($tablet) {
      width: 100%;
      height: fit-content;
      margin-bottom: 3.66rem;
    }
    &__text {
      display: inline-block;
      @include textConfig(8rem, 7.736rem, #1b1d1a, 900);
      @include query($tablet) {
        width: 100%;
        @include textConfig(4.8rem, 5.6rem, #1b1d1a, 900);
      }
      .icon__arrow {
        width: 19.8rem;
        height: 5.8rem;
        @include query($tablet) {
          width: 15.7rem;
          height: 4.6rem;
          margin-left: 1.2rem;
        }
      }
      .icon__star {
        width: 5.8rem;
        height: 5.8rem;
        @include query($tablet) {
          width: 5.6rem;
          height: 5.6rem;
          margin-right: 1.2rem;
        }
      }
      .text__1,
      .text__2,
      .text__3 {
        display: inline-flex;
        align-items: center;
        font-stretch: ultra-expanded;
      }
    }
    &__action {
      margin-top: 3.2rem;
      @include query($tablet) {
        margin-top: 0.7rem;
      }
      &__text {
        margin-bottom: 3.2rem;
        @include textConfig(2.4rem, 3.2rem, #5b616e, 400);
        @include query($tablet) {
          @include textConfig(1.8rem, 2.8rem, #5b616e, 400);
          margin-bottom: 2.4rem;
        }
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
    aspect-ratio: 1;
    position: relative;
    @include query($tablet) {
      width: 100%;
    }
    &__bg {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #7ab1d0, $alpha: 0.2);
      border-radius: 50%;
    }
    &__image {
      width: 80%;
      aspect-ratio: 529 / 594;
      position: absolute;
      top: -3.4%;
      left: 8.5%;
      z-index: 10;
      transform: rotate(6deg) scale(1.25);
    }
  }
}
</style>
