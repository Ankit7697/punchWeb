let codein = document.querySelector("#codein");
let namein = document.querySelector("#namein");

let dateA = document.querySelector(".idate");
let TinA = document.querySelector(".Tin");
let ToutA = document.querySelector(".Tout");
let subtn = document.querySelector(".subtn");
let P1 = document.querySelector(".p1");
let P2 = document.querySelector(".p2");
let P3 = document.querySelector(".p3");
let P4 = document.querySelector(".p4");
let P5 = document.querySelector(".p5");
let spa = document.querySelector(".spa");
let spa2 = document.querySelector(".spa2");

let code = document.querySelector(".code");
let Name = document.querySelector(".Name");
let din = document.querySelector("table tr td");

let container = document.querySelector(".container");
let person = document.querySelector(".Person1");
let person2 = document.querySelector(".Person2");
let List = document.querySelector(".new-page");
let Back = document.querySelector(".back");

let addbtn = document.querySelector(".addbtn");
let delbtn = document.querySelector(".delbtn");

let mode = document.querySelector(".mode");
let body1 = document.querySelector(".body1");
let mdp = document.querySelector(".mdp");
let md = document.querySelector(".md");

let Np = document.querySelector(".nav2 p");
let imp = document.querySelector(".imp");


(function () {
    person.style.display = "none";
    codein.focus();
})();

List.addEventListener("click", () => {
    container.style.display = "none";
    person.style.display = "";
});


Back.addEventListener("click", () => {
    person.style.display = "none";
    container.style.display = "";
});



let bcmode = true;

const chamode = () => {
    if (bcmode) {
        body1.style.backgroundColor = "#242e2f";
        body1.style.color = "#fff";
        btn.style.boxShadow = "2px 3px 8px #fff";
        mode.classList.add("modem");
        mode.classList.remove("modem2");
        mdp.innerText = "Light";
        mdp.style.color = "#fff";
        mdp.style.marginLeft = "6px";
        spa.style.boxShadow = "-4px -4px 8px #fff";
        spa2.style.boxShadow = "4px 4px 8px #fff";
        dateA.style.boxShadow = "2px 2px 10px #fff";
        Np.style.textShadow = "3px 3px 7px #fff";
        TinA.style.boxShadow = "2px 2px 10px #fff";
        ToutA.style.boxShadow = "2px 2px 10px #fff";
        subtn.style.boxShadow = "3px 4px 10px #fff";
        imp.style.boxShadow = "3px 3px 10px #fff";
        List.style.boxShadow = "2px 3px 8px #fff";
        Back.style.boxShadow = "3px 3px 10px #fff";
        bcmode = false;
    }else{
        body1.style.backgroundColor = "#fff";
        body1.style.color = "#000";
        btn.style.boxShadow = "2px 3px 8px #000";
        mode.classList.remove("modem");
        mode.classList.add("modem2");
        mdp.innerText = "Dark";
        mdp.style.color = "#000";
        mdp.style.marginLeft = "24px";
        spa.style.boxShadow = "-4px -4px 8px #787171";
        spa2.style.boxShadow = "4px 4px 8px #787171";
        dateA.style.boxShadow = "2px 2px 10px #454141";
        Np.style.textShadow = "3px 3px 7px #454141";
        TinA.style.boxShadow = "3px 3px 10px #454141";
        ToutA.style.boxShadow = "3px 3px 10px #454141";
        subtn.style.boxShadow = "3px 4px 10px #454141";
        imp.style.boxShadow = "3px 3px 10px #000";
        List.style.boxShadow = "2px 3px 8px #000";
        Back.style.boxShadow = "3px 3px 10px #000";
        bcmode = true;
    };
};

mode.addEventListener("click", chamode);
mdp.addEventListener("click", chamode);

