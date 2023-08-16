<template>
  <div class="block">
    <div class="contact" id="contact">
      <div class="contact__message">
        <h2 class="heading">Got ideas? We’ve got the skills, Let’s team up.</h2>
        <p class="text">
          Tell us more about yourself and what you’re got in mind.
        </p>
      </div>
      <form class="contact__form" action="#" @submit.prevent>
        <input
          placeholder="Your name"
          v-model="name"
          class="contact__form__name input"
        />
        <input
          placeholder="Email"
          v-model="email"
          class="contact__form__email input"
        />
        <textarea
          maxlength="255"
          placeholder="Tell us little about the project..."
          class="contact__form__password input"
        />
        <button class="contact__form__send pointer" type="submit">SEND</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      content: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/common/styles/_mixins";
.block {
  .contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    &__message {
      .heading {
        @include textConfig(4.8rem, 6.4rem, #1b1d1a, 700);
      }
      .text {
        @include textConfig(1.8rem, 2.8rem, #8d8d8d, 400);
        margin-top: 2.4rem;
      }
    }
    &__form {
      padding-left: 11.5rem;
      .input {
        width: 100%;
        padding: 1.6rem;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid rgba($color: #202225, $alpha: 0.2);
        font-family: "Mona Sans" !important;
        &::placeholder {
          @include textConfig(1.6rem, 2.4rem, #8d8d8d, 400);
          font-family: "Mona Sans" !important;
        }
        &:focus-visible {
          outline: none;
        }
      }
      input {
        height: 5.6rem;
        margin-bottom: 2.4rem;
      }
      textarea {
        height: 12rem;
        resize: none;
      }
      &__send {
        margin-top: 2.4rem;
        background-image: linear-gradient(90deg, #ec5959, #fab41a);
        @include textConfig(1.6rem, 2.4rem, #ffffff, 900);
        padding: 1.6rem 7.4rem;
        border: none;
        border-radius: 90px;
      }
    }
  }
}
</style>
