# 个人博客
本项目为个人博客（SPA），负责整站开发，因为服务器等原因尚未上线  
## 技术选型
- 前端使用 React + React Router + Webpack技术栈  
- 后端使用 Node（express）+ Mongodb

## 运行项目
第一步：安装

1. 把仓库克隆到本地并进入仓库根目录


```
git clone https://github.com/gaoxianglyx/blog.git
cd blog
```

2. 安装项目依赖项(推荐使用cnpm)


```
npm i
```

3. 如果没有全局安装过webpack，请使用下面命令安装


```
npm i -g webpack
```

第二步：使用

1. 对文件进行编译和打包


```
webpack
```

2. 没有安装mongodb的请自行安装，安装后打开命令行工具进入mongodb文件根目录的bin文件夹（如D:/mongodb/bin），输入下面的命令


```
mongod --dbpath D:/mongodb/data
```

3. 现在就可以使用以下命令启动服务器了
> node app //启动服务器
> npm start //启动开发者模式（webpack热更新）

第三步：访问

1 在浏览器输入localhost:8888访问这个个人博客了

## 页面功能
- 博文列表（首页）
- 博文详情页（回复）
- 简历页
- 关于自己
- 相册展示

## 重构方案
1. 使用redux管理数据流做登陆登出的状态管理
2. 使用webpack的code Splitting做延迟加载
3. 重构样式
4. 购买云服务器上线
5. 使用node同构和直出增进性能和优化seo
6. 使用CND缓存图片，js等静态资源