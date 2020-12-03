class person {
    name;
    age;
    phoneNumber;

    constructor(name,age,phoneNumber){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
}

class vector extends person {
    x;
    y;

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class people {
    person;

    constructor(person){
        this.person = [];
    }

    addPerson(v){
        if(v instanceof person ){
            this.person.push(v);
        }
    }
}


function distance(a, b) {
    const dx = a.vector.x - b.vector.x;
    const dy = a.vector.y - b.vector.y;

    return Math.hypot(dx, dy);
}



class people {
    person;
    f0;
    f1;
    f2;

    constructor(person,f0,f1,f2){
        this.person = [];
        this.f0 = f0;
        this.f1=[];
        this.f2 = [];
    }

    addPerson(v){
        if(v instanceof person){
            this.person.push(v);
        }
    }
    
    addF0(x){
        if( x instanceof person){
            this.f0 = x;
        }
    }

    findf1(){
        for(let i= 0;i< this.person.length;i++){
            if(distance(f0,this.person[i])<2){
                this.f1.push(this.person[i])
            }
        }
    }

    findf2(){
        for(let i=0;i< this.f1.length;i++){
            for(let p=0;p<this.person.length;p++){
                if(distance(this.person[p],this.f1[i])<2){
                    this.f2.push(this.person[p])
                }
            }
        }
    }
}
