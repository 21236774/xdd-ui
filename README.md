### [在线预览](http://123.207.197.245:8080/xdd-admin/)
> 用户名 user    密码 user

### 快速开始

### 这是一个UI库和UI文档库

##### 克隆仓库
```bash
git clone https://github.com/21236774/xdd-ui.git
```

##### 进入目录
```bash
cd xdd-ui
```

##### 安装依赖
```bash
pnpm i
```

#### 启动项目
```bash
npm run dev
```

#### packages------组件目录
> 存放组件和方法的地方

#### paly-------项目文档地址
> 展示写好的组件以及示例

#### xdd-ui------打包组件发布到npm官网
```bash
npm run build:gulp
cd xdd-ui
npm login
npm publish
```
> 注意 `npm run build:gulp` 命令报错可在执行一次即可（原因文件还未删干净）

#### xdd-ui------跟目录打包组件示例项目发布
```bash
npm run build:docs
```
