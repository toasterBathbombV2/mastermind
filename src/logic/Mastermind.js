import colors from '../shared/Colors'

const generateCode = () => {
  const colorLen = len(colors)
  const codeLen = 4
  const code = []

  for (let i = 0; i < codeLen; i++) {
    code.push(colors[Math.floor(Math.random() * colorLen)])
  }

  console.log(code)
}
