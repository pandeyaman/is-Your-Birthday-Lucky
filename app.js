const birthDate = document.querySelector(".input-date");
const luckyNumber = document.querySelector(".input-lucky-number");
const remarks = document.querySelector(".span-remark");
const btnCheck  = document.querySelector(".btn-check");
const imgReaction = document.querySelector(".img-reaction");
const divComment = document.querySelector(".div-comments");

const checkBirthdateLucky = () =>{
    if(birthDate.value == "" || luckyNumber.value == ""){
        alert("emot");
    }
    else{
        let date = birthDate.value.toString().replaceAll("-","");
        console.log(date);
        let sumOfBirthDate = calculateSum(Number(date));
        console.log(sumOfBirthDate);
        let isLucky = checkLucky(sumOfBirthDate,Number(luckyNumber.value));
        printRemark(isLucky);
    }
}

const calculateSum = (Bdate) => {
    let total = 0;
    while(Bdate>0){
        let lastDigit = Bdate%10;
        total = total + lastDigit;
        Bdate = Math.floor(Bdate/10);
    }
    return total;
}

const checkLucky=(total,num)=>{
    return total%num==0?true:false;
}

const printRemark = (lucky) =>{
    if(lucky){
        divComment.style.display = "block";
        remarks.textContent = "LUCKY HAI BOSS";
        imgReaction.src="/img/lucky.png";
        
    }
    else{
        remarks.textContent = "NOT LUCKY DUDE";
        divComment.style.display = "block";
        imgReaction.src="/img/notlucky.png";

    }
}


btnCheck.addEventListener('click',checkBirthdateLucky);