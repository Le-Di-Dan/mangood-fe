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
      <img
        src="~assets/common/images/png/vens_chart.png"
        alt="Chart"
        class="innovate_chart"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/common/styles/_mixins";
.block {
  .innovate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__archives {
      width: 55.2rem;
      .heading {
        @include textConfig(4.8rem, 6.4rem, #1b1d1a, 700);
        margin-bottom: 2.4rem;
      }
      .message {
        @include textConfig(1.8rem, 2.8rem, #8d8d8d, 400);
      }
      .archives__list {
        margin-top: 3.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
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
      }
    }
  }
}
</style>
