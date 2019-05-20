module.exports = [{
  type: 'list',
  name: 'template',
  message: '请选择 c-art 模板',
  choices: [{
    name: '默认模板',
    value: 'default'
  }
  ],
  default: 'None'
},
// {
//   when: answers => answers.template === 'custom',
//   type: 'input',
//   name: 'repo',
//   message: '请输入自定义 c-art 模板地址',
//   filter (input) {
//     return new Promise(function (resolve, reject) {
//       if (input) {
//         resolve(input)
//       } else {
//         reject(new Error('c-art 模板地址不能为空'))
//       }
//     })
//   }
// }
]
