<template>
  <div id="home">
    <AppThemeSwitcher />
    <section id="hello">
      <div id="avatar">
        <NuxtLink to="otaku" class="avatar-image">
          <NuxtImg
            alt="My cute avatar"
            src="/avatar-cropped.jpg"
            class="avatar-image__img"
          />
        </NuxtLink>
      </div>
      <div id="biography">
        <h1>wing</h1>
        <p>University Student, Unix Enthusiast</p>
        <p>
          <Icon
            class="list-icon"
            name="mingcute:cake-line"
          />
          <span>2006-06-13</span>
        </p>
        <p>
          <Icon
            class="list-icon"
            name="material-symbols:pin-drop-outline-rounded"
          />
          <span>Tokyo, Japan</span>
        </p>
        <p>
          <Icon
            class="list-icon"
            name="mingcute:school-line"
          />
          <span>Keio University SFC (<a href="https://rgroot.sfc.wide.ad.jp">rgroot</a>)</span>
        </p>
      </div>
    </section>
    <section id="contents">
      <h2>Contents</h2>
      <div class="twocols">
        <UiNavLink
          to="/posts"
          title="Posts"
          desc="技術的な知見・近況報告 (不定期更新)"
        />
        <UiNavLink
          to="/projects"
          title="Projects"
          desc="制作したアプリケーション・運用中のサービスなど"
        />
      </div>
    </section>
    <section id="links">
      <h2>Links</h2>
      <div class="multicols">
        <a
          class="social-link"
          href="https://x.com/snmyyz"
        >
          <Icon
            class="social-link-icon"
            name="mdi:twitter"
          />
          <span>@snmyyz</span>
        </a>
        <a
          class="social-link"
          href="https://instagram.com/snmyyz"
        >
          <Icon
            class="social-link-icon"
            name="mdi:instagram"
          />
          <span>@snmyyz</span>
        </a>
        <a
          class="social-link"
          href="https://discord.com/users/snmyyz"
        >
          <Icon
            class="social-link-icon"
            name="mdi:discord"
          />
          <span>@snmyyz</span>
        </a>
        <a
          class="social-link"
          href="https://github.com/kwing0310"
        >
          <Icon
            class="social-link-icon"
            name="mdi:github"
          />
          <span>@kwing0310</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'no-header',
  auth: false,
});
</script>

<style scoped lang="scss">
@keyframes earwiggleleft {
	from { transform: rotate(37.6deg) skew(30deg); }
	25% { transform: rotate(10deg) skew(30deg); }
	50% { transform: rotate(20deg) skew(30deg); }
	75% { transform: rotate(0deg) skew(30deg); }
	to { transform: rotate(37.6deg) skew(30deg); }
}

@keyframes earwiggleright {
	from { transform: rotate(-37.6deg) skew(-30deg); }
	30% { transform: rotate(-10deg) skew(-30deg); }
	55% { transform: rotate(-20deg) skew(-30deg); }
	75% { transform: rotate(0deg) skew(-30deg); }
	to { transform: rotate(-37.6deg) skew(-30deg); }
}

.theme-switcher {
  float: right;
}

section {
  margin-bottom: 1rem;
  overflow: hidden;
}

h2 {
  text-align: center;
}

#hello {
  width: 100%;
  display: flex;
  flex-direction: column;

  #avatar {
    padding-top: 1.5rem;
  }

  .avatar-image {
    display: inline-block;
    width: 8rem;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    position: relative;

    &::before,
    &::after {
		  background: var(--pink);
		  border: solid 0.5rem var(--semidarkgray);
		  box-sizing: border-box;
		  content: '';
		  display: block;
		  height: 40%;
		  width: 40%;
      position: absolute;
      z-index: -1;
    }

    &::before {
		  border-radius: 0 90% 90%;
		  transform: rotate(37.5deg) skew(30deg);
      top: 2%;
      left: 4%;
    }

    &::after {
		  border-radius: 90% 0 90% 90%;
		  transform: rotate(-37.5deg) skew(-30deg);
      top: 2%;
      right: 4%;
    }

    &:hover {
		  &::before {
			  animation: earwiggleleft 1s infinite;
      }

      &::after {
			  animation: earwiggleright 1s infinite;
      }
    }
  }

  .avatar-image__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

#biography {
  p {
    display: flex;
    align-items: center;
    color: var(--gray);

    .list-icon {
      display: inline-block;
      margin-right: 0.25rem;
      font-size: 1.25rem;
    }
  }
}

.social-link {
  display: flex;
  font-size: 1rem;
  justify-content: center;
  line-height: 2;
  align-items: center;
  color: var(--link);

  .social-link-icon {
    margin-right: 0.25rem;
    font-size: 1.25rem;
    color: var(--gray);
  }
}

@media (min-width: 640px) {
  #hello {
    flex-direction: row;
    justify-content: space-between;

    #avatar {
      width: 40%;
      display: flex;
      justify-content: center; 
      align-items: center;
    }

    .avatar-image {
      width: 80%;

      &::before,
      &::after {
        width: 30%;
        height: 30%;
        border-width: 0.6rem;
      }

      &::before {
        top: 4%;
        left: 8%;
      }

      &::after {
        top: 4%;
        right: 8%;
      }
    }

    #biography {
      width: 55%;
    }
  }

  .twocols {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
  }

  .multicols {
    display: flex;
    justify-content: space-around;
  }

  .nav-link {
    width: 47%;
    margin-bottom: 0;
  }
}
</style>
