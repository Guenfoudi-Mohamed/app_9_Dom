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
}


function addEvent(index){
    
    let num = box[index].children[1].children[2].children.length;
    
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    
    let mouseOver;
    let mouseOut;
    let mouseClick;    

    for(let i = 0;i<num;i++){
        mouseOver = mouseover.bind(box[index].children[1].children[2].children[0],index,i); 
        mouseOut = mouseout.bind(box[index].children[1].children[2].children[0],index,i); 
        mouseClick = mouseclick.bind(box[index].children[1].children[2].children[0],index,i); 
        arr0.push(mouseOver);
        arr1.push(mouseOut);
        arr2.push(mouseClick);
        box[index].children[1].children[2].children[i].addEventListener('mouseover',mouseOver);
        box[index].children[1].children[2].children[i].addEventListener('mouseout',mouseOut);
        box[index].children[1].children[2].children[i].addEventListener('click',mouseClick);
    }

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
        for(let x = 0;x<num;x++){
            box[index].children[1].children[2].children[x].removeEventListener('mouseover',arr0[x]);
            box[index].children[1].children[2].children[x].removeEventListener('mouseout',arr1[x]);
        }
        for(let x = 0;x<num;x++){
            if(x<=i){
                box[index].children[1].children[2].children[x].style.cssText = `color:rgb(153, 34, 233);`;
                continue;
            }
            box[index].children[1].children[2].children[x].style.cssText = `color:transparent;`;
        };
        clear[index].addEventListener('click',function(){clearEvent(index,arr2);});
    };
};

function clearEvent(index,click_events){
    let num = box[index].children[1].children[2].children.length;
    for(let i = 0;i<num;i++){
        box[index].children[1].children[2].children[i].removeAttribute('style');
        box[index].children[1].children[2].children[i].removeEventListener('click',click_events[i]);
    }
}
