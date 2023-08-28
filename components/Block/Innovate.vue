<template>
  <div class="block" id="why-mangood">
    <div class="innovate">
      <div class="innovate__archives">
        <h2 class="heading">We Strive to Innovate</h2>
        <p class="message">
          Solid Strategy aligned with business needs and robust data analysis
          are fundamental ingredients to extract actionable insights
        </p>
        <div class="archives__list">
          <div class="archives__item">
            <h3 class="quantity">+50</h3>
            <p class="text">
              We have successfully completed a total of 30+ projects
            </p>
          </div>
          <div class="archives__item">
            <h3 class="quantity">+3</h3>
            <p class="text">Years of experience</p>
          </div>
          <div class="archives__item">
            <h3 class="quantity">+8</h3>
            <p class="text">Quality partners all over the world</p>
          </div>
          <div class="archives__item">
            <h3 class="quantity">+30</h3>
            <p class="text">
              We have participated in and designed more than 30 different fields
            </p>
          </div>
        </div>
      </div>
      <div class="innovate__chart d__none--tablet">
        <div class="innovate__chart-shape circle"></div>
        <div class="innovate__chart-shape hover circle">
          <div class="annotation annotation--p3 annotation--main">
            <span class="annotation__content">Growth</span>
          </div>
          <div class="annotation annotation--p1">
            <span class="annotation__content">Optimization</span>
          </div>
          <div class="annotation annotation--p2 annotation--revert">
            <span class="annotation__content annotation__content--after"
              >Experiments</span
            >
          </div>
          <div class="annotation annotation--p4">
            <span class="annotation__content">A/B Testing</span>
          </div>
        </div>
        <div class="innovate__chart-shape hover circle">
          <div class="annotation annotation--p3 annotation--main">
            <span class="annotation__content">Insights</span>
          </div>
          <div class="annotation annotation--p1">
            <span class="annotation__content">Innovations</span>
          </div>
          <div class="annotation annotation--p2">
            <span class="annotation__content">Insights</span>
          </div>
          <div class="annotation annotation--p4">
            <span class="annotation__content">Visual Design</span>
          </div>
        </div>
        <div class="innovate__chart-shape hover circle">
          <div class="annotation annotation--p1 annotation--main">
            <span class="annotation__content">Product</span>
          </div>
          <div class="annotation annotation--p2">
            <span class="annotation__content">UX Strategy</span>
          </div>
          <div class="annotation annotation--p3">
            <span class="annotation__content">UX Research</span>
          </div>
          <div class="annotation annotation--p4">
            <span class="annotation__content">Data Science</span>
          </div>
        </div>
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
  .innovate {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 13.6rem;
    &__archives {
      width: 55.2rem;
      .heading {
        @include textConfig(4.8rem, 6.4rem, #1b1d1a, 700);
        margin-bottom: 2.4rem;
        font-stretch: ultra-expanded;
        @include query($tablet) {
          @include textConfig(3.6rem, 4.8rem, #1b1d1a, 700);
          margin-bottom: 1rem;
        }
      }
      .message {
        @include textConfig(1.8rem, 2.8rem, #8d8d8d, 400);
        font-stretch: ultra-expanded;
        @include query($tablet) {
          @include textConfig(1.4rem, 2.4rem, #656565, 400);
        }
      }
      .archives__list {
        margin-top: 3.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
        @include query($tablet) {
          margin-top: 2.4rem;
          align-items: stretch;
          justify-items: stretch;
          gap: 2rem;
        }
      }
      .archives__item {
        aspect-ratio: 27/22;
        border-radius: 4rem;
        background-color: #f2f2f2;
        padding: 3.2rem;
        .quantity {
          @include textConfig(4.8rem, 6.4rem, #1b1d1a, 600);
        }
        .text {
          @include textConfig(1.6rem, 2.4rem, #8d8d8d, 500);
        }
        @include query($tablet) {
          padding: 2rem;
          border-radius: 2rem;
          .quantity {
            @include textConfig(3.6rem, 4.8rem, #1b1d1a, 600);
            margin-bottom: 1.2rem;
          }
          .text {
            @include textConfig(1.4rem, 2.4rem, #8d8d8d, 500);
          }
        }
      }
    }
    &__chart {
      width: 67.2rem;
      aspect-ratio: 1;
      position: relative;
      transform: rotateZ(45deg);
      &-shape {
        aspect-ratio: 1;
        position: absolute;
        left: 50%;
        border: 1px solid rgba(#929292, 0);
        transition: 0.5s linear;
        &:nth-child(1) {
          top: 0;
          width: 67.2rem;
          background-color: #f4f4f4;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 2rem;
          width: 57.5rem;
          background-color: #eeeeee;
          transform: translateX(-50%);
        }
        &:nth-child(3) {
          top: 4rem;
          width: 46rem;
          background-color: #e1e1e1;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 6rem;
          width: 28.6rem;
          background-color: #f4f4f4;
          transform: translateX(-50%);
        }
        &.hover {
          &:hover {
            border: 1px solid #929292;
            transition: 0.5s linear;
            .annotation {
              opacity: 1 !important;
              transition: 0.5s linear;
            }
          }
        }
        .annotation {
          display: inline-block;
          min-width: 12.5rem;
          position: absolute;
          transform-origin: 2% center;
          @include textConfig(1.4rem, 2.4rem, #1b1d1a, 600);
          &__content {
            display: inline-flex;
            align-items: center;
            &::before {
              display: inline-block;
              content: "";
              width: 0.6rem;
              aspect-ratio: 1;
              border-radius: 50%;
              background-color: #1b1d1a;
              margin-right: 1.6rem;
            }
            &--after {
              &::before {
                display: none;
              }
              &::after {
                display: inline-block;
                content: "";
                width: 0.6rem;
                aspect-ratio: 1;
                border-radius: 50%;
                background-color: #1b1d1a;
                margin-left: 1.6rem;
              }
            }
          }
          &:first-child {
            .annotation {
              &__content {
                &::before {
                  content: "";
                  width: 1.4rem;
                  background-color: #feaf00;
                  box-shadow: 0 0 0 0.4rem rgba($color: #d4d4d4, $alpha: 0.5);
                }
              }
            }
          }
          &--p1 {
            top: 0;
            left: 50%;
            transform: translateY(-50%) rotateZ(-45deg);
          }
          &--p2 {
            top: 50%;
            left: 0;
            transform: translateX(-0.3rem) rotateZ(-45deg);
            &:has(.annotation__content--after) {
              top: 50%;
              left: -17.75%;
            }
          }
          &--p3 {
            top: 100%;
            left: 50%;
            transform: translateY(-50%) rotateZ(-45deg);
          }
          &--p4 {
            top: 50%;
            left: 100%;
            transform: translateX(-0.3rem) rotateZ(-45deg);
          }
          &--main {
            transform-origin: 6% center;
          }
          &--revert {
            transform-origin: 85% center;
          }
          &:not(:first-child) {
            opacity: 0;
            transition: 0.5s linear;
          }
        }
      }
    }
  }
}
</style>
