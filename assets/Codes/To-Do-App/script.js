alert("Note: Firebase has been expired. Not in service anymore");
'use strict';
window.addEventListener('load', (event) => {

    const formHeader = document.getElementById("form-header");
    const userName = document.getElementById("username");
    const emailId = document.getElementById("email");
    const passWord = document.getElementById("password");
    const usrnm = document.getElementById("usrnm");
    const mail = document.getElementById("mail");
    const psw = document.getElementById("psw");
    const createBtn = document.getElementById("create-btn");
    const loginBtn = document.getElementById("login-btn");
    const signIn = document.getElementById("signin");
    const signUp = document.getElementById("signup");
    const toLogin = document.getElementById("login-link");
    const toCreate = document.getElementById("create-link");
    const date = document.getElementById("date");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const weekday = document.getElementById("weekday");
    const profile = document.getElementById("profile");
    const form = document.getElementById("form");
    const logname = document.getElementById("logname");
    const todo = document.getElementById("todos");
    const todoAdd = document.getElementById("todoadd-btn");
    const todoContainer = document.getElementById("todo-container");
    const Logout = document.getElementById("logout-btn");
    const hide = "none";
    const show = "block";
    const flex = "flex";

    function noneItem() {
        formHeader.innerHTML = "Hello There!<br>Before using this you need to create an account.";
        loginBtn.style.display = hide;
        signUp.style.display = hide;
        userName.style.display = flex;
        createBtn.style.display = show;
        emailId.style.display = flex;
        signIn.style.display = show;

    }
    function timeDate() {

        const dates = new Date();

        const myDate = dates.getDate();
        var months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const getMonth = months[dates.getMonth()];
        const getYear = dates.getFullYear();
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        const getWeekday = days[dates.getDay()];


        date.innerText = myDate;
        month.innerText = getMonth;
        year.innerText = getYear;
        weekday.innerText = getWeekday;



    }

    timeDate();
    noneItem();

    toCreate.addEventListener("click", (e) => {
        noneItem();
    });
    toLogin.addEventListener("click", (e) => {

        formHeader.innerHTML = "Hello There!<br>Please login using to see your contents.";
        createBtn.style.display = hide;
        emailId.style.display = flex;
        userName.style.display = hide;
        signIn.style.display = hide;

        loginBtn.style.display = show;
        signUp.style.display = show;
    });

    createBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const name = usrnm.value;
        const email = mail.value;
        const password = psw.value;

        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return fs.collection('users').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                profile.style.display = show;
                form.style.display = hide;
            }).catch(err => {
                console.log(err.message);
            })

        }).catch(err => {
            console.log(err.message);
        })
        usrnm.value = "";
        mail.value = "";
        psw.value = "";
    })
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const logmail = mail.value;
        const logpass = psw.value;

        auth.signInWithEmailAndPassword(logmail, logpass).then(() => {

            profile.style.display = show;
            form.style.display = hide;

        });

        mail.value = "";
        psw.value = "";
    });



    auth.onAuthStateChanged(user => {
        if (user) {
            fs.collection('users').doc(user.uid).get().then(snapshot => {
                logname.innerText = snapshot.data().Name;
            })

        } else {

        }
    });

    const datess = new Date();
    const time = datess.getTime();
    let counter = time;
    todoAdd.addEventListener("click", (e) => {
        const todos = todo.value;
        let id = counter += 1;
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection(user.uid).doc('_' + id).set({
                    id: '_' + id,
                    todos
                }).then(() => {
                    console.log("added")
                }).catch(err => {
                    console.log(err.message);
                })
            }
        })
        todo.value = "";

    });

    function renderData(individualDoc) {

        let parentDiv = document.createElement("div");

        parentDiv.className = "container todo-box ";
        parentDiv.setAttribute("data-id", individualDoc.id);
        parentDiv.textContent = individualDoc.data().todos;

        let trash = document.createElement("button");

        let i = document.createElement("i");
        i.className = "fa fa-trash";
        i.setAttribute('aria-hidden', 'true');

        trash.appendChild(i);

        parentDiv.appendChild(trash);

        todoContainer.appendChild(parentDiv);

        trash.addEventListener('click', e => {
            let id = parentDiv.getAttribute("data-id");

            auth.onAuthStateChanged(user => {
                if (user) {
                    fs.collection(user.uid).doc(id).delete();
                }
            })

        })
    }
    auth.onAuthStateChanged(user =>{
        if(user){

        } else{
            alert("Please Login or Create Account to continue");
            profile.style.display = hide;
            form.style.display = show;
        }
    })
    auth.onAuthStateChanged(user => {
        if (user) {
            fs.collection(user.uid).onSnapshot(snapshot => {
                let changes = snapshot.docChanges();
                changes.forEach(change => {
                    if (change.type === 'added') {
                        renderData(change.doc)
                    } else if (change.type === 'removed') {
                        let li = todoContainer.querySelector('[data-id=' + change.doc.id + ']');
                        todoContainer.removeChild(li);
                    }
                })
            })
        }
    })
    Logout.onclick =  () =>{
        auth.signOut();
    };
});