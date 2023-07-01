const area = document.querySelectorAll('.area')

const callBack = (entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
        else{
            entry.target.classList.remove('active')
        }
    })
}

const options = {
    treshold: 0.5
}

const observer = new IntersectionObserver(callBack, options)

area.forEach((element)=>{
    observer.observe(element)
})