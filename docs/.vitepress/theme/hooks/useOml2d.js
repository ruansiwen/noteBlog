import { onMounted } from "vue";
// 可以编写一个获取主题里配置的 oml2d 配置的方法
// import { useOml2dOptions } from 'xxx'

export function useOml2d() {
  // const oml2dOptions = useOml2dOptions()
  // 配置可以根据主题的实际情况进行获取，这里写一个默认的
  const oml2dOptions = {
    dockedPosition: "left",
    models: [
      {
        path: "https://model.oml2d.com/shizuku/shizuku.model.json",
        mobilePosition: [0, 200],
        mobileScale: 0.2,
        name: "同学",
        scale: 0.13,
        position: [40, 100],
        rotation: 0,
        showHitAreaFrames: true,
        stageStyle: {
          height: 320,
        },
        volume: 0.5,
      },
      {
        path: "https://model.oml2d.com/platelet/model.json",
        mobilePosition: [0, 200],
        mobileScale: 0.2,
        name: "血小板",
        scale: 0.13,
        position: [60, 60],
        rotation: 0,
        showHitAreaFrames: true,
        stageStyle: {
          height: 320,
        },
        volume: 0.5,
      },
      {
        path: "https://model.oml2d.com/cat-white/model.json",
        mobilePosition: [0, 200],
        mobileScale: 0.2,
        name: "小啊喵",
        scale: 0.13,
        position: [10, 40],
        rotation: 0,
        showHitAreaFrames: true,
        stageStyle: {
          height: 320,
        },
        volume: 0.5,
      },
      {
        path: "https://model.oml2d.com/hibiki/hibiki.model.json",
        // 移动端时模型在舞台中的位置。x: 横坐标, y: 纵坐标
        mobilePosition: [0, 200],
        // 移动端时模型的缩放比例
        mobileScale: 0.2,
        name: "girl",
        // 模型的缩放比例
        scale: 0.1,
        // 模型在舞台中的位置。x: 横坐标, y: 纵坐标
        position: [40, 80],
        // 模型的旋转角度, 单位:度 (0-360)
        rotation: 0,
        // 显示该模型的点击区域框
        showHitAreaFrames: true,
        stageStyle: {
          width: 300,
          height: 320,
        },
        // 模型播放声音的音量,
        volume: 0.5,
      },
    ],
    menus: (currentModel, currentIndex) => {
      // 也可以使用 currentModel.name
      switch (currentModel.name) {
        case "小啊喵":
          return {
            style: {
              left: 0,
            },
          };
        default:
          return {
            style: {
              left: 0,
            },
            // items: (defaultItem) => {
            //   return [defaultItem[1]];
            // },
          };
      }
    },
    tips: (currentModel, currentIndex) => {
      switch (currentModel.name) {
        case "小啊喵":
          return {
            copyTips: {
              duration: 3000,
              message: [`${currentModel.name}: 复制成功啦！`, "你好呀", "喵"],
            },
            idleTips: {
              wordTheDay: true,
            },
            style: {
              background: "red",
            },
            welcomeTips: {
              message: {
                weeHours: "这么晚还不睡吗？当心熬夜秃头哦！",
                daybreak: "早上好！一日之计在于晨，美好的一天就要开始了。",
                morning: "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！",
                noon: "中午了，工作了一个上午，现在是午餐时间！",
                afternoon: "午后很容易犯困呢，来杯咖啡吧~",
                dusk: "傍晚了！工作一天幸苦啦~",
                night: "晚上好，今天过得怎么样呢？",
                lateNight: "已经这么晚了呀，早点休息吧，晚安~",
              },
            },
          };
          break;
        default:
          return {
            copyTips: {
              message: ["复制了啥?"],
            },
            idleTips: {
              wordTheDay: false,
            },
          };
          break;
      }
    },
  };
  onMounted(async () => {
    if (oml2dOptions) {
      const { loadOml2d } = await import("oh-my-live2d");
      loadOml2d(oml2dOptions);
    }
  });
}
