class Test {
    constructor(title){
        // console.log(title);
        this.title = title;
    }
    getName(){
        console.log(this.title,'testdan');
    }
}

// let user = new Test('salom');
// user.getName();


class Department extends Test{
    constructor(tt){
super(tt)
    }
}

const dep = new Department('sssssss');
dep.getName();


