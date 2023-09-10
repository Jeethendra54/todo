
const user_input = document.getElementById('box')
const tag = document.querySelector('ul')

const btn = document.querySelector('button');
btn.addEventListener('click' , e=>{
    // console.log(user_input.value , typeof(user_input.value));

    const li = document.createElement('li');
    li.innerHTML += user_input.value;
    tag.prepend(li)


    user_input.value = ""
})

// git init
// git add .
// git commit -m "abcd"
// git remote add origin https://github.com/Jeethendra54/todo-list.git
// git branch -M main
// git push -u origin main 

// any mistakes ? i'm getttign an error after following these 