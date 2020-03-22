# react-native-dome

只有ios端

## 环境
```
node v12.13.0
watchman 4.9.0
yarn 1.22.4
reactNative 0.61.5
pod 1.9.1


```


## 常用命令
```
配置环境

brew install node

brew install watchman

# 使用nrm工具切换淘宝源
npx nrm use taobao

# 如果之后需要切换回官方源可使用 
npx nrm use npm

npm install -g yarn

npm install -g expo-cli

新建项目
npx react-native init demo
1.在运行项目到ios模拟器
npx react-native run-ios 

```  
## 运行项目时候出现的问题
```
有几个库不好下载
第三方依赖库百度盘链接： http://pan.baidu.com/s/1kVDUAZ9
0.60及以上请下载盘里的pods_0.60+.zip，解压后的pods文件夹与~/Library/Caches/CocoaPods/pods文件夹合并(merge)，如果没有这个文件夹则创建一个。

参考地址
https://bbs.reactnative.cn/topic/4301/ios-rn-0-45%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E6%89%80%E9%9C%80%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BC%96%E8%AF%91%E5%BA%93-boost%E7%AD%89/2

初始化项目失败
我最后直接在 Podfile 文件里添加依赖项, pod 'boost-for-react-native', :git => 'https://gitee.com/damon-s/boost-for-react-native.git’, 这样就成功了, pod 貌似检测到已安装boost-for-react-native就不会再去 install

ios部分有时候需要手动pod install ,找不到问题的时候，可以试试尤其是新加插件以后要执行一下
```
## 常用插件

```
导航插件文档
https://reactnavigation.org/docs/bottom-tab-navigator

轮播图
https://github.com/leecade/react-native-swiper

渐变
https://github.com/react-native-community/react-native-linear-gradient/blob/master/README.md
```
渐变使用步骤
```
react-native-linear-gradient

命令
yarn add react-native-linear-gradient
进入ios目录
pod install

编辑代码
import LinearGradient from 'react-native-linear-gradient';

<LinearGradient colors={['#ff3939', '#ff7830']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
    <Text style={styles.buttonText}>
    立享会员福利
    </Text>
</LinearGradient>

```
                            