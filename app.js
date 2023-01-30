let chestPart = ["UPPER CHEST", "MIDDLE CHEST", "LOWER CHEST"];
let backPart = ["LATISSIMUS DORSI", "MIDDLE BACK", "TRAPEZIUS"];
let shoulderPart = ["ANTERIOR HEAD", "LATERAL HEAD", "POSTERIOR HEAD"];
let legsPart = ["QUADRICEPS", "GLUTES", "HAMSTRINGS"]

function text_ul(arr) {
    let photoText_1 = document.querySelector("#photoText_1");
    let photoText_2 = document.querySelector("#photoText_2");
    let ul = document.createElement("ul");
    ul.style.animation = "scaleUp 0.7s forwards";
    if (photoText_1.childNodes[2] != undefined) {
        photoText_1.childNodes[2].remove();
    }
    if (photoText_2.childNodes[2] != undefined) {
        photoText_2.childNodes[2].remove();
    }
    if (arr == chestPart || arr == backPart) {
        photoText_1.append(ul);
    } else {
        photoText_2.append(ul);
    }
    arr.forEach(e => {
        let li = document.createElement("li");
        li.innerText = e;
        ul.append(li);
    });
};

// chest------######-------- text set
let black1_1 = document.querySelector("#black1_1");
let chest = document.querySelector("#chest");

black1_1.addEventListener("mouseenter", () => {
    black1_1.classList.add("blackOneMove");
    chest.classList.add("chestMove");
});
chest.addEventListener("mouseenter", () => {
    black1_1.classList.add("blackOneMove");
    chest.classList.add("chestMove");
});
black1_1.addEventListener("mouseleave", () => {
    black1_1.classList.remove("blackOneMove");
    chest.classList.remove("chestMove");
});
chest.addEventListener("mouseleave", () => {
    black1_1.classList.remove("blackOneMove");
    chest.classList.remove("chestMove");
});
// chest--------more click
let more1_1 = document.querySelector("#more1_1");

let img_chest = document.createElement("img");
img_chest.className = "img_chest_back";
img_chest.src = "/photo/chest-unsplash.jpg";
img_chest.style.display = "block";

let img_chest_div = document.createElement("div");
img_chest_div.id = "img_chest_div";
img_chest_div.append(img_chest);
photoText_1.append(img_chest_div);

more1_1.addEventListener("click", () => {
    if (img_chest_div.classList == "animatUp") {
        img_back_div.classList.remove("animatDown");
        img_chest_div.classList.remove("animatUp");
        img_back_div.classList.add("animatOrg");
        img_chest_div.classList.add("animatOrg");
        photoText_1.childNodes[2].remove();
    } else if (img_back_div.classList == "animatUp") {
        img_back_div.classList.remove("animatUp");
        img_chest_div.classList.remove("animatDown");
        img_chest_div.classList.add("animatUp");
        img_back_div.classList.add("animatDown");
        text_ul(chestPart);
    } else {
        img_back_div.classList.remove("animatOrg");
        img_chest_div.classList.remove("animatOrg");
        img_chest_div.classList.add("animatUp");
        img_back_div.classList.add("animatDown");
        text_ul(chestPart);
    }
});


// back -------#######--------text set
let black1_2 = document.querySelector("#black1_2");
let back = document.querySelector("#back");

black1_2.addEventListener("mouseenter", () => {
    black1_2.classList.add("blackOneMove");
    back.classList.add("backMove");
});
back.addEventListener("mouseenter", () => {
    black1_2.classList.add("blackOneMove");
    back.classList.add("backMove");
});
black1_2.addEventListener("mouseleave", () => {
    black1_2.classList.remove("blackOneMove");
    back.classList.remove("backMove");
});
back.addEventListener("mouseleave", () => {
    black1_2.classList.remove("blackOneMove");
    back.classList.remove("backMove");
});
// back--------more click
let more1_2 = document.querySelector("#more1_2");

