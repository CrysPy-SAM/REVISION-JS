const coding = ["js", "java", "python", "cpp","ruby","C"];

// coding.forEach( function (val){
//     console.log(val);
    
// })

// coding.forEach( (item) =>{
//     console.log(item);
    
// })

function printme(item){
    console.log(item);
    
}
// coding.forEach(printme)


const mycoding = [
    {
        languageName: "javaScript",
        languagefileName: "js"
    },
    {
        languageName: "paython",
        languagefileName: "py"
    },
    // {
    //     languageName: "Rubby",
    //     languagefileName: "rb"
    // },
    // {
    //     languageName: "C++",
    //     languagefileName: "cpp"
    // },
    // {
    //     languageName: "C",
    //     languagefileName: "C"
    // }
    
]

mycoding.forEach( function (value,key,array){
    console.log(key*2);
    // console.log(key);
    
    
})
// console.log(mycoding[3].languagefileName);