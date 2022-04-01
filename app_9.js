// app_9

const box = document.querySelectorAll('body .boxs .box');
const img = ['images/photo_1.jpg','images/photo_2.jpg','images/photo_1.jpg','images/photo_2.jpg'];
const names = ['Adnan Guenfoudi','Mohamed Guenfoudi','Mohamed Guenfoudi','hamid guenfoudi'];
const profession = ['Teacher','Devloper','Teacher','Devloper'];
function create(index){
    box[index].children[0].children[0].src = img[index];
    box[index].children[1].children[0].textContent = names[index];
    box[index].children[1].children[1].textContent = profession[index];
};
for(let i = 0;i<box.length;i++){
    create(i);
};

let arr = [];
for(let i = 0;i<box.length;i++){
    // arr.push(box[i].children[1].children[2]);
    for(let x = 0;x<box[i].children[1].children[2].children.length;x++){
        // arr[i].children[x].addEventListener('mouseover',function(){mouseOV(i,x)});
        // // arr[i].children[x].addEventListener('mouseout',function(){mouseOT(i,x)});
        // arr[i].children[x].addEventListener('click',function(){mouseclick(i,x)});
        box[i].children[1].children[2].children[x].addEventListener('click',function(){mouseclick(i,x);});
        box[i].children[1].children[2].children[x].addEventListener('mouseover',function(){mouseOV(i,x);});
        // box[i].children[1].children[2].children[x].addEventListener('mouseout',function(){mouseOT(i,x);});
    };
}

// for(let i = 0;i<star.length;i++){
//     star[i].addEventListener('mouseover',function(){mouseOV(i)});
// }

function mouseOV(num,index){                 //mouse out
    for(let i = 0;i<=index;i++){
        box[num].children[1].children[2].children[i].style.cssText = `color:red;`;
    }
}

// function mouseOT(num,index){                //mouse out
//     for(let i = 0;i<=index;i++){
//         box[num].children[1].children[2].children[i].style.cssText = 'color:transparent;';
//     }
// }
function mouseclick(num,index){     //mouse click
    for(let i = 0;i<=index;i++){
        box[num].children[1].children[2].children[i].style.cssText = 'color:red;';
        
    }
    for(let i = index+1;i<=box[num].children[1].children[2].children.length-1;i++){
        box[num].children[1].children[2].children[i].style.cssText = 'color:transparent;';
    }
    // for(let i = 0;i<=box[num].children[1].children[2].children.length-1;i++){
    //     box[num].children[1].children[2].children[index].removeEventListener("mouseout", mouseOT);
    // }
    
}