let img_back = document.createElement("img");
img_back.className = "img_back_chest";
img_back.src = "/photo/back-unsplash.jpg";
img_back.style.display = "block";

let img_back_div = document.createElement("div");
img_back_div.id = "img_back_div";
img_back_div.append(img_back)
photoText_1.append(img_back_div);

more1_2.addEventListener("click", () => {
    if (img_back_div.classList == "animatUp") {
        img_back_div.classList.remove("animatUp");
        img_chest_div.classList.remove("animatDown");
        img_back_div.classList.add("animatOrg");
        img_chest_div.classList.add("animatOrg");
        photoText_1.childNodes[2].remove();
    } else if (img_chest_div.classList == "animatUp") {
        img_chest_div.classList.remove("animatUp");
        img_back_div.classList.remove("animatDown");
        img_back_div.classList.add("animatUp");
        img_chest_div.classList.add("animatDown");
        text_ul(backPart);
    } else {
        img_back_div.classList.remove("animatOrg");
        img_chest_div.classList.remove("animatOrg");
        img_back_div.classList.add("animatUp");
        img_chest_div.classList.add("animatDown");
        text_ul(backPart);
    }
});

// shoulder -----#############----text set
let black2_1 = document.querySelector("#black2_1");
let shoulder = document.querySelector("#shoulder");

black2_1.addEventListener("mouseenter", () => {
    black2_1.classList.add("blackOneMove");
    shoulder.classList.add("shoulderMove");
});
shoulder.addEventListener("mouseenter", () => {
    black2_1.classList.add("blackOneMove");
    shoulder.classList.add("shoulderMove");
});
black2_1.addEventListener("mouseleave", () => {
    black2_1.classList.remove("blackOneMove");
    shoulder.classList.remove("shoulderMove");
});
shoulder.addEventListener("mouseleave", () => {
    black2_1.classList.remove("blackOneMove");
    shoulder.classList.remove("shoulderMove");
});

// shoulder--------more click

let more2_1 = document.querySelector("#more2_1");

let img_shoulder = document.createElement("img");
img_shoulder.className = "img_shoulder_legs";
img_shoulder.src = "/photo/shoulder-unsplash.jpg";
img_shoulder.style.display = "block";

let img_shoulder_div = document.createElement("div");
img_shoulder_div.id = "img_shoulder_div";
img_shoulder_div.append(img_shoulder);
photoText_2.append(img_shoulder_div);

more2_1.addEventListener("click", () => {
    if (img_shoulder_div.classList == "animatUp") {
        img_shoulder_div.classList.remove("animatUp");
        img_legs_div.classList.remove("animatDown")
        img_legs_div.classList.add("animatOrg");
        img_shoulder_div.classList.add("animatOrg");
        photoText_2.childNodes[2].remove();
    } else if (img_legs_div.classList == "animatUp") {
        img_legs_div.classList.remove("animatUp");
        img_shoulder_div.classList.remove("animatDown");
        img_shoulder_div.classList.add("animatUp");
        img_legs_div.classList.add("animatDown");
        text_ul(shoulderPart);
    } else {
        img_legs_div.classList.remove("animatOrg");
        img_shoulder_div.classList.remove("animatOrg");
        img_shoulder_div.classList.add("animatUp");
        img_legs_div.classList.add("animatDown");
        text_ul(shoulderPart);
    }
});


// legs --------###########-------text set
let black2_2 = document.querySelector("#black2_2");
let legs = document.querySelector("#legs");

black2_2.addEventListener("mouseenter", () => {
    black2_2.classList.add("blackOneMove");
    legs.classList.add("legsMove");
});
legs.addEventListener("mouseenter", () => {
    black2_2.classList.add("blackOneMove");
    legs.classList.add("legsMove");
});
black2_2.addEventListener("mouseleave", () => {
    black2_2.classList.remove("blackOneMove");
    legs.classList.remove("legsMove");
});
legs.addEventListener("mouseleave", () => {
    black2_2.classList.remove("blackOneMove");
    legs.classList.remove("legsMove");
});

