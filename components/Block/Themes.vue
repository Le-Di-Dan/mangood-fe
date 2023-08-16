<template>
  <div class="block">
    <div class="themes" id="themes">
      <div class="themes__text">
        <h2 class="heading">Our Themes</h2>
        <p class="message">
          Our user-centered design encourages productivity and <br />
          boosts revenue.
        </p>
      </div>
      <div class="themes__check pointer">
        <span class="text">Check Full Themes</span>
        <img
          class="icon"
          src="~assets/common/images/png/arrow-right.png"
          alt="Arrow right"
        />
      </div>
      <div class="themes__preview">
        <div class="themes__preview__item">
          <img
            class="theme__image"
            src="~assets/common/images/png/themes/theme_1.png"
            alt="Theme 1"
          />
          <div class="theme__detail">
            <div class="brief">
              <p class="brief__field text-center">Web Application</p>
              <p class="brief__level text-center">Full-cycle</p>
            </div>
            <div class="info">
              <h3 class="info__title">
                Design of the Note Taking Interactive GUI for Docket Note
              </h3>
              <p class="info__text">Jul 17,2023 &bull;Ful-cycle</p>
            </div>
            <div class="action">
              <a href="#" class="action__link">
                <img
                  src="~assets/common/images/png/icon_navigate.png"
                  alt="Icon arrow up right"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="themes__preview__item">
          <img
            class="theme__image"
            src="~assets/common/images/png/themes/theme_2.png"
            alt="Theme 1"
          />
          <div class="theme__detail">
            <div class="brief">
              <p class="brief__field text-center">Web Application</p>
              <p class="brief__level text-center">Full-cycle</p>
            </div>
            <div class="info">
              <h3 class="info__title">Design of the Note Taking</h3>
              <p class="info__text">Jul 17,2023 &bull;Ful-cycle</p>
            </div>
            <div class="action">
              <a href="#" class="action__link">
                <img
                  src="~assets/common/images/png/icon_navigate.png"
                  alt="Icon arrow up right"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="themes__preview__item">
          <img
            class="theme__image"
            src="~assets/common/images/png/themes/theme_3.png"
            alt="Theme 1"
          />
          <div class="theme__detail">
            <div class="brief">
              <p class="brief__field text-center">Web Application</p>
              <p class="brief__level text-center">Full-cycle</p>
            </div>
            <div class="info">
              <h3 class="info__title">
                Design of the Note Taking Interactive GUI for Docket Note
              </h3>
              <p class="info__text">Jul 17,2023 &bull;Ful-cycle</p>
            </div>
            <div class="action">
              <a href="#" class="action__link">
                <img
                  src="~assets/common/images/png/icon_navigate.png"
                  alt="Icon arrow up right"
                />
              </a>
            </div>
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
@import "~/assets/common/styles/_mixins";
.block {
  .themes {
    &__text {
      width: 55.2rem;
      .heading {
        margin-bottom: 2.4rem;
        @include textConfig(4.8rem, 6.4rem, #1b1d1a, 700);
      }
      .message {
        @include textConfig(1.8rem, 2.8rem, #8d8d8d, 400);
      }
    }
    &__check {
      border: 0.15rem solid #dbdbdb;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.6rem 2rem;
      border-radius: 9rem;
      margin-top: 3.2rem;
      @include textConfig(1.6rem, 2.4rem, #1b1d1a, 400);
      .icon {
        margin-left: 2rem;
      }
      margin-bottom: 2.4rem;
    }
    &__preview {
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      gap: 2.4rem;
      &__item {
        width: fit-content;
        position: relative;
        .theme__detail {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #ffffff;
          margin-bottom: 2.4rem;
          margin-right: 2.4rem;
          margin-left: 2.4rem;
          border-radius: 24px;
          padding: 1.6rem;
          box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.6rem;
          .brief {
            width: 12rem;
            &__field {
              @include textConfig(1.2rem, 1.6rem, #ffffff, 5000);
              background-color: #f79b07;
              padding: 0.4rem 0.8rem;
              margin-bottom: 0.5rem;
              border-radius: 0.8rem;
            }
            &__level {
              @include textConfig(1.2rem, 1.6rem, #ffffff, 5000);
              background-color: #333333;
              padding: 0.4rem 0.8rem;
              border-radius: 0.8rem;
            }
          }
          .info {
            width: calc(100% - 20.4rem);
            &__title {
              @include textConfig(1.6rem, 2.4rem, #1b1d1a, 700);
            }
            &__text {
              @include textConfig(1.4rem, 1.6rem, #8d8d8d, 400);
            }
          }
          .action {
            width: 5.2rem;
            height: 5.2rem;
            background-color: #f2f2f2;
            border-radius: 50%;
            overflow: hidden;
            &__link {
              display: grid;
              width: 100%;
              height: 100%;
              place-items: center;
            }
          }
        }
      }
    }
  }
}
</style>
