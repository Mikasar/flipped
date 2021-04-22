<template>
    <div class="ep">
        <div class="ep-item desc">
            <p class="pt200">{{ $t('ep.p1') }}</p>
            <p>{{ $t('ep.p2') }}</p>
            <p>{{ $t('ep.p3') }}</p>
            <p>{{ $t('ep.p4') }}</p>
            <p class="mt30">{{ $t('ep.p5') }}</p>
            <p>{{ $t('ep.p6') }}</p>
            <p>{{ $t('ep.p7') }}</p>
            <p class="mt30">{{ $t('ep.p8') }}</p>
        </div>
        <div class="ep-item logo" :style="{ backgroundImage: 'url(' + logo + ')' }">
            <p class="pt40">{{ $t('ep.p9') }}</p>
            <p class="ft44">{{ $t('ep.p10') }}</p>
        </div>
        <div v-for="(detail, index) in details"
            :key="index" class="detail"
            :style="{ backgroundImage: 'url(' + detail + ')' }"
            >
            <div class="detail-background"
            >
                <img :src="detail.img" />
                <div class="detail-content"
                    @mouseenter="toggleShow(index)"
                    @mouseleave="toggleShow(index)"
                >
                    <transition name="fade">
                        <div class="detail-info" v-show="itemNum === index">
                            <div class="tips">
                                <div class="tip" style="background: red"></div>
                                <div class="tip" style="background: yellow"></div>
                                <div class="tip" style="background: lightblue"></div>
                            </div>
                            <div class="detail-item"><span class="title">{{ $t('ep.product-name') }}: </span>{{ detail.name }}</div>
                            <div class="detail-item"><span class="title">{{ $t('ep.feature') }}: </span>{{ detail.feature }}</div>
                            <div v-show="detail.decomposition" class="detail-item"><span class="title">{{ $t('ep.decomposition') }}: </span>{{ detail.decomposition }}</div>
                            <div v-show="detail.decompositionCycle" class="detail-item"><span class="title">{{ $t('ep.decomposition-cycle') }}: </span>{{ detail.decompositionCycle }}</div>
                            <div v-show="detail.recyclability" class="detail-item"><span class="title">{{ $t('ep.recyclability') }}: </span>{{ detail.recyclability }}</div>
                            <div class="detail-item"><span class="title">{{ $t('ep.usage') }}: </span>{{ detail.usage }}</div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <div class="right-side">EXPERIMENT CODE: SUSTAINABLITY QUEST ⓿⓿❶</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      logo: require('../assets/images/logo.png'),
      itemShow: null
    }
  },
  computed: {
    details () {
      return [
        {
          img: require('../assets/images/ep/ep1.png'),
          name: this.$t('ep.name1'),
          feature: this.$t('ep.feature1'),
          decomposition: this.$t('ep.decomposition'),
          recyclability: this.$t('ep.high'),
          usage: this.$t('ep.usage1')
        },
        {
          img: require('../assets/images/ep/ep2.png'),
          name: this.$t('ep.name2'),
          feature: this.$t('ep.feature2'),
          decompositionCycle: this.$t('ep.decompositionCycle2'),
          recyclability: this.$t('ep.high'),
          usage: this.$t('ep.feature2')
        },
        {
          img: require('../assets/images/ep/ep3.png'),
          name: this.$t('ep.name3'),
          feature: this.$t('ep.feature3'),
          usage: this.$t('ep.usage3')
        },
        {
          img: require('../assets/images/ep/ep4.png'),
          name: this.$t('ep.name4'),
          feature: this.$t('ep.feature4'),
          decompositionCycle: this.$t('ep.decompositionCycle4'),
          recyclability: this.$t('ep.high'),
          usage: this.$t('ep.usage4')
        }
      ]
    },
    itemNum () {
      return this.itemShow
    }
  },
  methods: {
    toggleShow (index) {
      // console.log(this.itemShow)
      this.itemShow = this.itemShow === null ? index : null
    }
  }
}
</script>

<style scoped>
.ep {
    background: radial-gradient(circle, #c5d0d3, #fff);
    background: -ms-radial-gradient(circle, #c5d0d3, #fff);
    background: -webkit-linear-gradient(circle, #c5d0d3, #fff);
    background: -moz-linear-gradient(circle, #c5d0d3, #fff);
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.ep::-webkit-scrollbar {
    display: none;
}

.desc {
    font-size: 22px;
}

.pt200 {
  padding-top: 200px;
}

.mt30 {
  margin-top: 30px;
}

.pt40 {
  margin-top: 40px;
  font-size: 18px;
}

.ft44 {
  font-size: 44px;
}

.logo {
    padding: 160px;
    background-size: 512px 288px;
    background-position: center;
    background-repeat: no-repeat;
}

.detail {
    padding: 0;
}

.detail-background {
    width: 100%;
    margin: 0 auto;
    position: relative;
}

.detail-content {
    width: 710px;
    height: 500px;
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 355px);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.detail-info {
    width: 400px;
    height: 200px;
    padding: 10px;
    background: #e6e7e8;
    box-shadow: 5px 5px 5px #888888;
    border-radius: 4px;
    cursor: pointer;
}

.detail-item {
    text-align: start;
    margin-top: 10px;
}

.title {
    font-weight: bold;
}

img {
    width: 100%;
    height: 100%;
}

.tips {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.tip {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin: 0 2px;
}

.right-side {
    position: absolute;
    top: 50%;
    right: -300px;
    display: flex;
    align-items: center;
    transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
    font-size: 28px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
