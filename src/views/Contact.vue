<template>
    <div class="contact">
        <div class="logo">
            <img :src="logo" />
        </div>
        <!--
        <div class="codes">
            <div v-for="(code, index) in codes" :key="code.title" class="code">
                <p v-if="index !==1" @click="linkTo(index)" style="cursor: pointer;">{{ code.title }}</p>
                <el-popover v-else placement="top-start" trigger="click">
                  <el-image :src="code.img"></el-image>
                  <p slot="reference" style="cursor: pointer;">{{ code.title }}</p>
                </el-popover>
                <div class="code-img" @click="linkTo(index)">
                    <img :src="code.img" />
                </div>
            </div>
        </div>
        -->
        <div class="logos">
          <div class="logoItem" v-for="(logo, index) in logos" :key="index">
            <img v-if="index !==1" :src="logo.icon" @click="linkTo(index)" />
            <el-popover v-else placement="top-start" trigger="click">
              <el-image :src="logo.img"></el-image>
              <img slot="reference" :src="logo.icon" />
            </el-popover>
          </div>
      </div>
      <div class="sh" style="width: 300px; position: absolute;left: calc(50% - 135px); bottom: 10vh;text-align: center;">{{ $t('contact.shanghai') }}</div>
      <div class="email">
        <div v-for="contact in contacts" :key="contact.title" class="contact-item">
            <div class="contact-img">
              <img :src="contact.img" />
            </div>
          <a href="mailto: info@flipplaboratory.com" target="view_window" style="color: #333333; text-decoration: none">{{ contact.title }}</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      logo: require('../assets/images/logo.png'),
      contacts: [
        { title: ': info@flippedlaboratory.com', img: require('../assets/images/email.png') }
      ]
    }
  },
  computed: {
    logos () {
      return [
        {
          icon: require('../assets/images/icon/xinlang.png'),
          link: 'https://weibo.com/7374152124/manage'
        },
        {
          icon: require('../assets/images/icon/weixin.png'),
          link: '',
          img: require('../assets/images/code.jpg')
        },
        {
          icon: require('../assets/images/icon/ins.png'),
          link: 'https://www.instagram.com/theflippedlab/'
        },
        {
          icon: require('../assets/images/icon/taobao.png'),
          link: 'https://shop229614175.taobao.com/shop/view_shop.htm?spm=a230r.1.14.20.f9903bdecSbpc8&user_number_id=2209248368857'
        },
        {
          icon: require('../assets/images/icon/xiaohongshuicon.png'),
          link: 'https://www.xiaohongshu.com/user/profile/5c9c31860000000010000a6b'
        }
      ]
    }
  },
  methods: {
    linkTo (index) {
      // console.log(index)
      if (this.logos[index].link) {
        window.open(this.logos[index].link)
      }
    }
  }
}
</script>

<style scoped>
.contact {
    height: 100vh;
}

.logo {
    margin: 0 auto;
    margin-top: 30vh;
    width: 384px;
    height: 216px;
}

img {
    width: 100%;
    height: 100%;;
}

.sh {
  width: 300px;
  position: absolute;
  left: calc(50% - 135px); 
  bottom: 10vh;
  text-align: center;
}

.email {
    width: calc(100% - 30px);
    position: absolute;
    bottom: 5vh;
    left: 30px;
}

.codes {
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.code {
    margin: 0 40px;
}

.code-img {
    width: 100px;
    height: 100px;
    cursor: pointer;
}

.contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-img {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logos {
  width: 50%;
  padding: 100px 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 10vh;
}

.logoItem {
  width: 64px;
  height: 64px;
  cursor: pointer;
  transform: scale(0.8);
}

</style>