// leg--------more click
let more2_2 = document.querySelector("#more2_2");

let img_legs = document.createElement("img");
img_legs.className = "img_legs_shoulder";
img_legs.src = "/photo/legs-unsplash.jpg";
img_legs.style.display = "block";

let img_legs_div = document.createElement("div");
img_legs_div.id = "img_legs_div";
img_legs_div.append(img_legs);
photoText_2.append(img_legs_div);

more2_2.addEventListener("click", () => {
    if (img_legs_div.classList == "animatUp") {
        img_legs_div.classList.remove("animatUp");
        img_shoulder_div.classList.remove("animatDown");
        img_legs_div.classList.add("animatOrg");
        img_shoulder_div.classList.add("animatOrg");
        photoText_2.childNodes[2].remove();
    } else if (img_shoulder_div.classList == "animatUp") {
        img_shoulder_div.classList.remove("animatUp");
        img_legs_div.classList.remove("animatDown");
        img_legs_div.classList.add("animatUp");
        img_shoulder_div.classList.add("animatDown");
        text_ul(legsPart);
    }
    else {
        img_legs_div.classList.remove("animatOrg");
        img_shoulder_div.classList.remove("animatOrg");
        img_shoulder_div.classList.add("animatDown");
        img_legs_div.classList.add("animatUp");
        text_ul(legsPart);
    }
});

// This is page3((Function movement)
let outSideBox = document.querySelector("#outSideBox");
let wordPhoto = document.querySelector("#wordPhoto");
let ftPhoto = document.querySelector("#ftPhoto");
let p_defult = document.createElement("p");
let word = document.querySelector("#word");
let photo_defult = document.createElement("img");
let ati = document.querySelector("#ati");
let con_defult = document.createElement("p");
ati.append(con_defult);
ftPhoto.append(photo_defult);
outSideBox.append(wordPhoto, ati);
wordPhoto.append(word, ftPhoto);
word.append(p_defult);
con_defult.innerText = "Kettlebells are known to improve overall strength, core power, balance, flexibility, and coordination while also melting fat and sculpting healthy and lean muscles."
p_defult.innerText = "Kettlebell";
photo_defult.src = "/photo/kettle-unsplash.jpg"


// ----------make icons------------
const icons = ["/icon/icons8-battleropes.png",
    "/icon/icons8-deadlift.png",
    "/icon/icons8-kettlebell.png",
    "/icon/icons8-trx.png",
    "/icon/icons8-boxing.png"]

const photos = ["/photo/battlerope-unsplash.jpg",
    "/photo/deadlift-unsplash.jpg",
    "/photo/kettle-unsplash.jpg",
    "/photo/trx-unsplash.jpg",
    "/photo/boxing-unsplash.jpg"]

const content = ["Battling ropes are used for fitness training to increase full body strength and conditioning. It can be alternatively used as a resistance training technique. ",
    "The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso perpendicular to the floor, before being placed back on the ground.",
    "Kettlebells are known to improve overall strength, core power, balance, flexibility, and coordination while also melting fat and sculpting healthy and lean muscles.",
    "TRX is a form of suspension training that uses body weight exercises to develop strength, balance, flexibility and core stability simultaneously.",
    "Typical boxing exercise includes movement and footwork drills to evade punches, as well as punching drills on equipment like heavy bags, speed bags, and focus mitts."]

const p_name = ["BattleRopes", "Deadlift", "Kettlebell", "TRX", "Boxing"]

let rightIcon = document.querySelector("#rightIcon");
let mainIcon = document.querySelector("#mainIcon");
let leftIcon = document.querySelector("#leftIcon");
let mid = icons.length % 3;

let show_3 = 0;
let show_1 = 0;
let show_2 = 0;
let show_0 = 0;
let show_4 = 0;

