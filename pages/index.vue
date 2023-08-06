<template>
  <Fragment>
    <Mango />
    <Partners />
    <Ideas />
    <Innovate />
    <Services />
    <Themes />
    <Team />
    <Contact />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-frag";
import Mango from "~/components/Block/Mango.vue";
import Partners from "~/components/Block/Partners.vue";
import Ideas from "~/components/Block/Ideas.vue";
import Innovate from "~/components/Block/Innovate.vue";
import Services from "~/components/Block/Services.vue";
import Themes from "~/components/Block/Themes.vue";
import Team from "~/components/Block/Team.vue";
import Contact from "~/components/Block/Contact.vue";

export default {
  components: {
    Fragment,
    Mango,
    Partners,
    Ideas,
    Innovate,
    Services,
    Themes,
    Team,
    Contact,
  },
  name: "IndexPage",
};
</script>
