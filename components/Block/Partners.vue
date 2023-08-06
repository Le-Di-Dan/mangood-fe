<template>
  <div class="block">
    <div class="partners" id="partners">
      <p class="partners__text">Our partners</p>
      <ul class="partners__list">
        <li class="partners__list__item">
          <a href="#" class="partners__list__link">
            <img
              src="~assets/common/images/png/partners/st_holding.png"
              alt="ST holding"
              class="partners__list__logo"
              width="160"
              height="64"
            />
          </a>
        </li>
        <li class="partners__list__item">
          <a href="#" class="partners__list__link">
            <img
              src="~assets/common/images/png/partners/y_cooking.png"
              alt="Y Cooking"
              class="partners__list__logo"
              width="160"
              height="64"
            />
          </a>
        </li>
        <li class="partners__list__item">
          <a href="#" class="partners__list__link">
            <img
              src="~assets/common/images/png/partners/mootoo.png"
              alt="Moo Too"
              class="partners__list__logo"
              width="160"
              height="64"
            />
          </a>
        </li>
        <li class="partners__list__item">
          <a href="#" class="partners__list__link">
            <img
              src="~assets/common/images/png/partners/ginya.png"
              alt="Ginya"
              class="partners__list__logo"
              width="160"
              height="64"
            />
          </a>
        </li>
        <li class="partners__list__item">
          <a href="#" class="partners__list__link">
            <img
              src="~assets/common/images/png/partners/citta.png"
              alt="Citta"
              class="partners__list__logo"
              width="160"
              height="64"
            />
          </a>
        </li>
        <li class="partners__list__item">
          <a href="#" class="partners__list__link">
            <img
              src="~assets/common/images/png/partners/deepcode.png"
              alt="Deepcodes"
              class="partners__list__logo"
              width="160"
              height="64"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/common/styles/_mixins";
.block {
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-top-width: 1px;
  border-bottom-width: 2px;
  border-style: solid;
  border-color: #e1e1e1;
  .partners {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__text {
      @include textConfig(2.4rem, 3.2rem, #1b1d1a, 600);
    }
    &__list {
      display: inline-flex;
      &__item:not(:last-child) {
        margin-right: 2.4rem;
      }
    }
  }
}
</style>