icons.forEach(e => {
    let icon = document.createElement("img");
    if (mainIcon.childNodes.length === 0) {
        icon.src = icons[mid];
        mainIcon.append(icon);
        show_2 = mid;
    } if (rightIcon.childNodes.length === 0) {
        for (j = icons.length - 1; j > mid; j--) {
            if (j - mid == 1) {
                icon.src = icons[j];
                rightIcon.append(icon);
                show_3 = j;
            }
        }
    } if (leftIcon.childNodes.length === 0) {
        for (i = 0; i < mid; i++) {
            if (mid - i == 1) {
                icon.src = icons[i];
                leftIcon.append(icon);
                show_1 = i;
            }
        }
    }
    function showIfo(n) {
        p_defult.innerText = p_name[n];
        con_defult.innerText = content[n];
        photo_defult.src = photos[n];
        icon.classList.add("jump");
    };
    icon.addEventListener("mouseenter", e => {
        if (e.target.src.indexOf(icons[show_1]) != -1) {
            showIfo(show_1)
        } if (e.target.src.indexOf(icons[show_3]) != -1) {
            showIfo(show_3)
        } if (e.target.src.indexOf(icons[show_2]) != -1) {
            showIfo(show_2)
        } if (e.target.src.indexOf(icons[show_0]) != -1) {
            showIfo(show_0)
        } if (e.target.src.indexOf(icons[show_4]) != -1) {
            showIfo(show_4)
        }
    })
    icon.addEventListener("mouseleave", e => {
        icon.classList.remove("jump")
    })
});


// //  --------button function setting-------
function buttonSet() {
    for (j = icons.length - 1; j > m; j--) {
        if (j - m == 1) {
            rightIcon.childNodes[0].src = icons[j]
            show_0 = j;
        }
    }
    for (i = 0; i < m; i++) {
        if (m - i == 1) {
            leftIcon.childNodes[0].src = icons[i]
            show_4 = i;
        }
    }
};

let btn_next = document.querySelector("#next");
let btn_pre = document.querySelector("#pre");

btn_pre.addEventListener("click", e => {
  if(mainIcon.childNodes[0].src.indexOf(icons[2])!=-1){
    m=1;
    mainIcon.childNodes[0].src = icons[m]
    buttonSet()
  }else if(mainIcon.childNodes[0].src.indexOf(icons[3])!=-1){
    m=2;
    mainIcon.childNodes[0].src = icons[m]
    buttonSet()
  }
     
});


btn_next.addEventListener("click", e => {
    if(mainIcon.childNodes[0].src.indexOf(icons[2])!=-1){
        m=3;
        mainIcon.childNodes[0].src = icons[m]
        buttonSet()
      }else if(mainIcon.childNodes[0].src.indexOf(icons[1])!=-1){
        m=2;
        mainIcon.childNodes[0].src = icons[m]
        buttonSet()
      }
});

// ----------page four-------------
let btn_cal= document.querySelector("#cal");
let ipt_age= document.querySelector("#age");
let ipt_wet= document.querySelector("#weight");
let ipt_het= document.querySelector("#height");


// ------calculate--------
function bmi (w,h){
    m=Math.pow((h/100),2);
    return w/m;
 };
 function tools (k){
    if(k<18.5){
        return "Underweight";
    }else if(k>=18.5 && k<25){
        return "Normal Weight";
    }else if(k>=25 && k<30){
        return "Overweight";
    }else if(k>30){
        return "Obese";
    }
 };
 function bmr (w,h,e){
    let ipt_gdr= document.querySelector('input[name="gerder"]:checked');
    let wN=Number(w);
    let hN=Number(h);
    let eN=Number(e);
    if(ipt_gdr.value=="male"){
      return  66+(13.7*wN+5*hN-6.8*eN)
    }else{
        return  665+(9.6*wN+1.8*hN-4.7*eN)
    }
};

