<template>
  <footer class="mt-6">
    <nav>
      <div
        class="brand-wrapper px-6 px-xl-0 py-6 d-flex align-items-center justify-content-between flex-wrap"
      >
        <div class="d-flex align-items-center flex-wrap gap-4">
          <SvgoLogo style="width: 185.32px; height: 35.85px" />
          <p class="text-sm mb-0">Design Resource Marketplace</p>
        </div>
        <div>
          <p class="text-sm mb-0">
            <span class="" style="color: #0058e3">5,663,871</span>
            graphic resources & counting
          </p>
        </div>
      </div>

      <div class="container-fluid">
        <div class="nav-wrapper row">
          <div class="nav-column mb-6 mb-md-0 col-sm-6 col-md-3 col-lg-2">
            <p class="fw-bold text-sm mb-3">Graphic Resources</p>
            <ul class="nav-column-list">
              <li v-for="item in resources" :key="item" class="text-sm">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="nav-column mb-6 mb-md-0 col-sm-6 col-md-3 col-lg-2">
            <p class="fw-bold text-sm mb-3">Products</p>
            <ul class="nav-column-list">
              <li v-for="item in products" :key="item" class="text-sm">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="nav-column mb-6 mb-md-0 col-sm-6 col-md-3 col-lg-2">
            <p class="fw-bold text-sm mb-3">Company</p>
            <ul class="nav-column-list">
              <li v-for="item in company" :key="item" class="text-sm">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="nav-column mb-6 mb-md-0 col-sm-6 col-md-3 col-lg-2">
            <p class="fw-bold text-sm mb-3">Legal</p>
            <ul class="nav-column-list">
              <li v-for="item in legal" :key="item" class="text-sm">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="col-12 col-lg-4 mb-6 mb-sm-0 d-flex flex-column gap-6">
            <div>
              <p class="fw-bold text-sm mb-3" style="color: #2e334c">
                Get IconScout for desktop
              </p>
              <div class="desktop">
                <img src="~/assets/img/ios-windows.png" alt="ios and windows" />
              </div>
            </div>

            <div>
              <p class="fw-bold text-sm mb-3" style="color: #2e334c">
                Get LottieFiles mobile app
              </p>
              <div class="stores d-flex align-items-center gap-3">
                <a href="#">
                  <img src="~/assets/img/app-store.png" />
                </a>
                <a href="#">
                  <img src="~/assets/img/play-store.png" />
                </a>
              </div>
            </div>

            <div>
              <p class="fw-bold text-sm mb-3" style="color: #2e334c">
                Follow us
              </p>
              <div class="social-links d-flex align-items-center">
                <a href="#">
                  <SvgoFacebook class="w-5 h-5" />
                </a>
                <a href="#">
                  <SvgoInstagram class="w-5 h-5" />
                </a>
                <a href="#">
                  <SvgoTwitter class="w-5 h-5" />
                </a>
                <a href="#">
                  <SvgoLinkedin class="w-5 h-5" />
                </a>
                <a href="#">
                  <SvgoDribble class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="copyright-wrapper px-6 px-sm-0 py-6">
      <div class="d-flex align-items-center justify-content-between flex-wrap">
        <p class="text-sm">
          © 2021 Design Barn Inc. Made with
          <SvgoLove class="w-4 h-4" />
          in India
        </p>

        <div class="d-flex align-items-center gap-6">
          <SvgoPayments class="h-6" style="width: 125px" />
          <img
            src="~/assets/img/stripe.png"
            alt="Stripe"
            style="width: 84px; height: 40px"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const resources = [
  "Free Icons",
  "Free Emoji Icons",
  "Free Logo Icons",
  "iOS Icons",
  "Sticker Icons",
  "Curated bundle",
  "Calendar of Festival",
  "Free Assets of the Day",
  "Explore Design Assets",
];

const products = [
  "Unicorn Icon Font",
  "Color editor",
  "Apps & Plugins",
  "Hire Designers",
  "Iconscout API",
  "Top Illustrations",
  "Top 3D Assets",
  "Reverse Image Search",
  "Unicon Plugin for Figma",
];

const company = [
  "Blog",
  "About",
  "Access features",
  "Sell on Iconscout",
  "Startup Program",
  "We're hiring",
];

const legal = [
  "Terms of use",
  "Privacy Policy",
  "License agreement",
  "Contributor terms",
  "Support center",
  "Join discord community",
];
</script>

<style lang="scss" scoped>
footer {
  background-color: $grey-1;

  .brand-wrapper {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    /* padding: 24px 0; */
    border-bottom: 1px solid $grey-3;
  }

  .nav-wrapper {
    display: flex;
    width: 100%;
    max-width: 1113px;
    margin: 24px auto;

    .nav-column {
      p:first-child {
        color: $grey-4;
      }

      & .nav-column-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        list-style: none;
        padding: 0;
        margin: 0;
        color: $grey-2;
      }
    }

    .desktop {
      width: 94px;
      height: 40px;
    }

    .stores {
      a {
        height: 40px;

        &:first-child {
          width: 120px;
        }

        &:last-child {
          width: 130px;
        }
      }
    }

    .social-links {
      a {
        height: 40px;
        width: 47px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $grey-3;
        background-color: transparent;

        &:not(:first-child) {
          border-left: none;
        }
      }
    }
  }

  .copyright-wrapper {
    background-color: $grey-3;

    & > div {
      margin: 0 auto;
      width: 100%;
      max-width: 1100px;
    }

    p {
      color: $grey-2;
    }
  }
}
</style>