function calculateTimeDifference() {
    const time1Input = document.getElementById('time1');
    const time2Input = document.getElementById('time2');
    const resultSpan = document.getElementById('para2');
    const ParaOf_OT = document.getElementById('para3');
    const DutyTime = '08:00';
    
    const time1Value = time1Input.value;
    const time2Value = time2Input.value;
    
    if (!time1Value || !time2Value) {
    resultSpan.textContent = 'Please select both times.';
    resultSpan.style.color = "red";
    return;
    }
    
    // Convert time strings to Date objects for easier calculation
    // We use a dummy date (like 1970-01-01) as only the time part matters
    const date1 = new Date(`1970-01-01T${time1Value}:00Z`);
    const date2 = new Date(`1970-01-01T${time2Value}:00Z`);
    const Dtime = new Date(`1970-01-01T${DutyTime}:00Z`);


    // console.log(date2.getTime(),"d2");
    // console.log(date1.getTime(),"d1");
    
    // Calculate the difference in milliseconds
    let diffMilliseconds = date2.getTime() - date1.getTime();

    // console.log(diffMilliseconds);
    
    let T1 = Dtime.getTime();
    
    // console.log(T1);

    let T2 = diffMilliseconds - T1;
    
    // Handle cases where the second time is earlier than the first on the same day
    if (diffMilliseconds < 0) {
      // Assume the second time is on the next day
      diffMilliseconds += 24 * 60 * 60 * 1000; // Add milliseconds in a day
    };

    // Handle cases where the second time is earlier than the first on the same day
    if (T2 < 0) {
        T2 = 0;
    };
    
    // Convert milliseconds to hours, minutes, and seconds
    const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffMilliseconds % (1000 * 60)) / 1000);

    //Convert milliseconds to hours, minutes, and seconds for OverTime Duty
    const diff_OT_Hours = Math.floor(T2 / (1000 * 60 * 60));
    const diff_OT_Minutes = Math.floor((T2 % (1000 * 60 * 60)) / (1000 * 60));
    const diff_OT_Seconds = Math.floor((T2 % (1000 * 60)) / 1000);
    
    // Format the result
    const formattedResult = `${diffHours} hours, ${diffMinutes} minutes, ${diffSeconds} seconds`;

    // Format the result for OT
    var x = `${diff_OT_Hours} hours, ${diff_OT_Minutes} minutes, ${diff_OT_Seconds} seconds`;

    resultSpan.textContent = formattedResult;
    ParaOf_OT.textContent = x;
}



let codelist = {
    A_001 : "Ankit",
    A_002 : "Pinku",
    A_003 : "Pinki",
    A_004 : "Rinki"
};


codein.addEventListener("keyup", () =>{
    if (namein.value == "") {
        if (codein.value != "") {
            let a = codein.value.trim();
            for (let cl in codelist) {
                if (cl.toString() === a) {
                    namein.placeholder = codelist[cl];
                    return;
                }else {
                    namein.placeholder = "Enter Name...";
                }
            };
        }else {
            namein.placeholder = "Enter Name...";
        };
    };
});

namein.addEventListener("keyup", () => {
    if (codein.value == "") {
        if (namein.value != "") {
            let a = namein.value.toLowerCase().trim();
            for (let cl in codelist) {
                if (codelist[cl].toString().toLowerCase() === a) {
                    codein.placeholder = cl;
                    return;
                }else {
                    codein.placeholder = "Enter Code";
                };
            };
        }else {
            codein.placeholder = "Enter Code";
        };
    };
});


class MyDataClass {
    
    constructor(EmpCode, EmpName, Att_Date) {
        
        this.EmpCode = EmpCode,
        this.EmpName = EmpName;
        this.Att_Date = Att_Date;


        // MyDataClass.existingIds.add(EmpCode);
        // Add the new ID to out tracking Set

        // console.log(MyDataClass.existingIds)
    };    
    // MyDataClass.store();
    // EmpCode, EmpName, Att_Date, Time_In, Time_Out, Total_time, OT_time
    
};

// function store(a, b, c){
    
//     localStorage.setItem("EmpName", JSON.stringify(b));
//     localStorage.setItem("Att_Date", JSON.stringify(c));
//     // localStorage.setItem("Time_In", JSON.stringify(d));
//     // localStorage.setItem("Time_Out", JSON.stringify(f));
//     // localStorage.setItem("Total_time", JSON.stringify(e));
//     // localStorage.setItem("OT_time", JSON.stringify(g));
// };

    











// --- Demonstrating uniqueness Check ---



const existingIds = new Set();
// Use a Set for efficient uniqueness checks"    
const storeObjects = {};
// Use a object for store data"



let keyLength = localStorage.length;
// for reload get data"

const keyLen = localStorage.length;

