<template>
  <div class="block">
    <div class="team" id="team">
      <h2 class="team__heading">Our Team</h2>
      <div class="team__members">
        <div class="team__members__item">
          <img
            class="member__image"
            src="~assets/common/images/png/team/mem_1.png"
            alt=""
          />
          <h3 class="member__name text-center">Dee8</h3>
          <h4 class="member__position text-center">
            UX/UI DESIGNER
            <span class="d__none--tablet">&bull;</span>
            <br class="d__none--desktop" />
            co-founder
          </h4>
        </div>
        <div class="team__members__item">
          <img
            class="member__image"
            src="~assets/common/images/png/team/mem_2.png"
            alt=""
          />
          <h3 class="member__name text-center">Nyan</h3>
          <h4 class="member__position text-center">
            UX/UI DESIGNER
            <span class="d__none--tablet">&bull;</span>
            <br class="d__none--desktop" />
            co-founder
          </h4>
        </div>
        <div class="team__members__item">
          <img
            class="member__image"
            src="~assets/common/images/png/team/mem_3.png"
            alt=""
          />
          <h3 class="member__name text-center">Tom</h3>
          <h4 class="member__position text-center">
            UX/UI DESIGNER
            <span class="d__none--tablet">&bull;</span>
            <br class="d__none--desktop" />
            co-founder
          </h4>
        </div>
        <div class="team__members__item">
          <img
            class="member__image"
            src="~assets/common/images/png/team/mem_4.png"
            alt=""
          />
          <h3 class="member__name text-center">Kuany</h3>
          <h4 class="member__position text-center">
            Front-end Dev <span class="d__none--tablet">elopers</span>
          </h4>
        </div>
        <div class="team__members__item">
          <img
            class="member__image"
            src="~assets/common/images/png/team/mem_5.png"
            alt=""
          />
          <h3 class="member__name text-center">Woaky</h3>
          <h4 class="member__position text-center">
            BACK-end Dev<span class="d__none--tablet">eloper></span>
          </h4>
        </div>
        <div class="team__members__item">
          <img
            class="member__image"
            src="~assets/common/images/png/team/mem_6.png"
            alt=""
          />
          <h3 class="member__name text-center">Tammy</h3>
          <h4 class="member__position text-center">business analyst</h4>
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
  .team {
    &__heading {
      @include textConfig(4.8rem, 6.4rem, #1b1d1a, 700);
      margin-bottom: 4rem;
      @include query($tablet) {
        @include textConfig(3.6rem, 4.8rem, #1b1d1a, 700);
        margin-bottom: 1.6rem;
      }
    }
    &__members {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem 2.4rem;
      &__item {
        padding: 2.4rem;
        border: 0.15rem solid #dbdbdb;
        border-radius: 3.2rem;
        .member__image {
          margin-bottom: 2.1rem;
        }
        .member__name {
          margin-bottom: 0.5rem;
          @include textConfig(2.2rem, 3.5rem, #1b1d1a, 700);
        }
        .member__position {
          @include textConfig(1.2rem, 1.6rem, rgba(#1b1d1a, 0.5), 900);
          text-transform: uppercase;
          @include query($tablet) {
            @include textConfig(1.2rem, 1.6rem, rgba(#1b1d1a, 0.5), 700);
            letter-spacing: 0.2rem;
          }
        }
      }
      @include query($tablet) {
        grid-template-columns: repeat(3, 19rem);
        gap: 1.6rem;
        overflow-x: scroll;
        &__item {
          padding: 1.05rem;
          border-radius: 1.3rem;
          .member {
            &__image {
              width: 100%;
              margin-bottom: 1.05rem;
            }
            &__name {
              @include textConfig(1.8rem, 2.8rem, #1b1d1a, 700);
              margin-bottom: 0.4rem;
            }
          }
        }
      }
    }
  }
}
</style>
