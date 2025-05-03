---
name: 屯人服
icon:
  src: /trf/trf.png
type: Geyser
version: 1.21.4
desc: |
  屯人服是一个公益性质的1.21.4生存服务器
  我们提供稳定流畅的游戏体验和友好的社区氛围
  无论你是建筑师、红石玩家还是生存爱好者，这里都有你的一席之地
ip: 506521.xyz
is_member: true
auth_mode: offline
hide: false
---

<script setup>
import { ref } from 'vue';

// 服务器轮播图
const serverImages = [
  'https://img.picui.cn/free/2025/05/03/6815b0ac24689.png',
  'https://img.picui.cn/free/2025/05/03/6815b0abaf153.png',
  'https://img.picui.cn/free/2025/05/03/6815b0ac12da1.png'
];
</script>

<div class="server-page">
  <a-carousel class="server-carousel" animation-name="fade" indicator-type="dot" show-arrow="hover" :auto-play="true" :interval="5000">
    <a-carousel-item v-for="(image, index) in serverImages" :key="index">
      <div class="carousel-item">
        <img :src="image" class="carousel-image" alt="屯人服截图" />
        <div class="carousel-overlay">
          <h1 class="carousel-title">屯人服</h1>
          <p class="carousel-subtitle">纯净 · 公益 · 和谐</p>
        </div>
      </div>
    </a-carousel-item>
  </a-carousel>
</div>

# 🏡 欢迎来到屯人服

> *纯净 · 公益 · 和谐 · 稳定*

屯人服是一个**公益性质**的Minecraft 1.21.4生存服务器，致力于为玩家提供最纯净、最稳定的游戏体验。我们没有繁琐的插件和指令，只有最原汁原味的Minecraft生存玩法。

## ✨ 服务器特色

- **公益运营** - 完全免费，无收费项目，无氪金内容
- **稳定流畅** - 高性能服务器配置，确保游戏体验流畅无卡顿
- **跨平台互通** - 支持Java版和基岩版玩家同服游戏
- **领地保护** - 完善的领地系统，保护您的建筑和财产安全
- **和谐社区** - 友好的玩家群体，热情的管理团队

## 📝 服务器规则

1. 禁止使用任何作弊客户端和模组
2. 尊重他人劳动成果，不要破坏他人建筑
3. 禁止恶意占用大量资源影响服务器性能
4. 保持友好交流，禁止辱骂、歧视等不良行为

## 🔗 加入方式

- **服务器地址**: `506521.xyz`
- **游戏版本**: 1.21.4 (Java & 基岩版)
- **登录方式**: 离线登录 (支持外置登录)

加入我们的[QQ群](https://qm.qq.com/q/zfKV7WwIs8)获取更多信息和帮助！

<style scoped>
/* 覆盖上级页面限制 */
:deep(.VPDoc) {
  max-width: 100% !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.container) {
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.content) {
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.vp-doc) {
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* 服务器页面样式 */
.server-page {
  max-width: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow-x: hidden !important;
  margin-bottom: 40px !important;
  display: block !important;
}

.server-carousel {
  width: 100% !important;
  height: 70vh !important;
  border-radius: 16px !important;
  overflow: hidden !important;
  margin-bottom: 0 !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
  display: block !important;
}

.carousel-item {
  position: relative !important;
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}

.carousel-image {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  display: block !important;
  z-index: 1 !important;
}

.carousel-overlay {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: rgba(0, 0, 0, 0.6) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  color: white !important;
  z-index: 2 !important;
}

.carousel-title {
  font-size: 4rem !important;
  font-weight: bold !important;
  margin-bottom: 20px !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7) !important;
}

.carousel-subtitle {
  font-size: 2rem !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7) !important;
}

@media (max-width: 768px) {
  .carousel-title {
    font-size: 2.5rem !important;
  }
  
  .carousel-subtitle {
    font-size: 1.2rem !important;
  }
}
</style>