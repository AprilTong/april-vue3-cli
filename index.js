#!/usr/bin/env node

const program = require('commander')
const download = require('download-git-repo')
// 版本信息
program.version(require('./package.json').version)

// 创建指令
program.command('create <projectName>').action((projectName) => {
    // 仓库地址（地址前必须加"direct:"），仓库clone的文件夹名，是否clone，成功失败的回调
    // 此处克隆的项目是我vue3+vite搭建的一个模版项目
    download('direct:https://github.com/AprilTong/vue3-vite-template.git', projectName, { clone: true }, (err) => {
        // 个人分析出的两种错误情况：1 同目录项目名已存在 2 储存库出现问题
        if (err) return console.log('项目已存在或存储库错误！')
        // 创建成功 提示
        console.log('项目创建成功')
    })
})
// 解析指令
program.parse(process.argv)
