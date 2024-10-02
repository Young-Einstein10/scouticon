<template>
  <header class="px-3 px-sm-6 py-3 header">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-2 gap-sm-6">
        <HamburgerBtn />
        <NuxtLink to="/all-assets?search=design">
          <SvgoLogo class="logo" />
        </NuxtLink>
        <SearchBar />

        <nav class="nav d-none d-xl-block">
          <ul class="nav__wrapper">
            <li class="nav__items">
              <NuxtLink to="#"
                >Explore
                <SvgoDown />
              </NuxtLink>
            </li>
            <li class="nav__items">
              <NuxtLink to="#"
                >Tools
                <SvgoDown />
              </NuxtLink>
            </li>
            <li class="nav__items">
              <NuxtLink to="#">All Features</NuxtLink>
            </li>
            <li class="nav__items">
              <NuxtLink to="#">
                <SvgoGift style="width: 1rem; height: 1rem" />
                <span>Free Asset</span>
              </NuxtLink>
            </li>
            <li class="nav__items">
              <NuxtLink to="#"
                >Learn
                <SvgoDown />
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="d-flex align-items-center gap-3">
        <button class="btn btn__login" variant="outline-secondary" pill>
          Login
        </button>
        <button
          class="btn btn__signup d-none d-sm-block"
          variant="primary"
          pill
        >
          Signup
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  height: 70px;
  background-color: $white;
  box-shadow: 0px 6px 16px 0px #00000014;
  position: sticky;
  top: 0;
  z-index: 999;
}

.logo {
  width: 170px;
  height: 32.88px;
}

.btn {
  height: 44px;
  padding: 10px 20px;
  border-radius: 999px;
  font-weight: 600;

  &__login {
    color: $black;
    border: 1px solid #d8dbeb;
  }

  &__signup {
    color: $white;
    background-color: $primary;
  }
}

.nav {
  flex-wrap: nowrap;

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__items {
    flex-shrink: 0;

    a {
      display: flex;
      gap: 6px;
      align-items: center;
      color: $navbar-dark-color;
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;

      svg {
        width: 8px;
        height: 8px;
      }

      &:hover {
        color: $primary-foreground;
      }
    }
  }
}
</style>