function getLocalData() {

    function crDiv(stCd, stNm,) {
        let div = document.createElement("div");
        div.className = "Person1";
        div.innerHTML = `<div class = "Person2">
            <div class="code">${stCd}</div>
            <div class="Name">${stNm}</div>
            <table>
                <tr>
                    <th colspan="2">1</th>
                    <th colspan="2">2</th>
                    <th colspan="2">3</th>
                    <th colspan="2">4</th>
                    <th colspan="2">5</th>
                    <th colspan="2">6</th>
                    <th colspan="2">7</th>
                    <th colspan="2">8</th>
                    <th colspan="2">9</th>
                    <th colspan="2">10</th>
                    <th colspan="2">11</th>
                    <th colspan="2">12</th>
                    <th colspan="2">13</th>
                    <th colspan="2">14</th>
                    <th colspan="2">15</th>
                    <th colspan="2">16</th>
                    <th colspan="2">17</th>
                    <th colspan="2">18</th>
                    <th colspan="2">19</th>
                    <th colspan="2">20</th>
                    <th colspan="2">21</th>
                    <th colspan="2">22</th>
                    <th colspan="2">23</th>
                    <th colspan="2">24</th>
                    <th colspan="2">25</th>
                    <th colspan="2">26</th>
                    <th colspan="2">27</th>
                    <th colspan="2">28</th>
                    <th colspan="2">29</th>
                    <th colspan="2">30</th>
                    <th colspan="2">31</th>
                </tr>
                <tr>
                    <td><p>insjnflsknflT</p></td>
                    <td><p>outTaekjfhsfan</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                    <td><p>inT</p></td>
                    <td><p>outT</p></td>
                 </tr>
                 <tr>
                    <td colspan="2"><p>otTkjsaflj;kjksdkfa</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                    <td colspan="2"><p>otT</p></td>
                 </tr>
             </table>
         </div>`;
        return div;
    };
    
    for (let i = keyLength; i >= 1; i--) {

        let kL = keyLen-i;
    
        let nameOfkey = "key" + JSON.stringify(kL+1);
        let dT = JSON.parse(localStorage.getItem(nameOfkey));
        
        let setCode = dT.EmpCode;
        existingIds.add(setCode);
        console.log(existingIds);
    
        let setName = dT.EmpName.toLowerCase().trim();
        let setDate = dT.Att_Date;
        console.log(setDate);
        
        const creatObj = {};
        const cary = creatObj;
                
        cary[setCode] = setName;
        console.log(creatObj);

        storeObjects[JSON.stringify(cary)] = setDate;
        console.log(storeObjects);


        let callDiv = crDiv(setCode, setName);
        console.log(callDiv);
    	person.append(callDiv);
        
        console.log(i,dT);
        keyLength--;
    };
    
    
};



function delPerson(code,name) {
    try {
        if (existingIds.has(code)) {
            
            existingIds.delete(code);
            existingNames.remove(name.toLowerCase().trim());
            
        } else {
            throw new Error(`Code ${code} is not exist. \nPlease provide a another Code.`);
        };
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    };
        
};


let vari = localStorage.length + 1;
function object(func) {
    try {
        
        const dateObj = {
            Date : dateA.value,
            timeIn : TinA.value,
            timeOut : ToutA.value,
            workTime : P2.textContent,
            overTime : P3.textContent
        };
        
        const objA = new MyDataClass(codein.value, namein.value, dateObj);
    
        myKey = "key" + JSON.stringify(vari);
        localStorage.setItem(myKey, JSON.stringify(objA));
        
        Number(vari++);
        
        console.log("Created objA:", objA);
        
        return objA;
        
    } catch (error) {
            console.error(error.message);
            alert(error.message);
    };
    
    // reloadData;
    
    function addPerson(code,name) {
        try {
            if (existingIds.has(code)) {
                throw new Error(`Code ${code} already exists. \nPlease provide a unique Code.`);
            } else {                    
                existingIds.add(code);
                console.log(existingIds);
                existingNames.push(name.toLowerCase().trim());
                console.log(existingNames);
            };
        } catch (error) {
            console.error(error.message);
            alert(error.message);
        };
        
    };
};

