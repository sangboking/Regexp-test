let str = `
010-1234-5678
cowg001@naver.com
https://www.omdbapi.com/?apikey=7035c69c&s=frozen
The sanghoon themin jinsu fox the htop dog
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

console.log(
  str.match(/(?<=@).{1,}/g)
)