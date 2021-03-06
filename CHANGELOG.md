# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.4.1](https://github.com/TRPGEngine/Client/compare/v0.4.0...v0.4.1) (2020-09-16)


### Bug Fixes

* **web:** 修复笔记预览时如果数据为空(出现于旧版笔记)则会报错的bug ([0c9c6bc](https://github.com/TRPGEngine/Client/commit/0c9c6bc32c00a875f34571616c186afabc6553f5))

## [0.4.0](https://github.com/TRPGEngine/Client/compare/v0.3.15...v0.4.0) (2020-09-16)


### Features

* 增加取消好友邀请的处理 ([0d01aea](https://github.com/TRPGEngine/Client/commit/0d01aeaf4a2bae53937573c1aa3bfa1c65b95d0e))
* 增加国际化翻译解决方案 ([0de4950](https://github.com/TRPGEngine/Client/commit/0de4950c45e84240be3390e246da4b7e8fb4c302))
* **playground:** add san in coc7 ([2f53787](https://github.com/TRPGEngine/Client/commit/2f537878bf067ee29c4526ebd468ff3a7f555acb))
* **portal:** 增加团邀请代码入团的入口 ([7ff30ec](https://github.com/TRPGEngine/Client/commit/7ff30ec2ea7731d4855404c65e18925e91625ed1))
* **portal:** 增加通用结果页并增加邀请码加入跳转 ([06d8eb6](https://github.com/TRPGEngine/Client/commit/06d8eb67438e20e0d6f745f85322093b3f7f1189))
* **web:** fastform 增加Select类型的字段 ([55f14f9](https://github.com/TRPGEngine/Client/commit/55f14f9d41825cce416cfeab8bbfdf8574ccbc31))


### Bug Fixes

* **web:** 修复一个低版本浏览器的兼容问题 ([80abb53](https://github.com/TRPGEngine/Client/commit/80abb53906dc1edc8f0477bc5c16f0b9e339e10b))
* **web:** 修复在某些情况下favicon通知无法被清空的bug ([cb58ef2](https://github.com/TRPGEngine/Client/commit/cb58ef2533e699d869a916329fb51b81b1e5ca5b))

### [0.3.15](https://github.com/TRPGEngine/Client/compare/v0.3.14...v0.3.15) (2020-08-05)


### Features

* **layout:** coc7模板增加自定义的武器和技能 ([51bd7d9](https://github.com/TRPGEngine/Client/commit/51bd7d98ddcd007c3bed95c44f1b754b9acf2e28))
* **web:** new rich text editor ([54f39ec](https://github.com/TRPGEngine/Client/commit/54f39ec6faa1dcf5c0dd6c6bee25c726f2088f6d))


### Bug Fixes

* fix error import ([196d603](https://github.com/TRPGEngine/Client/commit/196d603ae6f6aaed977b8649a3758e2f75888779))
* **web:** 修复ProfileCard在某些情况下可能会拿不到userInfo导致报错的bug ([4735b0b](https://github.com/TRPGEngine/Client/commit/4735b0b81bb9686e46bd2324e81db2116a899d84))
* 修复会话系统类型出现错乱的问题 ([5d7e2bb](https://github.com/TRPGEngine/Client/commit/5d7e2bb1503da550f40f371459e3f018e47c2dbf))

### [0.3.14](https://github.com/TRPGEngine/Client/compare/v0.3.13...v0.3.14) (2020-07-18)


### Features

* **app:** 增加了踢出团成员的功能 ([769f438](https://github.com/TRPGEngine/Client/commit/769f43850e814687b747326afadb31989a53b85f))
* 增加同步解散团与踢出成员的状态处理 ([14ad43b](https://github.com/TRPGEngine/Client/commit/14ad43b5329dc4cb121f9c59c198f83d78309c3c))
* **web:** 新界面框架 ([9490c60](https://github.com/TRPGEngine/Client/commit/9490c60edd37fafc7e8fdf4ef3dbd9948456284a))


### Bug Fixes

* **web:** 修复桌面版无法添加团的问题 ([1a81090](https://github.com/TRPGEngine/Client/commit/1a810902287892283ae20afbb97df06bf5cbac65))
* error type ([c6b608e](https://github.com/TRPGEngine/Client/commit/c6b608e1c0706f9e75f1f33391e1797d1a4bf71f))

### [0.3.13](https://github.com/TRPGEngine/Client/compare/v0.3.12...v0.3.13) (2020-06-27)


### Features

* **app:** 团成员列表增加身份标识(主持人、管理员) ([c5d7dfd](https://github.com/TRPGEngine/Client/commit/c5d7dfd422d60faab7f805661f210424f80bb1f5))
* **tiledmap:** 加入房间时带入jwt并接受更新socketId监听 ([8fa9234](https://github.com/TRPGEngine/Client/commit/8fa9234dade76e00ad1a399df91caf73daa0c0bd))
* **trpg:** 地图增加查看者的显示 ([f2933fc](https://github.com/TRPGEngine/Client/commit/f2933fc1dc839c2be17b877d095e4f81d2fdd634))
* **web:** 增加一个UserAvatar组件用于根据uuid显示用户头像 ([7f6eafc](https://github.com/TRPGEngine/Client/commit/7f6eafc97f20bc840b013c8654a1edb2bd33c47e))


### Bug Fixes

* **app:** 修复选择完角色时点完成会导致应用闪退的bug ([8ea6977](https://github.com/TRPGEngine/Client/commit/8ea6977fd6d3b43ad50bb6b649674ef3bbe9d83d))
* **app:** 修复通过团成员列表打开用户信息标题无法正确显示名字的bug ([bcb84c9](https://github.com/TRPGEngine/Client/commit/bcb84c92ece0cd8736cb79879b6323d9112dac32))
* **portal:** 修复登录页跳转无限循环问题 ([2838e68](https://github.com/TRPGEngine/Client/commit/2838e68d16455e57020f77fcbc709a0322855ae5))
* 修复生成战报时有回复消息的消息列表无法正常显示的bug ([9c84b92](https://github.com/TRPGEngine/Client/commit/9c84b924316e9066f6cebd7d9aa75c799baaca3a))

### [0.3.12](https://github.com/TRPGEngine/Client/compare/v0.3.11...v0.3.12) (2020-06-22)


### Bug Fixes

* **layout:** 修复style错误比较会触发容器重绘的问题 ([60a2ebe](https://github.com/TRPGEngine/Client/commit/60a2ebef18273609515e17234f664b4c73d68a30))

### [0.3.11](https://github.com/TRPGEngine/Client/compare/v0.3.10...v0.3.11) (2020-06-22)


### Bug Fixes

* **layout:** 修复复杂路径名无法获取精确数据的问题 ([3704196](https://github.com/TRPGEngine/Client/commit/370419637713d7444d846a67abdadfe50a3fa204))

### [0.3.10](https://github.com/TRPGEngine/Client/compare/v0.3.9...v0.3.10) (2020-06-20)


### Features

* **portal:** 招募列表增加帮助按钮 ([f24beca](https://github.com/TRPGEngine/Client/commit/f24becaa57e377977033247cb546a83c72b58a1d))

### [0.3.9](https://github.com/TRPGEngine/Client/compare/v0.3.8...v0.3.9) (2020-06-17)


### Features

* **app:** 增加招募内容详情页 ([456404f](https://github.com/TRPGEngine/Client/commit/456404f308723593aaa2f6b4a9fa658b91aecf5e))
* **portal:** 已满的招募项增加已满标识 ([11e01ab](https://github.com/TRPGEngine/Client/commit/11e01ab07b78cdd9231c1fc534383c802fc635b4))

### [0.3.8](https://github.com/TRPGEngine/Client/compare/v0.3.7...v0.3.8) (2020-06-13)


### Bug Fixes

* **portal:** 修复发布招募模态框无法无法关闭的bug ([8262656](https://github.com/TRPGEngine/Client/commit/826265668adae18c91fa020315835a5375843d99))

### [0.3.7](https://github.com/TRPGEngine/Client/compare/v0.3.6...v0.3.7) (2020-06-13)


### Features

* 增加一个通用的FastForm表单系统 ([f23b641](https://github.com/TRPGEngine/Client/commit/f23b6411e13762c8b8cfce260af95028ab988298))
* **portal:** 增加portal端的注册逻辑 ([547b3b7](https://github.com/TRPGEngine/Client/commit/547b3b7fd6c5973d27783a629a9e9d8a5e163565))
* **portal:** 增加React错误处理机制 ([1a4c6ee](https://github.com/TRPGEngine/Client/commit/1a4c6ee2ab236e171a6d8fcb39892e1ab08c6456))
* **portal:** 增加发布招募 ([f6fc19f](https://github.com/TRPGEngine/Client/commit/f6fc19fae04243238439a7c7af0d30afeb6ef290))
* **portal:** 增加招募列表的路由 ([28031f7](https://github.com/TRPGEngine/Client/commit/28031f77aa66dea48a06965905788acddb49b0e3))
* **portal:** 增加用于显示招募信息的卡片组件 ([fdced48](https://github.com/TRPGEngine/Client/commit/fdced48aa3e94e54a3e40d2a1f4daeb3102a06a7))
* **portal:** 增加获取最新招募信息列表的功能 ([9c0538f](https://github.com/TRPGEngine/Client/commit/9c0538fe7b2d1c560c0624cc0a1142c21b4c8866))
* **portal:** 用户自己的招募与完成 ([98b7ddd](https://github.com/TRPGEngine/Client/commit/98b7dddd84c8a7afaec3cac757a7d890e3b0f3e1))


### Bug Fixes

* **app:** 修复了切换消息类型会导致应用闪退的bug ([5784ae8](https://github.com/TRPGEngine/Client/commit/5784ae895b48eefdcf419b5e0ee2308066189d8c))
* 修复fastform数据初始化不正确的bug ([f61ac19](https://github.com/TRPGEngine/Client/commit/f61ac19f93440fc664ce439a4c4f8186f2f27a49))
* 修复解散/退出团后不会删除会话的bug ([56cf5ee](https://github.com/TRPGEngine/Client/commit/56cf5ee59860b091089d64e1094764822e096b3c))

### [0.3.6](https://github.com/TRPGEngine/Client/compare/v0.3.5...v0.3.6) (2020-06-01)


### Bug Fixes

* **app:** 临时修复react-native-progress会引起应用崩溃的bug ([c4ecb31](https://github.com/TRPGEngine/Client/commit/c4ecb31d635e04f6ad85625a7c25a35db7b27a3d))

### [0.3.5](https://github.com/TRPGEngine/Client/compare/v0.3.4...v0.3.5) (2020-05-16)


### Features

* **tiledmap:** 地图增加网络图片Token的支持 ([22ddac9](https://github.com/TRPGEngine/Client/commit/22ddac9047db91bf3e9237c08ac7f50a06def752))

### [0.3.4](https://github.com/TRPGEngine/Client/compare/v0.3.3...v0.3.4) (2020-05-10)


### Features

* 回复消息数据的发送 ([14f138b](https://github.com/TRPGEngine/Client/commit/14f138b4e6800e1cab0b451aefe52266e8bf11bc))
* **app:** 增加app端的消息回复功能 ([e5cccc5](https://github.com/TRPGEngine/Client/commit/e5cccc5c3dc0abe264430321b9e5068e20a33e94))
* **app:** 增加移动版回复消息内容的显示 ([ba927d5](https://github.com/TRPGEngine/Client/commit/ba927d5dad3f679835d59932b43fd18d3a7c5319))
* **app:** 移动端增加团消息输入状态的发送与显示 ([f2f2db9](https://github.com/TRPGEngine/Client/commit/f2f2db959c17c5939c5008e734ebf954e168a26b))
* **app:** 移动端增加配置项不发送输入状态 ([ac7abb1](https://github.com/TRPGEngine/Client/commit/ac7abb15fbf47007f4ecddb9764e78803ce0d50d))
* **portal:** 增加404页面 ([e5762bb](https://github.com/TRPGEngine/Client/commit/e5762bb70192cdc894685530f53f6645536705c8))
* **web:** 回复的操作按钮与回复内容显示 ([b899e2a](https://github.com/TRPGEngine/Client/commit/b899e2aa5dbdf4cfee820243927620e9eccec5d3))
* **web:** 增加网页版团输入状态的显示 ([5f231d6](https://github.com/TRPGEngine/Client/commit/5f231d663190a9fdbc44aa0ce3fa587e32e874a9))
* **web:** 增加配置项不发送输入状态 ([fca42b6](https://github.com/TRPGEngine/Client/commit/fca42b6346c12f16d85f5a0add7a27b8a2439a9f))
* **web:** 消息列表中增加回复内容的显示 ([021ed59](https://github.com/TRPGEngine/Client/commit/021ed5942b4dc87ac81e351664e7e6915a0b3150))


### Bug Fixes

* 将数据reduce的方法切换到原来的方式。用于复用内存地址。 ([7fc47e3](https://github.com/TRPGEngine/Client/commit/7fc47e3a16395b84fc9697a1340cd4eaf6cb2b14))
* **app:** 修复一部分内容显示不正常的bug ([18c66a6](https://github.com/TRPGEngine/Client/commit/18c66a6d20e802c025fa5b75acb4e37882afe433))

### [0.3.3](https://github.com/TRPGEngine/Client/compare/v0.3.2...v0.3.3) (2020-05-06)


### Bug Fixes

* 将数据reduce的方法切换到原来的方式。用于复用内存地址。 ([3b0a284](https://github.com/TRPGEngine/Client/commit/3b0a284895c20812d0e62665cfdbcef659d5f192))

### [0.3.2](https://github.com/TRPGEngine/Client/compare/v0.3.1...v0.3.2) (2020-04-29)


### Features

* **app:** 在"关于"中增加官网的连接 ([1b7d9c7](https://github.com/TRPGEngine/Client/commit/1b7d9c73e3c9f2e93a6066c8b49b297f6bb7667c))
* **app:** 增加了部分投骰图标。重绘了所有的投骰图标 ([e70d204](https://github.com/TRPGEngine/Client/commit/e70d204ff46f21752afa8c1d11c4202b7550c659))
* **app:** 增加团规则的查看 ([d3c9c59](https://github.com/TRPGEngine/Client/commit/d3c9c5956e23efd3fcf1aa21176f1b0344727bc4))
* **app:** 增加开发博客的链接 ([4c9ccaa](https://github.com/TRPGEngine/Client/commit/4c9ccaa861bf1c5cacedc04ee93b63698220bd74))
* **layout:** 增加CustomList组件 ([2f4b07f](https://github.com/TRPGEngine/Client/commit/2f4b07f8a7fc6888c1453d81ef2fd98ad7d7d7f9))
* **layout:** 增加Space间隔组件 ([27b43d7](https://github.com/TRPGEngine/Client/commit/27b43d7556937d35e243a0343e72ef346ae06b09))
* **layout:** 增加一个CurrMax组件用于渲染当前值与最大值的组合输入 ([0799a5a](https://github.com/TRPGEngine/Client/commit/0799a5a3c31996c7dd179490ae6bce11c4a97415))
* **playground:** 增加分割面板位置记忆与位置重置 ([e700ef7](https://github.com/TRPGEngine/Client/commit/e700ef738a5ee2742d17853c4f45b7331094c584))


### Bug Fixes

* **app:** 修复移动版部分位置中文会出现被截掉顶部一部分像素的问题 ([1c6773e](https://github.com/TRPGEngine/Client/commit/1c6773edb0a2b5a7671007c1a711f354ab61de74))
* **layout:** 修复define无法获取深层name的问题 ([20bd65d](https://github.com/TRPGEngine/Client/commit/20bd65dc323cb611f099956e4a447a77f27e2106))

### [0.3.1](https://github.com/TRPGEngine/Client/compare/v0.3.0...v0.3.1) (2020-04-20)


### Features

* **layout:** 增加AND允许无限参数进行AND操作 ([b717d47](https://github.com/TRPGEngine/Client/commit/b717d47aeb44f3e4eae2482ca46c5b7b48e515e2))
* **layout:** 增加DataTable组件用于渲染表格 ([d8ab14a](https://github.com/TRPGEngine/Client/commit/d8ab14a210e54f03ab38feae47b4c231e5974488))
* 增加消息配置上下文用于处理是否渲染操作按钮 ([346b8b3](https://github.com/TRPGEngine/Client/commit/346b8b310231724bcf2b4589b4fbe0d6c93c35d4))
* **layout:** 增加了Checkbox组件 ([9c4f0bd](https://github.com/TRPGEngine/Client/commit/9c4f0bd6d1f4f503abaea4414d3f1b428b6b8681))
* **layout:** 增加了InputNumber组件的精度属性。默认为0 ([4fba488](https://github.com/TRPGEngine/Client/commit/4fba488c4e6063da142f1fbaab7c8fc5f47c67b7))
* **layout:** 增加分割线组件 ([0854db0](https://github.com/TRPGEngine/Client/commit/0854db00a27e4be1e30b5aa1017b6849513eeb87))
* **layout:** 标签ForEach增加非集合数据的循环处理 ([3cf1438](https://github.com/TRPGEngine/Client/commit/3cf143854f71d9d5eb3abf95acfbbfc08d34eaba))
* **web:** web增加官网链接 ([3956199](https://github.com/TRPGEngine/Client/commit/39561997b931814e48bd3665db6e5f05364887cf))
* **web:** 增加全局快键键用于切换面板 ([e24e679](https://github.com/TRPGEngine/Client/commit/e24e679dd33e932e155da98af7affd7682fd8291))
* **web:** 增加聊天历史记录查看 ([9cb74ef](https://github.com/TRPGEngine/Client/commit/9cb74ef835415e349c38ed95e0d5bbc74d38da47))

## [0.3.0](https://github.com/TRPGEngine/Client/compare/v0.2.30...v0.3.0) (2020-04-12)


### Features

* **portal:** 优化了错误提示。防止应用崩溃时一片白屏 ([b32be36](https://github.com/TRPGEngine/Client/commit/b32be366d04d2fc240b320d745a99cc82a18d4ae))
* **portal:** 增加图片声明 ([8d1c78c](https://github.com/TRPGEngine/Client/commit/8d1c78c94074bd612a738ba84cba0c550e4b0a19))
* **portal:** 增加地图编辑路由与团人物卡列表 ([d2bea0e](https://github.com/TRPGEngine/Client/commit/d2bea0ef88298927a1e3bcdaadbebca59ff8b419))
* **tiledmap:** 增加jwt作为鉴权传输 ([1a7d7c7](https://github.com/TRPGEngine/Client/commit/1a7d7c7c131a3a636843729a921b0d0befb463f5))
* **tiledmap:** 增加socket的事件处理与地图更新 ([79c35e8](https://github.com/TRPGEngine/Client/commit/79c35e85dda3f7cea9000763bcfecb255648165d))
* **tiledmap:** 增加tiledmap不同的操作模式 ([6b95521](https://github.com/TRPGEngine/Client/commit/6b955216a4ae4a42f345f02a27d3d00f674f1255))
* **tiledmap:** 增加一个ActorToken 棋子类型 ([cad128e](https://github.com/TRPGEngine/Client/commit/cad128e3ac357c60bd0208354e677a8fe69a2167))
* **tiledmap:** 增加移除选中棋子的功能 ([baeef5f](https://github.com/TRPGEngine/Client/commit/baeef5f85f793481c9cb6085f00165690d9ff8ff))
* **web:** 在系统状态中获取当前SocketId ([0ecf9a9](https://github.com/TRPGEngine/Client/commit/0ecf9a9f26cd65238f1a849ac64f18f879c06bd2))
* **web:** 增加内测用户状态切换 ([f4b41ac](https://github.com/TRPGEngine/Client/commit/f4b41ac758ccfccc054508e240ecd6ab158be5f2))
* **web:** 增加团地图的创建与获取 ([d351530](https://github.com/TRPGEngine/Client/commit/d351530cef6cf9ff2c417a074c6f8020821dfdee))
* **web:** 增加团编辑地图的入口 ([ab3b67e](https://github.com/TRPGEngine/Client/commit/ab3b67e8834be57fe0858c8e030bacb2e9d4922e))
* **web:** 增加地图入口 ([95c4215](https://github.com/TRPGEngine/Client/commit/95c42152dac036d530567508fe40507d0470ab74))
* **web:** 将网络状态与版本号收在主面板能显示 ([e9a175b](https://github.com/TRPGEngine/Client/commit/e9a175b280e03c5218006e3091fe5b34d8a90f9a))


### Bug Fixes

* 修复在某些情况下当没有设置图片头像时会无法正常显示字母头像的问题 ([22a6716](https://github.com/TRPGEngine/Client/commit/22a6716065f78b205364090693d379518c1f7a5c))
* 修复文本中带有中括号无法正常显示的问题 ([801dc80](https://github.com/TRPGEngine/Client/commit/801dc8015e25968a6c9c405f2b930b8cca61d502))

### [0.2.30](https://github.com/TRPGEngine/Client/compare/v0.2.29...v0.2.30) (2020-03-29)


### Bug Fixes

* **portal:** 修复生成跑团战报当聊天记录中有File类型消息时无法正确加载消息的问题 ([d73b98f](https://github.com/TRPGEngine/Client/commit/d73b98f7772a28bf4a35e66089384027e7961bab))

### [0.2.29](https://github.com/TRPGEngine/Client/compare/v0.2.28...v0.2.29) (2020-03-28)


### Bug Fixes

* 修复unicode编码中解析JWT会出现错误的问题 ([55f30d7](https://github.com/TRPGEngine/Client/commit/55f30d7e9fb8b371e51efd9b01f8ad5c7a23fbd0))

### [0.2.28](https://github.com/TRPGEngine/Client/compare/v0.2.27...v0.2.28) (2020-03-28)


### Features

* 增加人物卡的新增操作监听 ([3ef20bb](https://github.com/TRPGEngine/Client/commit/3ef20bb6cc75f780150c254335d787b60b34d3f9))
* **app:** 增加各种消息类型的切换与发送 ([0458efe](https://github.com/TRPGEngine/Client/commit/0458efec6144a867ac1d5097d6d1c1227ab92454))
* **app:** 增加悬浮窗的基础实现 ([8f5fd93](https://github.com/TRPGEngine/Client/commit/8f5fd931702280ab110cb068ddacd75576abc255))
* **portal:** 增加战报分享提示 ([cea6bf5](https://github.com/TRPGEngine/Client/commit/cea6bf584a691f7e7882f9acada36eda21196c91))
* **portal:** 战报列表 ([6251942](https://github.com/TRPGEngine/Client/commit/625194232eda5773fcd9fd163f72372d4828e271))
* **portal:** 战报预览与动画 ([8233ec5](https://github.com/TRPGEngine/Client/commit/8233ec52081f1e1c42850cd226001795988d796f))
* **web:** 增加appbanner用于引导手机端打开网页去下载app ([e87f17e](https://github.com/TRPGEngine/Client/commit/e87f17e92f7c7ad400c99c402088d4c0b594d680))
* 增加跑团战报的入口 ([22e9da8](https://github.com/TRPGEngine/Client/commit/22e9da881f7e572df11aeb9840fd451eae7db016))

### [0.2.27](https://github.com/TRPGEngine/Client/compare/v0.2.26...v0.2.27) (2020-03-22)


### Features

* **app:** 增加userinfo的popover ([8dc2612](https://github.com/TRPGEngine/Client/commit/8dc26120a364048d15298f336b7af1f7524d11ca))
* **app:** 增加未发送消息的loading ([3d735a2](https://github.com/TRPGEngine/Client/commit/3d735a270a4443accbf1f50f10337c5cbbff38a8))
* **app:** 增加角色卡头像点击的popover ([b5d93f8](https://github.com/TRPGEngine/Client/commit/b5d93f8fca5c6130da0631b9c4740a7cbe6be672))
* **playground:** 增加预览人物卡的功能 ([11e97fa](https://github.com/TRPGEngine/Client/commit/11e97fa1eb2ddb1a81f4de8644e8693971552888))
* **web:** web端增加loading消息的icon提示 ([f865b41](https://github.com/TRPGEngine/Client/commit/f865b4166ea577e9061ebcf01fbcdcfed7c58b8c))
* **web:** 增加web端消息撤回 ([555f2ae](https://github.com/TRPGEngine/Client/commit/555f2aeedb9744749b85920b991649557186f32d))


### Bug Fixes

* app长久没维护发生的一系列问题 ([c19d279](https://github.com/TRPGEngine/Client/commit/c19d27912c8bc4ef9ba843bb2f974f8bcfedd31d))
* 修复用户可以选到为通过审批的人物卡的bug ([cee1d0f](https://github.com/TRPGEngine/Client/commit/cee1d0f14d3272e8133b9382b6583359aa9ceb88))
* **app:** 修复Popup弹出的框无法关联redux状态的问题 ([dde1ae6](https://github.com/TRPGEngine/Client/commit/dde1ae671d8eb21ec632277081c6485675feceb9))
* **app:** 修复人物卡角色无法正常切换的问题 ([f1fe39c](https://github.com/TRPGEngine/Client/commit/f1fe39cc900529b12cff10c5a13e48e9822d859b))
* **app:** 修复无法正确获取当前团角色信息的bug ([ebad847](https://github.com/TRPGEngine/Client/commit/ebad8479adbc9656c188eb90e3b649c536a0b8b6))
* **app:** 修复系统消息可以点开popover的问题 ([06fdfa4](https://github.com/TRPGEngine/Client/commit/06fdfa4837a8a8c339cb24b06c006a70717eea3f))

### [0.2.26](https://github.com/TRPGEngine/Client/compare/v0.2.25...v0.2.26) (2020-03-13)


### Features

* **web:** 增加创建频道的功能 ([14c79e3](https://github.com/TRPGEngine/Client/commit/14c79e35753466c812589a613c45b4fb3aaab43a))


### Bug Fixes

* **playground:** 修复博物学初始值错误的bug ([9a1d20d](https://github.com/TRPGEngine/Client/commit/9a1d20d59af2e561e6d2a6779ce7a8bba227bb6f))
* **share:** 修复空白人物卡显示不正确的bug ([858f03e](https://github.com/TRPGEngine/Client/commit/858f03e914fa210a7bdf45964f2310bfc21bdb67))
* **web:** 修复网页端编辑个人资料无法保存的bug ([14f0ac0](https://github.com/TRPGEngine/Client/commit/14f0ac02d470115bb088ed59a186eb9a225ee0cc))
* app长久没维护发生的一系列问题 ([bc892c3](https://github.com/TRPGEngine/Client/commit/bc892c3c0bb1e7d8aa4cf0c20342cd961f9c131a))
* 修复group::updateGroupInfo事件的groupUUID参数没有处理的问题 ([a23518e](https://github.com/TRPGEngine/Client/commit/a23518e201c0122003be3d6dfe07e90c66f9c7de))

### [0.2.25](https://github.com/TRPGEngine/Client/compare/v0.2.24...v0.2.25) (2020-03-09)


### Features

* **layout:** 增加可增加自定义项的Select Tag参数 ([96ba56f](https://github.com/TRPGEngine/Client/commit/96ba56ffa3cda93e0f4a41e96579d3b5747a8464))
* **map:** move,resize and selection ([c0c90db](https://github.com/TRPGEngine/Client/commit/c0c90db8734d2793bf91b3328e1458e35a94f379))
* **web:** 人物卡的分享与取消分享, 以及fork人物卡列表 ([16f5636](https://github.com/TRPGEngine/Client/commit/16f56368721652b433d72ebf15b5450dd8c4ed31))
* **web:** 增加团角色的popover点开时可以点开完整人物卡 ([17cd2bd](https://github.com/TRPGEngine/Client/commit/17cd2bd6c6c38b8f5cbc74e66a08eb361e0bf6ca))
* **web:** 增加搜索分享人物卡的分页功能 ([a37c0dc](https://github.com/TRPGEngine/Client/commit/a37c0dcd6fc7b1f46789506c820cde37a74fd908))


### Bug Fixes

* 修复一些团状态管理的bug ([7319d7d](https://github.com/TRPGEngine/Client/commit/7319d7d2bd487a200ea8fafd6f6f0cb948f73e38))
* **layout:** 修复骰子无法正确处理括号的问题 ([446922b](https://github.com/TRPGEngine/Client/commit/446922b747c3b437a5500f2c4a903cc22260e6b7))
* **web:** 修复发送人物卡会广播的问题 ([10ab7a9](https://github.com/TRPGEngine/Client/commit/10ab7a9fae37540c8d0ea175de0e46dd6824c9be))

### [0.2.24](https://github.com/TRPGEngine/Client/compare/v0.2.23...v0.2.24) (2020-03-07)


### Bug Fixes

* **web:** 修复人物审核uuid不正确的问题 ([f2bd829](https://github.com/TRPGEngine/Client/commit/f2bd82955d24e14faca1568b76e30a1a62d887fb))

### [0.2.23](https://github.com/TRPGEngine/Client/compare/v0.2.22...v0.2.23) (2020-03-06)


### Bug Fixes

* **web:** 修复无法更新团人物卡的bug ([f552b8b](https://github.com/TRPGEngine/Client/commit/f552b8b78116c31a2b5472d80e4bd0c2ade2b99f))

### [0.2.22](https://github.com/TRPGEngine/Client/compare/v0.2.21...v0.2.22) (2020-03-05)


### Bug Fixes

* **web:** 修复某些情况下团主持人无法管理用户的bug ([f862a1b](https://github.com/TRPGEngine/Client/commit/f862a1b39c06dffc82d8515d9823121c7608572f))

### [0.2.21](https://github.com/TRPGEngine/Client/compare/v0.2.20...v0.2.21) (2020-03-04)


### Bug Fixes

* **layout:** 修复coc7人物卡缺少兴趣点显示与资产情况计算不正确的bug ([56c8fe3](https://github.com/TRPGEngine/Client/commit/56c8fe37c3c76800ad06c96d1a540d02f1b1e16c))
* **web:** 修复ActorInfo无法显示部分布局的问题 ([f27f03d](https://github.com/TRPGEngine/Client/commit/f27f03dd3e7e5096b9399b39842ff124ed4bc3c5))

### [0.2.20](https://github.com/TRPGEngine/Client/compare/v0.2.19...v0.2.20) (2020-03-02)


### Features

* **app:** 增加聊天界面滚动条不在底部时, 视为正在查询历史记录，不会自动往下滚动 ([674153d](https://github.com/TRPGEngine/Client/commit/674153d442e83fe2fa2a933ed20288932da93697))
* **group:** 增加团处理更新团角色信息的通知 ([bf910f4](https://github.com/TRPGEngine/Client/commit/bf910f45f561f46b76d96fc2e353de3405713282))
* **group:** 增加处理更新团信息的通知 ([bf8772f](https://github.com/TRPGEngine/Client/commit/bf8772f15bc3d77db5140bb8db892b7bb2823ed7))
* **layout:** tag Select 增加分组的操作 ([463e66d](https://github.com/TRPGEngine/Client/commit/463e66dffd4a2c3c9a9c724812dbc4eafd7865f8))
* **layout:** use可以传递数据到define中 ([6ec2a9a](https://github.com/TRPGEngine/Client/commit/6ec2a9aed4f35f33ac47b65117393ad943a58c7f))
* **layout:** var组件增加static标识用于优化大对象性能 ([cbf66a2](https://github.com/TRPGEngine/Client/commit/cbf66a2ba90c9878d2019f1a17ebbf6f42eb4bc3))
* **layout:** 增加 Bar 标签 ([12f9f0f](https://github.com/TRPGEngine/Client/commit/12f9f0fd0f92b6187359985ca25c6a76c1ecbd82))
* **layout:** 增加Computed组件用于动态计算 ([a4c6719](https://github.com/TRPGEngine/Client/commit/a4c67194bd79da1af5a5c5d44e493c69f6f40126))
* **layout:** 增加evalParse用于在布局里手动解析string ([c286e0e](https://github.com/TRPGEngine/Client/commit/c286e0ef77bca5ec7d962d8b98fafdea54815807))
* **layout:** 增加FieldSet组件 ([33c6f83](https://github.com/TRPGEngine/Client/commit/33c6f8377a9fa6cc1b63f6ef991e4173066d2b7d))
* **layout:** 增加Function字段 ([5c23185](https://github.com/TRPGEngine/Client/commit/5c231853b46e747dc84bd428acca2017cee33710))
* **layout:** 增加Hidden组件if参数的支持 ([4f8586e](https://github.com/TRPGEngine/Client/commit/4f8586e02dd2854e86d28d64d2e1af8678892095))
* **layout:** 增加hideLabel字段用于所有的表单组件 ([481e2a8](https://github.com/TRPGEngine/Client/commit/481e2a89482ae49464ded3b2d31b644e7a808982))
* **layout:** 增加InputNumber标签用于处理数字类型的数据 ([b657a6c](https://github.com/TRPGEngine/Client/commit/b657a6cb4e98d030ce609d49318bc4cacfb6465f))
* **layout:** 增加RollBtn ([0986c02](https://github.com/TRPGEngine/Client/commit/0986c02b1c6e513d06f37ab7c93551214b9a5cbc))
* **layout:** 增加script标签 ([a5c91b4](https://github.com/TRPGEngine/Client/commit/a5c91b4b5acd69f7e020847bd83a36798b423eab))
* **layout:** 增加Styled组件用于设置样式 ([05ce0d7](https://github.com/TRPGEngine/Client/commit/05ce0d737387e8090fb7a6dcc504584c5cddabd3))
* **layout:** 增加Tip组件并增加global属性的设置 ([d0ff06a](https://github.com/TRPGEngine/Client/commit/d0ff06a0e2b35ed7d3843249893f6ecc7a26708d))
* **layout:** 增加严格校验以显示出现值不在下拉框任意一项 ([bdfe971](https://github.com/TRPGEngine/Client/commit/bdfe971246f9e6c32c14e5135b65cf2d704a5774))
* **layout:** 增加了ForEach组件用于动态循环生成同样的布局 ([87ca429](https://github.com/TRPGEngine/Client/commit/87ca4292b62601bd043f3dd970a412c9c2ae8ae3))
* **layout:** 增加了Static标签专门用于处理静态数据 ([e52a4b2](https://github.com/TRPGEngine/Client/commit/e52a4b29adf1b67f39243da0ea120a34652c517d))
* **layout:** 增加了Var标签用于存储数据 ([bdc2e03](https://github.com/TRPGEngine/Client/commit/bdc2e03ab7dce4a900b79ec066c158a107de23db))
* **layout:** 增加更多的细节. 代码解释器现在能直接获取到global的data的数据了 ([69d3f93](https://github.com/TRPGEngine/Client/commit/69d3f9305df39b063aa18c79d9ce80ab54992ab5))
* **layout:** 增加雷达图组件用于展示数据 ([e849bb6](https://github.com/TRPGEngine/Client/commit/e849bb69221983527c68e27f7cac4790a1807d4a))
* **layout:** 输入类标签增加描述字段。用于提示用户 ([b7c437a](https://github.com/TRPGEngine/Client/commit/b7c437a2f08e51d92fddbc346177585e408a856b))
* **portal:** 发布页面增加二维码生成 方便手机用户扫码下载 ([9ad7efb](https://github.com/TRPGEngine/Client/commit/9ad7efb74a6b7e4cf5d3b99e1965609b2fc83e22))
* **portal:** 增加创建模板的页面 ([125c20f](https://github.com/TRPGEngine/Client/commit/125c20f0f4e80a929d51bd9b15ac1f5eeb95dde1))
* **portal:** 增加版本信息 ([3219950](https://github.com/TRPGEngine/Client/commit/3219950871f6c0ecb63a3d476e96bb0169f846c0))
* **web:** 会话消息中可以点开头像查看信息 ([8972dfd](https://github.com/TRPGEngine/Client/commit/8972dfd767e67aba73d536e5e34293b8b5266ef7))
* **web:** 增加发送者头像可以点开查看详细信息 ([0b2c988](https://github.com/TRPGEngine/Client/commit/0b2c988877c6c3fa2ff3dcefcab41f67b99eb2bf))
* **web:** 增加团规则的编辑与查看 ([80a7fb9](https://github.com/TRPGEngine/Client/commit/80a7fb9b5f924d179ad9b6d764d708df0b844f1f))
* **web:** 增加清理缓存的操作 ([3336fb2](https://github.com/TRPGEngine/Client/commit/3336fb282f158e5c22b22c7ef632601323353b65))


### Bug Fixes

* 修复因mix-content导致无法在https环境下载http资源的问题 ([c54cab7](https://github.com/TRPGEngine/Client/commit/c54cab711c2f8a19f46ace3f8c6f6f48d5cbbf44))
* **app:** 修复app端错误的聊天输入框最大长度的问题 ([e940157](https://github.com/TRPGEngine/Client/commit/e940157fc7e624bd125112ddcc1c6af7f7ed3768))
* **layout:** 修复Computed组件无法监听上下文变量的问题与无法返回0的问题 ([2e8eeec](https://github.com/TRPGEngine/Client/commit/2e8eeec313820b431cccf9dc5c0651dc25337934))
* **layout:** 修复Function组件无法获取上下文的问题 ([166cb8c](https://github.com/TRPGEngine/Client/commit/166cb8ccfaae88d64489e1f162a0fa24a312f83a))

### [0.2.19](https://github.com/TRPGEngine/Client/compare/v0.2.18...v0.2.19) (2020-02-07)


### Bug Fixes

* **web:** 修复一个可能会报错的bug ([e487e3d](https://github.com/TRPGEngine/Client/commit/e487e3d0c6cd0e17e51f267922cf2bc17b1af012))

### [0.2.18](https://github.com/TRPGEngine/Client/compare/v0.2.17...v0.2.18) (2020-02-07)


### Features

* **portal:** 增加免责声明页面 ([67a895a](https://github.com/TRPGEngine/Client/commit/67a895ad39c8e1d80aa22eae3e67ac2bda63c970))
* **web:** web端增加免责声明入口 ([2bbc8ec](https://github.com/TRPGEngine/Client/commit/2bbc8ec23df86c6c214ddd1ea251d2702bf9f513))
* **web:** 增加了打开下载移动版app的入口 ([d475dd8](https://github.com/TRPGEngine/Client/commit/d475dd80230abe4fb6359aa2817d8029fb8700bb))
* **web:** 搜索结果增加团人数显示 ([1c11e2c](https://github.com/TRPGEngine/Client/commit/1c11e2c69ca522ff7e373685fc8d83739a3993fb))
* **web:** 添加团时可以获取到团的基本信息 ([cbe8e0a](https://github.com/TRPGEngine/Client/commit/cbe8e0a1ea6261c8ca241b49a86f4affd4050a96))
* **web:** 网页端消息撤回显示 ([b3710d2](https://github.com/TRPGEngine/Client/commit/b3710d26bf72f7b58ff265209bbcd7548254b492))


### Bug Fixes

* 修复了getWebToken如果没有获取到userUUID仍旧会继续运行的bug ([98ff65f](https://github.com/TRPGEngine/Client/commit/98ff65f885b8efa26ebd20bb2c715b317f4fcf42))
* **web:** 修复编辑团信息时头像显示大小不正确的bug ([fc6b95e](https://github.com/TRPGEngine/Client/commit/fc6b95e0364d8dcdae582973251caa5f3ba8040e))
* 修复同意团申请报错的bug ([2fadc85](https://github.com/TRPGEngine/Client/commit/2fadc850172a69dce1052c71ac925b71e00d45ad))

### [0.2.17](https://github.com/TRPGEngine/Client/compare/v0.2.16...v0.2.17) (2020-01-23)


### Features

* **app:** 增加普通消息解析html数据并显示连接基本信息 ([56d829c](https://github.com/TRPGEngine/Client/commit/56d829c99acb73c4cd9cafa05a4de251ed06f883))
* **web:** 增加antd全局翻译 ([593e6a2](https://github.com/TRPGEngine/Client/commit/593e6a21ee76047b1f16b03323a6514b1d9a478f))
* **web:** 增加普通消息解析html数据并显示连接基本信息 ([0ab9475](https://github.com/TRPGEngine/Client/commit/0ab9475c25320534c9abeeb8de726a344cf632bf))


### Bug Fixes

* 修复removeUserConverse的操作错误 ([55a1a3b](https://github.com/TRPGEngine/Client/commit/55a1a3b361d7f98b69cac5552a633773bc208289))
* 修复string-helper#getUrls可能会返回null的bug ([b5579bc](https://github.com/TRPGEngine/Client/commit/b5579bcc6b6ca80ea39613db13dd58421b59cd3d))

### [0.2.16](https://github.com/TRPGEngine/Client/compare/v0.2.15...v0.2.16) (2020-01-18)


### Features

* 增加消息上下文管理器 ([a5502c6](https://github.com/TRPGEngine/Client/commit/a5502c6f3fd879e89ee61b08d39012d315c18c5b))
* **app:** 增加消息列表上下文用于在图片预览的时候显示多个图片切换 ([a66420d](https://github.com/TRPGEngine/Client/commit/a66420d6705b5ab2cae849b8ce1ebcfcdc0d792a))
* **web:** 为Emoji面板增加了中文的翻译 ([f1a70db](https://github.com/TRPGEngine/Client/commit/f1a70db01bcc48a07172921950652db37454fff9))
* **web:** 增加web端bbcode解析网址的操作 ([d53ad91](https://github.com/TRPGEngine/Client/commit/d53ad91010437e138cc454f456dabd5c68976a42))
* **web:** 增加图片消息可以点击打开图片预览功能 ([880bf15](https://github.com/TRPGEngine/Client/commit/880bf155509dedbabc510419608a7db699c70977))
* **web:** 增加消息列表上下文用于在图片预览的时候显示多个图片切换 ([7789c70](https://github.com/TRPGEngine/Client/commit/7789c707b00328a347a821fdca48321514023edb))


### Bug Fixes

* **web:** 修复了在window下emoji面板使用原生emoji表情会出现x轴滚动条的问题 ([dc4121a](https://github.com/TRPGEngine/Client/commit/dc4121a1ce92212a12442d5193f9ac14cf249f2c))
* **web:** 修复错误图片无法正常打开的问题 ([d1f2767](https://github.com/TRPGEngine/Client/commit/d1f2767a18c9c54d8bd41412332c60bfbdad61af))
* 修复BBCode如果没有注册的Tag就不会渲染的bug ([545dac8](https://github.com/TRPGEngine/Client/commit/545dac86a67e9e086233b6787f9d8e23fb409208))

### [0.2.15](https://github.com/TRPGEngine/Client/compare/v0.2.14...v0.2.15) (2020-01-10)


### Features

* **portal:** 增加帮助反馈 ([1c15c81](https://github.com/TRPGEngine/Client/commit/1c15c810bafac29030da64cba4e82b01ba6cc901))
* **web:** 增加独立窗口的方法 ([ca5c66c](https://github.com/TRPGEngine/Client/commit/ca5c66c13cfb09fd71775dd542789eacc8672d32))


### Bug Fixes

* **web:** 修复某些情况下ActorEdit无法更新用户数据的bug ([0a34ee0](https://github.com/TRPGEngine/Client/commit/0a34ee066a783eb16ff34edda76cd291d5f8a3c3))
* 修复更新角色信息时无法无法上传头像的bug ([8bafac2](https://github.com/TRPGEngine/Client/commit/8bafac2a4a49eef2575aeff266a991c90a73ff34))
* **web:** 修复输入法状态下输入英文按回车会直接发送消息的bug ([7a27786](https://github.com/TRPGEngine/Client/commit/7a27786f4870dbc8fd28e712d2331a0eabfdf1bf))
* **web:** 修复选择团角色后下次不会自动选择已选中的团角色的bug ([3656179](https://github.com/TRPGEngine/Client/commit/3656179cf9c2016918d21ea5be44610623b3ac1f))

### [0.2.14](https://github.com/TRPGEngine/Client/compare/v0.2.13...v0.2.14) (2020-01-03)


### Features

* **app:** 对于没有头像的人物卡卡片消息增加一个默认的头像防止过度空白 ([8641664](https://github.com/TRPGEngine/Client/commit/86416646932fb28fbd531d6c1543926c36be8e1d))
* **web:** 人物卡卡片消息如果没有头像则给一个默认头像 ([0bc7e00](https://github.com/TRPGEngine/Client/commit/0bc7e000e7d21b7177566962a0e24699db41e6eb))
* **web:** 增加一个网页端退出的确认提示 ([aa7e565](https://github.com/TRPGEngine/Client/commit/aa7e565bad9da8e5cb0aadb6b02c800f0e2e02f1))


### Bug Fixes

* 修复错误的清除正在输入聊天状态的代码 ([bd59a0c](https://github.com/TRPGEngine/Client/commit/bd59a0c6bc63fded955ede50a2e5cd8755ac4160))

### [0.2.13](https://github.com/TRPGEngine/Client/compare/v0.2.12...v0.2.13) (2019-12-31)


### Bug Fixes

* 修复聊天记录页面时间排序问题 ([b9a5edb](https://github.com/TRPGEngine/Client/commit/b9a5edb78a1afe202de1a8e5e76a969df8e13d0c))

### [0.2.12](https://github.com/TRPGEngine/Client/compare/v0.2.11...v0.2.12) (2019-12-31)


### Features

* 增加根据服务端配置来决定显示还是隐藏第三方登录的功能 ([df9be11](https://github.com/TRPGEngine/Client/commit/df9be118ea0b2390a36b1a3c70d482ada72ce900))
* **app:** 增加消息撤回功能 ([f93893a](https://github.com/TRPGEngine/Client/commit/f93893aac1c5e8868f269361eaeda0c7cb1c58c2))
* **portal:** 团成员列表增加显示所有者的用户名 ([4a464f5](https://github.com/TRPGEngine/Client/commit/4a464f55bf693f1871847d8ccd6e9130d5a0efe9))
* **portal:** 增加app下载页 ([44bd3d3](https://github.com/TRPGEngine/Client/commit/44bd3d317e7669adf2a1986536438e37a2273e75))


### Bug Fixes

* 修复trpg-actor-template模块导入方式 ([ab8ccc2](https://github.com/TRPGEngine/Client/commit/ab8ccc22457fbf1d00c0e047484bb9d2cc771dab))
* 修复更新消息内容时会无法修改列表页显示消息的问题 ([93ff0d3](https://github.com/TRPGEngine/Client/commit/93ff0d319a61e6043d78dc203c82d103e94e7887))
* **app:** 修复迁移后无法正常管理app ui状态的问题 ([456f621](https://github.com/TRPGEngine/Client/commit/456f621c8aea061a770cb22003d36a185ed129dd))

### [0.2.11](https://github.com/TRPGEngine/Client/compare/v0.2.10...v0.2.11) (2019-12-21)


### Bug Fixes

* **app:** 尝试修复在app中打开portal无法获得最新的token的问题 ([71ffde4](https://github.com/TRPGEngine/Client/commit/71ffde4895d757c26df104ef1159ed82dd0c09a4))

### [0.2.10](https://github.com/TRPGEngine/Client/compare/v0.2.9...v0.2.10) (2019-12-21)


### Features

* 增加团成员列表增加与删除的一些状态管理 ([05568b1](https://github.com/TRPGEngine/Client/commit/05568b1b50903ec427017efc2cc830ed31e77eb1))
* **app:** 增加发送消息时带入选择角色的信息 ([e102d56](https://github.com/TRPGEngine/Client/commit/e102d566108c2c3af590c86a104e660c7cc1e684))
* **portal:** 当url发生变更时。去告知外部 ([f52760b](https://github.com/TRPGEngine/Client/commit/f52760bb7150038e6a50690f97aebb3317d15d31))
* 增加新版富文本编辑器实现 ([cde78d9](https://github.com/TRPGEngine/Client/commit/cde78d98ab26a220271639cac9349f9755647884))
* 增加激活与取消推送的操作 ([ba8ca51](https://github.com/TRPGEngine/Client/commit/ba8ca5172e20cf0ad33106e22bd402f8bedeb330))


### Bug Fixes

* 修复团信息的一些状态管理可能出现的bug ([6c52232](https://github.com/TRPGEngine/Client/commit/6c52232d24133d2bce70839adecbd0ef3f074560))
* **app:** 修复团列表无法正常切换角色的bug ([b444fa2](https://github.com/TRPGEngine/Client/commit/b444fa2f710ff448098b8a4f4d5480d7df8668cb))
* **portal:** 修复actor/groupactor空列表会一直loading的bug ([09b7a84](https://github.com/TRPGEngine/Client/commit/09b7a84e50fd56c49413b9534bb6cb416631eeeb))
* **web:** 修复创建角色时的错误的检测代码 ([e2dcde2](https://github.com/TRPGEngine/Client/commit/e2dcde2772aef8ce2096c1e7ab5209880c58c726))
* **web:** 修复团人物卡申请无团角色创建使用的是旧的的问题 ([24bfbf3](https://github.com/TRPGEngine/Client/commit/24bfbf3ae1cd8b5f88df397061549bdee85302c2))

### [0.2.9](https://github.com/TRPGEngine/Client/compare/v0.2.8...v0.2.9) (2019-12-14)


### Features

* **app:** 增加团人物卡列表入口 ([e1402ad](https://github.com/TRPGEngine/Client/commit/e1402ad9a412890f89a0b7d7aae601caa7750dc1))
* **portal:** 增加删除人物卡的功能 ([84c9fe7](https://github.com/TRPGEngine/Client/commit/84c9fe7db4442a54ac5303030adb3e531de3f8cb))
* **portal:** 增加团人物卡删除功能 ([ae008c4](https://github.com/TRPGEngine/Client/commit/ae008c43662335aafdf2b6c9b7f9db5dbd67bdbe))
* **portal:** 增加待审批人物的预览 ([1f5fa50](https://github.com/TRPGEngine/Client/commit/1f5fa50e26137e9ecc7fab0cfada8642c2284dd5))
* **portal:** 模板列表推荐 ([5cbda38](https://github.com/TRPGEngine/Client/commit/5cbda380befce8ba95612d0bff3d7c39c7fcc249))
* **portal:** 角色删除操作可以通过点击mask关闭 ([5de4afa](https://github.com/TRPGEngine/Client/commit/5de4afa416c53525e5e37d260c077c352f66dfb7))
* **web:** add sw and pwa support ([84743cd](https://github.com/TRPGEngine/Client/commit/84743cdbcac0776b20b82a4c1c3a9bcf38dcb9bd))


### Bug Fixes

* **web:** 修复部分可能会出现的group_members获取失败的问题 ([28b46d7](https://github.com/TRPGEngine/Client/commit/28b46d7215cdd9aabf676b7d1ebc3196ff21b22e))
* 修复双端入团申请会出现数据异常的bug ([23beb1d](https://github.com/TRPGEngine/Client/commit/23beb1d0a80e2c16b81c911ca0a170fe5372151c))

### [0.2.8](https://github.com/TRPGEngine/Client/compare/v0.2.7...v0.2.8) (2019-12-07)


### Features

* **portal:** portal登录页面会主动尝试Token校验并跳转 ([dd7c8b8](https://github.com/TRPGEngine/Client/commit/dd7c8b822ce99882449e7df09028a8ae73fe360d))
* **web:** 增加web端对portal的支持 ([e61492d](https://github.com/TRPGEngine/Client/commit/e61492d8c4c64f33662f4d7759bf4fdfa29f09ba))
* **web:** 增加测试开发用显示容器DevContainer ([48f02aa](https://github.com/TRPGEngine/Client/commit/48f02aac711f827d6cf7c2064278751ece3179cc))


### Bug Fixes

* **web:** 修复GroupActor页面无法正常显示头像的bug ([2e1269a](https://github.com/TRPGEngine/Client/commit/2e1269a113e049695762a64c11c2ae92f0628ddb))
* **web:** 修复时间强调不生效的bug ([2c83abe](https://github.com/TRPGEngine/Client/commit/2c83abec436791d941f9bcb9af7c80cc7a2cfa31))

### [0.2.7](https://github.com/TRPGEngine/Client/compare/v0.1.16...v0.2.7) (2019-12-01)


### Features

* **app:** 增加全局错误处理 ([c24d151](https://github.com/TRPGEngine/Client/commit/c24d151cf36d2495594b1b4ff6d761e642710e94))
* **app:** 增加多账号单点登录支持 ([03defd0](https://github.com/TRPGEngine/Client/commit/03defd0cb9afecfb62ffa89e41258df87bdbdd4b))
* **app:** 角色卡消息允许查看 ([0a57d29](https://github.com/TRPGEngine/Client/commit/0a57d29d3f1bcc017dfcf57b4bb6c3a9d6facb07))


### Bug Fixes

* **app:** fix GroupRequest no group_member  error ([07e5120](https://github.com/TRPGEngine/Client/commit/07e51205728c7201ddc612817bc3eaf86f9c8151))
* **app:** 修复某些情况下可能无法正确获取团成员列表的问题 ([b555f9c](https://github.com/TRPGEngine/Client/commit/b555f9c31a355a72727f13d456511d47bd1c2334))