try {
    document.onkeydown = function (e) {
        // console.log("Key code is: ", e.keyCode)
        if (e.keyCode == 13) {
            if (TinA.value != false && ToutA.value != false) {
                dateA.classList.remove("Cred");
                TinA.classList.remove("Cred");
                ToutA.classList.remove("Cred");
                P1.innerText = dateA.value;                
                calculateTimeDifference();
                if (codein.value != false && namein.value != false) {
                    if (dateA.value != false) {
                        object();
                        getLocalData();
                        // obj_data = Object();
                        // console.log(obj_data);

                        // const ws = XLSX.utils.json_to_sheet(obj_data);
                
                        // const wb = XLSX.utils.book_new();
                        
                        // XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
                        
                        // XLSX.writeFile(wb, "demo.xlsx");

                    } else {
                        dateA.classList.add("Cred");
                        alert("Please Enter Date");
                    };
                };          
            } else{
                TinA.classList.add("Cred");
                ToutA.classList.add("Cred");
                alert("If you want to Calculate Time \n Please fill Both Time Section");
            };
        } else{
            console.log("ppp");
        };
    };
        
    if (subtn) {
        subtn.addEventListener("click", () => {
            if (TinA.value != false && ToutA.value != false) {
                dateA.classList.remove("Cred");
                TinA.classList.remove("Cred");
                ToutA.classList.remove("Cred");
                P1.innerText = dateA.value;                
                calculateTimeDifference();
                if (codein.value != false && namein.value != false) {
                    if (dateA.value != false) {
                        object();
                        getLocalData();
                        // obj_data = Object();
                        // console.log(obj_data);

                        // const ws = XLSX.utils.json_to_sheet(obj_data);
                
                        // const wb = XLSX.utils.book_new();
                        
                        // XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
                        
                        // XLSX.writeFile(wb, "demo.xlsx");

                    } else {
                        dateA.classList.add("Cred");
                        alert("Please Enter Date");
                    };
                };          
            } else{
                TinA.classList.add("Cred");
                ToutA.classList.add("Cred");
                alert("If you want to Calculate Time \n Please fill Both Time Section");
            };
        });
    };
    
    addbtn.addEventListener("click", () => {
        let userChange = confirm("Do you want Add Persons");
        if (userChange) {
            if (codein.value != false && namein.value != false) {
                addPerson(codein.value,namein.value);
            } else {
                alert("Please fill Code and Name Sections");
            };        
        };   
    });
    
    delbtn.addEventListener("click", () => {
        let userChange = confirm("Do you want Delete Person");
        if (userChange) {
            if (codein.value != false && namein.value != false) {
                delPerson(codein.value,namein.value);
            } else {
                alert("Please fill Code and Name Sections");
            };        
        };
    });

} catch (error){
    console.error(error.message);
    alert(error.message);
};

window.onload = function(){
    getLocalData();
};




let geI = localStorage.getItem("EmpCode");

if(geI){
    code.textContent = JSON.parse(localStorage.getItem("EmpCode"));
};

// --- Method 2nd ---

// class MyDataClass {
//   constructor(id, name, value1, value2, value3) {
//     this.id = id;
//     this.name = name;
//     this.value1 = value1;
//     this.value2 = value2;
//     this.value3 = value3;
//   }
// }

// // A collection to store our created objects and check for uniqueness
// const myDataCollection = new Map(); // Using a Map to store objects by their ID

// function createMyDataObject(id, name, value1, value2, value3) {
//   if (myDataCollection.has(id)) {
//     console.warn(`Attempted to create object with duplicate ID: "${id}". Returning existing object.`);
//     return myDataCollection.get(id); // Optionally return the existing object
//     // Or, you could throw an error:
//     // throw new Error(`ID "${id}" already exists.`);
//   }

//   const newObject = new MyDataClass(id, name, value1, value2, value3);
//   myDataCollection.set(id, newObject); // Store the new object in our collection
//   return newObject;
// }

// // --- Demonstrating Uniqueness Check with Factory Function ---

// const dataObj1 = createMyDataObject("ITEM_A", "First Item", 100, 200, "foo");
// console.log("Created dataObj1:", dataObj1);

// const dataObj2 = createMyDataObject("ITEM_B", "Second Item", 150, 250, "bar");
// console.log("Created dataObj2:", dataObj2);

// const dataObj3 = createMyDataObject("ITEM_A", "Duplicate Item", 300, 400, "baz"); // Attempting to create with existing ID
// console.log("Result of dataObj3 creation attempt:", dataObj3); // Will be the same as dataObj1 if returning existing

// console.log("\nAll objects in collection:");
// myDataCollection.forEach((value, key) => {
//   console.log(`ID: ${key}, Object:`, value);
// });

// // Verify if dataObj1 and dataObj3 are the same object reference
// console.log("dataObj1 === dataObj3:", dataObj1 === dataObj3);
// --Newcode--onsole.log("\nAll objects in collection:");
// myDataCollection.forEach((value, key) => {
//   console.log(`ID: ${key}, Object:`, value);
// });

// // Verify if dataObj1 and dataObj3 are the same object reference
// console.log("dataObj1 === dataObj3:", dataObj1 === dataObj3);
// --Newcode--