btn_cal.addEventListener("click",e=>{

    let forms =document.querySelector("#forms");
    let form_R= document.createElement("form");
    let p =document.createElement("p");
    let ul= document.createElement("ul");
    let li_1= document.createElement("li");
    let li_2= document.createElement("li");
    let li_3= document.createElement("li");
    ul.id="rst";
    form_R.id="form_R";
    p.innerText="RESULT";
    forms.append(form_R);
    ul.append(p,li_1,li_2,li_3);

        let x = document.querySelector("select").selectedIndex;
        let y = document.querySelector("select").options;
        function tdee(m) {
            if(y[x].index==3){
               return m*1.725
            }else if(y[x].index==2){
                return m*1.55
            }else if(y[x].index==1){
                return m*1.375
            }else{
                return m*1.2
            }
        };
    
        e.preventDefault();
        
        let result_bmr=bmr(ipt_wet.value,ipt_het.value,ipt_age.value);
        let result_bmi =bmi(ipt_wet.value,ipt_het.value);
        let result_tdee=Math.round(tdee(result_bmr)).toLocaleString();
        let result_tool=tools(result_bmi);
        let ipt_gdr= document.querySelector('input[name="gerder"]:checked');
        let ipt_gdr_dft=document.querySelector("#male");
        let opt_dft=document.querySelector("#sty");
    
        li_1.innerText="● You're "+ipt_age.value+" y/o "+ipt_gdr.value+" who is "+ipt_het.value+" cm tall & weight "+ipt_wet.value+" kg with "+y[x].value+"."
        li_2.innerText="● "+y[x].value+" "+result_tdee+" calories per day! "
        li_3.innerText="● BMI Score : " + result_bmi.toFixed(1)+ "\n Your BMI is "+result_bmi.toFixed(1)+", which means you are classified as "+result_tool+"..."
        
        ipt_age.value="";
        ipt_het.value="";
        ipt_wet.value="";
        ipt_gdr_dft.checked=true;
        opt_dft.selected=true;


    let btns= document.createElement("div");
    btns.id="btns";
    let btn_dont =document.createElement("button");
    btn_dont.id="dont";
    btn_dont.innerText="I don’t care...";
    let btn_wanna =document.createElement("button");
    btn_wanna.id="wanna";
    btn_wanna.innerText="I wanna change !";
    btns.append(btn_dont,btn_wanna);

    let cover =document.createElement("div");
    cover.id="cover";
    let coverDontMessege =document.createElement("div");
    coverDontMessege.id="dontMessege";
    let coverWannaMessege =document.createElement("div");
    coverWannaMessege.id="wannaMessege";
    form_R.append(p,ul,btns,cover,coverDontMessege,coverWannaMessege);

    btn_dont.addEventListener("click",e=>{
        cover.classList.add("covered");
        coverDontMessege.classList.add("dontMessegeText");
        coverDontMessege.innerText="Did not find what you want?";
        coverDontMessege.addEventListener("click",e=>{
            coverDontMessege.classList.remove("dontMessegeText");
            coverDontMessege.innerText="";
            cover.classList.remove("covered");
            form_R.remove();
        })
    });

    btn_wanna.addEventListener("click",e=>{
        cover.classList.add("covered");
        coverWannaMessege.classList.add("wannaMessegeText");
        coverWannaMessege.innerText="Please leave your contact information.We will serve you as soon as possible.";
        coverWannaMessege.addEventListener("click",e=>{
            coverWannaMessege.classList.remove("wannaMessegeText");
            coverWannaMessege.innerText="";
            cover.classList.remove("covered");
            form_R.remove();
        })
    });
});


// ------go top setting-------
let goTop= document.querySelector("#scrollToTop");
window.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop == 0) {
        goTop.style.display="none";
    } else if (scrollTop>100){
        goTop.style.display="block";
        goTop.addEventListener("click",e=>{
            let html= document.querySelector("html");
                html.scrollTop=0;
            });
    } 
});

