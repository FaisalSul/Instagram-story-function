var arr =[
    {PP:'https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:"https://images.unsplash.com/photo-1641276344510-edd4131a4c21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    name:'Mard Wood'},

    {PP:'https://images.unsplash.com/photo-1537162998323-3d3675e0e87c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    story:"https://images.unsplash.com/photo-1600668811601-4847b7efd821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    name:'Johs Johnson'},
    {PP:'https://plus.unsplash.com/premium_photo-1680339680335-7e3b8572fc00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
    story:"https://images.unsplash.com/photo-1616524629947-967525666467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    name:'John Bush'},

    {PP:'https://images.unsplash.com/photo-1580798966872-8b1414293e55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
    story:"https://images.unsplash.com/photo-1589805518140-f88a50fd1dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    name:'Danny Bonz'}
]

var str = "";

arr.forEach((element, index)=>{
    str += `<div class="story">
    <img id ="${index}" src="${element.PP}" alt="">
    <h6>${element.name}</h6>
</div> `
})

document.querySelector('.newdiv').innerHTML = str;

document.querySelector('.newdiv').addEventListener('click', (dets)=>{
    document.querySelector('.full-screen').style.display = 'block';
    document.querySelector('.full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(()=>{
        document.querySelector('.full-screen').style.display = 'none';
    },3000)
})