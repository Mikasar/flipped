<template>
  <div class="sider">
    <div class="side-icons">
      <div class="side-icon">
        <img :src="side2" />
      </div>
      <div class="side-icon">
        <img :src="side1" />
      </div>
    </div>
    <router-link to="/Dna"
      >{{ $t("sider.dna") }}
      <div class="left">
        <img :src="leftIcon" />
      </div>
      <div class="right">
        <img :src="leftIcon" />
      </div>
    </router-link>
    <router-link to="/Project"
      >{{ $t("sider.project") }}
      <div class="left">
        <img :src="leftIcon" />
      </div>
      <div class="right">
        <img :src="leftIcon" />
      </div>
    </router-link>
    <router-link to="/Contact"
      >{{ $t("sider.contact") }}
      <div class="left">
        <img :src="leftIcon" />
      </div>
      <div class="right">
        <img :src="leftIcon" />
      </div>
    </router-link>
    <div class="ep-lang">
      <div class="lang">
        <img :src="lang" @click="toggleLang" />
      </div>
      <router-link to="/Ep">
        <div class="logo">
          <img :src="ep" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ep: require("@/assets/images/earth-logo.gif"),
      lang: require("@/assets/images/lang.png"),
      side1: require("@/assets/images/side1.png"),
      side2: require("@/assets/images/side2.png"),
      leftIcon: require("@/assets/images/left.png"),
    };
  },
  methods: {
    toggleLang() {
      this.$i18n.locale = this.$i18n.locale === "zh" ? "en" : "zh";
      localStorage.setItem("lang", this.$i18n.locale);
      document.getElementById("app").style.fontFamily =
        localStorage.getItem("lang") === "zh" ? "SYR" : "MAXIL";
    },
  },
};
</script>

<style scoped>
.sider {
  flex: 0 1 30px;
  font-size: 16px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-end;
  margin-left: -20px;
  margin-right: -20px;
}

a {
  transform: rotate(90deg);
  -moz-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  display: block;
  margin: 60px 0;
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=-1);
  text-decoration: none;
  color: #000;
  font-weight: bold;
}

.router-link-active {
  color: #000;
  position: relative;
}

.left,
.right {
  width: 20px;
  height: 16px;
  position: absolute;
  display: none;
  top: 2px;
}

.left {
  left: -24px;
  transform: rotate(180deg);
}

.right {
  right: -24px;
}

.router-link-active .left,
.router-link-active .right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 30px;
  height: 30px;
}

.ep-lang {
  position: relative;
}

.lang {
  position: absolute;
  width: 28px;
  height: 35px;
  top: 10px;
  right: 0;
  cursor: pointer;
}

.side-icons {
  margin-top: 15vh;
}

.side-icon:nth-child(1) {
  transform: scale(3) rotate(180deg);
  margin-left: 10px;
}

.side-icon:nth-child(2) {
  transform: rotate(180deg);
  margin-top: 8vh;
}

img {
  width: 100%;
  height: 100%;
}
</style>
