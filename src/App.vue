<template>
  <!-- 主容器 -->
  <div class="app-container">
    <!-- 左侧预览区域 -->
    <div class="preview-section">
      <div class="preview-card" :style="{ background: currentGradient }">
        <!-- 主标题 -->
        <h1 class="main-title">{{ mainTitle }}</h1>
        <!-- 副标题内容 -->
        <div class="subtitle-content">
          <p v-for="(line, index) in subtitleLines" :key="index" class="subtitle-line">
            {{ line }}
          </p>
        </div>
      </div>
    </div>

    <!-- 右侧编辑面板 -->
    <div class="editor-panel">
      <!-- 标题 -->
      <h2 class="panel-title">爆单图编辑器</h2>

      <!-- 文字设置区域 -->
      <div class="settings-section">
        <h3 class="section-title">文字设置</h3>

        <!-- 主标题输入 -->
        <div class="input-group">
          <label class="input-label">主标题：</label>
          <textarea v-model="mainTitle" class="text-input main-title-input" placeholder="Java急单" />
        </div>

        <!-- 副标题输入 -->
        <div class="input-group">
          <label class="input-label">副标题（每行一段）：</label>
          <textarea v-model="subtitleText" class="text-input subtitle-input" placeholder="Java开发当天接单&#10;15年技术经验保障&#10;低价优质服务" />
        </div>
      </div>

      <!-- 背景设置区域 -->
      <div class="settings-section">
        <h3 class="section-title">背景设置</h3>

        <!-- 渐变色选择网格 -->
        <div class="gradient-grid">
          <div v-for="(gradient, index) in gradientOptions" :key="index" class="gradient-option" :class="{ active: currentGradient === gradient.value }" :style="{ background: gradient.value }" @click="selectGradient(gradient.value)">
            <span class="gradient-name">{{ gradient.name }}</span>
          </div>
        </div>
      </div>

      <!-- 保存按钮 -->
      <button class="save-button" @click="saveAsImage">
        <span class="save-icon">💾</span>
        保存高清图
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'

  /**
   * 主标题文本
   */
  const mainTitle = ref('全栈程序员接单')

  /**
   * 副标题文本（多行）
   */
  const subtitleText = ref('全栈开发当天接单\n15年技术经验保障\n低价优质服务')

  /**
   * 当前选中的渐变背景
   */
  const currentGradient = ref('linear-gradient(135deg, #ff6b9d 0%, #ff8a56 25%, #ffa726 50%, #8e24aa 100%)')

  /**
   * 副标题行数组（计算属性）
   */
  const subtitleLines = computed(() => {
    return subtitleText.value.split('\n').filter((line) => line.trim())
  })

  /**
   * 渐变色选项配置
   */
  const gradientOptions = ref([
    { name: '红橙渐变', value: 'linear-gradient(135deg, #ff6b9d 0%, #ff8a56 25%, #ffa726 50%, #8e24aa 100%)' },
    { name: '蓝青渐变', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { name: '绿青渐变', value: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { name: '橙黄渐变', value: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { name: '紫粉渐变', value: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
    { name: '青蓝渐变', value: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
    { name: '珊瑚红', value: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
    { name: '天空蓝', value: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)' },
    { name: '粉紫红', value: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)' },
    { name: '粉黄渐变', value: 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)' },
    { name: '多彩渐变', value: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)' },
    { name: '橙黄火焰', value: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
    { name: '深蓝海洋', value: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
    { name: '绿黄活力', value: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)' },
    { name: '深青夜空', value: 'linear-gradient(135deg, #667db6 0%, #0082c8 100%)' },
    { name: '樱花粉', value: 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)' },
    { name: '青紫梦幻', value: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)' },
    { name: '黄橙梦幻', value: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)' },
    { name: '粉蓝对比', value: 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)' },
    { name: '红金富贵', value: 'linear-gradient(135deg, #e84393 0%, #f39c12 100%)' }
  ])

  /**
   * 选择渐变背景
   * @param gradient 渐变值
   */
  function selectGradient(gradient: string) {
    currentGradient.value = gradient
  }

  /**
   * 保存为JPG图片
   * 使用Canvas将预览卡片转换为图片并下载
   */
  async function saveAsImage() {
    try {
      // 创建Canvas元素
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // 设置Canvas尺寸（高分辨率）
      const width = 1200
      const height = 1200
      canvas.width = width
      canvas.height = height

      // 创建渐变背景
      const gradient = ctx.createLinearGradient(0, 0, width, height)

      // 解析当前渐变色
      const gradientMatch = currentGradient.value.match(/linear-gradient\(135deg,\s*([^)]+)\)/)
      if (gradientMatch) {
        const colors = gradientMatch[1].split(',').map((color) => color.trim())
        colors.forEach((color, index) => {
          const percentage = index / (colors.length - 1)
          // 提取颜色值（去除百分比）
          const colorValue = color.replace(/\s+\d+%$/, '').trim()
          gradient.addColorStop(percentage, colorValue)
        })
      } else {
        // 默认渐变
        gradient.addColorStop(0, '#ff6b9d')
        gradient.addColorStop(0.25, '#ff8a56')
        gradient.addColorStop(0.5, '#ffa726')
        gradient.addColorStop(1, '#8e24aa')
      }

      // 绘制背景
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // 设置文字样式
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // 绘制主标题
      ctx.font = 'bold 120px Microsoft YaHei, sans-serif'
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
      ctx.shadowBlur = 8
      ctx.shadowOffsetX = 4
      ctx.shadowOffsetY = 4
      ctx.fillText(mainTitle.value, width / 2, height / 2 - 150)

      // 绘制副标题
      ctx.font = '500 80px Microsoft YaHei, sans-serif'
      ctx.shadowBlur = 4
      ctx.shadowOffsetX = 2
      ctx.shadowOffsetY = 2

      const lines = subtitleLines.value
      const lineHeight = 100
      const startY = height / 2 + 50

      lines.forEach((line, index) => {
        const y = startY + index * lineHeight
        ctx.fillText(line, width / 2, y)
      })

      // 转换为JPG并下载
      canvas.toBlob(
        (blob) => {
          if (!blob) return

          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `爆单图_${mainTitle.value}_${new Date().getTime()}.jpg`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)

          console.log('图片保存成功！')
        },
        'image/jpeg',
        0.95
      )
    } catch (error) {
      console.error('保存图片失败:', error)
      alert('保存图片失败，请重试')
    }
  }
</script>

<style scoped lang="less">
  /* 主容器样式 */
  .app-container {
    display: flex;
    min-height: 100vh;
    background-color: #f5f5f5;
    font-family: 'Microsoft YaHei', sans-serif;
  }

  /* 左侧预览区域 */
  .preview-section {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 40px;

    .preview-card {
      width: 600px;
      height: 600px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

      .main-title {
        font-size: 72px;
        font-weight: bold;
        margin: 0 0 60px 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }

      .subtitle-content {
        .subtitle-line {
          font-size: 48px;
          font-weight: 500;
          margin: 20px 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  /* 右侧编辑面板 */
  .editor-panel {
    width: 400px;
    background: white;
    padding: 30px;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;

    .panel-title {
      font-size: 24px;
      color: #ff6b35;
      margin: 0 0 30px 0;
      font-weight: bold;
    }

    .settings-section {
      margin-bottom: 40px;

      .section-title {
        font-size: 18px;
        color: #333;
        margin: 0 0 20px 0;
        padding-left: 10px;
        border-left: 4px solid #ff6b35;
      }

      .input-group {
        margin-bottom: 20px;

        .input-label {
          display: block;
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
        }

        .text-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          resize: vertical;
          font-family: inherit;

          &:focus {
            outline: none;
            border-color: #ff6b35;
            box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.1);
          }

          &.main-title-input {
            height: 80px;
          }

          &.subtitle-input {
            height: 120px;
          }
        }
      }
    }

    /* 渐变色网格 */
    .gradient-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;

      .gradient-option {
        height: 50px;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border: 3px solid transparent;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        &.active {
          border-color: #ff6b35;
          transform: scale(1.05);
        }

        .gradient-name {
          color: white;
          font-size: 12px;
          font-weight: 500;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          padding: 4px 8px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
      }
    }

    /* 保存按钮 */
    .save-button {
      width: 100%;
      height: 50px;
      background: linear-gradient(135deg, #ff6b35 0%, #ff8a56 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);
      }

      &:active {
        transform: translateY(0);
      }

      .save-icon {
        font-size: 18px;
      }
    }
  }

  /* 响应式设计 */
  @media (max-width: 1200px) {
    .app-container {
      flex-direction: column;
    }

    .editor-panel {
      width: 100%;
    }

    .preview-section {
      .preview-card {
        width: 500px;
        height: 500px;

        .main-title {
          font-size: 60px;
        }

        .subtitle-line {
          font-size: 40px;
        }
      }
    }
  }
</style>
