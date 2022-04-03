// app_9

const box = document.querySelectorAll('body .boxs .box');
const hire_me = document.querySelectorAll('body .boxs .box  .description .btns .hire_me');
const clear = document.querySelectorAll('body .boxs .box  .description .btns .clear');
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
    hire_me[i].addEventListener('click',function(){addEvent(i);});    
    clear[i].addEventListener('click',function(){clearEvent(i);});    
};

function clearEvent(index){
    let num = box[index].children[1].children[2].children.length;
    for(let i = 0;i<num;i++){
        box[index].children[1].children[2].children[i].style.cssText = `color:transparent;`;
    };
}

function addEvent(index){
    let num = box[index].children[1].children[2].children.length;
    for(let i = 0;i<num;i++){
        box[index].children[1].children[2].children[i].addEventListener('mouseover',function(){mouseover(index,i)});
        // box[index].children[1].children[2].children[i].addEventListener('mouseout',function(){mouseout(index,i)});
        box[index].children[1].children[2].children[i].addEventListener('click',function(){mouseclick(index,i)});
    };
    function mouseover(index,i){
        for(let x = 0;x<=i;x++){
            box[index].children[1].children[2].children[x].style.cssText = `color:#000;`;
        };
    };
    function mouseout(index,i){
        for(let x = 0;x<=i;x++){
            box[index].children[1].children[2].children[x].style.cssText = `color:transparent;`;
        };  
    };
    function mouseclick(index,i){
        for(let x = 0;x<=i;x++){
            box[index].children[1].children[2].children[x].style.cssText = `color:rgb(153, 34, 233);`;
        };
        for(let u = i+1;u<num;u++){
            box[index].children[1].children[2].children[u].style.cssText = `color:transparent;`;
        }
        for(let x = 0;x<num;x++){
            box[index].children[1].children[2].children[x].removeEventListener('mouseover',mouseover);
            box[index].children[1].children[2].children[x].removeEventListener('mouseout',mouseout);
        }
    };
};







/*=======================================================*/
// let arr = [];
// for(let i = 0;i<box.length;i++){
//     // arr.push(box[i].children[1].children[2]);
//     for(let x = 0;x<box[i].children[1].children[2].children.length;x++){
//         // arr[i].children[x].addEventListener('mouseover',function(){mouseOV(i,x)});
//         // // arr[i].children[x].addEventListener('mouseout',function(){mouseOT(i,x)});
//         // arr[i].children[x].addEventListener('click',function(){mouseclick(i,x)});
//         box[i].children[1].children[2].children[x].addEventListener('click',function(){mouseclick(i,x);});
//         box[i].children[1].children[2].children[x].addEventListener('mouseover',function(){mouseOV(i,x);});
//         // box[i].children[1].children[2].children[x].addEventListener('mouseout',function(){mouseOT(i,x);});
//     };
// }

// // for(let i = 0;i<star.length;i++){
// //     star[i].addEventListener('mouseover',function(){mouseOV(i)});
// // }

// function mouseOV(num,index){                 //mouse out
//     for(let i = 0;i<=index;i++){
//         box[num].children[1].children[2].children[i].style.cssText = `color:red;`;
//     }
// }

// // function mouseOT(num,index){                //mouse out
// //     for(let i = 0;i<=index;i++){
// //         box[num].children[1].children[2].children[i].style.cssText = 'color:transparent;';
// //     }
// // }
// function mouseclick(num,index){     //mouse click
//     for(let i = 0;i<=index;i++){
//         box[num].children[1].children[2].children[i].style.cssText = 'color:red;';
        
//     }
//     for(let i = index+1;i<=box[num].children[1].children[2].children.length-1;i++){
//         box[num].children[1].children[2].children[i].style.cssText = 'color:transparent;';
//     }
//     // for(let i = 0;i<=box[num].children[1].children[2].children.length-1;i++){
//     //     box[num].children[1].children[2].children[index].removeEventListener("mouseout", mouseOT);
//     // }
// }
