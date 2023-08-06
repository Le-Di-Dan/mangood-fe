<template>
  <div class="header">
    <div class="header__logo">
      <img
        src="~assets/common/images/logo/mangood_logo.png"
        alt="mangood_logo"
        class="header__logo__icon"
      />
      <p class="header__logo__text">MANGOOD</p>
    </div>
    <div class="header__navbar">
      <ul class="navbar__list">
        <li class="navbar__item">
          <a href="#partners" class="navbar__item__link">Partner</a>
        </li>
        <li class="navbar__item">
          <a href="#mango" class="navbar__item__link">Why MANGOOD?</a>
        </li>
        <li class="navbar__item">
          <a href="#services" class="navbar__item__link">Services</a>
        </li>
        <li class="navbar__item">
          <a href="#themes" class="navbar__item__link">Themes</a>
        </li>
        <li class="navbar__item">
          <a href="#team" class="navbar__item__link">Team</a>
        </li>
        <li class="navbar__item">
          <a href="#contact" class="navbar__item__link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "~/assets/common/styles/_mixins";
.header {
  width: 100%;
  height: 8.8rem;
  padding: 0 28rem 0 28rem;
  border-bottom: 0.1rem solid rgba($color: #bababa, $alpha: 0.3);
  background-color: rgba($color: #ffffff, $alpha: 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.header {
  &__logo {
    width: 42.15rem;
    padding-top: 0.8rem;
    display: flex;
    justify-content: left;
    align-items: flex-start;
    &__icon {
      width: 3.5rem;
      height: 6.3rem;
    }
    &__text {
      margin-left: 1rem;
      padding-top: 2.4rem;
      @include textConfig(2.4rem, 3.2rem, #f7a424, 700);
    }
  }
  &__navbar {
    width: 74.1rem;
    .navbar__list {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navbar__item {
      display: inline-block;
      &__link {
        @include textConfig(1.6rem, 2.4rem, #000000, 400);
      }
    }
  }
}
</style>
