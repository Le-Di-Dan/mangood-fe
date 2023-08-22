<template>
  <div class="footer">
    <div class="footer__rights">
      <p class="footer__rights__text">Copyright @2023 MANGOOD Inc.</p>
    </div>
    <div class="footer__contacts">
      <div class="footer__contacts__mail">
        <p class="mail">Email: work@mangood.com</p>
      </div>
      <div class="footer__contacts__socials">
        <div class="socials__item">
          <a href="#">
            <img
              src="~assets/common/images/logo/socials/icon_figma.png"
              alt="figma"
              class="social__item__icon"
            />
          </a>
        </div>
        <div class="socials__item">
          <a href="#">
            <img
              src="~assets/common/images/logo/socials/icon_instagram.png"
              alt="instagram"
              class="social__item__icon"
            />
          </a>
        </div>
        <div class="socials__item">
          <a href="#">
            <img
              src="~assets/common/images/logo/socials/icon_threads.png"
              alt="threads"
              class="social__item__icon"
            />
          </a>
        </div>
        <div class="socials__item">
          <a href="#">
            <img
              src="~assets/common/images/logo/socials/icon_tiktok.png"
              alt="tiktok"
              class="social__item__icon"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "~/assets/common/styles/_variables";
@import "~/assets/common/styles/_mixins";
.footer {
  width: 100%;
  height: 8.8rem;
  padding: 0 28rem 0 28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;

  &__rights {
    &__text {
      @include textConfig(1.6rem, 1.92rem, #363636, 400);
    }
  }
  &__contacts {
    width: 45.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__mail {
      .mail {
        @include textConfig(1.6rem, 1.92rem, #363636, 400);
      }
    }
    &__socials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .socials__item {
        width: 4rem;
        height: 4rem;
        border: 1px solid #e5e5e5;
        border-radius: 50%;
        display: grid;
        place-items: center;
        &:not(:last-child) {
          margin-right: 1.6rem;
        }
      }
    }
  }
  @include query($tablet) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 3.2rem 2rem;
    height: fit-content;
    gap: 2rem;
    &__contacts {
      flex-direction: column;
      gap: 2rem;
    }
  }
}
</style>
