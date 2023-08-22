<template>
  <div class="block">
    <div class="service" id="services">
      <h2 class="service__heading text-center">Our Services</h2>
      <p class="service__sub__heading text-center">
        As a tight-knit team of experts, we create memorable and emotional
        <br class="d__none--tablet" />
        websites, digital experiences, and native apps.
      </p>
      <div class="service__list">
        <div class="service__card">
          <img
            src="~assets/common/images/png/services/card_1.png"
            alt="Card 1"
            class="image"
          />
          <h3 class="field">UX/UI DESIGN</h3>
          <h2 class="title">App/ Webapp Interface</h2>
          <ul class="descriptions">
            <li class="descriptions__item" data-color="blue">
              User-Centric Approach
            </li>
            <li class="descriptions__item" data-color="blue">
              Simple and Consistent Design
            </li>
            <li class="descriptions__item" data-color="blue">
              Mobile-First and Responsive Design
            </li>
            <li class="descriptions__item" data-color="blue">
              Accessibility and Inclusivity
            </li>
          </ul>
        </div>
        <div class="service__card">
          <img
            src="~assets/common/images/png/services/card_2.png"
            alt="Card 2"
            class="image"
          />
          <h3 class="field">UX/UI DESIGN</h3>
          <h2 class="title">Website Interface</h2>
          <ul class="descriptions">
            <li class="descriptions__item">Clear and Intuitive Navigation</li>
            <li class="descriptions__item">Engaging Visual Design</li>
            <li class="descriptions__item">
              PC, Tablet, Mobile friendly interface
            </li>
            <li class="descriptions__item">Ease growing Design system</li>
          </ul>
        </div>
        <div class="service__card">
          <img
            src="~assets/common/images/png/services/card_3.png"
            alt="Card 3"
            class="image"
          />
          <h3 class="field">UX/UI DESIGN</h3>
          <h2 class="title">Landing Page Interface</h2>
          <ul class="descriptions">
            <li class="descriptions__item" data-color="red">
              Trust and Social Proof
            </li>
            <li class="descriptions__item" data-color="red">
              Minimalist and Focused Design
            </li>
            <li class="descriptions__item" data-color="red">
              SEO friendly landing page
            </li>
            <li class="descriptions__item" data-color="red">
              5 business days designing
            </li>
          </ul>
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
  background-color: #f9f9f9;
  @include query($tablet) {
    background-color: #ffffff;
  }
  .service {
    &__heading {
      @include textConfig(4.8rem, 6.4rem, #1b1d1a, 700);
      margin-bottom: 2.4rem;
      @include query($tablet) {
        text-align: left;
        @include textConfig(3.6rem, 4.8rem, #1b1d1a, 700);
        margin-bottom: 1.6rem;
      }
    }
    &__sub__heading {
      @include textConfig(1.8rem, 2.8rem, #8d8d8d, 400);
      @include query($tablet) {
        text-align: left;
        @include textConfig(1.4rem, 2.4rem, #656565, 400);
      }
    }
    &__list {
      margin-top: 4rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.4rem;
      @include query($tablet) {
        margin-top: 1.6rem;
        grid-template-columns: 100%;
        gap: 1.6rem;
      }
      .service__card {
        padding: 2.55rem 2.4rem;
        border: 0.15rem solid #dbdbdb;
        border-radius: 3.2rem;
        background-color: #ffffff;
        @include query($tablet) {
          padding: 1.6rem;
          border-radius: 2rem;
        }
        .image {
          margin-bottom: 2rem;
          @include query($tablet) {
            margin-bottom: 1.6rem;
            width: 100%;
          }
        }
        .field {
          @include textConfig(1.2rem, 1.6rem, rgba(#121a45, 0.5), 900);
        }
        .title {
          @include textConfig(2.4rem, 3.2rem, #121a45, 700);
          margin-bottom: 1.2rem;
          margin-top: 0.8rem;
          @include query($tablet) {
            @include textConfig(2rem, 2.8rem, #121a45, 700);
            margin-top: 0.4rem;
          }
        }
        .descriptions {
          list-style: none;
          &__item {
            margin-left: 2.4rem;
            padding-left: 0.4rem;
            @include textConfig(1.6rem, 3.2rem, #121a45, 500);
            display: inline-flex;
            position: relative;
            @include query($tablet) {
              @include textConfig(1.4rem, 2.4rem, rgba(#121a45, 0.5), 500);
            }
            &::before {
              content: "";
              background-image: url("~/assets/common/images/png/services/bullet_tick.png");
              background-repeat: no-repeat;
              position: absolute;
              top: 0.4rem;
              left: -2.4rem;
              z-index: 10;
              width: 2rem;
              height: 2rem;
            }
            &[data-color="blue"] {
              &::before {
                background-image: url("~/assets/common/images/png/services/bullet_tick_blue.png");
              }
            }
            &[data-color="red"] {
              &::before {
                background-image: url("~/assets/common/images/png/services/bullet_tick_red.png");
              }
            }
          }
        }
      }
    }
  }
}
</style>
