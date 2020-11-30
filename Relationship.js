class Persons {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

class Boy extends Persons {
    handsome
    constructor(name, age, handsome) {
        super(name, age);
        this.handsome = handsome
        console.log(handsome);
    }
}


class Girl extends Persons {
    beauty
    constructor(name, age, beauty) {
        super(name, age);
        this.beauty = beauty;
    }
}


class Relationship {
    a;
    b;

    constructor(a, b) {
        if (a instanceof Persons && b instanceof Persons) {
            this.a = a;
            this.b = b;
        }
    }
}

class Group {
    people;
    relationships;

    constructor(people, relationships) {
        this.people = [];
        this.relationships = [];
    }

    addPerson(v) {
        if (v instanceof Persons) {
            this.people.push(v);
        }
    }

    addRelationships(a, b) {
        if (a instanceof Persons && b instanceof Persons && a != b) {
            let foundRelationship = this.relationships.find((relationship) => {
                return (relationship.a == a && relationship.b == b) || (relationship.a == b && relationship.b == a)
            })
            if (!foundRelationship) {
                let newRelationship = new Relationship(a, b)
                this.relationships.push(newRelationship);
            }
        }
    }
//2.1    
    findRelationship(name){
        let friend = this.relationships.Relationship.name.filter(item => item.name === name);
    }
//2.2
    findMaleFriends(name,male){
        let friend = this.relationships.Relationship.name.filter(item => item.name === name);
        return friend.filter(item => item.male === Boy);
    }
//2.3
    findFemaleFriends(name,female){
        let friend = this.relationships.Relationship.name.filter(item => item.name === name);
        return friend.filter(item => item.female === Girl);
    }
//2.4
    findFemaleFriends(name,Girl,beauty){
        let friend = this.relationships.Relationship.name.filter(item => item.name === name);
        let femaleFriends = friend.filter(item => item.Girl === Girl);
        return femaleFriends.filter(item => item.beauty > 5)
    }    
}


