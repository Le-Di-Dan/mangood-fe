<template>
  <div class="block">
    <div class="ideas">
      <button class="ideas__message__button d__none--desktop w-full mt-6">
        <a href="#contact" style="font: inherit; color: inherit">Contact us</a>
      </button>
      <img
        src="~assets/common/images/png/team_metaverse.png"
        alt="Team metaverse"
        class="ideas__image"
      />
      <div class="ideas__message">
        <h2 class="ideas__message__heading">
          Got ideas? <br class="d__none--desktop" />
          Let’s ideas up.
        </h2>
        <ul class="ideas__ideas__list">
          <li class="ideas__ideas__item">
            <span
              >Tired of dull designs? Say no more! At MANGOOD, we sprinkle a
              little magic on your ideas and turn them into eye-catching
              realities.</span
            >
          </li>
          <li class="ideas__ideas__item">
            With a pinch of creativity and a dash of innovation, we craft
            interfaces that make hearts skip a beat.
          </li>
          <li class="ideas__ideas__item">
            Let's break the mold and create something extraordinary together.
            Buckle up for a wild ride of design awesomeness!
          </li>
        </ul>
        <button class="ideas__message__button d__none--tablet">
          <a href="#contact" style="font: inherit; color: inherit"
            >Contact us</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/common/styles/_variables";
@import "~/assets/common/styles/_mixins";
.block {
  background-color: #f9f9f9;
  @include query($tablet) {
    background-color: #ffffff;
  }
  .ideas {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include query($tablet) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    &__message {
      width: 66rem;
      @include query($tablet) {
        width: 100%;
      }
      &__heading {
        @include textConfig(4.8rem, 6.4rem, #1b1d1a, 700);
        @include query($tablet) {
          @include textConfig(3.6rem, 4.8rem, #1b1d1a, 700);
        }
      }
      &__button {
        @include textConfig(1.6rem, 2.4rem, #f7a424, 500);
        background-color: #ffffff;
        border: 0.15rem solid currentColor;
        padding: 1.6rem 5.65rem;
        border-radius: 2.8rem;
      }
    }
    &__ideas {
      &__list {
        margin-top: 2.4rem;
        margin-bottom: 3.2rem;
        list-style: disc;
        list-style-position: outside;
        margin-left: 1.6rem;
        @include textConfig(1.6rem, 2.8rem, #656565, 400);
        font-stretch: ultra-expanded;
        @include query($tablet) {
          margin-top: 1.6rem;
          margin-bottom: 2.4rem;
          font-stretch: normal;
        }
      }
    }
    &__image {
      @include query($tablet) {
        width: 33.5rem;
        aspect-ratio: 1;
      }
    }
  }
}
</style>
