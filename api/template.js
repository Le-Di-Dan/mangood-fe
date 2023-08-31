const client = `<div
class="container"
style="
  width: 680px;
  padding: 50px 48px;
  margin: 0 auto;
  font-family: Open Sans;
"
>
<img
  src="https://www.mangood.site/images/mail/logo.png"
  alt="mangood logo"
  class="logo"
  style="width: 154px; height: 48px; margin: 0 auto; display: block"
/>
<div
  class="banner"
  style="
    height: 156px;
    margin: 39px 0 32px;
    background-color: #dedff5;
    border-radius: 10px;
    padding: 10px 33px;
    display: grid;
    grid-template-columns: 245px auto;
    gap: 54px;
  "
>
  <div class="banner__left">
    <div class="text">
      <h2
        class="text__welcome"
        style="
          font-size: 48px;
          line-height: 62px;
          color: #000000;
          font-weight: 700;
          margin: 10px 0;
        "
      >
        Welcome
      </h2>
      <p
        class="text__introduction"
        style="
          margin: 0;
          font-size: 12px;
          line-height: 17px;
          font-weight: 500;
        "
      >
        This is an automated message from a MANGOOD representative.
      </p>
    </div>
  </div>
  <div class="banner__right">
    <img
      src="https://www.mangood.site/images/mail/businessman.png"
      alt="businessman"
      class="businessman"
    />
    <img
      src="https://www.mangood.site/images/mail/blonde_bussinesman.png"
      alt="blonde businessman"
      class="businessman--blonde"
    />
  </div>
</div>
<div class="content">
  <h3
    class="content__greeting"
    style="font-size: 24px; line-height: 32px; font-weight: 600"
  >
    Hi {{user}},
  </h3>
  <div
    class="content__message"
    style="
      font-size: 14px;
      line-height: 22px;
      font-weight: 500;
      color: #333333;
    "
  >
    <p class="content__message--1">
      Congratulations, your email has successfully landed in my digital realm!
      🎉
    </p>
    <p class="content__message--2">
      I'm currently busy brewing up some clever responses, but fear not – your
      message won't be left hanging in the void. I promise to get back to you
      faster than a caffeinated squirrel on a mission.
    </p>
    <p class="content__message--3">Stay tuned for some email magic!</p>
  </div>
  <div
    class="content__signature"
    style="font-size: 14px; line-height: 22px; font-weight: 500"
  >
    <p style="margin: 0; color: #333333">Best Regards,</p>
    <p style="margin: 0; color: #ee9420">MANGOOD team.</p>
  </div>
</div>
<div class="footer" style="margin-top: 32px; height: 94px">
  <div
    class="footer__social"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 9px;
      border-bottom: 1px solid #d9d9d9;
      border-top: 1px solid #d9d9d9;
      padding: 16px 0;
    "
  >
    <a
      href="#"
      class="social__button"
      style="
        display: grid;
        width: 32px;
        height: 32px;
        place-items: center;
        background-color: #ee9420;
        border-radius: 50%;
      "
    >
      <img
        src="https://www.mangood.site/images/mail/instagram.png"
        style="width: 13px; height: 13px"
        alt="instagram"
        class="social__button-instagram"
      />
    </a>
    <a
      href="#"
      class="social__button"
      style="
        display: grid;
        width: 32px;
        height: 32px;
        place-items: center;
        background-color: #ee9420;
        border-radius: 50%;
      "
    >
      <img
        src="https://www.mangood.site/images/mail/global.png"
        style="width: 13px; height: 13px"
        alt="global"
        class="social__button-global"
      />
    </a>
  </div>
  <p
    class="footer__rights"
    style="
      margin: 0;
      text-align: center;
      font-size: 10px;
      line-height: 12px;
      font-weight: 400;
      margin-top: 16px;
    "
  >
    © 2023 MANGOOD. All rights reserved.
  </p>
</div>
</div>
`;
const admin = ``;

function render(template, signatures) {
  const keys = Object.keys(signatures);
  let result = template;
  keys.forEach((key) => {
    result = result.replace(key, signatures[key]);
  });
  return result;
}

module.exports = {
  client,
  admin,
  render,
};
