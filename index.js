window.onload= () => {
    fetchImgs()
}
    
const fetchImgs = () => {
    fetch("http://www.splashbase.co/api/v1/images/search?query=your query")
    .then((res) => res.json())
    .then((data)=>console.log(data))
}