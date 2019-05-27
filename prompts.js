module.exports = [{
  type: 'list',
  name: 'template',
  message: '请选择 c-art 模板',
  choices: [{
    name: '默认模板',
    value: 'default'
  },
  {
    name: '默认模板(TypeScript)',
    value: 'default-ts'
  },
  {
    name: 'Hello c-art',
    value: 'xiaomengheiheihei/hello-c-art'
  },
  {
    name: '登录模板',
    value: 'dcloudio/uni-template-login'
  },
  {
    name: '看图模板',
    value: 'dcloudio/uni-template-picture'
  },
  {
    name: '新闻/资讯类模板',
    value: 'dcloudio/uni-template-news'
  },
  {
    name: '自定义模板',
    value: 'custom'
  }
  ],
  default: 'None'
},
{
  when: answers => answers.template === 'custom',
  type: 'input',
  name: 'repo',
  message: '请输入自定义 c-art模板地址',
  filter (input) {
    return new Promise(function (resolve, reject) {
      if (input) {
        resolve(input)
      } else {
        reject(new Error('c-art 模板地址不能为空'))
      }
    })
  }
}
]
