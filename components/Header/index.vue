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
      <ul class="navbar__list d__none--tablet">
        <li class="navbar__item">
          <a href="#partners" class="navbar__item__link">Partner</a>
        </li>
        <li class="navbar__item">
          <a href="#why-mangood" class="navbar__item__link">Why MANGOOD?</a>
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
    <img
      class="d__none--desktop"
      src="~assets/common/images/png/button_menu.png"
      alt="Menu"
      @click="isShowMenu = true"
    />
    <div
      class="header__navbar--mobile d__none--desktop"
      :class="{ active: isShowMenu }"
    >
      <div class="menu">
        <div class="closer">
          <img
            src="~assets/common/images/png/icon_close.png"
            alt="Icon close"
            width="24"
            height="24"
            @click="isShowMenu = false"
          />
        </div>
        <ul class="menu__list" @click="isShowMenu = false">
          <li class="menu__item">
            <a href="#partners" class="menu__item__link">Partner</a>
          </li>
          <li class="menu__item">
            <a href="#why-mangood" class="menu__item__link">Why MANGOOD?</a>
          </li>
          <li class="menu__item">
            <a href="#services" class="menu__item__link">Services</a>
          </li>
          <li class="menu__item">
            <a href="#themes" class="menu__item__link">Themes</a>
          </li>
          <li class="menu__item">
            <a href="#team" class="menu__item__link">Team</a>
          </li>
          <li class="menu__item">
            <a href="#contact" class="menu__item__link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isShowMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/common/styles/_variables";
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
  @include query($tablet) {
    padding: 0 4.8rem 0 4.8rem;
    height: 5.2rem;
  }
}
.header {
  &__logo {
    width: 42.15rem;
    margin-top: -1.4rem;
    display: flex;
    justify-content: left;
    align-items: flex-start;
    @include query($tablet) {
      margin-top: -0.8rem;
      align-items: center;
    }
    &__icon {
      width: 3.5rem;
      height: 6.3rem;
      @include query($tablet) {
        width: 2.6rem;
        height: 3.6rem;
      }
    }
    &__text {
      margin-left: 1rem;
      padding-top: 2.4rem;
      @include textConfig(2.4rem, 3.2rem, #f7a424, 700);
      @include query($tablet) {
        padding-top: 1.2rem;
      }
    }
  }
  &__navbar {
    width: 74.1rem;
    text-align: right;
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
    &--mobile {
      position: fixed;
      top: 0;
      right: -100vw;
      width: 100vw;
      height: 100vh;
      transition: 0.5s ease-in;
      opacity: 0;
      background-color: rgba($color: #000000, $alpha: 0.4);
      &.active {
        right: 0;
        transition: 0.5s ease-in;
        opacity: 1;
      }
      .menu {
        padding-right: 4.8rem;
        width: 80%;
        background-color: #ffffff;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        .closer {
          width: 100%;
          height: 5.2rem;
          display: flex;
          justify-content: right;
          align-items: center;
        }
        .menu {
          padding: 2rem 0;
          &__list {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: left;
          }
          &__item {
            display: inline-block;
            @include textConfig(1.6rem, 2.4rem, #000000, 400);
            &:not(:last-child) {
              margin-bottom: 4rem;
            }
          }
        }
      }
    }
  }
}
</style>
