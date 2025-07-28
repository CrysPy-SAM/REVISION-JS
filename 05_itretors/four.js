const myObject = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shotcut  is for  ${myObject[key]}`);
}

const programming = ["js", "ruby", "java", "cpp", "swift"];
for (const key in programming) {
    // console.log(programming[key]);
    
}

const map = new Map()
map.set('IN', "india" )
map.set('USA', "United State of America")
map.set('Fr',"France")

for (const key in map) {
   console.log(map);
   
}