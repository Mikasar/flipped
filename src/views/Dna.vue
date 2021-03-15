<template>
    <div class="dna">
        <div class="left">
            <div class="logo">
                <img :src="logo" />
            </div>
            <div class="desc">
                <p>FLIPPED，{{ $t('dna.msg1') }}</p>
                <p>FLIPPED LAB，{{ $t('dna.msg2') }}</p>
            </div>
        </div>
        <div class="right">
            <img :src="lookbook" />
        </div>
    </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'FLIPPED LAB浮力实验室，始于浪漫，融入自在',
    meta: [
      {
        name: 'keywords',
        content: 'flipped lab运动内衣'
      },
      {
        name: 'description',
        content: 'flipped lab运动内衣'
      }
    ]
  },
  data () {
    return {
      logo: require('../assets/images/logo.png'),
      lookbook: require('../assets/images/lookbook.png')
    }
  }
}
</script>

<style scoped>
.dna {
    display: flex;
}

.left {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    width: 384px;
    height: 216px;
}

.desc {
    margin-top: 20px;
}

.right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

img {
    height: 100%;
}

.right img {
    width: auto;
}
</style>
