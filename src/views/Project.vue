<template>
    <div class="project">
        <div class="left">
            <p class="title-active">❶: “Byeeeeee, male gaze.”</p>
            <p class="title-middle" :class="currentIndex < 6 ? '' : 'actived' ">{{ currentIndex &lt; 6 ? '『 ' : '' }}STANDARDIZATION{{ currentIndex &lt; 6 ? ' 』' : '' }}</p>
            <p class="title-desc" :class="currentIndex >= 6 && currentIndex &lt; 8 ? '' : 'actived' ">{{ currentIndex >= 6 && currentIndex &lt; 8 ? '『 ' : '' }}“REBEL, REBEL”{{ currentIndex >= 6 && currentIndex &lt; 8 ? ' 』' : '' }}</p>
            <p class="title-desc" :class="currentIndex >= 8 ? '' : 'actived' ">{{ currentIndex >=8  ? '『 ' : '' }}BEYOND COMPARE{{ currentIndex >= 8 ? ' 』' : '' }}</p>
        </div>
        <div class="right">
            <el-carousel style="height: 100vh" arrow="never" @change="handleChange">
              <el-carousel-item v-for="(item, index) in items" :key="index" class="swiper-item">
                <el-image :src="item.img" fit="fill" />
              </el-carousel-item>
            </el-carousel>
            <!--
            <swiper :options="swiperOptions">
              <swiper-slide v-for="(item, index) in items" :key="index" class="swiper-item">
                <el-image :src="item.img" fit="fill" />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            -->
        </div>
    </div>
</template>

<script>
/*
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
*/

export default {
  /*
  components: {
    swiper,
    swiperSlide
  },
  */
  name: 'project',
  data () {
    return {
      items: [
        {
          img: require('../assets/images/standardization/1.png')
        },
        {
          img: require('../assets/images/standardization/2.png')
        },
        {
          img: require('../assets/images/standardization/3.png')
        },
        {
          img: require('../assets/images/standardization/4.png')
        },
        {
          img: require('../assets/images/standardization/5.png')
        },
        {
          img: require('../assets/images/standardization/6.png')
        },
        {
          img: require('../assets/images/standardization/7.png')
        },
        {
          img: require('../assets/images/rebel/1.png')
        },
        {
          img: require('../assets/images/rebel/2.png')
        },
        {
          img: require('../assets/images/beyondCompare/1.png')
        },
        {
          img: require('../assets/images/beyondCompare/2.png')
        },
        {
          img: require('../assets/images/beyondCompare/3.png')
        },
        {
          img: require('../assets/images/beyondCompare/4.png')
        }
      ],
      swiperOptions: {
        autoplay: 3500,
        loop: true,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      msgs: [],
      currentIndex: 0
    }
  },
  mounted () {},
  methods: {
    handleChange (index) {
      // console.log(index)
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.project {
  width: 100%;
  display: flex;
  align-items: center;
  height: 100vh;
}

.left {
  width: 40%;
  height: 100vh;
}

.title-active {
  font-size: 18px;
  margin-top: 40vh;
}

.title-middle {
  margin-top: 60px;
}

.title-desc {
  margin-top: 10px;
}

.right {
  width: 60%;
  height: 100vh;
}

.swiper-item {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

img {
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right >>> .el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #000;
}

.actived {
  color: #e2e6e8;
}
</style>
