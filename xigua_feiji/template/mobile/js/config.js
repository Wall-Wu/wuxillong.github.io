/*游戏相关配置文件*/
var CONFIG = {
  planeSize: {
    width: 60,
    height: 45
  }, 
  planeType: 'bluePlaneIcon', // 默认是蓝色
  bulletSize: {
    width: 20,
    height: 20
  },
  smallScore:100,  //小飞机分数
  bigScore:1000,  //打飞机分数
  enemySpeed: 4, // 默认敌人移动距离
  enemyMaxNum: 5, // 敌人最大梳理
  enemySmallSize: {
    width: 54,
    height: 40
  },
  enemyBigSize: {
    width: 130,
    height: 100
  },
  bulletSpeed: 10, // 默认子弹的移动速度
  resources: {
    images: [
      { src: '../mobile/img/plane_1.png',
        name: 'bluePlaneIcon',
      },
      { src: '../mobile/img/plane_2.png',
        name: 'pinkPlaneIcon'
      },
      { src: '../mobile/img/fire.png',
        name: 'fireIcon'
      },
      { src: '../mobile/img/enemy_big.png',
        name: 'enemyBigIcon'
      },
      { src: '../mobile/img/enemy_small.png',
        name: 'enemySmallIcon'
      },
      { src: '../mobile/img/boom_big.png',
        name: 'enemyBigBoomIcon'
      },
      { src: '../mobile/img/boom_small.png',
        name: 'enemySmallBoomIcon'
      }
    ],
    sounds: [
      { 
        src: '../mobile/sound/biubiubiu.mp3',
        name: 'shootSound'
      },
      { src: '../mobile/sound/music.mp3',
        name: 'gameSound'
      },
      { src: '../mobile/sound/die.mp3',
        name: 'dieSound'
      },
      { src: '../mobile/sound/button.mp3',
        name: 'buttonSound'
      },
      { src: '../mobile/sound/boom.mp3',
        name: 'boomSound'
      },
    ]
  }
};